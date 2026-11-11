export const CONTENT_VERSION = "1";

export const MEME_IDS = ["fine", "harold", "pikachu", "disaster", "boyfriend", "drake", "brain", "success", "side-eye", "skeleton"] as const;
export type MemeId = (typeof MEME_IDS)[number];

export interface ReactionMeme {
  id: MemeId;
  name: string;
  emoji: string;
  aliases: readonly string[];
  /** Only add assets cleared for use and stored under public/. */
  localImage?: `/${string}`;
}

export const COLLECTION: readonly ReactionMeme[] = [
  { id: "fine", name: "This Is Fine", emoji: "☕", localImage: "/reactions/this-is-fine.jpg", aliases: ["this is fine dog", "fire dog", "fine"] },
  { id: "harold", name: "Hide the Pain Harold", emoji: "🙂", localImage: "/reactions/hide-the-pain-harold.jpg", aliases: ["harold", "hide pain", "pain harold"] },
  { id: "pikachu", name: "Surprised Pikachu", emoji: "😮", localImage: "/reactions/surprised-pikachu.jpg", aliases: ["pikachu", "shocked pikachu", "surprise pikachu"] },
  { id: "disaster", name: "Disaster Girl", emoji: "🔥", localImage: "/reactions/disaster-girl.jpg", aliases: ["fire girl", "burning house girl"] },
  { id: "boyfriend", name: "Distracted Boyfriend", emoji: "👀", localImage: "/reactions/distracted-boyfriend.jpg", aliases: ["distracted guy", "looking back", "boyfriend"] },
  { id: "drake", name: "Drake Hotline Bling", emoji: "✋", localImage: "/reactions/drake-hotline-bling.jpg", aliases: ["drake", "drake yes no", "hotline bling"] },
  { id: "brain", name: "Expanding Brain", emoji: "🧠", localImage: "/reactions/expanding-brain.jpg", aliases: ["galaxy brain", "big brain", "glowing brain"] },
  { id: "success", name: "Success Kid", emoji: "✊", localImage: "/reactions/success-kid.jpg", aliases: ["fist pump kid", "winning kid", "success baby"] },
  { id: "side-eye", name: "Side Eye / Suspicious Look", emoji: "🤨", localImage: "/reactions/suspicious-look.jpg", aliases: ["side eye", "side-eye", "suspicious look", "skeptical look", "skeptical baby", "suspicious baby"] },
  { id: "skeleton", name: "Waiting Skeleton", emoji: "💀", localImage: "/reactions/waiting-skeleton.jpg", aliases: ["skeleton", "still waiting", "waiting forever"] },
];

export interface Feedback {
  similarity: string;
  distinction: string;
}
export interface ReactionRound {
  id: string;
  title: string;
  situation: string;
  target: MemeId;
  interpretation: string;
  hints: {
    meaning: string;
    visual: string;
    rescue: readonly [MemeId, MemeId, MemeId];
  };
  feedback: Partial<Record<MemeId, Feedback>>;
}

