import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { COLLECTION, CONTENT_VERSION, MEME_IDS, MemeId, ROUNDS, validateContent } from "../data/guess-the-reaction";
import { challengePath, createReactionState, reactionReducer, ReactionState, resolveChallenge, shareMessage, visibleCollection } from "../lib/guess-the-reaction";
import { MAX_REACTION_IMAGE_BYTES, reactionImageError, REACTION_IMAGE_TYPES } from "../lib/reaction-images";

function guess(state: ReactionState, id: MemeId) {
  return reactionReducer(reactionReducer(state, { type: "select", id }), { type: "guess", id });
}

test("five rounds contain exactly 45 complete authored incorrect responses and valid ordered hints", () => {
  assert.equal(ROUNDS.length, 5);
  assert.equal(COLLECTION.length, 10);
  assert.deepEqual(validateContent(), []);
  assert.equal(ROUNDS.reduce((total, round) => total + Object.keys(round.feedback).length, 0), 45);
  const damaged = { ...ROUNDS[0], feedback: { ...ROUNDS[0].feedback, harold: undefined } };
  assert.match(validateContent([damaged]).join(" "), /missing feedback for harold/);
});

for (const round of ROUNDS) {
  test(`${round.id}: accepts its answer and rejects all nine alternatives with feedback`, () => {
    assert.equal(guess(createReactionState(round.id), round.target).status, "won");
    for (const id of MEME_IDS.filter((item) => item !== round.target)) {
      const state = guess(createReactionState(round.id), id);
      assert.equal(state.status, "playing");
      assert.equal(state.guesses.length, 1);
      assert.ok(round.feedback[id]?.distinction);
    }
  });
  test(`${round.id}: exactly five incorrect guesses end play; later events cannot spend attempts`, () => {
    let state = createReactionState(round.id);
    const wrong = MEME_IDS.filter((id) => id !== round.target);
    wrong.slice(0, 5).forEach((id, index) => {
      state = guess(state, id);
      assert.equal(state.status, index === 4 ? "lost" : "playing");
    });
    assert.equal(state.guesses.length, 5);
    assert.deepEqual(guess(state, round.target), state);
    assert.deepEqual(reactionReducer(state, { type: "hint" }), state);
  });
  test(`${round.id}: the correct fifth guess still wins`, () => {
    let state = createReactionState(round.id);
    MEME_IDS.filter((id) => id !== round.target).slice(0, 4).forEach((id) => { state = guess(state, id); });
    assert.equal(guess(state, round.target).status, "won");
  });
}

test("duplicate, unconfirmed, cancelled and rapid queued submissions cannot consume extra attempts", () => {
  const initial = createReactionState(ROUNDS[0].id);
  assert.deepEqual(reactionReducer(initial, { type: "guess", id: "harold" }), initial);
  const selected = reactionReducer(initial, { type: "select", id: "harold" });
  const cancelled = reactionReducer(selected, { type: "cancel" });
  assert.equal(reactionReducer(cancelled, { type: "guess", id: "harold" }).guesses.length, 0);
  const submitted = reactionReducer(selected, { type: "guess", id: "harold" });
  assert.deepEqual(reactionReducer(submitted, { type: "guess", id: "harold" }), submitted);
  assert.deepEqual(guess(submitted, "harold"), submitted);
  assert.equal(guess(submitted, "pikachu").guesses.length, 2);
});

test("hints progress to three in order, cost no guesses, filter rescue and restore the full collection", () => {
  for (const round of ROUNDS) {
    let state = createReactionState(round.id);
    for (let count = 1; count <= 3; count++) {
      state = reactionReducer(state, { type: "hint" });
      assert.equal(state.hintsUsed, count);
      assert.equal(state.guesses.length, 0);
      assert.equal(state.rescueOnly, count === 3);
    }
    assert.equal(visibleCollection(state).length, 3);
    assert.ok(visibleCollection(state).some((meme) => meme.id === round.target));
    assert.deepEqual(reactionReducer(state, { type: "hint" }), state);
    state = reactionReducer(state, { type: "toggle-rescue" });
    assert.equal(visibleCollection(state).length, 10);
    assert.equal(state.hintsUsed, 3);
  }
});

