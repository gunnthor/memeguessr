// MemeGuessr dataset.
//
// Images are hosted by Imgflip (stable template CDN, i.imgflip.com). These are
// meme *templates*, used here for the guessing game. Imgflip is a common source
// for blank templates; if you want to be conservative about rights, swap in
// images you host yourself — just keep the URL + date + source shape below.
//
// `viralDate` = the month the meme broke into mainstream virality (YYYY-MM-DD;
// day is set to 15 as a mid-month approximation when only the month is known).
// Dates are researched approximations — verify against each `source` before
// launch, since date accuracy is the whole game. Ordered oldest → newest.

export type Meme = {
  id: string;
  name: string;
  image: string;
  /** ISO date (YYYY-MM-DD) the meme went viral / peaked. */
  viralDate: string;
  /** Short blurb shown on the reveal screen. */
  blurb: string;
  /** Citation URL for the date — shown as "Source" on reveal. */
  source: string;
  /**
   * Optional illustrative example of the meme in use — typically a
   * representative caption in the meme's format. Shown on reveal when present.
   */
  example?: string;
};

export const MEMES: Meme[] = [
  {
    id: "disaster-girl",
    example: "Captioned over a calm selfie: “me walking away after starting drama in the group chat.”",
    name: "Disaster Girl",
    image: "https://i.imgflip.com/23ls.jpg",
    viralDate: "2008-01-15",
    blurb:
      "Zoé Roth's smirk in front of a house fire (photo 2005) spread as a reaction meme through 2007–08.",
    source: "https://knowyourmeme.com/memes/disaster-girl",
  },
  {
    id: "yo-dawg",
    example: "“Yo dawg, I heard you like memes, so I put a meme in your meme so you can guess while you guess.”",
    name: "Yo Dawg (Xzibit)",
    image: "https://i.imgflip.com/26hg.jpg",
    viralDate: "2009-01-15",
    blurb:
      "The 'Yo dawg, I heard you like X' recursion format, built on Xzibit and Pimp My Ride, peaked around 2009.",
    source: "https://knowyourmeme.com/memes/xzibit-yo-dawg",
  },
  {
    id: "batman-slapping-robin",
    example: "Robin: “Maybe we should add tests—” Batman *slaps*: used to shut down any bad take.",
    name: "Batman Slapping Robin (My Parents Are Dead)",
    image: "https://i.imgflip.com/9ehk.jpg",
    viralDate: "2009-11-15",
    blurb:
      "A 1965 comic panel of Batman slapping Robin became an editable speech-bubble macro once a generator launched in 2009.",
    source: "https://knowyourmeme.com/memes/my-parents-are-dead-batman-slapping-robin",
  },
  {
    id: "x-all-the-y",
    example: "“Reply to ALL the emails!”",
    name: "X All the Y",
    image: "https://i.imgflip.com/1bh9.jpg",
    viralDate: "2010-06-15",
    blurb:
      "Allie Brosh's 'Clean ALL the things!' drawing spawned the manic 'X all the Y' format in 2010.",
    source: "https://knowyourmeme.com/memes/x-all-the-things",
  },
  {
    id: "too-damn-high",
    example: "“My screen time is too damn high!”",
    name: "The Rent Is Too Damn High",
    image: "https://i.imgflip.com/1bik.jpg",
    viralDate: "2010-10-15",
    blurb:
      "Jimmy McMillan's 2010 NY debate line became the 'X is too damn high' template overnight.",
    source: "https://knowyourmeme.com/memes/the-rent-is-too-damn-high",
  },
  {
    id: "one-does-not-simply",
    example: "“One does not simply finish a single bag of chips.”",
    name: "One Does Not Simply",
    image: "https://i.imgflip.com/1bij.jpg",
    viralDate: "2011-01-15",
    blurb:
      "Boromir's 'One does not simply walk into Mordor' became a top advice-animal format in 2011.",
    source: "https://knowyourmeme.com/memes/one-does-not-simply-walk-into-mordor",
  },
  {
    id: "scumbag-steve",
    example: "“Borrows your charger / never gives it back.”",
    name: "Scumbag Steve",
    image: "https://i.imgflip.com/1bgy.jpg",
    viralDate: "2011-01-15",
    blurb:
      "A backwards-cap teen in a doorway became the face of jerk behavior in early 2011.",
    source: "https://knowyourmeme.com/memes/scumbag-steve",
  },
  {
    id: "futurama-fry",
    example: "“Not sure if actually tired or just bored.”",
    name: "Futurama Fry (Not Sure If)",
    image: "https://i.imgflip.com/1bgw.jpg",
    viralDate: "2011-02-15",
    blurb:
      "Squinting Fry powered the 'Not sure if X or just Y' format across Reddit in 2011.",
    source: "https://knowyourmeme.com/memes/futurama-fry-not-sure-if",
  },
  {
    id: "ancient-aliens",
    example: "“I’m not saying it was aliens… but it was aliens.”",
    name: "Ancient Aliens (Giorgio)",
    image: "https://i.imgflip.com/26am.jpg",
    viralDate: "2011-03-15",
    blurb:
      "Giorgio Tsoukalos's 'I'm not saying it was aliens, but… aliens' became a 2011 staple.",
    source: "https://knowyourmeme.com/memes/ancient-aliens",
  },
  {
    id: "most-interesting-man",
    example: "“I don’t always test my code, but when I do, I do it in production.”",
    name: "The Most Interesting Man in the World",
    image: "https://i.imgflip.com/1bh8.jpg",
    viralDate: "2011-03-15",
    blurb:
      "The Dos Equis pitchman's 'I don't always X, but when I do…' became a 2011 macro classic.",
    source: "https://knowyourmeme.com/memes/the-most-interesting-man-in-the-world",
  },
  {
    id: "success-kid",
    example: "“Sent the risky text / got a good reply.”",
    name: "Success Kid",
    image: "https://i.imgflip.com/1bhk.jpg",
    viralDate: "2011-04-15",
    blurb:
      "A fist-clenching baby (photo 2007) became the face of small victories as a macro in 2011.",
    source: "https://knowyourmeme.com/memes/success-kid-i-hate-sandcastles",
  },
  {
    id: "y-u-no",
    example: "“Phone, Y U NO hold a charge?!”",
    name: "Y U No",
    image: "https://i.imgflip.com/1bh3.jpg",
    viralDate: "2011-05-15",
    blurb:
      "A stick-figure 'Y U NO do X?!' rage face spread across forums in 2011.",
    source: "https://knowyourmeme.com/memes/y-u-no-guy",
  },
  {
    id: "philosoraptor",
    example: "“If you expect the unexpected, doesn’t that make it… expected?”",
    name: "Philosoraptor",
    image: "https://i.imgflip.com/1bgs.jpg",
    viralDate: "2011-06-15",
    blurb:
      "A pondering velociraptor became the vessel for faux-deep questions, peaking around 2011.",
    source: "https://knowyourmeme.com/memes/philosoraptor",
  },
  {
    id: "good-guy-greg",
    example: "“Borrows your lighter / actually gives it back.”",
    name: "Good Guy Greg",
    image: "https://i.imgflip.com/1bgx.jpg",
    viralDate: "2011-08-15",
    blurb:
      "A smiling smoker became the patron saint of considerate behavior in 2011.",
    source: "https://knowyourmeme.com/memes/good-guy-greg",
  },
  {
    id: "hide-the-pain-harold",
    example: "Forced smile when someone asks if you’re okay: “I’m fine.”",
    name: "Hide the Pain Harold",
    image: "https://i.imgflip.com/gk5el.jpg",
    viralDate: "2011-09-15",
    blurb:
      "Stock-photo model András Arató's strained smile became the face of concealed pain around 2011.",
    source: "https://knowyourmeme.com/memes/hide-the-pain-harold",
  },
  {
    id: "socially-awkward-penguin",
    example: "“Waves back / they were waving at someone behind you.”",
    name: "Socially Awkward Penguin",
    image: "https://i.imgflip.com/1bio.jpg",
    viralDate: "2011-09-15",
    blurb:
      "A flustered penguin on a blue diamond captioned everyday social mishaps from 2011.",
    source: "https://knowyourmeme.com/memes/socially-awkward-penguin",
  },
  {
    id: "first-world-problems",
    example: "“My charger is across the room and I’m already in bed.”",
    name: "First World Problems",
    image: "https://i.imgflip.com/1bhf.jpg",
    viralDate: "2011-10-15",
    blurb:
      "A crying woman fronted ironic complaints about trivial 'hardships' from late 2011.",
    source: "https://knowyourmeme.com/memes/first-world-problems",
  },
  {
    id: "x-everywhere",
    example: "Buzz to Woody: “Bugs… bugs everywhere.”",
    name: "X, X Everywhere (Buzz Lightyear)",
    image: "https://i.imgflip.com/1ihzfe.jpg",
    viralDate: "2012-01-15",
    blurb:
      "Buzz telling Woody 'X, X everywhere' took off as an observation format in 2012.",
    source: "https://knowyourmeme.com/memes/x-x-everywhere",
  },
  {
    id: "brace-yourselves",
    example: "“Brace yourselves — Monday is coming.”",
    name: "Brace Yourselves (X Is Coming)",
    image: "https://i.imgflip.com/1bhm.jpg",
    viralDate: "2012-01-15",
    blurb:
      "Ned Stark's 'Brace yourselves, X is coming' became a Game of Thrones macro in 2012.",
    source: "https://knowyourmeme.com/memes/brace-yourselves-winter-is-coming",
  },
  {
    id: "bad-luck-brian",
    example: "“Tries to break up a fight / gets arrested.”",
    name: "Bad Luck Brian",
    image: "https://i.imgflip.com/1bip.jpg",
    viralDate: "2012-01-15",
    blurb:
      "A hapless yearbook portrait became the face of catastrophic misfortune in early 2012.",
    source: "https://knowyourmeme.com/memes/bad-luck-brian",
  },
  {
    id: "matrix-morpheus",
    example: "“What if I told you the cake was a lie?”",
    name: "Matrix Morpheus (What If I Told You)",
    image: "https://i.imgflip.com/25w3.jpg",
    viralDate: "2012-02-15",
    blurb:
      "Morpheus's 'What if I told you…' became a know-it-all reveal format in 2012.",
    source: "https://knowyourmeme.com/memes/matrix-morpheus",
  },
  {
    id: "ermahgerd",
    example: "“ERMAHGERD! FRENCH FRIES!”",
    name: "Ermahgerd",
    image: "https://i.imgflip.com/26ae.jpg",
    viralDate: "2012-03-15",
    blurb:
      "A retainer-wearing girl clutching Goosebumps books birthed the 'ERMAHGERD' phonetic meme in 2012.",
    source: "https://knowyourmeme.com/memes/ermahgerd",
  },
  {
    id: "confession-bear",
    example: "“I’m 30 and still don’t know how to do my taxes.”",
    name: "Confession Bear",
    image: "https://i.imgflip.com/25wb.jpg",
    viralDate: "2012-03-15",
    blurb:
      "A bear resting its head became the vessel for guilty confessions on Reddit in 2012.",
    source: "https://knowyourmeme.com/memes/confession-bear",
  },
  {
    id: "skeptical-third-world-kid",
    example: "“So you’re telling me… you waited in line overnight for a phone?”",
    name: "Third World Skeptical Kid",
    image: "https://i.imgflip.com/265k.jpg",
    viralDate: "2012-04-15",
    blurb:
      "A squinting kid became the face of skeptical 'so you're telling me…' captions in 2012.",
    source: "https://knowyourmeme.com/memes/skeptical-third-world-kid",
  },
  {
    id: "10-guy",
    example: "“What if money is just… paper we all agreed to believe in?”",
    name: "10 Guy (Stoner Stanley)",
    image: "https://i.imgflip.com/269s.jpg",
    viralDate: "2012-04-15",
    blurb:
      "A wide-eyed, very high partygoer became the face of stoned non-logic in 2012.",
    source: "https://knowyourmeme.com/memes/10-guy",
  },
  {
    id: "grandma-finds-internet",
    example: "“Back in my day / we called this ‘the Google.’”",
    name: "Grandma Finds the Internet",
    image: "https://i.imgflip.com/1bhw.jpg",
    viralDate: "2012-05-15",
    blurb:
      "A bewildered grandmother at a computer fronted clueless-internet jokes in 2012.",
    source: "https://knowyourmeme.com/memes/grandma-finds-the-internet",
  },
  {
    id: "skeptical-baby",
    example: "Side-eye: “So you ‘forgot’ to reply for three days?”",
    name: "Skeptical Baby",
    image: "https://i.imgflip.com/26hb.jpg",
    viralDate: "2012-05-15",
    blurb:
      "A squinting baby's side-eye became shorthand for doubt and disbelief in 2012.",
    source: "https://knowyourmeme.com/memes/skeptical-baby",
  },
  {
    id: "overly-attached-girlfriend",
    example: "“Why aren’t you texting back? I can see you’re online.”",
    name: "Overly Attached Girlfriend",
    image: "https://i.imgflip.com/25w8.jpg",
    viralDate: "2012-06-15",
    blurb:
      "Laina Morris's unblinking stare became the face of clingy obsession in mid-2012.",
    source: "https://knowyourmeme.com/memes/overly-attached-girlfriend",
  },
  {
    id: "aint-nobody-got-time",
    example: "“Read the 40-page terms of service? Ain’t nobody got time for that.”",
    name: "Ain't Nobody Got Time for That",
    image: "https://i.imgflip.com/9hhr.jpg",
    viralDate: "2012-10-15",
    blurb:
      "Sweet Brown's news-interview quip became a viral catchphrase and macro in late 2012.",
    source: "https://knowyourmeme.com/memes/aint-nobody-got-time-for-that-sweet-brown",
  },
  {
    id: "bike-fall",
    example: "Riding along fine, then jamming a stick in your own wheel: “me self-sabotaging.”",
    name: "Bike Fall (Baton Roue)",
    image: "https://i.imgflip.com/1b42wl.jpg",
    viralDate: "2012-10-15",
    blurb:
      "A cyclist jamming a stick into his own front wheel — Corentin Penloup's comic — spread as a self-sabotage meme via Reddit in 2012.",
    source: "https://knowyourmeme.com/memes/baton-roue",
  },
  {
    id: "conspiracy-keanu",
    example: "“What if oxygen is slowly killing us… and we just call it ‘living’?”",
    name: "Conspiracy Keanu",
    image: "https://i.imgflip.com/1bin.jpg",
    viralDate: "2012-11-15",
    blurb:
      "A wide-eyed Keanu Reeves fronted mind-blown 'what if…' conspiracy musings in 2012.",
    source: "https://knowyourmeme.com/memes/conspiracy-keanu",
  },
  {
    id: "grumpy-cat",
    example: "“I had fun once. It was awful.”",
    name: "Grumpy Cat",
    image: "https://i.imgflip.com/8p0a.jpg",
    viralDate: "2012-12-15",
    blurb:
      "Tardar Sauce's permanent scowl made her the internet's mascot of negativity in late 2012.",
    source: "https://knowyourmeme.com/memes/grumpy-cat",
  },
  {
    id: "oprah-you-get-a",
    example: "“You get a bug! And you get a bug! Everybody gets a bug!”",
    name: "Oprah You Get A",
    image: "https://i.imgflip.com/gtj5t.jpg",
    viralDate: "2013-01-15",
    blurb:
      "Oprah's giveaway 'You get an X! Everybody gets an X!' became a reaction template by 2013.",
    source: "https://knowyourmeme.com/memes/oprahs-favorite-things",
  },
  {
    id: "sudden-clarity-clarence",
    example: "“Wait… if I’m always tired, maybe I should just sleep more?”",
    name: "Sudden Clarity Clarence",
    image: "https://i.imgflip.com/25w4.jpg",
    viralDate: "2013-01-15",
    blurb:
      "A party-goer's wide-eyed epiphany became the face of sudden realizations in 2013.",
    source: "https://knowyourmeme.com/memes/sudden-clarity-clarence",
  },
  {
    id: "leonardo-cheers",
    example: "Raising a glass: “to the devs who actually comment their code.”",
    name: "Leonardo DiCaprio Cheers",
    image: "https://i.imgflip.com/39t1o.jpg",
    viralDate: "2013-05-15",
    blurb:
      "DiCaprio raising a glass in The Great Gatsby became a knowing toast meme in 2013.",
    source: "https://knowyourmeme.com/memes/leonardo-dicaprios-cheers",
  },
  {
    id: "im-the-captain-now",
    example: "“Look at me. I’m the project manager now.”",
    name: "I'm the Captain Now",
    image: "https://i.imgflip.com/hlmst.jpg",
    viralDate: "2013-11-15",
    blurb:
      "Barkhad Abdi's 'Look at me — I'm the captain now' from Captain Phillips became a 2013 line.",
    source: "https://knowyourmeme.com/memes/look-at-me-im-the-captain-now",
  },
  {
    id: "yall-got-any-more",
    example: "“Y’all got any more of them… weekend hours?”",
    name: "Y'all Got Any More of...",
    image: "https://i.imgflip.com/21uy0f.jpg",
    viralDate: "2013-12-15",
    blurb:
      "Dave Chappelle's Tyrone Biggums fronted the craving-for-more 'y'all got any more of…' macro, breaking out in late 2013.",
    source: "https://knowyourmeme.com/memes/yall-got-anymore-of-tyrone-biggums",
  },
  {
    id: "but-thats-none-of-my-business",
    example: "“Some people leave early every day and still complain. But that’s none of my business.”",
    name: "But That's None of My Business",
    image: "https://i.imgflip.com/9sw43.jpg",
    viralDate: "2014-06-15",
    blurb:
      "Kermit sipping Lipton tea became the passive-aggressive shade meme in mid-2014.",
    source: "https://knowyourmeme.com/memes/but-thats-none-of-my-business",
  },
  {
    id: "waiting-skeleton",
    example: "“Still waiting on that ‘I’ll text you back in 5 minutes.’”",
    name: "Waiting Skeleton",
    image: "https://i.imgflip.com/2fm6x.jpg",
    viralDate: "2015-01-15",
    blurb:
      "A skeleton slumped 'still waiting' became shorthand for long waits around 2015.",
    source: "https://knowyourmeme.com/memes/waiting-skeleton",
  },
  {
    id: "boardroom-suggestion",
    example: "Boss: “Ideas to cut costs?” “Stop wasting money.” *thrown out the window*",
    name: "Boardroom Meeting Suggestion",
    image: "https://i.imgflip.com/m78d.jpg",
    viralDate: "2015-09-15",
    blurb:
      "The 'good idea / better idea / *thrown out window*' boardroom format spread in 2015.",
    source: "https://knowyourmeme.com/memes/boardroom-meeting-suggestion",
  },
  {
    id: "drakeposting",
    example: "Drake rejects “writing tests after” / approves “writing tests first.”",
    name: "Drakeposting",
    image: "https://i.imgflip.com/30b1gx.jpg",
    viralDate: "2015-12-15",
    blurb:
      "Drake's 'Hotline Bling' video gave us the no/yes preference format in late 2015.",
    source: "https://knowyourmeme.com/memes/drakeposting",
  },
  {
    id: "this-is-fine",
    example: "Dog sipping coffee in a burning room: “This is fine.”",
    name: "This Is Fine",
    image: "https://i.imgflip.com/wxica.jpg",
    viralDate: "2016-01-15",
    blurb:
      "KC Green's 2013 'On Fire' comic exploded into the reaction meme 'This is fine' in early 2016.",
    source: "https://knowyourmeme.com/memes/this-is-fine",
  },
  {
    id: "be-like-bill",
    example: "“Bill sees a spoiler. Bill doesn’t click. Be like Bill.”",
    name: "Be Like Bill",
    image: "https://i.imgflip.com/xh3me.jpg",
    viralDate: "2016-01-15",
    blurb:
      "A stick-figure 'Bill' modeling sensible behavior became a viral chain meme in early 2016.",
    source: "https://knowyourmeme.com/memes/be-like-bill",
  },
  {
    id: "squidward-window",
    example: "Staring out the window at everyone having fun without you.",
    name: "Squidward Looking Out the Window",
    image: "https://i.imgflip.com/145qvv.jpg",
    viralDate: "2016-03-15",
    blurb:
      "Squidward gazing wistfully out a window became a relatable-longing meme in 2016.",
    source: "https://knowyourmeme.com/memes/handsome-squidward-squidward-falls",
  },
  {
    id: "the-rock-driving",
    example: "Passenger: “You said you’d do the dishes.” Rock turns, alarmed: “…the dishes.”",
    name: "The Rock Driving",
    image: "https://i.imgflip.com/grr.jpg",
    viralDate: "2016-06-15",
    blurb:
      "A two-panel of The Rock turning to react became a question/answer format in mid-2016.",
    source: "https://knowyourmeme.com/memes/the-rock-driving",
  },
  {
    id: "daily-struggle",
    example: "Two buttons, sweating: “Reply now” vs. “Pretend I didn’t see it.”",
    name: "Two Buttons / Daily Struggle",
    image: "https://i.imgflip.com/1g8my4.jpg",
    viralDate: "2016-06-15",
    blurb:
      "The sweating man agonizing over two buttons took off as a decision meme in mid-2016.",
    source: "https://knowyourmeme.com/memes/daily-struggle",
  },
  {
    id: "math-lady",
    example: "Equations everywhere: “trying to split the bill with tip three ways.”",
    name: "Math Lady / Confused Lady",
    image: "https://i.imgflip.com/1c81c1.jpg",
    viralDate: "2016-06-15",
    blurb:
      "A Brazilian telenovela actress overlaid with math formulas became the confusion meme in 2016.",
    source: "https://knowyourmeme.com/memes/math-lady-confused-lady",
  },
  {
    id: "arthur-fist",
    example: "Clenched fist: “when the wifi drops right before the upload finishes.”",
    name: "Arthur Fist",
    image: "https://i.imgflip.com/1866qe.jpg",
    viralDate: "2016-08-15",
    blurb:
      "Arthur the aardvark's clenched fist became the icon of suppressed frustration in 2016.",
    source: "https://knowyourmeme.com/memes/arthurs-fist",
  },
  {
    id: "sad-pablo-escobar",
    example: "Waiting alone: “me refreshing my inbox for a reply that isn’t coming.”",
    name: "Sad Pablo Escobar (Waiting)",
    image: "https://i.imgflip.com/1c1uej.jpg",
    viralDate: "2016-09-15",
    blurb:
      "A lone, waiting Pablo from the Narcos era became a meme of restless boredom in 2016.",
    source: "https://knowyourmeme.com/memes/sad-pablo-escobar",
  },
  {
    id: "evil-kermit",
    example: "Me: “I should sleep early.” Hooded Kermit: “one more episode.”",
    name: "Evil Kermit",
    image: "https://i.imgflip.com/1e7ql7.jpg",
    viralDate: "2016-11-15",
    blurb:
      "Hooded 'Constantine' Kermit voicing your bad impulses ('me to me') went viral in late 2016.",
    source: "https://knowyourmeme.com/memes/evil-kermit",
  },
  {
    id: "roll-safe",
    example: "Taps temple: “Can’t fail the exam if you never take it.”",
    name: "Roll Safe (Think About It)",
    image: "https://i.imgflip.com/1h7in3.jpg",
    viralDate: "2017-01-15",
    blurb:
      "Kayode Ewumi tapping his temple became the 'can't fail if you don't try' meme in early 2017.",
    source: "https://knowyourmeme.com/memes/roll-safe",
  },
  {
    id: "trump-bill-signing",
    example: "Holding up the document: “I officially have no idea what I’m doing.”",
    name: "Trump Bill Signing",
    image: "https://i.imgflip.com/1ii4oc.jpg",
    viralDate: "2017-01-23",
    blurb:
      "Trump proudly holding up a freshly signed executive order in January 2017 became a blank-document caption template.",
    source: "https://knowyourmeme.com/memes/trumps-first-order-of-business",
  },
  {
    id: "left-exit-12",
    example: "Car swerving from “do it properly” to “hardcode it and move on.”",
    name: "Left Exit 12 Off Ramp",
    image: "https://i.imgflip.com/22bdq6.jpg",
    viralDate: "2017-02-15",
    blurb:
      "A car swerving onto an exit ramp became the go-to 'choosing the chaotic option' meme in 2017.",
    source: "https://knowyourmeme.com/memes/left-exit-12-off-ramp",
  },
  {
    id: "expanding-brain",
    example: "Small brain: “strong password” → glowing brain: “password123.”",
    name: "Expanding Brain",
    image: "https://i.imgflip.com/1jwhww.jpg",
    viralDate: "2017-02-15",
    blurb: "The glowing-brain escalation format spread rapidly in early 2017.",
    source: "https://knowyourmeme.com/memes/expanding-brain",
  },
  {
    id: "maury-lie-detector",
    example: "“‘I’ll start the diet Monday.’ That was a lie.”",
    name: "Maury Lie Detector",
    image: "https://i.imgflip.com/9iz9.jpg",
    viralDate: "2017-02-15",
    blurb:
      "Maury's 'that was a lie' reveal became the format for calling out obvious untruths in 2017.",
    source: "https://knowyourmeme.com/memes/the-lie-detector-determined-that-was-a-lie",
  },
  {
    id: "sleeping-shaq",
    example: "Asleep at “should I work out” / wide awake at “should I order pizza.”",
    name: "Sleeping Shaq",
    image: "https://i.imgflip.com/1nck6k.jpg",
    viralDate: "2017-03-15",
    blurb:
      "Shaq unbothered then hyped became the 'what I ignore vs. what excites me' meme in 2017.",
    source: "https://knowyourmeme.com/memes/sleeping-shaq",
  },
  {
    id: "friendship-ended",
    example: "“Friendship ended with Monday. Now Friday is my best friend.”",
    name: "Friendship Ended (with Mudasir)",
    image: "https://i.imgflip.com/29v4rt.jpg",
    viralDate: "2017-04-15",
    blurb:
      "A Facebook post declaring a new best friend became the 'friendship ended with X' meme in 2017.",
    source: "https://knowyourmeme.com/memes/friendship-ended-with-mudasir",
  },
  {
    id: "who-killed-hannibal",
    example: "*shoots* “Why would I delete the production database?” “I don’t know!”",
    name: "Who Killed Hannibal",
    image: "https://i.imgflip.com/28s2gu.jpg",
    viralDate: "2017-05-15",
    blurb:
      "Eric André shooting Hannibal then asking 'why?' became a self-sabotage meme in 2017.",
    source: "https://knowyourmeme.com/memes/who-killed-hannibal",
  },
  {
    id: "mocking-spongebob",
    example: "“i CaN’t WaIt To FiX tHe BuG i JuSt CrEaTeD.”",
    name: "Mocking SpongeBob",
    image: "https://i.imgflip.com/1otk96.jpg",
    viralDate: "2017-05-15",
    blurb:
      "AlTeRnAtInG cApS over a chicken-posed SpongeBob became peak mockery in mid-2017.",
    source: "https://knowyourmeme.com/memes/mocking-spongebob",
  },
  {
    id: "scroll-of-truth",
    example: "Reads the scroll: “you are the problem.” → “NOOOO!”",
    name: "The Scroll of Truth",
    image: "https://i.imgflip.com/21tqf4.jpg",
    viralDate: "2017-06-15",
    blurb:
      "A seeker finds a scroll, reads an unwelcome truth, and screams 'NO!' — viral mid-2017.",
    source: "https://knowyourmeme.com/memes/the-scroll-of-truth",
  },
  {
    id: "unsettled-tom",
    example: "Side-eye to camera: “when they say ‘we need to talk.’”",
    name: "Unsettled Tom",
    image: "https://i.imgflip.com/2wifvo.jpg",
    viralDate: "2017-06-15",
    blurb:
      "A side-eyeing Tom the cat became the face of quiet suspicion and discomfort in 2017.",
    source: "https://knowyourmeme.com/memes/unsettled-tom",
  },
  {
    id: "inhaling-seagull",
    example: "*inhales* “AAAAA” — about to belt the chorus of your favorite song.",
    name: "Inhaling Seagull",
    image: "https://i.imgflip.com/1w7ygt.jpg",
    viralDate: "2017-07-15",
    blurb:
      "A seagull caught mid-inhale, beak agape, became the 'about to belt out X' reaction meme around 2017.",
    source: "https://knowyourmeme.com/memes/inhaling-seagull",
  },
  {
    id: "running-away-balloon",
    example: "Reaching for the “productivity” balloon, held back by a weight labeled “one more scroll.”",
    name: "Running Away Balloon",
    image: "https://i.imgflip.com/261o3j.jpg",
    viralDate: "2017-08-15",
    blurb:
      "A person chasing a balloon held back by a weight became a 'what stops me' meme in 2017.",
    source: "https://knowyourmeme.com/memes/running-away-balloon",
  },
  {
    id: "distracted-boyfriend",
    example: "Boyfriend “me” eyeing “a shiny new side project,” girlfriend “the project I haven’t finished.”",
    name: "Distracted Boyfriend",
    image: "https://i.imgflip.com/1ur9b0.jpg",
    viralDate: "2017-08-15",
    blurb:
      "Antonio Guillem's stock photo became the definitive object-labeling meme in August 2017.",
    source: "https://knowyourmeme.com/memes/distracted-boyfriend",
  },
  {
    id: "gru-plan",
    example: "Board: “start the plan → work the plan → never finish the plan” — double-take on the last panel.",
    name: "Gru's Plan",
    image: "https://i.imgflip.com/26jxvz.jpg",
    viralDate: "2017-11-15",
    blurb:
      "The four-panel whiteboard from Despicable Me became a plan-gone-wrong meme in late 2017.",
    source: "https://knowyourmeme.com/memes/grus-plan",
  },
  {
    id: "pawn-stars",
    example: "“I’ll give you $5 for it.” “Best I can do is $5.”",
    name: "Pawn Stars (Best I Can Do)",
    image: "https://i.imgflip.com/19vcz0.jpg",
    viralDate: "2017-12-15",
    blurb:
      "Rick Harrison's lowball 'Best I can do is…' became a haggling meme in late 2017.",
    source: "https://knowyourmeme.com/memes/best-i-can-do-is",
  },
  {
    id: "pepe-silvia",
    example: "At the corkboard: “There’s no Pepe Silvia! Who keeps scheduling these meetings?!”",
    name: "Charlie Conspiracy (Pepe Silvia)",
    image: "https://i.imgflip.com/1itoun.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Charlie's red-string corkboard rant from It's Always Sunny became a conspiracy meme in 2018.",
    source: "https://knowyourmeme.com/memes/pepe-silvia",
  },
  {
    id: "change-my-mind",
    example: "Table sign: “Pineapple belongs on pizza. Change my mind.”",
    name: "Change My Mind",
    image: "https://i.imgflip.com/24y43o.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Steven Crowder's campus table sign became an editable hot-take template in early 2018.",
    source: "https://knowyourmeme.com/memes/change-my-mind-steven-crowder",
  },
  {
    id: "american-chopper",
    example: "Escalating shouting match: “Tabs!” / “Spaces!” / “TABS!”",
    name: "American Chopper Argument",
    image: "https://i.imgflip.com/2896ro.jpg",
    viralDate: "2018-04-15",
    blurb:
      "A five-panel shouting match from American Chopper became a debate meme in spring 2018.",
    source: "https://knowyourmeme.com/memes/american-chopper-argument",
  },
  {
    id: "blank-nut-button",
    example: "Hand slamming a button labeled “reply-all to the entire company.”",
    name: "Blank Nut Button",
    image: "https://i.imgflip.com/1yxkcp.jpg",
    viralDate: "2018-05-15",
    blurb:
      "A hand slamming a red button became the 'press for instant payoff' meme in 2018.",
    source: "https://knowyourmeme.com/memes/nut-button",
  },
  {
    id: "is-this-a-pigeon",
    example: "Gesturing at a butterfly: “Is this a productive day?” (it is not).",
    name: "Is This a Pigeon?",
    image: "https://i.imgflip.com/1o00in.jpg",
    viralDate: "2018-05-15",
    blurb:
      "An anime screenshot became the go-to misidentification meme in spring 2018.",
    source: "https://knowyourmeme.com/memes/is-this-a-pigeon",
  },
  {
    id: "monkey-puppet",
    example: "Side-eye to the camera right after saying something wrong in a meeting.",
    name: "Monkey Puppet (Awkward Look)",
    image: "https://i.imgflip.com/2gnnjh.jpg",
    viralDate: "2018-06-15",
    blurb:
      "A side-eyeing puppet from a Japanese kids' show became the awkward-glance meme in 2018.",
    source: "https://knowyourmeme.com/memes/awkward-look-monkey-puppet",
  },
  {
    id: "scooby-doo-mask-reveal",
    example: "Unmasking “my sudden motivation” — it was “a good night’s sleep” all along.",
    name: "Scooby-Doo Mask Reveal",
    image: "https://i.imgflip.com/2eeunw.jpg",
    viralDate: "2018-06-15",
    blurb:
      "The 'let's see who this really is' unmasking from Scooby-Doo became an exploitable for exposing X as Y around 2018.",
    source: "https://knowyourmeme.com/memes/lets-see-who-this-really-is",
  },
  {
    id: "spiderman-pointing",
    example: "Two Spideys pointing: “frontend dev” and “backend dev” blaming each other.",
    name: "Spider-Man Pointing at Spider-Man",
    image: "https://i.imgflip.com/1tkjq9.jpg",
    viralDate: "2018-07-15",
    blurb:
      "The 1967 cartoon's two Spideys pointing became the 'we're the same' meme in mid-2018.",
    source: "https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man",
  },
  {
    id: "flex-tape",
    example: "“Got a leak? *slaps tape* That’s a lot of damage!”",
    name: "Flex Tape (Phil Swift)",
    image: "https://i.imgflip.com/2reqtg.png",
    viralDate: "2018-07-15",
    blurb:
      "Phil Swift slapping Flex Tape on everything ('that's a lot of damage!') became a 2018 meme.",
    source: "https://knowyourmeme.com/memes/phil-swift-flex-tape",
  },
  {
    id: "hard-to-swallow-pills",
    example: "Pill bottle: “You’re not stuck in traffic. You are traffic.”",
    name: "Hard to Swallow Pills",
    image: "https://i.imgflip.com/271ps6.jpg",
    viralDate: "2018-07-15",
    blurb:
      "A pill bottle labeled with uncomfortable truths became a blunt-honesty meme in 2018.",
    source: "https://knowyourmeme.com/memes/hard-to-swallow-pills",
  },
  {
    id: "epic-handshake",
    example: "Two arms clasping — “iOS users” + “Android users” — united by “hating the other one.”",
    name: "Epic Handshake (Predator)",
    image: "https://i.imgflip.com/28j0te.jpg",
    viralDate: "2018-08-15",
    blurb:
      "The Predator forearm clasp became the 'two things united by a shared trait' meme in 2018.",
    source: "https://knowyourmeme.com/memes/epic-handshake",
  },
  {
    id: "car-salesman-slaps-roof",
    example: "“This bad boy can fit so many unread emails in it.”",
    name: "Car Salesman Slaps Roof",
    image: "https://i.imgflip.com/2d3al6.jpg",
    viralDate: "2018-09-15",
    blurb:
      "'This bad boy can fit so much X in it' — a salesman pitching a car — caught on in late 2018.",
    source: "https://knowyourmeme.com/memes/this-bad-boy-can-fit-so-much-in-it",
  },
  {
    id: "surprised-pikachu",
    example: "“Skipped leg day for months. *can’t run now.* :O”",
    name: "Surprised Pikachu",
    image: "https://i.imgflip.com/2kbn1e.jpg",
    viralDate: "2018-10-15",
    blurb:
      "Open-mouthed Pikachu became the face of feigned shock at obvious outcomes in late 2018.",
    source: "https://knowyourmeme.com/memes/surprised-pikachu",
  },
  {
    id: "uno-draw-25",
    example: "“Apologize for the typo” / *picks up 25 cards.*",
    name: "UNO Draw 25 Cards",
    image: "https://i.imgflip.com/3lmzyx.jpg",
    viralDate: "2018-12-15",
    blurb:
      "'Do X or draw 25' — refusing a simple task for a huge handful of cards — caught on in 2018.",
    source: "https://knowyourmeme.com/memes/uno-draw-25-cards",
  },
  {
    id: "tuxedo-pooh",
    example: "Plain Pooh: “I’m tired.” Tuxedo Pooh: “I require rest, posthaste.”",
    name: "Tuxedo Winnie the Pooh",
    image: "https://i.imgflip.com/2ybua0.png",
    viralDate: "2019-01-15",
    blurb:
      "Plain Pooh vs. fancy tuxedo Pooh became the 'classy way to say the same thing' meme in 2019.",
    source: "https://knowyourmeme.com/memes/tuxedo-winnie-the-pooh",
  },
  {
    id: "well-yes-but-actually-no",
    example: "“Did you test it?” “Well, yes… but actually no.”",
    name: "Well Yes, But Actually No",
    image: "https://i.imgflip.com/2tn11b.jpg",
    viralDate: "2019-01-15",
    blurb:
      "A flat-capped chimp's 'well yes, but actually no' became a contradiction meme in 2019.",
    source: "https://knowyourmeme.com/memes/well-yes-but-actually-no",
  },
  {
    id: "marked-safe-from",
    example: "“Marked safe from replying to that email today.”",
    name: "Marked Safe From X",
    image: "https://i.imgflip.com/2odckz.jpg",
    viralDate: "2019-01-15",
    blurb:
      "A parody of Facebook's Safety Check — 'marked safe from X' — hit its first viral wave in early 2019.",
    source: "https://knowyourmeme.com/memes/marked-safe-from-x",
  },
  {
    id: "three-headed-dragon",
    example: "Heads labeled “logic” and “reason,” plus a goofy one: “buying it anyway.”",
    name: "Three-Headed Dragon",
    image: "https://i.imgflip.com/33e92f.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A hydra with two scary heads and one goofy one became a 'left brain' meme in 2019.",
    source: "https://knowyourmeme.com/memes/ghidorah-three-heads",
  },
  {
    id: "clown-makeup",
    example: "“I’ll just check one notification” → full clown → “…two hours later.”",
    name: "Clown Applying Makeup",
    image: "https://i.imgflip.com/38el31.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A four-panel clown transformation tracked increasingly foolish reasoning in 2019.",
    source: "https://knowyourmeme.com/memes/clown-applying-makeup",
  },
  {
    id: "me-and-the-boys",
    example: "“Me and the boys at 3am raiding the fridge for snacks.”",
    name: "Me and the Boys",
    image: "https://i.imgflip.com/320xfw.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A Calvin & Hobbes-derived gang of grinning kids became the 'me and the boys' meme in 2019.",
    source: "https://knowyourmeme.com/memes/me-and-the-boys",
  },
  {
    id: "woman-yelling-cat",
    example: "Woman: “You said you’d be ready at 8!” Cat at the table: unbothered.",
    name: "Woman Yelling at a Cat",
    image: "https://i.imgflip.com/345v97.jpg",
    viralDate: "2019-05-15",
    blurb:
      "A Real Housewives still next to Smudge the cat became a two-panel classic in May 2019.",
    source: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat",
  },
  {
    id: "ight-imma-head-out",
    example: "The group chat goes silent → SpongeBob rising: “ight, imma head out.”",
    name: "SpongeBob: Ight Imma Head Out",
    image: "https://i.imgflip.com/392xtu.jpg",
    viralDate: "2019-05-15",
    blurb:
      "SpongeBob rising from a chair captioned 'ight imma head out' became a 2019 exit meme.",
    source: "https://knowyourmeme.com/memes/ight-imma-head-out",
  },
  {
    id: "stonks",
    example: "Buy high, sell low: “Stonks.”",
    name: "Stonks",
    image: "https://i.imgflip.com/3388rw.png",
    viralDate: "2019-06-15",
    blurb:
      "A 'Meme Man' before a rising stock chart misspelled 'stonks' became finance-fail shorthand in 2019.",
    source: "https://knowyourmeme.com/memes/stonks",
  },
  {
    id: "kombucha-girl",
    example: "First sip: disgust → reconsiders → “…actually, maybe.”",
    name: "Kombucha Girl",
    image: "https://i.imgflip.com/39osmx.png",
    viralDate: "2019-08-15",
    blurb:
      "Brittany Tomlinson's first-sip reaction to kombucha became the indecision meme in 2019.",
    source: "https://knowyourmeme.com/memes/kombucha-girl",
  },
  {
    id: "soldier-sleeping-child",
    example: "Child “me,” soldier “the deadline,” monster “the work I keep ignoring.”",
    name: "Soldier Protecting Sleeping Child",
    image: "https://i.imgflip.com/2tzo2k.jpg",
    viralDate: "2019-08-15",
    blurb:
      "A soldier shielding a sleeping child became a 'thing that protects me from a worse thing' meme.",
    source: "https://knowyourmeme.com/memes/soldier-protecting-sleeping-child",
  },
  {
    id: "you-guys-getting-paid",
    example: "“Wait… you guys are getting overtime?”",
    name: "You Guys Are Getting Paid?",
    image: "https://i.imgflip.com/2xscjb.png",
    viralDate: "2019-09-15",
    blurb:
      "The incredulous 'you guys are getting paid?' reaction became shorthand for doing unpaid work others got compensated for, in 2019.",
    source: "https://knowyourmeme.com/memes/you-guys-are-getting-paid",
  },
  {
    id: "all-my-homies-hate",
    example: "“F— Mondays. All my homies hate Mondays.”",
    name: "All My Homies Hate / Use",
    image: "https://i.imgflip.com/3kwur5.jpg",
    viralDate: "2019-09-15",
    blurb:
      "The 'F— X, all my homies hate X' snowclone over a group photo surged across Reddit and iFunny in 2019.",
    source: "https://knowyourmeme.com/memes/fuck-x-all-my-homies-use-y",
  },
  {
    id: "sure-grandma",
    example: "Newspaper: “I’ll wake up at 5am to work out.” “Sure, grandma, let’s get you to bed.”",
    name: "Sure Grandma, Let's Get You to Bed",
    image: "https://i.imgflip.com/4flche.jpg",
    viralDate: "2019-10-15",
    blurb:
      "A newspaper clipping dismissing grandma's ramblings became the 'sure, grandma' meme in 2019.",
    source: "https://knowyourmeme.com/memes/sure-grandma-lets-get-you-to-bed",
  },
  {
    id: "bernie-once-again-asking",
    example: "“I am once again asking you to fix the bug you said was already fixed.”",
    name: "Bernie: I Am Once Again Asking",
    image: "https://i.imgflip.com/3oevdk.jpg",
    viralDate: "2019-11-15",
    blurb:
      "Bernie Sanders's 'I am once again asking for your financial support' video became a 2019 template.",
    source: "https://knowyourmeme.com/memes/i-am-once-again-asking-for-your-financial-support",
  },
  {
    id: "buff-doge-cheems",
    example: "Buff Doge: “code I wrote in 2015” / Cheems: “code I write now.”",
    name: "Buff Doge vs. Cheems",
    image: "https://i.imgflip.com/43a45p.png",
    viralDate: "2020-01-15",
    blurb:
      "Muscular 'then' Doge vs. weak 'now' Cheems became the past-vs-present meme in early 2020.",
    source: "https://knowyourmeme.com/memes/swole-doge-vs-cheems",
  },
  {
    id: "same-picture",
    example: "“‘Working from home’ / ‘In a meeting’ — they’re the same picture.”",
    name: "They're the Same Picture (Pam)",
    image: "https://i.imgflip.com/2za3u1.jpg",
    viralDate: "2020-01-15",
    blurb:
      "Pam from The Office insisting two 'different' photos are identical became a 2020 staple.",
    source: "https://knowyourmeme.com/memes/corporate-needs-you-to-find-the-differences",
  },
  {
    id: "yes-chad",
    example: "Soyboy: “You can’t just push straight to main!” Chad: “Yes.”",
    name: "Soyboy vs. Yes Chad",
    image: "https://i.imgflip.com/3umnr3.jpg",
    viralDate: "2020-01-15",
    blurb:
      "The stoic blond 'Yes' Chad shrugging off a ranting soyboy became a confidence meme by 2020.",
    source: "https://knowyourmeme.com/memes/nordic-gamer-yes-chad",
  },
  {
    id: "grant-gustin-grave",
    example: "Peace sign beside a grave labeled “my New Year’s resolutions.”",
    name: "Grant Gustin Next to Oliver Queen's Grave",
    image: "https://i.imgflip.com/3nx72a.png",
    viralDate: "2020-01-28",
    blurb:
      "Grant Gustin throwing a peace sign by Oliver Queen's grave became an object-labeling meme after going viral in early 2020.",
    source: "https://knowyourmeme.com/memes/grant-gustin-next-to-oliver-queens-grave",
  },
  {
    id: "panik-kalm-panik",
    example: "“Exam tomorrow” (PANIK) / “I studied” (KALM) / “wrong subject” (PANIK).",
    name: "Panik Kalm Panik",
    image: "https://i.imgflip.com/3qqcim.png",
    viralDate: "2020-02-15",
    blurb:
      "A three-panel meme figure cycling panic → calm → panic took off in early 2020.",
    source: "https://knowyourmeme.com/memes/panik-kalm-panik",
  },
  {
    id: "anime-girl-terminator",
    example: "Girl “me” hiding under a desk “the deadline” from a Terminator labeled “Monday.”",
    name: "Anime Girl Hiding from a Terminator",
    image: "https://i.imgflip.com/3po4m7.jpg",
    viralDate: "2020-02-15",
    blurb:
      "Fan art of an anime girl cowering under a desk from a T-800 became an object-labeling format in February 2020.",
    source: "https://knowyourmeme.com/memes/anime-girl-hiding-from-a-terminator",
  },
  {
    id: "mr-incredible-mad",
    example: "Glaring: “when they say ‘quick question’ and it’s a 45-minute meeting.”",
    name: "Mr. Incredible Mad",
    image: "https://i.imgflip.com/39sjn7.png",
    viralDate: "2020-04-15",
    blurb:
      "A glaring Mr. Incredible captioned the moment a small annoyance tips you over the edge, ~2020.",
    source: "https://knowyourmeme.com/memes/mr-incredible-becoming-angry",
  },
  {
    id: "undertaker-aj-styles",
    example: "AJ (me) smug: “nailed the presentation” / Undertaker looming behind: “the Q&A.”",
    name: "Undertaker Standing Behind AJ Styles",
    image: "https://i.imgflip.com/3vfrmx.jpg",
    viralDate: "2020-04-15",
    blurb:
      "From WrestleMania 36's Boneyard Match, the Undertaker looming behind a smug AJ Styles became a 2020 object-label meme.",
    source: "https://knowyourmeme.com/memes/undertaker-standing-behind-aj-styles",
  },
  {
    id: "i-bet-hes-thinking",
    example: "“I bet he’s thinking about other women.” Him: “do plants get lonely?”",
    name: "I Bet He's Thinking About Other Women",
    image: "https://i.imgflip.com/1tl71a.jpg",
    viralDate: "2020-05-15",
    blurb:
      "A worried partner's 'I bet he's thinking about…' became a what's-he-really-thinking meme in 2020.",
    source: "https://knowyourmeme.com/memes/i-bet-hes-thinking-about-other-women",
  },
  {
    id: "laughing-leo",
    example: "Pointing and laughing at the screen: “finally, a relatable meme.”",
    name: "Laughing Leo (Django)",
    image: "https://i.imgflip.com/4acd7j.png",
    viralDate: "2020-06-15",
    blurb:
      "DiCaprio laughing and pointing from Django became a 'pointing at relatable content' meme.",
    source: "https://knowyourmeme.com/memes/laughing-leo",
  },
  {
    id: "communist-bugs-bunny",
    example: "“Your code? No.” Bugs Bunny: “Our code.”",
    name: "Communist Bugs Bunny",
    image: "https://i.imgflip.com/44eggm.png",
    viralDate: "2020-07-15",
    blurb:
      "Bugs Bunny declaring 'our' over a hammer-and-sickle became the 'no individual ownership' joke meme in 2020.",
    source: "https://knowyourmeme.com/memes/communist-bugs-bunny",
  },
  {
    id: "always-has-been",
    example: "Astronaut: “Wait, it’s all bugs?” Other: “Always has been.” *gun*",
    name: "Always Has Been (Among Us)",
    image: "https://i.imgflip.com/46e43q.png",
    viralDate: "2020-10-15",
    blurb:
      "The 'wait, it's all X? Always has been' astronaut format surged with Among Us in late 2020.",
    source: "https://knowyourmeme.com/memes/always-has-been",
  },
  {
    id: "they-dont-know",
    example: "Alone at the party: “they don’t know I rehearsed this whole conversation in the shower.”",
    name: "They Don't Know",
    image: "https://i.imgflip.com/4pn1an.png",
    viralDate: "2020-11-15",
    blurb:
      "A lonely partygoer thinking 'they don't know…' became a social-anxiety meme in late 2020.",
    source: "https://knowyourmeme.com/memes/they-dont-know",
  },
  {
    id: "giga-chad",
    example: "“Reads the documentation before asking. *GigaChad.*”",
    name: "Giga Chad",
    image: "https://i.imgflip.com/35bdwf.jpg",
    viralDate: "2021-06-15",
    blurb:
      "Ernest Khalimov's chiseled black-and-white portrait became the ultimate 'Chad' ideal by 2021.",
    source: "https://knowyourmeme.com/memes/gigachad",
  },
  {
    id: "gus-fring-not-the-same",
    example: "“I also drink coffee. We are not the same.”",
    name: "Gus Fring: We Are Not the Same",
    image: "https://i.imgflip.com/5o32tt.png",
    viralDate: "2021-07-15",
    blurb:
      "A composed Gus Fring captioned 'I am not the same as you' became a superiority meme in 2021.",
    source: "https://knowyourmeme.com/memes/we-are-not-the-same",
  },
  {
    id: "megamind-no-bitches",
    example: "Zoomed in on Megamind: “No tests? :(”",
    name: "Megamind (No Bitches?)",
    image: "https://i.imgflip.com/65939r.jpg",
    viralDate: "2021-08-15",
    blurb:
      "A zoomed Megamind captioned 'no bitches?' became a mocking-rejection meme in 2021.",
    source: "https://knowyourmeme.com/memes/no-bitches",
  },
  {
    id: "anakin-padme",
    example: "“I’ll refactor it later.” “…right?” *silence* “Right?!”",
    name: "Anakin & Padmé (4 Panel)",
    image: "https://i.imgflip.com/5c7lwq.png",
    viralDate: "2021-09-15",
    blurb:
      "'For the better, right?' — Padmé's hopeful smile fading to dread — became a 2021 format.",
    source: "https://knowyourmeme.com/memes/for-the-better-right",
  },
  {
    id: "trade-offer",
    example: "“Trade offer: I receive your snacks, you receive nothing.”",
    name: "Trade Offer",
    image: "https://i.imgflip.com/54hjww.jpg",
    viralDate: "2021-09-15",
    blurb:
      "The TikTok 'Here's a trade offer' format became a meme template in autumn 2021.",
    source: "https://knowyourmeme.com/memes/trade-offer",
  },
  {
    id: "squid-game",
    example: "Red Light, Green Light: “me freezing the second the boss walks by.”",
    name: "Squid Game (Red Light)",
    image: "https://i.imgflip.com/98qr33.jpg",
    viralDate: "2021-10-15",
    blurb:
      "Netflix's Squid Game became a global phenomenon and meme fountain in October 2021.",
    source: "https://knowyourmeme.com/memes/subcultures/squid-game",
  },
  {
    id: "bell-curve-midwit",
    example: "Low-IQ and genius both: “just restart it.” Midwit: a 200-word technical explanation.",
    name: "IQ Bell Curve (Midwit)",
    image: "https://i.imgflip.com/8tw3vb.png",
    viralDate: "2022-01-15",
    blurb:
      "The bell curve where the low-IQ and genius agree, mocking the 'midwit' in the middle, peaked in 2022.",
    source: "https://knowyourmeme.com/memes/iq-bell-curve-midwit",
  },
  {
    id: "will-smith-slap",
    example: "Slapping over “autocorrect changing my word for the third time.”",
    name: "Will Smith Slapping Chris Rock",
    image: "https://i.imgflip.com/6a9d61.png",
    viralDate: "2022-03-15",
    blurb:
      "Will Smith slapping Chris Rock at the Oscars on March 27, 2022 instantly became a meme template.",
    source: "https://knowyourmeme.com/memes/events/will-smith-slapping-chris-rock",
  },
  {
    id: "two-guys-on-a-bus",
    example: "Happy guy at the view: “pushes to main on Friday.” Sad guy at the wall: “maintains it.”",
    name: "Two Guys on a Bus",
    image: "https://i.imgflip.com/5v6gwj.jpg",
    viralDate: "2022-06-15",
    blurb:
      "A painting of two bus riders — one facing a wall, one a view — became an outlook meme in 2022.",
    source: "https://knowyourmeme.com/memes/two-guys-on-a-bus",
  },
  {
    id: "corn-kid",
    example: "“It’s got the juice. I can’t imagine a more beautiful thing — it’s CORN.”",
    name: "It's Corn (Corn Kid)",
    image: "https://i.imgflip.com/6syaus.jpg",
    viralDate: "2022-08-15",
    blurb:
      "Tariq, the 'Corn Kid,' gushing about corn in a Recess Therapy clip became a viral song and meme in August 2022.",
    source: "https://knowyourmeme.com/memes/corn-kid",
  },
  {
    id: "megamind-peeking",
    example: "Peeking around the corner: “no way you actually replied-all to the whole company.”",
    name: "Megamind Peeking",
    image: "https://i.imgflip.com/64sz4u.png",
    viralDate: "2022-09-15",
    blurb:
      "Megamind peeking around a corner became a 'no way you actually did X' reaction meme in 2022.",
    source: "https://knowyourmeme.com/memes/megamind-peeking-you-wouldnt-get-hit-by-the-train-if-you-stayed-on-the-bench",
  },
  {
    id: "wednesday-dance",
    example: "The jerky goth dance captioned “me vibing the second everyone leaves the office.”",
    name: "Wednesday Addams Dance",
    image: "https://i.imgflip.com/73z99t.jpg",
    viralDate: "2022-11-15",
    blurb:
      "Jenna Ortega's jerky goth dance in Netflix's Wednesday sparked a huge TikTok recreation trend in November 2022.",
    source: "https://knowyourmeme.com/memes/wednesday-dance-the-addams-family",
  },
  {
    id: "john-pork",
    example: "Incoming call: “John Pork is calling…” — do you answer?",
    name: "John Pork Is Calling",
    image: "https://i.imgflip.com/7ju95g.png",
    viralDate: "2023-03-15",
    blurb:
      "A pig-headed man in a selfie, 'John Pork,' fueled a surreal 'answer the call?' meme wave in early 2023.",
    source: "https://knowyourmeme.com/memes/john-pork",
  },
  {
    id: "grimace-shake",
    example: "“Trying the Grimace shake… *cut to me on the floor.*”",
    name: "Grimace Shake",
    image: "https://i.imgflip.com/7qzqt6.jpg",
    viralDate: "2023-06-15",
    blurb:
      "McDonald's purple Grimace birthday shake spawned a faux-horror 'drink it then collapse' TikTok trend in June 2023.",
    source: "https://knowyourmeme.com/memes/grimace-shake-trend",
  },
  {
    id: "absolute-cinema",
    example: "Scorsese, arms raised: “that season finale? Absolute cinema.”",
    name: "Absolute Cinema",
    image: "https://i.imgflip.com/8d317n.png",
    viralDate: "2024-05-15",
    blurb:
      "A black-and-white Martin Scorsese raising his arms, captioned 'absolute cinema,' spread in 2024.",
    source: "https://knowyourmeme.com/memes/absolute-cinema",
  },
  {
    id: "hawk-tuah",
    example: "Dropped as the punchline soundbite to any cheeky innuendo setup.",
    name: "Hawk Tuah",
    image: "https://i.imgflip.com/8uh5gc.png",
    viralDate: "2024-06-15",
    blurb:
      "A street-interview clip in June 2024 turned its 'hawk tuah' soundbite into one of the year's biggest viral catchphrases.",
    source: "https://knowyourmeme.com/memes/hawk-tuah",
  },
  {
    id: "moo-deng",
    example: "“Moo Deng energy: chaotic, slippery, refuses to cooperate — that’s me before coffee.”",
    name: "Moo Deng",
    image: "https://i.imgflip.com/93qc5f.png",
    viralDate: "2024-09-15",
    blurb:
      "Moo Deng, a pygmy hippo at a Thai zoo, became the internet's favorite chaotic baby animal in September 2024.",
    source: "https://knowyourmeme.com/memes/moo-deng-the-baby-hippo",
  },
  {
    id: "chill-guy",
    example: "Shrugging dog: “Failed the exam? Eh. Just a chill guy.”",
    name: "Just a Chill Guy",
    image: "https://i.imgflip.com/9axcnp.jpg",
    viralDate: "2024-11-15",
    blurb:
      "A nonchalant cartoon dog with his hands in his pockets — 'just a chill guy' — exploded across TikTok in November 2024.",
    source: "https://knowyourmeme.com/memes/just-a-chill-guy-my-new-character",
  },
];
