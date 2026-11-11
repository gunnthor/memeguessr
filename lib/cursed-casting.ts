import {
  CANDIDATES, CANDIDATE_IDS, CANCELLATIONS, CONTENT_VERSION,
  ENDINGS, EXPOSURE, JOBS,
  type CandidateId, type JobId,
} from "../data/cursed-casting";

export const DEFAULT_SEED = 1729;
export const MAX_SEED = 0xffffffff;

export function isSeed(seed: number): boolean {
  return Number.isInteger(seed) && seed >= 1 && seed <= MAX_SEED;
}

export function parseChallenge(seed?: string | string[], version?: string | string[]) {
  const valid = typeof seed === "string" && /^[1-9]\d{0,9}$/.test(seed)
    && isSeed(Number(seed)) && version === CONTENT_VERSION;
  return {
    seed: valid ? Number(seed) : DEFAULT_SEED,
    version: CONTENT_VERSION,
    usedFallback: !valid && (seed !== undefined || version !== undefined),
  };
}

/** Fisher–Yates with a frozen uint32 PRNG. No platform randomness in this function. */
export function drawLineup(seed: number): readonly CandidateId[] {
  if (!isSeed(seed)) throw new Error("Invalid seed");
  let state = seed >>> 0;
  const random = () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = Math.imul(state ^ (state >>> 15), state | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
  const pool = [...CANDIDATE_IDS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 4);
}

export function newLineupSeed(current: number, entropy: number): number {
  const previous = drawLineup(current).join(",");
  let seed = isSeed(entropy) ? entropy : 1;
  // Different seeds can collide on one of the 360 lineups. Compare actual draws.
  while (drawLineup(seed).join(",") === previous) {
    seed = seed === MAX_SEED ? 1 : seed + 1;
  }
  return seed;
}

export function challengePath(seed: number): string {
  if (!isSeed(seed)) throw new Error("Invalid seed");
  return `/prototype/cursed-casting?seed=${seed}&v=${CONTENT_VERSION}`;
}

export type Assignment = Readonly<{ candidate: CandidateId; job: JobId }>;

export function consequence(lineup: readonly CandidateId[], assignment: Assignment, revealedCount = lineup.length): string {
  const index = lineup.indexOf(assignment.candidate);
  if (index < 0) throw new Error("Candidate is not in this lineup");
  const subjectIndex = (index + 1) % lineup.length;
  // An immediate result must not spoil the next candidate. The final report
  // names the subject; a last-drawn Boyfriend can name the already-seen first hire.
  const subject = subjectIndex < revealedCount ? CANDIDATES[lineup[subjectIndex]].name : "the next hire";
  return CANDIDATES[assignment.candidate].consequences[assignment.job]
    .replaceAll("{subject}", subject);
}

export function resolveWedding(lineup: readonly CandidateId[], assignments: readonly Assignment[]) {
  if (lineup.length !== 4 || new Set(lineup).size !== 4
    || lineup.some((id) => !CANDIDATE_IDS.includes(id))
    || assignments.length !== 4 || new Set(assignments.map((a) => a.job)).size !== 4
    || new Set(assignments.map((a) => a.candidate)).size !== 4
    || assignments.some((a) => !lineup.includes(a.candidate) || !JOBS.some((j) => j.id === a.job))) {
    throw new Error("A wedding needs four distinct candidates in four distinct jobs");
  }
  // 1. Assignments. Cancellation is recorded, but cannot block other effects.
  const assigned = (id: CandidateId) => assignments.find((a) => a.candidate === id);
  const canceledJob = assigned("roll-safe")?.job ?? null;
  // 2. Fire creation, then extinguishing.
  const fireCreated = Boolean(assigned("disaster-girl"));
  const fireExtinguished = fireCreated && assigned("success-kid")?.job === "safety";
  const unresolvedFire = fireCreated && !fireExtinguished;
  // 3. Suppression, then exposure. Neither action extinguishes a fire.
  const suppressionAttempted = unresolvedFire && Boolean(assigned("this-is-fine"));
  const exposed = suppressionAttempted && Boolean(assigned("side-eye"));
  const fireConcealed = suppressionAttempted && !exposed;
  // 4. Final report, then the role-specific cancellation suffix.
  const outcome = !fireCreated ? "no-fire" : fireExtinguished ? "extinguished"
    : fireConcealed ? "concealed" : "visible";
  const ending = [ENDINGS[outcome], exposed ? EXPOSURE : "",
    canceledJob ? CANCELLATIONS[canceledJob] : ""].filter(Boolean).join(" ");
  return {
    cast: JOBS.map((job) => {
      const assignment = assignments.find((a) => a.job === job.id)!;
      return { ...assignment, consequence: consequence(lineup, assignment) };
    }),
    fireCreated, fireExtinguished, unresolvedFire,
    suppressionAttempted, exposed, fireConcealed, canceledJob, outcome, ending,
  };
}

export type WeddingReport = ReturnType<typeof resolveWedding>;

export function shareRecap(report: WeddingReport): string {
  return ["Cursed Casting — my wedding staff:", ...report.cast.map((a) =>
    `${JOBS.find((job) => job.id === a.job)!.name}: ${CANDIDATES[a.candidate].name}`),
  report.ending, "Same candidates. Your choices. Can you staff this wedding?"].join("\n");
}

export type GameState = Readonly<{
  seed: number;
  lineup: readonly CandidateId[];
  assignments: readonly Assignment[];
  selectedJob: JobId | null;
  phase: "choosing" | "consequence" | "report";
}>;

export function createGame(seed: number): GameState {
  return { seed, lineup: drawLineup(seed), assignments: [], selectedJob: null, phase: "choosing" };
}

export type GameAction =
  | { type: "select"; job: JobId; candidate: CandidateId }
  | { type: "hire"; candidate: CandidateId; job: JobId }
  | { type: "continue"; candidate: CandidateId }
  | { type: "replay" }
  | { type: "new"; entropy: number };

/** Stale/duplicate events are no-ops; all guards run against the latest state. */
export function gameReducer(state: GameState, action: GameAction): GameState {
  if (action.type === "replay") return createGame(state.seed);
  if (action.type === "new") return createGame(newLineupSeed(state.seed, action.entropy));
  if (action.type === "continue") {
    if (state.phase !== "consequence" || state.assignments.at(-1)?.candidate !== action.candidate) return state;
    return { ...state, phase: state.assignments.length === 4 ? "report" : "choosing" };
  }
  const current = state.lineup[state.assignments.length];
  if (state.phase !== "choosing" || action.candidate !== current
    || !JOBS.some((job) => job.id === action.job)
    || state.assignments.some((a) => a.job === action.job || a.candidate === action.candidate)) return state;
  if (action.type === "select") return { ...state, selectedJob: action.job };
  if (state.selectedJob !== action.job) return state;
  return {
    ...state,
    assignments: [...state.assignments, { candidate: current, job: action.job }],
    selectedJob: null,
    phase: "consequence",
  };
}
