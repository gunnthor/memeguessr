const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Compile just these local modules in memory using the existing TypeScript
// dependency. No test runner dependency or generated repository files needed.
const cache = new Map();
function loadTs(filename) {
  filename = path.resolve(__dirname, "..", filename);
  if (cache.has(filename)) return cache.get(filename).exports;
  const compiled = new Module(filename, module);
  cache.set(filename, compiled);
  compiled.filename = filename;
  compiled.require = (id) => id.startsWith(".")
    ? loadTs(path.resolve(path.dirname(filename), `${id}.ts`)) : require(id);
  compiled._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, filename);
  return compiled.exports;
}

const content = loadTs("data/cursed-casting.ts");
const game = loadTs("lib/cursed-casting.ts");
const { shareChallenge } = loadTs("lib/cursed-casting-share.ts");
const { CANDIDATES, CANDIDATE_IDS, JOBS, CANCELLATIONS, CONTENT_VERSION } = content;
const { createGame, gameReducer, drawLineup, resolveWedding, consequence } = game;

function permutations(pool, count = pool.length) {
  if (!count) return [[]];
  return pool.flatMap((item, i) => permutations(pool.filter((_, j) => i !== j), count - 1)
    .map((rest) => [item, ...rest]));
}

test("seed/version validation, determinism, fresh challenge runs, and distinct new lineups", () => {
  // A content-v1 fixture catches accidental PRNG, shuffle, or deck-order changes.
  assert.deepEqual(drawLineup(1729), [
    "success-kid", "disaster-girl", "distracted-boyfriend", "roll-safe",
  ]);
  assert.deepEqual(drawLineup(1729), drawLineup(1729));
  assert.equal(new Set(drawLineup(1729)).size, 4);
  for (const seed of [1, 1729, 20261025, game.MAX_SEED]) {
    const url = new URL(game.challengePath(seed), "https://example.test");
    const parsed = game.parseChallenge(url.searchParams.get("seed"), url.searchParams.get("v"));
    assert.equal(parsed.usedFallback, false);
    assert.deepEqual(createGame(parsed.seed), createGame(seed));
    assert.equal(createGame(parsed.seed).assignments.length, 0);
    const next = game.newLineupSeed(seed, seed);
    assert.notDeepEqual(drawLineup(next), drawLineup(seed));
  }
  for (const seed of ["", "0", "-1", "1.5", "01", "1e3", "Infinity", "4294967296", "<script>", ["1", "2"]]) {
    assert.equal(game.parseChallenge(seed, CONTENT_VERSION).seed, game.DEFAULT_SEED);
    assert.equal(game.parseChallenge(seed, CONTENT_VERSION).usedFallback, true);
  }
  for (const version of [undefined, "", "2", "0", ["1", "1"]]) {
    assert.equal(game.parseChallenge("42", version).seed, game.DEFAULT_SEED);
    assert.equal(game.parseChallenge("42", version).usedFallback, true);
  }
  assert.equal(game.parseChallenge().usedFallback, false);
  assert.throws(() => drawLineup(NaN));
  assert.throws(() => drawLineup(0));
});

test("all 24 candidate/job consequences are authored, including wrapped distraction subjects", () => {
  for (const candidate of CANDIDATE_IDS) {
    for (const { id: job } of JOBS) {
      assert.ok(CANDIDATES[candidate].consequences[job].length > 30);
    }
  }
  const lineup = ["disaster-girl", "distracted-boyfriend", "success-kid", "side-eye"];
  const assignment = { candidate: "distracted-boyfriend", job: "photographer" };
  assert.match(consequence(lineup, assignment), /Success Kid/);
  assert.match(consequence(lineup, assignment, 2), /the next hire/);
  assert.doesNotMatch(consequence(lineup, assignment, 2), /Success Kid/);
  const wrapped = ["side-eye", "success-kid", "disaster-girl", "distracted-boyfriend"];
  assert.match(consequence(wrapped, assignment, 4), /Side Eye/);
});

test("transitions require selection and lock assignments against duplicate or stale events", () => {
  let state = createGame(1729);
  const original = state;
  const candidate = state.lineup[0];
  const select = { type: "select", candidate, job: "dj" };
  const hire = { type: "hire", candidate, job: "dj" };
  assert.strictEqual(gameReducer(state, hire), state);
  state = gameReducer(state, select);
  assert.strictEqual(gameReducer(state, { ...hire, job: "safety" }), state);
  state = gameReducer(state, hire);
  assert.equal(state.assignments.length, 1);
  assert.equal(state.phase, "consequence");
  assert.strictEqual(gameReducer(state, hire), state);
  assert.strictEqual(gameReducer(state, select), state);
  assert.strictEqual(gameReducer(state, { type: "continue", candidate: state.lineup[1] }), state);
  state = gameReducer(state, { type: "continue", candidate });
  assert.strictEqual(gameReducer(state, hire), state);
  assert.strictEqual(gameReducer(state, { ...select, candidate: state.lineup[1] }), state);
  assert.strictEqual(gameReducer(state, { type: "continue", candidate }), state);
  assert.equal(original.assignments.length, 0);
  assert.deepEqual(gameReducer(state, { type: "replay" }), original);
  const next = gameReducer(state, { type: "new", entropy: 1729 });
  assert.equal(next.assignments.length, 0);
  assert.notDeepEqual(next.lineup, original.lineup);
});