export const ROUNDS: readonly ReactionRound[] = [
  {
    id: "friday-deployment", title: "Friday Deployment",
    situation: "You deployed on Friday, the alerts are screaming, and you’ve just turned off notifications.",
    target: "fine", interpretation: "Calmly denying an obvious disaster. Turning off the alerts is your way of pretending nothing is wrong.",
    hints: {
      meaning: "The reaction pretends everything is okay while the situation clearly falls apart.",
      visual: "An illustrated dog sits with a drink in a room full of flames.",
      rescue: ["fine", "harold", "disaster"],
    },
    feedback: {
      harold: { similarity: "Shared meaning: pretending everything is okay.", distinction: "Your guess is a photograph; the hidden meme is illustrated." },
      pikachu: { similarity: "Both fit something going wrong.", distinction: "Your guess expresses surprise; the hidden reaction acts as though nothing is wrong." },
      disaster: { similarity: "Shared visual detail: fire.", distinction: "Your guess suggests enjoying the disaster; the hidden reaction denies it." },
      boyfriend: { similarity: "Both fit looking away from a responsibility.", distinction: "Your guess is drawn to something new; the hidden reaction stays put and pretends the disaster is normal." },
      drake: { similarity: "Both could fit rejecting the alerts.", distinction: "Your guess compares a rejected choice with a preferred one; the hidden reaction calmly accepts a visibly terrible situation." },
      brain: { similarity: "Both can mock a supposedly clever decision.", distinction: "Your guess escalates through levels of thinking; the hidden reaction is a calm character surrounded by danger." },
      success: { similarity: "No close match in meaning: this is not a real win.", distinction: "The hidden reaction insists things are okay despite visible disaster, rather than celebrating success." },
      "side-eye": { similarity: "Both can respond to an obviously bad decision.", distinction: "Your guess signals suspicion; the hidden reaction refuses to acknowledge the problem." },
      skeleton: { similarity: "Both can suggest doing nothing while a problem continues.", distinction: "Your guess is about a long wait; the hidden reaction denies a disaster happening right now." },
    },
  },
  {
    id: "mandatory-workshop", title: "Mandatory Fun",
    situation: "Your manager says the mandatory Saturday workshop will be a fun opportunity.",
    target: "harold", interpretation: "Smiling through discomfort. You look agreeable on the outside while your weekend quietly disappears.",
    hints: {
      meaning: "The reaction wears a polite smile while barely hiding how painful this is.",
      visual: "A photograph of an older, white-haired man with a strained smile.",
      rescue: ["harold", "fine", "side-eye"],
    },
    feedback: {
      fine: { similarity: "That fits too: both put an okay face on a bad situation.", distinction: "Your guess denies the trouble; the hidden reaction’s strained smile lets the discomfort show. It is a photograph." },
      pikachu: { similarity: "Both could fit unwelcome news about your weekend.", distinction: "Your guess openly shows surprise; the hidden reaction tries to cover discomfort with a smile." },
      disaster: { similarity: "Shared visual detail: a smile during something unpleasant.", distinction: "Your guess looks pleased with the trouble; the hidden reaction is the one suffering behind the smile." },
      boyfriend: { similarity: "Both could fit wishing you were doing something else.", distinction: "Your guess turns toward a tempting alternative; the hidden reaction faces the situation with a pained, polite smile." },
      drake: { similarity: "Both could express a preference about Saturday plans.", distinction: "Your guess openly rejects an option; the hidden reaction hides that rejection behind an agreeable face." },
      brain: { similarity: "No close match in meaning: there is no escalating clever idea here.", distinction: "Look for a photographed man trying to conceal discomfort, rather than a sequence of brains." },
      success: { similarity: "Both show an outwardly positive expression.", distinction: "Your guess celebrates a genuine win; the hidden reaction’s apparent happiness masks pain." },
      "side-eye": { similarity: "That fits too: both suggest you are not buying the ‘fun’ claim.", distinction: "Your guess displays skepticism; the hidden reaction tries to look cooperative with a strained smile." },
      skeleton: { similarity: "Both can express suffering through time you did not want to spend.", distinction: "Your guess emphasizes an endless wait; the hidden reaction emphasizes a living person smiling through discomfort." },
    },
  },
  {
    id: "low-battery", title: "One Percent Confidence",
    situation: "You ignored every low-battery warning. Your phone dies halfway through showing your ticket.",
    target: "pikachu", interpretation: "Acting shocked at a completely predictable consequence. Somehow, all those battery warnings were not enough of a clue.",
    hints: {
      meaning: "The reaction is surprised by the obvious result of its own choices.",
      visual: "A yellow cartoon creature stares ahead with its mouth open.",
      rescue: ["pikachu", "fine", "harold"],
    },
    feedback: {
      fine: { similarity: "Both fit ignoring clear signs of trouble.", distinction: "Your guess keeps pretending things are okay; the hidden reaction finally responds with open-mouthed surprise." },
      harold: { similarity: "Both fit an awkward moment in front of other people.", distinction: "Your guess hides discomfort behind a smile; the hidden reaction openly looks shocked at a predictable outcome." },
      disaster: { similarity: "Both fit the aftermath of a bad decision.", distinction: "Your guess seems pleased with the damage; the hidden reaction looks startled by the consequence." },
      boyfriend: { similarity: "Both can fit neglecting something important.", distinction: "Your guess shows attention wandering before trouble; the hidden reaction is the shocked face after trouble arrives." },
      drake: { similarity: "Both could fit rejecting the sensible option.", distinction: "Your guess shows a deliberate preference; the hidden reaction shows surprise when that choice backfires." },
      brain: { similarity: "Both can mock questionable judgment.", distinction: "Your guess builds a sequence of supposedly smarter ideas; the hidden reaction is one yellow cartoon face with an open mouth." },
      success: { similarity: "No close match in meaning: the ticket attempt has failed.", distinction: "The hidden reaction expresses shock at failure, rather than pride in a win." },
      "side-eye": { similarity: "Both use a face to react to a questionable choice.", distinction: "Your guess looks skeptical, as if it expected trouble; the hidden reaction looks surprised that trouble happened." },
      skeleton: { similarity: "Both fit being stuck instead of getting where you wanted to go.", distinction: "Your guess is about waiting for ages; the hidden reaction captures the instant of surprise when the phone dies." },
    },
  },
  {
    id: "side-project", title: "Just One More Project",
    situation: "You open your laptop to finish one task. A completely unnecessary side project appears.",
    target: "boyfriend", interpretation: "Abandoning a commitment for a tempting distraction. The task you promised to finish watches you fall for another shiny idea.",
    hints: {
      meaning: "The reaction turns away from an existing commitment toward a tempting new option.",
      visual: "A street photograph with three people: one turns to look, while the person beside them notices.",
      rescue: ["boyfriend", "drake", "brain"],
    },
    feedback: {
      fine: { similarity: "Both could fit neglecting the task you should be doing.", distinction: "Your guess ignores a disaster; the hidden reaction visibly turns toward a tempting alternative." },
      harold: { similarity: "Both could fit not enjoying your current obligation.", distinction: "Your guess stays and smiles through it; the hidden reaction’s attention moves to something more attractive." },
      pikachu: { similarity: "Both could fit the moment an unexpected project appears.", distinction: "Your guess expresses surprise; the hidden reaction expresses temptation and wandering attention." },
      disaster: { similarity: "Both can suggest knowingly behaving badly.", distinction: "Your guess enjoys the aftermath of trouble; the hidden reaction is caught choosing a distraction over a commitment." },
      drake: { similarity: "That fits too: both favor one option over another.", distinction: "Your guess separates rejection and approval into panels; the hidden reaction shows three people together in one photograph." },
      brain: { similarity: "Both can poke fun at a supposedly brilliant new idea.", distinction: "Your guess escalates ideas through panels; the hidden reaction is about abandoning an existing commitment for something tempting." },
      success: { similarity: "Both could express excitement about the new project.", distinction: "Your guess celebrates completing a win; the hidden reaction is distracted before the original task is done." },
      "side-eye": { similarity: "Both can involve someone noticing questionable behavior.", distinction: "Your guess focuses on suspicion; the hidden reaction centers on a person looking away from their companion toward someone else." },
      skeleton: { similarity: "Both fit a task that still has not been finished.", distinction: "Your guess waits passively; the hidden reaction actively redirects attention to a new temptation." },
    },
  },
  {
    id: "leaving-now", title: "Leaving Now. Allegedly.",
    situation: "The group chat said ‘leaving now.’ You’ve been outside for forty minutes.",
    target: "skeleton", interpretation: "Waiting so long you might turn to bones. ‘Leaving now’ appears to use a very different definition of now.",
    hints: {
      meaning: "The reaction exaggerates a wait that feels like it will last forever.",
      visual: "A skeleton sits waiting, as though all the years have passed it by.",
      rescue: ["skeleton", "side-eye", "harold"],
    },
    feedback: {
      fine: { similarity: "Both can fit tolerating an unpleasant situation.", distinction: "Your guess pretends an active disaster is okay; the hidden reaction exaggerates how much time has passed while waiting." },
      harold: { similarity: "That fits too: both express suffering without making a scene.", distinction: "Your guess is a living person forcing a smile; the hidden reaction makes the wait so long that only bones remain." },
      pikachu: { similarity: "Both could fit discovering that ‘leaving now’ was optimistic.", distinction: "Your guess is a sudden moment of shock; the hidden reaction is a wait stretched beyond a human lifetime." },
      disaster: { similarity: "No close match in meaning: the waiting person is not enjoying the trouble.", distinction: "The hidden reaction is a seated figure reduced to bones by an absurdly long delay." },
      boyfriend: { similarity: "Both fit attention being somewhere other than a commitment.", distinction: "Your guess follows the distracted person; the hidden reaction follows the person left waiting for ages." },
      drake: { similarity: "No close match in meaning: there is no preference between two options here.", distinction: "The hidden reaction is one figure enduring a ridiculously long wait, rather than approval and rejection panels." },
      brain: { similarity: "Both use visual exaggeration for a joke.", distinction: "Your guess exaggerates intelligence; the hidden reaction exaggerates elapsed time until a waiting figure is only bones." },
      success: { similarity: "No close match in meaning: the friends have not arrived yet.", distinction: "The hidden reaction is still waiting, rather than celebrating a completed success." },
      "side-eye": { similarity: "That fits too: both can question the friends’ ‘leaving now’ claim.", distinction: "Your guess emphasizes distrust; the hidden reaction emphasizes the wait lasting long enough to become a skeleton." },
    },
  },
];

