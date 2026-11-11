export const CONTENT_VERSION = "1";

export const JOBS = [
  { id: "dj", name: "DJ", emoji: "🎧", activity: "music" },
  { id: "caterer", name: "Caterer", emoji: "🍽️", activity: "food" },
  { id: "photographer", name: "Photographer", emoji: "📷", activity: "photos" },
  { id: "safety", name: "Safety Officer", emoji: "🧯", activity: "safety checks" },
] as const;

export type JobId = (typeof JOBS)[number]["id"];
export type CandidateId =
  | "this-is-fine"
  | "disaster-girl"
  | "roll-safe"
  | "distracted-boyfriend"
  | "success-kid"
  | "side-eye";

type Candidate = {
  name: string;
  emoji: string;
  hint: string;
  consequences: Record<JobId, string>;
};

// Reference labels only. All artwork is represented by text and emoji.
// {subject} is resolved from draw order, never from the chosen jobs.
export const CANDIDATES: Record<CandidateId, Candidate> = {
  "this-is-fine": {
    name: "This Is Fine",
    emoji: "☕🐶",
    hint: "Ignores obvious disasters. The paperwork will look great.",
    consequences: {
      dj: "Keeps the slow song playing through every alarm. Apparently this is the extended mix.",
      caterer: "Anything smoking is described as fresh from the oven. Nothing leaves the menu.",
      photographer: "Every warning sign is cropped out. The album will remember a very different wedding.",
      safety: "The inspection found no problems. The inspection did not look up.",
    },
  },
  "disaster-girl": {
    name: "Disaster Girl",
    emoji: "🔥👧",
    hint: "Causes a fire. The job title is just a suggestion.",
    consequences: {
      dj: "Drops the hottest set of the year. The DJ booth is now on fire.",
      caterer: "The buffet is now flambé. So is the table.",
      photographer: "Sets the photo backdrop on fire. Requests one more shot before anyone intervenes.",
      safety: "Starts a real fire for the safety demonstration. Has not prepared the second half of the demonstration.",
    },
  },
  "roll-safe": {
    name: "Roll Safe",
    emoji: "👈🧠",
    hint: "Prevents a problem by eliminating the entire activity.",
    consequences: {
      dj: "You can’t play a bad song if you unplug the speakers. All music is canceled.",
      caterer: "No buffet, no food poisoning. Cancels the entire food service.",
      photographer: "You can’t blink in a photo that doesn’t exist. Cancels all wedding photography.",
      safety: "No inspections, no failed inspections. Cancels every safety check; actual hazards remain possible.",
    },
  },
  "distracted-boyfriend": {
    name: "Distracted Boyfriend",
    emoji: "👀🚶",
    hint: "Will redirect all attention toward another hire.",
    consequences: {
      dj: "Dedicates every song to {subject}. The couple’s names never make it onto the microphone.",
      caterer: "Delivers every tray directly to {subject}. The couple gets a description of dinner.",
      photographer: "Every photograph follows {subject}. The couple appears in none of the photographs.",
      safety: "Checks that {subject} is comfortable. The rest of the venue will have to raise its own concerns.",
    },
  },
  "success-kid": {
    name: "Success Kid",
    emoji: "✊👶",
    hint: "Actually completes the assigned task. Yes, really.",
    consequences: {
      dj: "Plays the couple’s exact first-dance request. Even gets the obscure remix right.",
      caterer: "Serves every meal hot and remembers every allergy. The couple eats while seated.",
      photographer: "Gets the whole family looking at the camera at once. Even the uncle holding an iPad.",
      safety: "Puts an extinguisher within reach and knows how to use it. Any fire started by another hire will be put out.",
    },
  },
  "side-eye": {
    name: "Side Eye",
    emoji: "😒👀",
    hint: "Notices what everyone else is trying to ignore.",
    consequences: {
      dj: "Pauses the music whenever someone says everything is normal. Waits for a more convincing answer.",
      caterer: "Labels the suspicious dishes with follow-up questions. The menu now has footnotes.",
      photographer: "Keeps every suspicious detail in frame. Nobody gets to call it a lens flare later.",
      safety: "Reads the incident form, then looks at the actual room. Any concealed fire is going on the record.",
    },
  },
};

// Keep this order stable within a content version: it is part of the seed contract.
export const CANDIDATE_IDS: readonly CandidateId[] = [
  "this-is-fine", "disaster-girl", "roll-safe",
  "distracted-boyfriend", "success-kid", "side-eye",
];

export const ENDINGS = {
  "no-fire": "No fire was started. The couple makes it through the vows without an evacuation announcement.",
  extinguished: "Disaster Girl started a fire. Success Kid, your Safety Officer, put it out. The vows are completed with a faint scent of extinguisher foam.",
  visible: "Disaster Girl’s fire is still burning. The couple says “I do” beside the evacuation point.",
  concealed: "Disaster Girl’s fire is still burning. This Is Fine leaves it out of the incident report. The couple receives a spotless form while the venue quietly smolders.",
} as const;

export const EXPOSURE = "Side Eye exposes the fire that This Is Fine tried to leave out of the incident report.";

export const CANCELLATIONS: Record<JobId, string> = {
  dj: "Roll Safe canceled the music: the first dance is performed to the sound of shoes.",
  caterer: "Roll Safe canceled the food service: the guests toast with empty forks.",
  photographer: "Roll Safe canceled the photography: the official album is an empty folder.",
  safety: "Roll Safe canceled the safety checks: the inspection clipboard remains factory-sealed.",
};
