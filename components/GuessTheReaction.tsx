"use client";

import Link from "next/link";
import { useEffect, useReducer, useRef, useState } from "react";
import { COLLECTION, ROUNDS } from "@/data/guess-the-reaction";
import { challengePath, createReactionState, getRound, MAX_GUESSES, reactionReducer, shareMessage, visibleCollection } from "@/lib/guess-the-reaction";
import { ReactionMemeArt } from "./ReactionMemeArt";
import { ReactionImageLibrary, useReactionPreviews } from "./ReactionImageLibrary";

export function GuessTheReaction({ initialRoundId, invalidChallenge }: { initialRoundId: string; invalidChallenge: boolean }) {
  const [state, dispatch] = useReducer(reactionReducer, initialRoundId, createReactionState);
  const [shareText, setShareText] = useState("");
  const [shareStatus, setShareStatus] = useState("");
  const [sharing, setSharing] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const shareRun = useRef(0);
  const images = useReactionPreviews();
  const dialog = useRef<HTMLDialogElement>(null);
  const cancelButton = useRef<HTMLButtonElement>(null);
  const latestHeading = useRef<HTMLHeadingElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const situationHeading = useRef<HTMLHeadingElement>(null);
  const round = getRound(state.roundId);
  const selected = COLLECTION.find((meme) => meme.id === state.selected);
  const finished = state.status !== "playing";
  const answer = finished ? COLLECTION.find((meme) => meme.id === round.target)! : null;
  const cards = visibleCollection(state);
  const imageCount = COLLECTION.filter((meme) => images.previews[meme.id] ?? meme.localImage).length;

  useEffect(() => {
    if (state.selected) {
      if (!dialog.current?.open) dialog.current?.showModal();
      cancelButton.current?.focus();
    } else {
      dialog.current?.close();
    }
  }, [state.selected]);

  useEffect(() => {
    if (state.guesses.length) (state.status === "playing" ? latestHeading : resultHeading).current?.focus();
  }, [state.guesses.length, state.status]);

  function restartOrNext(type: "reset" | "next") {
    dispatch({ type });
    setShareText("");
    setShareStatus("");
    shareRun.current += 1;
    setSharing(false);
    setHintsOpen(false);
    situationHeading.current?.focus();
  }

  useEffect(() => {
    // Reloading or copying the address always starts this situation afresh.
    window.history.replaceState(window.history.state, "", challengePath(state.roundId));
  }, [state.roundId]);

  async function shareChallenge() {
    if (sharing) return;
    const run = ++shareRun.current;
    const url = new URL(challengePath(state.roundId), window.location.origin).href;
    const text = shareMessage(state);
    const fallback = `${text}\n${url}`;
    setShareText(fallback);
    setShareStatus("");
    setSharing(true);
    try {
      if (navigator.share) {
        try {
          await navigator.share({ title: "Guess the Reaction", text, url });
          if (shareRun.current === run) setShareStatus("Challenge shared.");
          return;
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            if (shareRun.current === run) setShareStatus("Share cancelled. Your challenge is ready to copy below.");
            return;
          }
        }
      }
      if (shareRun.current !== run) return;
      try {
        await navigator.clipboard.writeText(fallback);
        if (shareRun.current === run) setShareStatus("Challenge copied. The answer stays secret.");
      } catch {
        if (shareRun.current === run) setShareStatus("Select and copy your challenge below.");
      }
    } finally {
      if (shareRun.current === run) setSharing(false);
    }
  }

  async function copyChallenge() {
    const run = shareRun.current;
    try {
      await navigator.clipboard.writeText(shareText);
      if (shareRun.current === run) setShareStatus("Challenge copied. The answer stays secret.");
    } catch {
      if (shareRun.current === run) setShareStatus("Select and copy your challenge below.");
    }
  }

  const lastGuess = state.guesses[state.guesses.length - 1];
  const lastMeme = COLLECTION.find((meme) => meme.id === lastGuess);
  const lastFeedback = lastGuess && lastGuess !== round.target ? round.feedback[lastGuess] : null;
  const announcement = lastGuess ? state.status === "won" ? `Found it! ${answer?.name}. ${round.interpretation}` : `${state.guesses.length} of 5 guesses used. ${lastFeedback?.similarity} ${lastFeedback?.distinction}${state.status === "lost" ? ` The answer is ${answer?.name}. ${round.interpretation}` : ""}` : "";

  return (
    <main className="reaction-page">
      <div className="reaction-shell">
        <header className="reaction-header">
          <Link href="/" className="reaction-brand">Meme<span>Guessr</span><span className="reaction-beta">THE LAB</span></Link>
          <Link href="/play" className="reaction-original">Original game <span aria-hidden="true">↗</span></Link>
        </header>

        <div className="reaction-intro">
          <p className="reaction-eyebrow">A LITTLE MEME DEDUCTION</p>
          <h1>Guess the <span>Reaction<span className="reaction-period">.</span></span></h1>
          <p>Find the hidden meme reaction. Your guesses reveal clues.</p>
        </div>

        {invalidChallenge && <p className="reaction-notice" role="status">This challenge link is unavailable or uses another content version. Here’s a fresh situation.</p>}

        <div className="reaction-layout">
          <section className="reaction-case" aria-labelledby="situation-title">
            <div className="reaction-case-top"><span className="reaction-eyebrow">THE SITUATION</span><span className="reaction-case-number">{String(state.visited.length).padStart(2, "0")} / 05 THIS RUN</span></div>
            <h2 id="situation-title" ref={situationHeading} tabIndex={-1}>{round.title}</h2>
            <p className="reaction-situation">“{round.situation}”</p>
            <div className="reaction-hidden" aria-label={finished ? "Reaction revealed below" : "Hidden reaction"}>
              <span className="reaction-mystery" aria-hidden="true">{finished ? "!" : "?"}</span>
              <div><strong>{finished ? "The reaction is in." : "One reaction. Under wraps."}</strong><p>Find our chosen reaction. Others can fit too.</p></div>
            </div>
            <div className="reaction-attempts">
              <span>{state.guesses.length} / {MAX_GUESSES} guesses used</span>
              <span className="reaction-dots" aria-hidden="true">{Array.from({ length: MAX_GUESSES }, (_, i) => <i key={i} className={i < state.guesses.length ? (state.guesses[i] === round.target ? "is-correct" : "is-used") : ""} />)}</span>
            </div>

            <div className="reaction-run-progress" aria-label={`Situation ${state.visited.length} of ${ROUNDS.length} in this run`}>
              <span className="reaction-small">Five situations. Follow the punchlines.</span>
              <span aria-hidden="true">{ROUNDS.map((_, index) => <i key={index} className={index < state.visited.length - 1 || (finished && index === state.visited.length - 1) ? "is-complete" : index === state.visited.length - 1 ? "is-current" : ""} />)}</span>
            </div>
          </section>

          <div className="reaction-play-area">
            {!finished ? <section aria-labelledby="collection-title" className="reaction-collection">
              <div className="reaction-section-heading"><h2 id="collection-title">Pick your reaction</h2><button className="reaction-hint-toggle" aria-expanded={hintsOpen} aria-controls="reaction-hints" onClick={() => setHintsOpen(!hintsOpen)}>Hints <span>{state.hintsUsed}/3</span> <span aria-hidden="true">{hintsOpen ? "−" : "＋"}</span></button></div>
              <label className="reaction-search"><span aria-hidden="true">⌕</span><span className="sr-only">Search meme names or aliases</span><input type="search" placeholder="Search memes… try “Harold”" value={state.query} onChange={(event) => dispatch({ type: "search", query: event.target.value })} /></label>
              <section className="reaction-hints" id="reaction-hints" hidden={!hintsOpen} aria-label="Optional hints">
                <div className="reaction-section-heading"><h3>A little nudge?</h3><span>{state.hintsUsed} / 3 hints</span></div>
                <p className="reaction-small">Meaning → visual → three candidates. Never costs a guess.</p>
                {state.hintsUsed > 0 && <ol className="reaction-hint-list">
                  <li><strong>01 / Meaning</strong>{round.hints.meaning}</li>
                  {state.hintsUsed > 1 && <li><strong>02 / Visual</strong>{round.hints.visual}</li>}
                  {state.hintsUsed > 2 && <li><strong>03 / Rescue</strong>Three candidates, including the hidden answer. You can still view the full collection.</li>}
                </ol>}
                <button className="reaction-button reaction-secondary reaction-hint-button" disabled={state.hintsUsed === 3} onClick={() => dispatch({ type: "hint" })}>
                  {state.hintsUsed === 0 ? "＋ Reveal meaning hint" : state.hintsUsed === 1 ? "＋ Reveal visual hint" : state.hintsUsed === 2 ? "＋ Rescue: narrow to three" : "All three hints revealed"}
                </button>
              </section>
              <p className="sr-only" role="status">{state.hintsUsed === 1 ? `Meaning hint: ${round.hints.meaning}` : state.hintsUsed === 2 ? `Visual hint: ${round.hints.visual}` : state.hintsUsed === 3 ? "Rescue hint used. The collection is filtered to three candidates including the answer. View full collection is available." : ""}</p>
              {lastMeme && lastFeedback && <section className="reaction-latest" aria-labelledby="latest-clue-title">
                <div className="reaction-latest-heading"><span className="reaction-eyebrow">GUESS {state.guesses.length} / CLUE UNLOCKED</span><a href="#feedback-title">Full trail ↓</a></div>
                <h3 id="latest-clue-title" ref={latestHeading} tabIndex={-1}>{lastMeme.name}</h3>
                <p>{lastFeedback.similarity}</p><p className="reaction-latest-difference">{lastFeedback.distinction}</p>
                <span className="reaction-latest-next">What fits that clue? Pick your next reaction below.</span>
              </section>}
              {state.hintsUsed === 3 && <div className="reaction-rescue" role="status"><p>{state.rescueOnly ? "Rescue active: filtered to three candidates." : "Showing the full collection. Rescue hint is still counted."}</p><button onClick={() => dispatch({ type: "toggle-rescue" })}>{state.rescueOnly ? "View full collection" : "Show rescue candidates"}</button></div>}
              <div className="reaction-collection-toolbar"><span>{cards.length} {state.rescueOnly ? "rescue candidates" : cards.length === 1 ? "reaction" : "reactions"}{state.query ? cards.length === 1 ? " matches" : " match" : ""}</span>{imageCount > 0 && <label><input type="checkbox" checked={showNames} onChange={(event) => setShowNames(event.target.checked)} /> Show captions</label>}</div>
              <div className="reaction-grid">
                {cards.map((meme) => {
                  const guessed = state.guesses.includes(meme.id);
                  return <button key={meme.id} className={`reaction-card reaction-card-${meme.id}`} disabled={guessed} onClick={() => dispatch({ type: "select", id: meme.id })}>
                    <ReactionMemeArt meme={meme} preview={images.previews[meme.id]} showName={showNames} /><span className="reaction-card-corner" aria-hidden="true">{guessed ? "✓" : "↗"}</span>
                    {guessed && <span className="reaction-guessed">Already guessed</span>}
                  </button>;
                })}
              </div>
              {cards.length === 0 && <p className="reaction-empty">No memes match{state.rescueOnly ? " in the rescue candidates" : ""}. <button onClick={() => dispatch({ type: "search", query: "" })}>Clear search</button>{state.rescueOnly && <> or <button onClick={() => dispatch({ type: "toggle-rescue" })}>view the full collection</button></>}.</p>}
              <p className="reaction-collection-note">Tap to preview, then lock it in. {imageCount < COLLECTION.length && <a href="#reaction-image-library" onClick={() => { const library = document.querySelector<HTMLDetailsElement>("#reaction-image-library"); if (library) library.open = true; }}>Add meme images</a>}</p>
            </section> : <section className="reaction-result" aria-labelledby="result-title">
              <p className="reaction-eyebrow">{state.status === "won" ? "CASE CLOSED" : "THE BIG REVEAL"}</p>
              <h2 id="result-title" ref={resultHeading} tabIndex={-1}>{state.status === "won" ? "That’s the reaction." : "Here’s what we had in mind."}</h2>
              <figure className="reaction-punchline">
                <figcaption><span className="reaction-eyebrow">WHEN…</span><p>{round.situation}</p></figcaption>
                {answer && <div className="reaction-answer"><ReactionMemeArt meme={answer} preview={images.previews[answer.id]} /></div>}
                <p className="reaction-interpretation">{round.interpretation}</p>
              </figure>
              <p className="reaction-result-score">{state.status === "won" ? `Solved in ${state.guesses.length}/5 guesses` : "Revealed after 5/5 guesses"} <span>·</span> {state.hintsUsed} {state.hintsUsed === 1 ? "hint" : "hints"}</p>
              <p className="reaction-small">This was our chosen punchline. Your other reactions can fit too.</p>
              {state.visited.length === ROUNDS.length && <p className="reaction-run-finished">All five situations explored. Next situation starts a fresh run.</p>}
              <div className="reaction-result-actions"><button className="reaction-button reaction-primary" onClick={() => restartOrNext("next")}>Next situation <span aria-hidden="true">→</span></button><button className="reaction-button reaction-secondary" onClick={() => restartOrNext("reset")}>Try again</button><button className="reaction-button reaction-secondary" disabled={sharing} onClick={shareChallenge}>{sharing ? "Preparing challenge…" : "Challenge a friend"}</button></div>
              {shareText && <div className="reaction-share"><p role="status">{shareStatus || "Your spoiler-free challenge is ready."}</p><label htmlFor="reaction-share-text">Copyable challenge</label><textarea id="reaction-share-text" rows={6} readOnly value={shareText} onFocus={(event) => event.currentTarget.select()} /><button className="reaction-button reaction-secondary" onClick={copyChallenge}>Copy challenge</button><p className="reaction-small">Links start this situation with fresh progress. Local preview links only work on a device that can reach this server.</p></div>}
            </section>}

            <section className="reaction-history" aria-labelledby="feedback-title">
              <div className="reaction-section-heading"><h2 id="feedback-title" tabIndex={-1}>Your trail of clues</h2><span>{state.guesses.length ? `${state.guesses.length} recorded` : "A clean slate"}</span></div>
              {state.guesses.length === 0 ? <p className="reaction-history-empty"><span aria-hidden="true">↳</span> Your first guess starts the trail. Similarities and differences will stay here.</p> : <ol className="reaction-feedback-list">{state.guesses.map((id, index) => {
                const meme = COLLECTION.find((item) => item.id === id)!;
                const correct = id === round.target;
                const feedback = round.feedback[id];
                return <li key={id}><span className="reaction-feedback-number">{String(index + 1).padStart(2, "0")}</span><div className="reaction-feedback-content"><div className="reaction-feedback-top"><span className="reaction-feedback-art" aria-hidden="true"><ReactionMemeArt meme={meme} preview={images.previews[meme.id]} showName={false} /></span><h3>{meme.name} <span>{correct ? "Found it" : "Clue unlocked"}</span></h3></div>{correct ? <p>{round.interpretation}</p> : <><p>{feedback?.similarity}</p><p className="reaction-distinction">{feedback?.distinction}</p></>}</div></li>;
              })}</ol>}
            </section>
          </div>
        </div>
        <ReactionImageLibrary {...images} />
        <footer className="reaction-footer"><span>A MemeGuessr experiment</span><span>Five situations. No rush.</span></footer>
      </div>
      <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>
      <dialog ref={dialog} className="reaction-dialog" aria-labelledby="guess-dialog-title" aria-describedby="guess-dialog-description" onCancel={() => dispatch({ type: "cancel" })}>
        {selected && <><p className="reaction-eyebrow">YOUR REACTION</p><h2 id="guess-dialog-title">Use this reaction?</h2><div className={`reaction-confirm-art reaction-card-${selected.id}`}><ReactionMemeArt meme={selected} preview={images.previews[selected.id]} /></div><blockquote className="reaction-confirm-situation">{round.situation}</blockquote><p id="guess-dialog-description">This uses 1 of your {MAX_GUESSES - state.guesses.length} remaining guesses.</p><div className="reaction-dialog-actions"><button className="reaction-button reaction-primary" onClick={() => dispatch({ type: "guess", id: selected.id })}>Guess {selected.name}</button><button ref={cancelButton} className="reaction-button reaction-secondary" onClick={() => dispatch({ type: "cancel" })}>Keep looking</button></div></>}
      </dialog>
    </main>
  );
}