export function validateContent(rounds: readonly ReactionRound[] = ROUNDS): string[] {
  const errors: string[] = [];
  if (new Set(COLLECTION.map((meme) => meme.id)).size !== MEME_IDS.length) errors.push("Collection IDs must be unique and complete.");
  if (new Set(rounds.map((round) => round.id)).size !== rounds.length) errors.push("Round IDs must be unique.");
  for (const round of rounds) {
    if (!MEME_IDS.includes(round.target)) errors.push(`${round.id}: invalid target`);
    for (const id of MEME_IDS) {
      if (id === round.target) continue;
      const feedback = round.feedback[id];
      if (!feedback?.similarity.trim() || !feedback?.distinction.trim()) errors.push(`${round.id}: missing feedback for ${id}`);
    }
    if (!round.hints.meaning.trim() || !round.hints.visual.trim()) errors.push(`${round.id}: missing hint`);
    const rescue = round.hints.rescue;
    if (rescue.length !== 3 || new Set(rescue).size !== 3 || !rescue.includes(round.target) || rescue.some((id) => !MEME_IDS.includes(id))) errors.push(`${round.id}: invalid rescue choices`);
  }
  return errors;
}

const contentErrors = validateContent();
if (contentErrors.length) throw new Error(contentErrors.join("\n"));
