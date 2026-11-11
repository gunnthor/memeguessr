import { COLLECTION, CONTENT_VERSION, MemeId, ROUNDS } from "../data/guess-the-reaction";

export const MAX_GUESSES = 5;
export const PROTOTYPE_PATH = "/prototype/guess-the-reaction";
export type RoundStatus = "playing" | "won" | "lost";
export interface ReactionState {
  roundId: string;
  visited: readonly string[];
  guesses: readonly MemeId[];
  selected: MemeId | null;
  hintsUsed: number;
  rescueOnly: boolean;
  query: string;
  status: RoundStatus;
}
export type ReactionAction =
  | { type: "select"; id: MemeId }
  | { type: "cancel" }
  | { type: "guess"; id: MemeId }
  | { type: "hint" }
  | { type: "toggle-rescue" }
  | { type: "search"; query: string }
  | { type: "reset" }
  | { type: "next" };

export function getRound(id: string) {
  return ROUNDS.find((round) => round.id === id) ?? ROUNDS[0];
}

export function resolveChallenge(round: unknown, version: unknown) {
  const valid = version === CONTENT_VERSION && typeof round === "string" && ROUNDS.some((item) => item.id === round);
  return {
    roundId: valid ? round as string : ROUNDS[0].id,
    invalid: (round !== undefined || version !== undefined) && !valid,
  };
}

export function createReactionState(roundId: string): ReactionState {
  const id = getRound(roundId).id;
  return { roundId: id, visited: [id], guesses: [], selected: null, hintsUsed: 0, rescueOnly: false, query: "", status: "playing" };
}

export function reactionReducer(state: ReactionState, action: ReactionAction): ReactionState {
  const round = getRound(state.roundId);
  switch (action.type) {
    case "select":
      if (state.status !== "playing" || state.guesses.includes(action.id) || !COLLECTION.some((meme) => meme.id === action.id)) return state;
      return { ...state, selected: action.id };
    case "cancel": return { ...state, selected: null };
    case "search": return { ...state, query: action.query };
    case "guess": {
      // The reducer processes queued events atomically: a repeated confirmation has
      // no selection after the first submit and can never spend another attempt.
      if (state.status !== "playing" || state.selected !== action.id || state.guesses.includes(action.id) || state.guesses.length >= MAX_GUESSES) return state;
      const guesses = [...state.guesses, action.id];
      return { ...state, guesses, selected: null, query: "", status: action.id === round.target ? "won" : guesses.length === MAX_GUESSES ? "lost" : "playing" };
    }
    case "hint":
      if (state.status !== "playing" || state.hintsUsed >= 3) return state;
      return { ...state, hintsUsed: state.hintsUsed + 1, rescueOnly: state.hintsUsed === 2 || state.rescueOnly, query: "" };
    case "toggle-rescue":
      return state.hintsUsed === 3 ? { ...state, rescueOnly: !state.rescueOnly, query: "" } : state;
    case "reset": return { ...createReactionState(state.roundId), visited: state.visited };
    case "next": {
      if (state.status === "playing") return state;
      const remaining = ROUNDS.filter((item) => !state.visited.includes(item.id));
      const next = remaining[0] ?? ROUNDS.find((item) => item.id !== state.roundId)!;
      return { ...createReactionState(next.id), visited: remaining.length ? [...state.visited, next.id] : [next.id] };
    }
  }
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export function visibleCollection(state: ReactionState) {
  const query = normalize(state.query);
  const rescue = getRound(state.roundId).hints.rescue;
  return COLLECTION.filter((meme) => (!state.rescueOnly || rescue.includes(meme.id)) && [meme.name, ...meme.aliases].some((name) => normalize(name).includes(query)));
}

export function challengePath(roundId: string) {
  return `${PROTOTYPE_PATH}?v=${CONTENT_VERSION}&round=${encodeURIComponent(getRound(roundId).id)}`;
}

export function shareMessage(state: ReactionState) {
  const outcome = state.status === "won" ? `Solved in ${state.guesses.length}/${MAX_GUESSES} guesses` : state.status === "lost" ? `Revealed after ${MAX_GUESSES}/${MAX_GUESSES} guesses` : "Five guesses. One hidden reaction.";
  return `Guess the Reaction — ${getRound(state.roundId).title}\n${outcome} · ${state.hintsUsed} ${state.hintsUsed === 1 ? "hint" : "hints"}\nCan you find the reaction?`;
}
