"use client";

import Link from "next/link";
import { useEffect, useReducer, useRef, useState } from "react";
import { CANDIDATES, CONTENT_VERSION, JOBS } from "@/data/cursed-casting";
import {
  challengePath, consequence, createGame, gameReducer, resolveWedding, shareRecap,
} from "@/lib/cursed-casting";
import { shareChallenge } from "@/lib/cursed-casting-share";

const primary = "min-h-12 w-full rounded-xl bg-violet-500 px-4 py-3 font-bold text-white disabled:bg-slate-800 disabled:text-slate-400";
const secondary = "min-h-12 rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold";
const focus = "[&_button]:focus-visible:outline [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-amber-300 [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-amber-300 [&_textarea]:focus-visible:outline [&_textarea]:focus-visible:outline-2 [&_textarea]:focus-visible:outline-amber-300";

export default function CursedCasting({ initialSeed, usedFallback }: {
  initialSeed: number;
  usedFallback: boolean;
}) {
  const [state, dispatch] = useReducer(gameReducer, initialSeed, createGame);
  const [shareStatus, setShareStatus] = useState("");
  const [manualShare, setManualShare] = useState("");
  const [sharing, setSharing] = useState(false);
  const shareBusy = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const currentId = state.lineup[state.assignments.length];
  const last = state.assignments.at(-1);
  const candidate = state.phase === "choosing" ? CANDIDATES[currentId] : null;
  const selected = JOBS.find((job) => job.id === state.selectedJob);
  const report = state.phase === "report" ? resolveWedding(state.lineup, state.assignments) : null;

  useEffect(() => {
    window.history.replaceState(window.history.state, "", challengePath(state.seed));
  }, [state.seed]);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    heading.current?.focus();
  }, [state.phase, state.assignments.length]);

  function restart(type: "replay" | "new") {
    setShareStatus("");
    setManualShare("");
    if (type === "replay") dispatch({ type });
    else dispatch({ type, entropy: window.crypto.getRandomValues(new Uint32Array(1))[0] });
  }

  async function share() {
    if (!report || shareBusy.current) return;
    shareBusy.current = true;
    setSharing(true);
    setShareStatus("");
    setManualShare("");
    const url = new URL(challengePath(state.seed), window.location.origin).href;
    const text = shareRecap(report);
    try {
      const result = await shareChallenge({ title: "Cursed Casting", text, url }, {
        share: typeof navigator.share === "function" ? (input) => navigator.share(input) : undefined,
        copy: navigator.clipboard?.writeText ? (value) => navigator.clipboard.writeText(value) : undefined,
      });
      const messages = {
        shared: "Challenge shared. Your friend gets a fresh attempt.",
        copied: "Challenge and cast recap copied. Paste them to a friend.",
        canceled: "Sharing canceled. You can try again.",
        manual: "Automatic sharing is unavailable. Select and copy the challenge below.",
      };
      setShareStatus(messages[result.status]);
      if (result.status === "manual") setManualShare(result.text);
    } finally {
      shareBusy.current = false;
      setSharing(false);
    }
  }

  const announcement = report ? `Wedding report. ${report.ending}`
    : state.phase === "consequence" && last
      ? `${CANDIDATES[last.candidate].name} hired as ${JOBS.find((j) => j.id === last.job)!.name}. ${consequence(state.lineup, last, state.assignments.length)}`
      : `Candidate ${state.assignments.length + 1} of 4: ${candidate?.name}. ${candidate?.hint} Choose an empty job.`;

  return (
    <main className={`mx-auto w-full max-w-xl px-4 py-4 sm:py-8 ${focus}`}>
      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-slate-400">
        <Link className="inline-flex min-h-11 items-center underline underline-offset-4" href="/">← MemeGuessr</Link>
        <span>Small playable prototype</span>
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight">Cursed Casting <span aria-hidden="true">💍</span></h1>
      <p className="mt-2 text-base font-semibold text-slate-200">Staff this wedding. Four hires. No takebacks.</p>
      {usedFallback && state.seed === initialSeed && <p className="mt-3 rounded-lg border border-amber-700 bg-slate-900 p-3 text-sm text-amber-200">That seed or content version wasn’t valid. You’re playing a safe fallback lineup.</p>}
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>

      {report ? (
        <section className="mt-6" aria-labelledby="wedding-report">
          <h2 id="wedding-report" ref={heading} tabIndex={-1} className="text-2xl font-bold">Wedding report</h2>
          <p className="mt-1 text-sm text-slate-400">Four hires locked. Here’s how the wedding ended.</p>
          <div className="mt-4 rounded-xl border border-amber-600/60 bg-slate-900 p-4">
            <h3 className="font-bold text-amber-200">{report.outcome === "no-fire" ? "No fire. Still a wedding." : report.outcome === "extinguished" ? "Fire out. Vows on." : report.outcome === "concealed" ? "A spotless incident report." : "The fire is on the record."}</h3>
            <p className="mt-2 text-sm leading-relaxed">{report.ending}</p>
          </div>
          <ul className="mt-4 space-y-3">
            {report.cast.map((assignment) => {
              const job = JOBS.find((j) => j.id === assignment.job)!;
              const hire = CANDIDATES[assignment.candidate];
              return <li key={job.id} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                <h3 className="text-sm font-bold"><span aria-hidden="true">{job.emoji} </span>{job.name} · {hire.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{assignment.consequence}</p>
              </li>;
            })}
          </ul>
          <div className="mt-5 grid gap-3">
            <button className={primary} onClick={() => restart("new")} disabled={sharing}>New candidates</button>
            <button className={secondary} onClick={() => restart("replay")} disabled={sharing}>Replay this lineup</button>
            <button className={secondary} onClick={share} disabled={sharing}>{sharing ? "Sharing…" : "Challenge a friend"}</button>
          </div>
          <p role="status" aria-live="polite" className="mt-3 text-sm text-amber-200">{shareStatus}</p>
          {manualShare && <div className="mt-3">
            <label htmlFor="manual-challenge" className="text-sm font-semibold">Copy this recap and challenge link</label>
            <textarea id="manual-challenge" readOnly value={manualShare} onFocus={(event) => event.currentTarget.select()} className="mt-2 min-h-48 w-full rounded-lg border border-slate-500 bg-slate-900 p-3 text-sm" />
            <a href={challengePath(state.seed)} className="mt-2 inline-flex min-h-12 items-center text-sm underline">Open fresh challenge</a>
          </div>}
          <p className="mt-3 text-xs leading-relaxed text-slate-400">Replay keeps the candidate order and clears every job. New candidates gives a different lineup. A challenge shares the lineup, so your friend chooses their own jobs.</p>
        </section>
      ) : (
        <>
          <section className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4" aria-labelledby="candidate-heading">
            {candidate ? <>
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">Candidate {state.assignments.length + 1} of 4</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="shrink-0 text-3xl" aria-hidden="true">{candidate.emoji}</span>
                <div className="min-w-0">
                  <h2 id="candidate-heading" ref={heading} tabIndex={-1} className="text-xl font-bold">{candidate.name}</h2>
                  <p className="mt-1 text-sm leading-snug text-slate-300">{candidate.hint}</p>
                </div>
              </div>
            </> : last && <>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">Hire {state.assignments.length} of 4 · locked</p>
              <h2 id="candidate-heading" ref={heading} tabIndex={-1} className="mt-2 text-lg font-bold">{CANDIDATES[last.candidate].name} → {JOBS.find((job) => job.id === last.job)!.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{consequence(state.lineup, last, state.assignments.length)}</p>
            </>}
          </section>

          <section className="mt-4" aria-labelledby="jobs-heading">
            <div className="mb-2 flex items-center justify-between gap-2">
              <h2 id="jobs-heading" className="text-sm font-semibold">{state.phase === "choosing" ? "Choose an empty job" : "Your wedding staff"}</h2>
              <span className="text-xs text-slate-400">{state.assignments.length}/4 hired</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {JOBS.map((job) => {
                const assigned = state.assignments.find((a) => a.job === job.id);
                const isSelected = state.selectedJob === job.id;
                return <button key={job.id} type="button" disabled={Boolean(assigned) || state.phase !== "choosing"}
                  aria-pressed={isSelected}
                  aria-label={`${job.name}, ${assigned ? `locked: ${CANDIDATES[assigned.candidate].name}` : `empty${isSelected ? ", selected" : ""}`}`}
                  onClick={() => dispatch({ type: "select", job: job.id, candidate: currentId })}
                  className={`min-h-[76px] min-w-0 rounded-xl border-2 p-3 text-left ${assigned ? "border-slate-700 bg-slate-900 text-slate-400" : isSelected ? "border-violet-400 bg-violet-950 text-white" : "border-slate-600 bg-slate-900 text-slate-100"}`}>
                  <span className="block text-sm font-bold"><span aria-hidden="true">{job.emoji} </span>{job.name}</span>
                  <span className={`mt-1 block text-xs ${isSelected ? "text-violet-200" : "text-slate-400"}`}>{assigned ? `Locked · ${CANDIDATES[assigned.candidate].name}` : isSelected ? "Selected" : "Empty"}</span>
                </button>;
              })}
            </div>
          </section>
          <div className="mt-3">
            {state.phase === "choosing" ? <>
              <button type="button" className={primary} disabled={!selected}
                onClick={() => selected && dispatch({ type: "hire", candidate: currentId, job: selected.id })}>
                {selected ? `Hire as ${selected.name}` : "Select a job to hire"}
              </button>
              <p className="mt-2 text-center text-xs text-slate-400">Confirming locks this hire for the whole wedding.</p>
            </> : last && <button type="button" className={primary} onClick={() => dispatch({ type: "continue", candidate: last.candidate })}>
              {state.assignments.length === 4 ? "Read wedding report" : "Next candidate"}
            </button>}
          </div>
        </>
      )}
      <footer className="mt-6 border-t border-slate-800 pt-3 text-xs leading-relaxed text-slate-400">
        Text + emoji proxies. Meme names are reference labels. <span className="whitespace-nowrap">Content v{CONTENT_VERSION} · Seed {state.seed}</span>
      </footer>
    </main>
  );
}