test("all 360 ordered lineups × 24 job permutations complete and obey interaction precedence", () => {
  const lineups = permutations(CANDIDATE_IDS, 4);
  const jobOrders = permutations(JOBS.map((j) => j.id));
  assert.equal(lineups.length, 360);
  const outcomes = new Set();
  let resolved = 0;
  for (const lineup of lineups) {
    for (const jobs of jobOrders) {
      let state = { ...createGame(1), lineup };
      for (let i = 0; i < 4; i++) {
        const candidate = lineup[i];
        const action = { candidate, job: jobs[i] };
        state = gameReducer(state, { type: "select", ...action });
        const frozen = state;
        state = gameReducer(state, { type: "hire", ...action });
        assert.equal(frozen.assignments.length, i);
        assert.strictEqual(gameReducer(state, { type: "hire", ...action }), state);
        state = gameReducer(state, { type: "continue", candidate });
      }
      assert.equal(state.phase, "report");
      const before = JSON.stringify(state);
      const result = resolveWedding(lineup, state.assignments);
      assert.equal(JSON.stringify(state), before);
      const has = (id) => lineup.includes(id);
      const successIsSafety = lineup[jobs.indexOf("safety")] === "success-kid";
      const unresolved = has("disaster-girl") && !successIsSafety;
      const concealed = unresolved && has("this-is-fine") && !has("side-eye");
      assert.equal(result.fireCreated, has("disaster-girl"));
      assert.equal(result.fireExtinguished, has("disaster-girl") && successIsSafety);
      assert.equal(result.unresolvedFire, unresolved);
      assert.equal(result.suppressionAttempted, unresolved && has("this-is-fine"));
      assert.equal(result.exposed, unresolved && has("this-is-fine") && has("side-eye"));
      assert.equal(result.fireConcealed, concealed);
      assert.equal(result.outcome, !has("disaster-girl") ? "no-fire"
        : successIsSafety ? "extinguished" : concealed ? "concealed" : "visible");
      const rollJob = has("roll-safe") ? jobs[lineup.indexOf("roll-safe")] : null;
      assert.equal(result.canceledJob, rollJob);
      if (rollJob) assert.ok(result.ending.endsWith(CANCELLATIONS[rollJob]));
      assert.equal(result.cast.length, 4);
      for (const item of result.cast) {
        assert.ok(item.consequence.length > 0);
        assert.doesNotMatch(item.consequence, /\{subject\}|undefined/);
        if (item.candidate === "distracted-boyfriend") {
          const subject = lineup[(lineup.indexOf(item.candidate) + 1) % 4];
          assert.ok(item.consequence.includes(CANDIDATES[subject].name));
        }
      }
      assert.ok(game.shareRecap(result).includes(result.ending));
      outcomes.add(result.outcome);
      resolved++;
    }
  }
  assert.equal(resolved, 8640);
  assert.equal(outcomes.size, 4);
});

test("incomplete, duplicated, and unknown assignments cannot produce a report", () => {
  const lineup = drawLineup(1);
  const cast = lineup.map((candidate, i) => ({ candidate, job: JOBS[i].id }));
  assert.throws(() => resolveWedding(lineup, []));
  assert.throws(() => resolveWedding(lineup, [...cast.slice(0, 3), cast[0]]));
  assert.throws(() => resolveWedding(lineup, cast.map((a) => ({ ...a, job: "dj" }))));
  assert.throws(() => resolveWedding(lineup, cast.map((a) => ({ ...a, job: "unknown" }))));
});

test("native sharing, clipboard fallback, denied access, and cancel all have usable results", async () => {
  const input = { title: "Cursed Casting", text: "DJ: Side Eye\nNo fire.", url: "https://example.test/prototype/cursed-casting?seed=1&v=1" };
  let copied;
  let shared;
  const native = await shareChallenge(input, {
    share: async (value) => { shared = value; },
    copy: async () => { assert.fail("Native success must not copy"); },
  });
  assert.equal(native.status, "shared");
  assert.deepEqual(shared, input);
  const fallback = await shareChallenge(input, { copy: async (value) => { copied = value; } });
  assert.equal(fallback.status, "copied");
  assert.equal(copied, `${input.text}\n${input.url}`);
  assert.equal((await shareChallenge(input, {
    share: async () => { throw new Error("Native unavailable"); },
    copy: async () => {},
  })).status, "copied");
  const denied = await shareChallenge(input, {
    share: async () => { throw new Error("Native unavailable"); },
    copy: async () => { throw new Error("Permission denied"); },
  });
  assert.equal(denied.status, "manual");
  assert.ok(denied.text.includes(input.url));
  assert.ok(denied.text.includes(input.text));
  assert.equal((await shareChallenge(input, {})).status, "manual");
  assert.equal((await shareChallenge(input, {
    share: async () => { throw Object.assign(new Error("Canceled"), { name: "AbortError" }); },
    copy: async () => { assert.fail("Cancel must not copy unexpectedly"); },
  })).status, "canceled");
});