test("reset clears guesses, search, selection, hints, rescue filter and outcome; preserves round rotation", () => {
  let state = createReactionState(ROUNDS[0].id);
  state = guess(state, "harold");
  for (let i = 0; i < 3; i++) state = reactionReducer(state, { type: "hint" });
  state = reactionReducer(state, { type: "search", query: "drake" });
  state = reactionReducer(state, { type: "select", id: "drake" });
  assert.deepEqual(reactionReducer(state, { type: "reset" }), createReactionState(ROUNDS[0].id));
  const won = guess(state, "fine");
  assert.equal(reactionReducer(won, { type: "reset" }).status, "playing");
});

test("next situations do not repeat before all five; works from every challenge entry", () => {
  for (const round of ROUNDS) {
    let state = createReactionState(round.id);
    const seen = new Set<string>();
    assert.deepEqual(reactionReducer(state, { type: "next" }), state);
    for (let i = 0; i < 5; i++) {
      assert.ok(!seen.has(state.roundId));
      seen.add(state.roundId);
      state = reactionReducer(guess(state, ROUNDS.find((item) => item.id === state.roundId)!.target), { type: "next" });
      assert.equal(state.hintsUsed, 0);
      assert.equal(state.guesses.length, 0);
    }
    assert.equal(seen.size, 5);
    assert.equal(state.visited.length, 1);
  }
});

test("versioned spoiler-free links reproduce each round with fresh progress; invalid inputs fall back", () => {
  for (const round of ROUNDS) {
    const url = new URL(challengePath(round.id), "http://localhost:3000");
    const resolved = resolveChallenge(url.searchParams.get("round"), url.searchParams.get("v"));
    assert.equal(resolved.roundId, round.id);
    assert.equal(resolved.invalid, false);
    assert.equal(url.searchParams.get("v"), CONTENT_VERSION);
    assert.deepEqual(createReactionState(resolved.roundId).guesses, []);
    const result = guess(createReactionState(round.id), round.target);
    const message = shareMessage(result);
    assert.ok(message.includes("Solved in 1/5 guesses · 0 hints"));
    for (const meme of COLLECTION) {
      assert.ok(!message.includes(meme.name));
      assert.ok(!decodeURIComponent(url.href).includes(meme.name));
    }
  }
  for (const [id, version] of [["missing", "1"], [ROUNDS[1].id, "999"], [ROUNDS[1].id, undefined], [[ROUNDS[1].id], "1"], ["__proto__", "1"]]) {
    assert.deepEqual(resolveChallenge(id, version), { roundId: ROUNDS[0].id, invalid: true });
  }
  assert.equal(resolveChallenge(undefined, undefined).invalid, false);
});

test("common aliases and punctuation work in search", () => {
  for (const [query, id] of [["Harold", "harold"], ["Pikachu", "pikachu"], ["Drake", "drake"], ["galaxy brain", "brain"], ["side-eye", "side-eye"]]) {
    const state = reactionReducer(createReactionState(ROUNDS[0].id), { type: "search", query });
    assert.deepEqual(visibleCollection(state).map((meme) => meme.id), [id]);
  }
});

test("local image previews accept supported images and reject empty, oversized or unsupported files", () => {
  for (const type of REACTION_IMAGE_TYPES) assert.equal(reactionImageError({ type, size: MAX_REACTION_IMAGE_BYTES }), null);
  assert.match(reactionImageError({ type: "image/png", size: 0 })!, /empty/);
  assert.match(reactionImageError({ type: "image/jpeg", size: MAX_REACTION_IMAGE_BYTES + 1 })!, /6 MB/);
  assert.match(reactionImageError({ type: "image/svg+xml", size: 1024 })!, /Choose a JPG/);
  assert.match(reactionImageError({ type: "text/html", size: 1024 })!, /Choose a JPG/);
});

test("every reaction ships a non-empty local JPEG asset", () => {
  for (const meme of COLLECTION) {
    assert.ok(meme.localImage?.startsWith("/reactions/"), `${meme.name} must have a local reaction image`);
    const bytes = readFileSync(join(process.cwd(), "public", meme.localImage!.slice(1)));
    assert.ok(bytes.length > 1000, `${meme.name}: image must not be an empty placeholder`);
    assert.equal(bytes[0], 0xff);
    assert.equal(bytes[1], 0xd8);
  }
});
