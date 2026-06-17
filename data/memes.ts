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
    example: "Slapped onto photos of any unfolding catastrophe — a burnt dinner, a market crash — with Zoé smirking in front.",
    name: "Disaster Girl",
    image: "https://i.imgflip.com/23ls.jpg",
    viralDate: "2008-01-15",
    blurb:
      "Zoé Roth's smirk in front of a house fire (photo 2005) spread as a reaction meme through 2007–08.",
    source: "https://knowyourmeme.com/memes/disaster-girl",
  },
  {
    id: "yo-dawg",
    example: "“Yo dawg, I heard you like cars, so we put a car in your car so you can drive while you drive.”",
    name: "Yo Dawg (Xzibit)",
    image: "https://i.imgflip.com/26hg.jpg",
    viralDate: "2009-01-15",
    blurb:
      "The 'Yo dawg, I heard you like X' recursion format, built on Xzibit and Pimp My Ride, peaked around 2009.",
    source: "https://knowyourmeme.com/memes/xzibit-yo-dawg",
  },
  {
    id: "batman-slapping-robin",
    example: "Robin starts to say something dumb; Batman’s slap cuts him off mid-sentence.",
    name: "Batman Slapping Robin (My Parents Are Dead)",
    image: "https://i.imgflip.com/9ehk.jpg",
    viralDate: "2009-11-15",
    blurb:
      "A 1965 comic panel of Batman slapping Robin became an editable speech-bubble macro once a generator launched in 2009.",
    source: "https://knowyourmeme.com/memes/my-parents-are-dead-batman-slapping-robin",
  },
  {
    id: "x-all-the-y",
    example: "“Clean ALL the things!” — manic over-enthusiasm for tackling a giant to-do list.",
    name: "X All the Y",
    image: "https://i.imgflip.com/1bh9.jpg",
    viralDate: "2010-06-15",
    blurb:
      "Allie Brosh's 'Clean ALL the things!' drawing spawned the manic 'X all the Y' format in 2010.",
    source: "https://knowyourmeme.com/memes/x-all-the-things",
  },
  {
    id: "too-damn-high",
    example: "“The rent is too damn high!” — McMillan’s debate line slapped on anything overpriced.",
    name: "The Rent Is Too Damn High",
    image: "https://i.imgflip.com/1bik.jpg",
    viralDate: "2010-10-15",
    blurb:
      "Jimmy McMillan's 2010 NY debate line became the 'X is too damn high' template overnight.",
    source: "https://knowyourmeme.com/memes/the-rent-is-too-damn-high",
  },
  {
    id: "one-does-not-simply",
    example: "“One does not simply walk into Mordor.” — warning that a task is harder than it sounds.",
    name: "One Does Not Simply",
    image: "https://i.imgflip.com/1bij.jpg",
    viralDate: "2011-01-15",
    blurb:
      "Boromir's 'One does not simply walk into Mordor' became a top advice-animal format in 2011.",
    source: "https://knowyourmeme.com/memes/one-does-not-simply-walk-into-mordor",
  },
  {
    id: "scumbag-steve",
    example: "“Throws a party at your place / posts the damage on your wall.” — captioning a jerk move.",
    name: "Scumbag Steve",
    image: "https://i.imgflip.com/1bgy.jpg",
    viralDate: "2011-01-15",
    blurb:
      "A backwards-cap teen in a doorway became the face of jerk behavior in early 2011.",
    source: "https://knowyourmeme.com/memes/scumbag-steve",
  },
  {
    id: "futurama-fry",
    example: "“Not sure if genuinely nice / or just being sarcastic.” — squinting at an ambiguous situation.",
    name: "Futurama Fry (Not Sure If)",
    image: "https://i.imgflip.com/1bgw.jpg",
    viralDate: "2011-02-15",
    blurb:
      "Squinting Fry powered the 'Not sure if X or just Y' format across Reddit in 2011.",
    source: "https://knowyourmeme.com/memes/futurama-fry-not-sure-if",
  },
  {
    id: "ancient-aliens",
    example: "“I’m not saying it was aliens… but it was aliens.” — Tsoukalos hand-waving any mystery.",
    name: "Ancient Aliens (Giorgio)",
    image: "https://i.imgflip.com/26am.jpg",
    viralDate: "2011-03-15",
    blurb:
      "Giorgio Tsoukalos's 'I'm not saying it was aliens, but… aliens' became a 2011 staple.",
    source: "https://knowyourmeme.com/memes/ancient-aliens",
  },
  {
    id: "most-interesting-man",
    example: "“I don’t always drink beer, but when I do, I prefer Dos Equis. Stay thirsty, my friends.”",
    name: "The Most Interesting Man in the World",
    image: "https://i.imgflip.com/1bh8.jpg",
    viralDate: "2011-03-15",
    blurb:
      "The Dos Equis pitchman's 'I don't always X, but when I do…' became a 2011 macro classic.",
    source: "https://knowyourmeme.com/memes/the-most-interesting-man-in-the-world",
  },
  {
    id: "success-kid",
    example: "Fist-clench baby over “Woke up before my alarm and felt amazing.” — a small victory.",
    name: "Success Kid",
    image: "https://i.imgflip.com/1bhk.jpg",
    viralDate: "2011-04-15",
    blurb:
      "A fist-clenching baby (photo 2007) became the face of small victories as a macro in 2011.",
    source: "https://knowyourmeme.com/memes/success-kid-i-hate-sandcastles",
  },
  {
    id: "y-u-no",
    example: "“Mom, Y U NO understand text messages?!” — exasperation at someone or something.",
    name: "Y U No",
    image: "https://i.imgflip.com/1bh3.jpg",
    viralDate: "2011-05-15",
    blurb:
      "A stick-figure 'Y U NO do X?!' rage face spread across forums in 2011.",
    source: "https://knowyourmeme.com/memes/y-u-no-guy",
  },
  {
    id: "philosoraptor",
    example: "“If you’re waiting for the waiter, aren’t you the waiter?” — a pondering shower-thought.",
    name: "Philosoraptor",
    image: "https://i.imgflip.com/1bgs.jpg",
    viralDate: "2011-06-15",
    blurb:
      "A pondering velociraptor became the vessel for faux-deep questions, peaking around 2011.",
    source: "https://knowyourmeme.com/memes/philosoraptor",
  },
  {
    id: "good-guy-greg",
    example: "“You drunk-text him / he pretends he never saw it.” — praising a considerate friend.",
    name: "Good Guy Greg",
    image: "https://i.imgflip.com/1bgx.jpg",
    viralDate: "2011-08-15",
    blurb:
      "A smiling smoker became the patron saint of considerate behavior in 2011.",
    source: "https://knowyourmeme.com/memes/good-guy-greg",
  },
  {
    id: "hide-the-pain-harold",
    example: "Harold’s strained smile over “Everything is going great.” — masking quiet suffering.",
    name: "Hide the Pain Harold",
    image: "https://i.imgflip.com/gk5el.jpg",
    viralDate: "2011-09-15",
    blurb:
      "Stock-photo model András Arató's strained smile became the face of concealed pain around 2011.",
    source: "https://knowyourmeme.com/memes/hide-the-pain-harold",
  },
  {
    id: "socially-awkward-penguin",
    example: "“Says ‘you too’ when the waiter says ‘enjoy your meal.’” — a relatable social fumble.",
    name: "Socially Awkward Penguin",
    image: "https://i.imgflip.com/1bio.jpg",
    viralDate: "2011-09-15",
    blurb:
      "A flustered penguin on a blue diamond captioned everyday social mishaps from 2011.",
    source: "https://knowyourmeme.com/memes/socially-awkward-penguin",
  },
  {
    id: "first-world-problems",
    example: "Crying woman over “My house is so big the Wi-Fi won’t reach every room.”",
    name: "First World Problems",
    image: "https://i.imgflip.com/1bhf.jpg",
    viralDate: "2011-10-15",
    blurb:
      "A crying woman fronted ironic complaints about trivial 'hardships' from late 2011.",
    source: "https://knowyourmeme.com/memes/first-world-problems",
  },
  {
    id: "x-everywhere",
    example: "Buzz to Woody: “Spoilers — spoilers everywhere.”",
    name: "X, X Everywhere (Buzz Lightyear)",
    image: "https://i.imgflip.com/1ihzfe.jpg",
    viralDate: "2012-01-15",
    blurb:
      "Buzz telling Woody 'X, X everywhere' took off as an observation format in 2012.",
    source: "https://knowyourmeme.com/memes/x-x-everywhere",
  },
  {
    id: "brace-yourselves",
    example: "“Brace yourselves — the in-laws are coming.” (Ned Stark, Winter Is Coming format.)",
    name: "Brace Yourselves (X Is Coming)",
    image: "https://i.imgflip.com/1bhm.jpg",
    viralDate: "2012-01-15",
    blurb:
      "Ned Stark's 'Brace yourselves, X is coming' became a Game of Thrones macro in 2012.",
    source: "https://knowyourmeme.com/memes/brace-yourselves-winter-is-coming",
  },
  {
    id: "bad-luck-brian",
    example: "“Tries to look cool / trips in front of everyone.” — Brian’s face over relentless bad luck.",
    name: "Bad Luck Brian",
    image: "https://i.imgflip.com/1bip.jpg",
    viralDate: "2012-01-15",
    blurb:
      "A hapless yearbook portrait became the face of catastrophic misfortune in early 2012.",
    source: "https://knowyourmeme.com/memes/bad-luck-brian",
  },
  {
    id: "matrix-morpheus",
    example: "“What if I told you… you’ve been pronouncing it wrong this whole time?”",
    name: "Matrix Morpheus (What If I Told You)",
    image: "https://i.imgflip.com/25w3.jpg",
    viralDate: "2012-02-15",
    blurb:
      "Morpheus's 'What if I told you…' became a know-it-all reveal format in 2012.",
    source: "https://knowyourmeme.com/memes/matrix-morpheus",
  },
  {
    id: "ermahgerd",
    example: "“ERMAHGERD! BERKS!” — a girl gushing over her favorite Goosebumps books.",
    name: "Ermahgerd",
    image: "https://i.imgflip.com/26ae.jpg",
    viralDate: "2012-03-15",
    blurb:
      "A retainer-wearing girl clutching Goosebumps books birthed the 'ERMAHGERD' phonetic meme in 2012.",
    source: "https://knowyourmeme.com/memes/ermahgerd",
  },
  {
    id: "confession-bear",
    example: "“I still sleep with a nightlight and I’m 27.” — an anonymous guilty admission.",
    name: "Confession Bear",
    image: "https://i.imgflip.com/25wb.jpg",
    viralDate: "2012-03-15",
    blurb:
      "A bear resting its head became the vessel for guilty confessions on Reddit in 2012.",
    source: "https://knowyourmeme.com/memes/confession-bear",
  },
  {
    id: "skeptical-third-world-kid",
    example: "“So you’re telling me… you’re mad your food took ten whole minutes?”",
    name: "Third World Skeptical Kid",
    image: "https://i.imgflip.com/265k.jpg",
    viralDate: "2012-04-15",
    blurb:
      "A squinting kid became the face of skeptical 'so you're telling me…' captions in 2012.",
    source: "https://knowyourmeme.com/memes/skeptical-third-world-kid",
  },
  {
    id: "10-guy",
    example: "“What if dreams are just… the loading screen for tomorrow?” — stoner non-logic.",
    name: "10 Guy (Stoner Stanley)",
    image: "https://i.imgflip.com/269s.jpg",
    viralDate: "2012-04-15",
    blurb:
      "A wide-eyed, very high partygoer became the face of stoned non-logic in 2012.",
    source: "https://knowyourmeme.com/memes/10-guy",
  },
  {
    id: "grandma-finds-internet",
    example: "“So this little box / holds the whole internet?” — grandma baffled by tech.",
    name: "Grandma Finds the Internet",
    image: "https://i.imgflip.com/1bhw.jpg",
    viralDate: "2012-05-15",
    blurb:
      "A bewildered grandmother at a computer fronted clueless-internet jokes in 2012.",
    source: "https://knowyourmeme.com/memes/grandma-finds-the-internet",
  },
  {
    id: "skeptical-baby",
    example: "Baby’s side-eye over “So you ‘read the whole thing’ in two minutes?”",
    name: "Skeptical Baby",
    image: "https://i.imgflip.com/26hb.jpg",
    viralDate: "2012-05-15",
    blurb:
      "A squinting baby's side-eye became shorthand for doubt and disbelief in 2012.",
    source: "https://knowyourmeme.com/memes/skeptical-baby",
  },
  {
    id: "overly-attached-girlfriend",
    example: "“We’ve been dating an hour — why is your phone face-down?” — clingy obsession.",
    name: "Overly Attached Girlfriend",
    image: "https://i.imgflip.com/25w8.jpg",
    viralDate: "2012-06-15",
    blurb:
      "Laina Morris's unblinking stare became the face of clingy obsession in mid-2012.",
    source: "https://knowyourmeme.com/memes/overly-attached-girlfriend",
  },
  {
    id: "aint-nobody-got-time",
    example: "“Cold? Who got time for that? Ain’t nobody got time for that!” — Sweet Brown’s quip.",
    name: "Ain't Nobody Got Time for That",
    image: "https://i.imgflip.com/9hhr.jpg",
    viralDate: "2012-10-15",
    blurb:
      "Sweet Brown's news-interview quip became a viral catchphrase and macro in late 2012.",
    source: "https://knowyourmeme.com/memes/aint-nobody-got-time-for-that-sweet-brown",
  },
  {
    id: "bike-fall",
    example: "A cyclist jamming a stick into his own spokes — “me ruining a good thing for no reason.”",
    name: "Bike Fall (Baton Roue)",
    image: "https://i.imgflip.com/1b42wl.jpg",
    viralDate: "2012-10-15",
    blurb:
      "A cyclist jamming a stick into his own front wheel — Corentin Penloup's comic — spread as a self-sabotage meme via Reddit in 2012.",
    source: "https://knowyourmeme.com/memes/baton-roue",
  },
  {
    id: "conspiracy-keanu",
    example: "“What if the people who make ‘out of order’ signs are the ones breaking the machines?”",
    name: "Conspiracy Keanu",
    image: "https://i.imgflip.com/1bin.jpg",
    viralDate: "2012-11-15",
    blurb:
      "A wide-eyed Keanu Reeves fronted mind-blown 'what if…' conspiracy musings in 2012.",
    source: "https://knowyourmeme.com/memes/conspiracy-keanu",
  },
  {
    id: "grumpy-cat",
    example: "“They told me to have a good day. So I went home.” — Tardar Sauce hating everything.",
    name: "Grumpy Cat",
    image: "https://i.imgflip.com/8p0a.jpg",
    viralDate: "2012-12-15",
    blurb:
      "Tardar Sauce's permanent scowl made her the internet's mascot of negativity in late 2012.",
    source: "https://knowyourmeme.com/memes/grumpy-cat",
  },
  {
    id: "oprah-you-get-a",
    example: "“You get a car! And YOU get a car! Everybody gets a car!”",
    name: "Oprah You Get A",
    image: "https://i.imgflip.com/gtj5t.jpg",
    viralDate: "2013-01-15",
    blurb:
      "Oprah's giveaway 'You get an X! Everybody gets an X!' became a reaction template by 2013.",
    source: "https://knowyourmeme.com/memes/oprahs-favorite-things",
  },
  {
    id: "sudden-clarity-clarence",
    example: "Wide-eyed at a party: “Wait… ‘the’ and ‘there’ aren’t the same word.”",
    name: "Sudden Clarity Clarence",
    image: "https://i.imgflip.com/25w4.jpg",
    viralDate: "2013-01-15",
    blurb:
      "A party-goer's wide-eyed epiphany became the face of sudden realizations in 2013.",
    source: "https://knowyourmeme.com/memes/sudden-clarity-clarence",
  },
  {
    id: "leonardo-cheers",
    example: "Gatsby Leo raising a glass at the camera — toasting anyone who nails a point.",
    name: "Leonardo DiCaprio Cheers",
    image: "https://i.imgflip.com/39t1o.jpg",
    viralDate: "2013-05-15",
    blurb:
      "DiCaprio raising a glass in The Great Gatsby became a knowing toast meme in 2013.",
    source: "https://knowyourmeme.com/memes/leonardo-dicaprios-cheers",
  },
  {
    id: "im-the-captain-now",
    example: "“Look at me. Look at me. I’m the captain now.”",
    name: "I'm the Captain Now",
    image: "https://i.imgflip.com/hlmst.jpg",
    viralDate: "2013-11-15",
    blurb:
      "Barkhad Abdi's 'Look at me — I'm the captain now' from Captain Phillips became a 2013 line.",
    source: "https://knowyourmeme.com/memes/look-at-me-im-the-captain-now",
  },
  {
    id: "yall-got-any-more",
    example: "Tyrone Biggums twitching: “Y’all got any more of them… holiday cookies?”",
    name: "Y'all Got Any More of...",
    image: "https://i.imgflip.com/21uy0f.jpg",
    viralDate: "2013-12-15",
    blurb:
      "Dave Chappelle's Tyrone Biggums fronted the craving-for-more 'y'all got any more of…' macro, breaking out in late 2013.",
    source: "https://knowyourmeme.com/memes/yall-got-anymore-of-tyrone-biggums",
  },
  {
    id: "but-thats-none-of-my-business",
    example: "Kermit sips tea: “Maybe don’t post it if you don’t want talk. But that’s none of my business.”",
    name: "But That's None of My Business",
    image: "https://i.imgflip.com/9sw43.jpg",
    viralDate: "2014-06-15",
    blurb:
      "Kermit sipping Lipton tea became the passive-aggressive shade meme in mid-2014.",
    source: "https://knowyourmeme.com/memes/but-thats-none-of-my-business",
  },
  {
    id: "waiting-skeleton",
    example: "A skeleton still at the table: “Waiting for the friend who said ‘omw’ an hour ago.”",
    name: "Waiting Skeleton",
    image: "https://i.imgflip.com/2fm6x.jpg",
    viralDate: "2015-01-15",
    blurb:
      "A skeleton slumped 'still waiting' became shorthand for long waits around 2015.",
    source: "https://knowyourmeme.com/memes/waiting-skeleton",
  },
  {
    id: "boardroom-suggestion",
    example: "Boss: “How do we go viral?” Guy: “Make good content.” *hurled out the window*",
    name: "Boardroom Meeting Suggestion",
    image: "https://i.imgflip.com/m78d.jpg",
    viralDate: "2015-09-15",
    blurb:
      "The 'good idea / better idea / *thrown out window*' boardroom format spread in 2015.",
    source: "https://knowyourmeme.com/memes/boardroom-meeting-suggestion",
  },
  {
    id: "drakeposting",
    example: "Drake waves off “calling first,” nods approvingly to “just texting instead.”",
    name: "Drakeposting",
    image: "https://i.imgflip.com/30b1gx.jpg",
    viralDate: "2015-12-15",
    blurb:
      "Drake's 'Hotline Bling' video gave us the no/yes preference format in late 2015.",
    source: "https://knowyourmeme.com/memes/drakeposting",
  },
  {
    id: "this-is-fine",
    example: "Dog in a burning room sipping coffee: “This is fine.” — denial as everything collapses.",
    name: "This Is Fine",
    image: "https://i.imgflip.com/wxica.jpg",
    viralDate: "2016-01-15",
    blurb:
      "KC Green's 2013 'On Fire' comic exploded into the reaction meme 'This is fine' in early 2016.",
    source: "https://knowyourmeme.com/memes/this-is-fine",
  },
  {
    id: "be-like-bill",
    example: "“Bill sees a spoiler. Bill doesn’t click. Bill is smart. Be like Bill.”",
    name: "Be Like Bill",
    image: "https://i.imgflip.com/xh3me.jpg",
    viralDate: "2016-01-15",
    blurb:
      "A stick-figure 'Bill' modeling sensible behavior became a viral chain meme in early 2016.",
    source: "https://knowyourmeme.com/memes/be-like-bill",
  },
  {
    id: "squidward-window",
    example: "Squidward gazing out at the neighbors enjoying a night he’s missing.",
    name: "Squidward Looking Out the Window",
    image: "https://i.imgflip.com/145qvv.jpg",
    viralDate: "2016-03-15",
    blurb:
      "Squidward gazing wistfully out a window became a relatable-longing meme in 2016.",
    source: "https://knowyourmeme.com/memes/handsome-squidward-squidward-falls",
  },
  {
    id: "the-rock-driving",
    example: "Passenger: “The party’s cancelled.” The Rock turns, betrayed: “…cancelled?”",
    name: "The Rock Driving",
    image: "https://i.imgflip.com/grr.jpg",
    viralDate: "2016-06-15",
    blurb:
      "A two-panel of The Rock turning to react became a question/answer format in mid-2016.",
    source: "https://knowyourmeme.com/memes/the-rock-driving",
  },
  {
    id: "daily-struggle",
    example: "Sweating over two buttons: “Stay in bed” vs. “Actually do something today.”",
    name: "Two Buttons / Daily Struggle",
    image: "https://i.imgflip.com/1g8my4.jpg",
    viralDate: "2016-06-15",
    blurb:
      "The sweating man agonizing over two buttons took off as a decision meme in mid-2016.",
    source: "https://knowyourmeme.com/memes/daily-struggle",
  },
  {
    id: "math-lady",
    example: "Confused woman with floating equations: “trying to work out if I can afford this.”",
    name: "Math Lady / Confused Lady",
    image: "https://i.imgflip.com/1c81c1.jpg",
    viralDate: "2016-06-15",
    blurb:
      "A Brazilian telenovela actress overlaid with math formulas became the confusion meme in 2016.",
    source: "https://knowyourmeme.com/memes/math-lady-confused-lady",
  },
  {
    id: "arthur-fist",
    example: "Arthur’s trembling fist: “when someone spoils the episode you were about to watch.”",
    name: "Arthur Fist",
    image: "https://i.imgflip.com/1866qe.jpg",
    viralDate: "2016-08-15",
    blurb:
      "Arthur the aardvark's clenched fist became the icon of suppressed frustration in 2016.",
    source: "https://knowyourmeme.com/memes/arthurs-fist",
  },
  {
    id: "sad-pablo-escobar",
    example: "Pablo waiting alone — “me, sitting by the phone after a bad date.”",
    name: "Sad Pablo Escobar (Waiting)",
    image: "https://i.imgflip.com/1c1uej.jpg",
    viralDate: "2016-09-15",
    blurb:
      "A lone, waiting Pablo from the Narcos era became a meme of restless boredom in 2016.",
    source: "https://knowyourmeme.com/memes/sad-pablo-escobar",
  },
  {
    id: "evil-kermit",
    example: "Me: “I should save money.” Hooded Kermit: “buy the whole thing.”",
    name: "Evil Kermit",
    image: "https://i.imgflip.com/1e7ql7.jpg",
    viralDate: "2016-11-15",
    blurb:
      "Hooded 'Constantine' Kermit voicing your bad impulses ('me to me') went viral in late 2016.",
    source: "https://knowyourmeme.com/memes/evil-kermit",
  },
  {
    id: "roll-safe",
    example: "Taps temple: “You can’t lose your keys if you never leave the house.”",
    name: "Roll Safe (Think About It)",
    image: "https://i.imgflip.com/1h7in3.jpg",
    viralDate: "2017-01-15",
    blurb:
      "Kayode Ewumi tapping his temple became the 'can't fail if you don't try' meme in early 2017.",
    source: "https://knowyourmeme.com/memes/roll-safe",
  },
  {
    id: "trump-bill-signing",
    example: "Trump holding up the signed page, captioned with whatever absurd ‘order’ fits the joke.",
    name: "Trump Bill Signing",
    image: "https://i.imgflip.com/1ii4oc.jpg",
    viralDate: "2017-01-23",
    blurb:
      "Trump proudly holding up a freshly signed executive order in January 2017 became a blank-document caption template.",
    source: "https://knowyourmeme.com/memes/trumps-first-order-of-business",
  },
  {
    id: "left-exit-12",
    example: "Car swerving hard onto the ramp marked “staying up till 3am” instead of “going to bed.”",
    name: "Left Exit 12 Off Ramp",
    image: "https://i.imgflip.com/22bdq6.jpg",
    viralDate: "2017-02-15",
    blurb:
      "A car swerving onto an exit ramp became the go-to 'choosing the chaotic option' meme in 2017.",
    source: "https://knowyourmeme.com/memes/left-exit-12-off-ramp",
  },
  {
    id: "expanding-brain",
    example: "Glowing-brain tiers escalating a simple idea into something needlessly galaxy-brained.",
    name: "Expanding Brain",
    image: "https://i.imgflip.com/1jwhww.jpg",
    viralDate: "2017-02-15",
    blurb: "The glowing-brain escalation format spread rapidly in early 2017.",
    source: "https://knowyourmeme.com/memes/expanding-brain",
  },
  {
    id: "maury-lie-detector",
    example: "“You said you were ‘five minutes away.’ The lie detector determined that was a lie.”",
    name: "Maury Lie Detector",
    image: "https://i.imgflip.com/9iz9.jpg",
    viralDate: "2017-02-15",
    blurb:
      "Maury's 'that was a lie' reveal became the format for calling out obvious untruths in 2017.",
    source: "https://knowyourmeme.com/memes/the-lie-detector-determined-that-was-a-lie",
  },
  {
    id: "sleeping-shaq",
    example: "Shaq asleep through “folding the laundry,” bolt awake for “snack at midnight.”",
    name: "Sleeping Shaq",
    image: "https://i.imgflip.com/1nck6k.jpg",
    viralDate: "2017-03-15",
    blurb:
      "Shaq unbothered then hyped became the 'what I ignore vs. what excites me' meme in 2017.",
    source: "https://knowyourmeme.com/memes/sleeping-shaq",
  },
  {
    id: "friendship-ended",
    example: "“Friendship ended with summer. Now autumn is my best friend.”",
    name: "Friendship Ended (with Mudasir)",
    image: "https://i.imgflip.com/29v4rt.jpg",
    viralDate: "2017-04-15",
    blurb:
      "A Facebook post declaring a new best friend became the 'friendship ended with X' meme in 2017.",
    source: "https://knowyourmeme.com/memes/friendship-ended-with-mudasir",
  },
  {
    id: "who-killed-hannibal",
    example: "Eric André shoots, then asks: “Why’d you eat the last slice?” — blaming yourself.",
    name: "Who Killed Hannibal",
    image: "https://i.imgflip.com/28s2gu.jpg",
    viralDate: "2017-05-15",
    blurb:
      "Eric André shooting Hannibal then asking 'why?' became a self-sabotage meme in 2017.",
    source: "https://knowyourmeme.com/memes/who-killed-hannibal",
  },
  {
    id: "mocking-spongebob",
    example: "“oH yOu’Re A bIg FaN? nAmE tHrEe SoNgS.” — chicken-posed SpongeBob mocking a take.",
    name: "Mocking SpongeBob",
    image: "https://i.imgflip.com/1otk96.jpg",
    viralDate: "2017-05-15",
    blurb:
      "AlTeRnAtInG cApS over a chicken-posed SpongeBob became peak mockery in mid-2017.",
    source: "https://knowyourmeme.com/memes/mocking-spongebob",
  },
  {
    id: "scroll-of-truth",
    example: "Seeker reads the scroll: “you procrastinate because it’s easier.” → “NOOOO!”",
    name: "The Scroll of Truth",
    image: "https://i.imgflip.com/21tqf4.jpg",
    viralDate: "2017-06-15",
    blurb:
      "A seeker finds a scroll, reads an unwelcome truth, and screams 'NO!' — viral mid-2017.",
    source: "https://knowyourmeme.com/memes/the-scroll-of-truth",
  },
  {
    id: "unsettled-tom",
    example: "Tom’s suspicious side-eye: “when your friend says ‘trust me.’”",
    name: "Unsettled Tom",
    image: "https://i.imgflip.com/2wifvo.jpg",
    viralDate: "2017-06-15",
    blurb:
      "A side-eyeing Tom the cat became the face of quiet suspicion and discomfort in 2017.",
    source: "https://knowyourmeme.com/memes/unsettled-tom",
  },
  {
    id: "inhaling-seagull",
    example: "Seagull mid-inhale, about to scream the wrong lyric to a song at full volume.",
    name: "Inhaling Seagull",
    image: "https://i.imgflip.com/1w7ygt.jpg",
    viralDate: "2017-07-15",
    blurb:
      "A seagull caught mid-inhale, beak agape, became the 'about to belt out X' reaction meme around 2017.",
    source: "https://knowyourmeme.com/memes/inhaling-seagull",
  },
  {
    id: "running-away-balloon",
    example: "Reaching for the “good night’s sleep” balloon, tethered by a weight: “one more episode.”",
    name: "Running Away Balloon",
    image: "https://i.imgflip.com/261o3j.jpg",
    viralDate: "2017-08-15",
    blurb:
      "A person chasing a balloon held back by a weight became a 'what stops me' meme in 2017.",
    source: "https://knowyourmeme.com/memes/running-away-balloon",
  },
  {
    id: "distracted-boyfriend",
    example: "Boyfriend ogling “the new phone,” girlfriend “the perfectly fine phone he already owns.”",
    name: "Distracted Boyfriend",
    image: "https://i.imgflip.com/1ur9b0.jpg",
    viralDate: "2017-08-15",
    blurb:
      "Antonio Guillem's stock photo became the definitive object-labeling meme in August 2017.",
    source: "https://knowyourmeme.com/memes/distracted-boyfriend",
  },
  {
    id: "gru-plan",
    example: "Gru’s plan reads great until panel three reveals the obvious flaw — then he double-takes.",
    name: "Gru's Plan",
    image: "https://i.imgflip.com/26jxvz.jpg",
    viralDate: "2017-11-15",
    blurb:
      "The four-panel whiteboard from Despicable Me became a plan-gone-wrong meme in late 2017.",
    source: "https://knowyourmeme.com/memes/grus-plan",
  },
  {
    id: "pawn-stars",
    example: "Seller: “It’s worth $500.” Rick: “Best I can do is twenty bucks.”",
    name: "Pawn Stars (Best I Can Do)",
    image: "https://i.imgflip.com/19vcz0.jpg",
    viralDate: "2017-12-15",
    blurb:
      "Rick Harrison's lowball 'Best I can do is…' became a haggling meme in late 2017.",
    source: "https://knowyourmeme.com/memes/best-i-can-do-is",
  },
  {
    id: "pepe-silvia",
    example: "Charlie unravelling at the mailroom wall: “There is no Pepe Silvia!”",
    name: "Charlie Conspiracy (Pepe Silvia)",
    image: "https://i.imgflip.com/1itoun.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Charlie's red-string corkboard rant from It's Always Sunny became a conspiracy meme in 2018.",
    source: "https://knowyourmeme.com/memes/pepe-silvia",
  },
  {
    id: "change-my-mind",
    example: "Crowder at his table: “Cereal is a soup. Change my mind.”",
    name: "Change My Mind",
    image: "https://i.imgflip.com/24y43o.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Steven Crowder's campus table sign became an editable hot-take template in early 2018.",
    source: "https://knowyourmeme.com/memes/change-my-mind-steven-crowder",
  },
  {
    id: "american-chopper",
    example: "A five-panel father-son screaming match standing in for any heated internet argument.",
    name: "American Chopper Argument",
    image: "https://i.imgflip.com/2896ro.jpg",
    viralDate: "2018-04-15",
    blurb:
      "A five-panel shouting match from American Chopper became a debate meme in spring 2018.",
    source: "https://knowyourmeme.com/memes/american-chopper-argument",
  },
  {
    id: "blank-nut-button",
    example: "A hand slamming a big red button labeled with whatever someone can’t resist doing.",
    name: "Blank Nut Button",
    image: "https://i.imgflip.com/1yxkcp.jpg",
    viralDate: "2018-05-15",
    blurb:
      "A hand slamming a red button became the 'press for instant payoff' meme in 2018.",
    source: "https://knowyourmeme.com/memes/nut-button",
  },
  {
    id: "is-this-a-pigeon",
    example: "Anime guy gesturing at a butterfly: “Is this a good decision?” — confidently misidentifying things.",
    name: "Is This a Pigeon?",
    image: "https://i.imgflip.com/1o00in.jpg",
    viralDate: "2018-05-15",
    blurb:
      "An anime screenshot became the go-to misidentification meme in spring 2018.",
    source: "https://knowyourmeme.com/memes/is-this-a-pigeon",
  },
  {
    id: "monkey-puppet",
    example: "The puppet’s nervous side-glance when someone brings up the thing you just did.",
    name: "Monkey Puppet (Awkward Look)",
    image: "https://i.imgflip.com/2gnnjh.jpg",
    viralDate: "2018-06-15",
    blurb:
      "A side-eyeing puppet from a Japanese kids' show became the awkward-glance meme in 2018.",
    source: "https://knowyourmeme.com/memes/awkward-look-monkey-puppet",
  },
  {
    id: "scooby-doo-mask-reveal",
    example: "Pulling the mask off the ‘ghost’ to reveal the mundane real culprit underneath.",
    name: "Scooby-Doo Mask Reveal",
    image: "https://i.imgflip.com/2eeunw.jpg",
    viralDate: "2018-06-15",
    blurb:
      "The 'let's see who this really is' unmasking from Scooby-Doo became an exploitable for exposing X as Y around 2018.",
    source: "https://knowyourmeme.com/memes/lets-see-who-this-really-is",
  },
  {
    id: "spiderman-pointing",
    example: "Two identical Spider-Men pointing at each other — whenever two things are secretly the same.",
    name: "Spider-Man Pointing at Spider-Man",
    image: "https://i.imgflip.com/1tkjq9.jpg",
    viralDate: "2018-07-15",
    blurb:
      "The 1967 cartoon's two Spideys pointing became the 'we're the same' meme in mid-2018.",
    source: "https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man",
  },
  {
    id: "flex-tape",
    example: "Phil Swift: “To show you the power of Flex Tape, I SAWED THIS BOAT IN HALF!”",
    name: "Flex Tape (Phil Swift)",
    image: "https://i.imgflip.com/2reqtg.png",
    viralDate: "2018-07-15",
    blurb:
      "Phil Swift slapping Flex Tape on everything ('that's a lot of damage!') became a 2018 meme.",
    source: "https://knowyourmeme.com/memes/phil-swift-flex-tape",
  },
  {
    id: "hard-to-swallow-pills",
    example: "A pill bottle of blunt truths, e.g. “Your favorite band’s old stuff really was better.”",
    name: "Hard to Swallow Pills",
    image: "https://i.imgflip.com/271ps6.jpg",
    viralDate: "2018-07-15",
    blurb:
      "A pill bottle labeled with uncomfortable truths became a blunt-honesty meme in 2018.",
    source: "https://knowyourmeme.com/memes/hard-to-swallow-pills",
  },
  {
    id: "epic-handshake",
    example: "Two arms clasping — two rival groups united by one thing they both secretly agree on.",
    name: "Epic Handshake (Predator)",
    image: "https://i.imgflip.com/28j0te.jpg",
    viralDate: "2018-08-15",
    blurb:
      "The Predator forearm clasp became the 'two things united by a shared trait' meme in 2018.",
    source: "https://knowyourmeme.com/memes/epic-handshake",
  },
  {
    id: "car-salesman-slaps-roof",
    example: "Salesman slaps the roof: “This bad boy can fit so many snacks in it.”",
    name: "Car Salesman Slaps Roof",
    image: "https://i.imgflip.com/2d3al6.jpg",
    viralDate: "2018-09-15",
    blurb:
      "'This bad boy can fit so much X in it' — a salesman pitching a car — caught on in late 2018.",
    source: "https://knowyourmeme.com/memes/this-bad-boy-can-fit-so-much-in-it",
  },
  {
    id: "surprised-pikachu",
    example: "“Texts ‘k’ and gets a cold reply back.” — open-mouthed mock-shock at the obvious.",
    name: "Surprised Pikachu",
    image: "https://i.imgflip.com/2kbn1e.jpg",
    viralDate: "2018-10-15",
    blurb:
      "Open-mouthed Pikachu became the face of feigned shock at obvious outcomes in late 2018.",
    source: "https://knowyourmeme.com/memes/surprised-pikachu",
  },
  {
    id: "uno-draw-25",
    example: "“Just say sorry.” / *picks up 25 cards* — refusing the easy option at any cost.",
    name: "UNO Draw 25 Cards",
    image: "https://i.imgflip.com/3lmzyx.jpg",
    viralDate: "2018-12-15",
    blurb:
      "'Do X or draw 25' — refusing a simple task for a huge handful of cards — caught on in 2018.",
    source: "https://knowyourmeme.com/memes/uno-draw-25-cards",
  },
  {
    id: "tuxedo-pooh",
    example: "Plain Pooh: “fries.” Tuxedo Pooh: “pommes frites.” — a fancy way to say the same thing.",
    name: "Tuxedo Winnie the Pooh",
    image: "https://i.imgflip.com/2ybua0.png",
    viralDate: "2019-01-15",
    blurb:
      "Plain Pooh vs. fancy tuxedo Pooh became the 'classy way to say the same thing' meme in 2019.",
    source: "https://knowyourmeme.com/memes/tuxedo-winnie-the-pooh",
  },
  {
    id: "well-yes-but-actually-no",
    example: "Posh chimp: “Is a hot dog a sandwich? Well, yes… but actually no.”",
    name: "Well Yes, But Actually No",
    image: "https://i.imgflip.com/2tn11b.jpg",
    viralDate: "2019-01-15",
    blurb:
      "A flat-capped chimp's 'well yes, but actually no' became a contradiction meme in 2019.",
    source: "https://knowyourmeme.com/memes/well-yes-but-actually-no",
  },
  {
    id: "marked-safe-from",
    example: "“Marked Safe From the awkward family dinner this year.”",
    name: "Marked Safe From X",
    image: "https://i.imgflip.com/2odckz.jpg",
    viralDate: "2019-01-15",
    blurb:
      "A parody of Facebook's Safety Check — 'marked safe from X' — hit its first viral wave in early 2019.",
    source: "https://knowyourmeme.com/memes/marked-safe-from-x",
  },
  {
    id: "three-headed-dragon",
    example: "Two fierce dragon heads (“diet,” “gym”) and one goofy head: “entire pizza.”",
    name: "Three-Headed Dragon",
    image: "https://i.imgflip.com/33e92f.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A hydra with two scary heads and one goofy one became a 'left brain' meme in 2019.",
    source: "https://knowyourmeme.com/memes/ghidorah-three-heads",
  },
  {
    id: "clown-makeup",
    example: "Each panel adds more clown makeup as someone talks themselves into a worse idea.",
    name: "Clown Applying Makeup",
    image: "https://i.imgflip.com/38el31.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A four-panel clown transformation tracked increasingly foolish reasoning in 2019.",
    source: "https://knowyourmeme.com/memes/clown-applying-makeup",
  },
  {
    id: "me-and-the-boys",
    example: "Grinning gang strutting in: “me and the boys showing up uninvited to the cookout.”",
    name: "Me and the Boys",
    image: "https://i.imgflip.com/320xfw.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A Calvin & Hobbes-derived gang of grinning kids became the 'me and the boys' meme in 2019.",
    source: "https://knowyourmeme.com/memes/me-and-the-boys",
  },
  {
    id: "woman-yelling-cat",
    example: "A tearful Real Housewife screaming at a smug white cat behind a dinner plate.",
    name: "Woman Yelling at a Cat",
    image: "https://i.imgflip.com/345v97.jpg",
    viralDate: "2019-05-15",
    blurb:
      "A Real Housewives still next to Smudge the cat became a two-panel classic in May 2019.",
    source: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat",
  },
  {
    id: "ight-imma-head-out",
    example: "SpongeBob stands up the moment things get awkward: “ight, imma head out.”",
    name: "SpongeBob: Ight Imma Head Out",
    image: "https://i.imgflip.com/392xtu.jpg",
    viralDate: "2019-05-15",
    blurb:
      "SpongeBob rising from a chair captioned 'ight imma head out' became a 2019 exit meme.",
    source: "https://knowyourmeme.com/memes/ight-imma-head-out",
  },
  {
    id: "stonks",
    example: "Meme Man before a green arrow yelling “Stonks” after an obviously bad money move.",
    name: "Stonks",
    image: "https://i.imgflip.com/3388rw.png",
    viralDate: "2019-06-15",
    blurb:
      "A 'Meme Man' before a rising stock chart misspelled 'stonks' became finance-fail shorthand in 2019.",
    source: "https://knowyourmeme.com/memes/stonks",
  },
  {
    id: "kombucha-girl",
    example: "First sip — face of disgust — then a slow “…hmm, actually” reconsideration.",
    name: "Kombucha Girl",
    image: "https://i.imgflip.com/39osmx.png",
    viralDate: "2019-08-15",
    blurb:
      "Brittany Tomlinson's first-sip reaction to kombucha became the indecision meme in 2019.",
    source: "https://knowyourmeme.com/memes/kombucha-girl",
  },
  {
    id: "soldier-sleeping-child",
    example: "Soldier shielding a sleeping child = the small comfort guarding you from a bigger worry.",
    name: "Soldier Protecting Sleeping Child",
    image: "https://i.imgflip.com/2tzo2k.jpg",
    viralDate: "2019-08-15",
    blurb:
      "A soldier shielding a sleeping child became a 'thing that protects me from a worse thing' meme.",
    source: "https://knowyourmeme.com/memes/soldier-protecting-sleeping-child",
  },
  {
    id: "you-guys-getting-paid",
    example: "“Wait… you guys are getting paid?” — realizing everyone else got something you didn’t.",
    name: "You Guys Are Getting Paid?",
    image: "https://i.imgflip.com/2xscjb.png",
    viralDate: "2019-09-15",
    blurb:
      "The incredulous 'you guys are getting paid?' reaction became shorthand for doing unpaid work others got compensated for, in 2019.",
    source: "https://knowyourmeme.com/memes/you-guys-are-getting-paid",
  },
  {
    id: "all-my-homies-hate",
    example: "“We don’t do daylight saving here. All my homies hate daylight saving.”",
    name: "All My Homies Hate / Use",
    image: "https://i.imgflip.com/3kwur5.jpg",
    viralDate: "2019-09-15",
    blurb:
      "The 'F— X, all my homies hate X' snowclone over a group photo surged across Reddit and iFunny in 2019.",
    source: "https://knowyourmeme.com/memes/fuck-x-all-my-homies-use-y",
  },
  {
    id: "sure-grandma",
    example: "Grandma waving a newspaper of nonsense: “Sure, grandma, let’s get you to bed.”",
    name: "Sure Grandma, Let's Get You to Bed",
    image: "https://i.imgflip.com/4flche.jpg",
    viralDate: "2019-10-15",
    blurb:
      "A newspaper clipping dismissing grandma's ramblings became the 'sure, grandma' meme in 2019.",
    source: "https://knowyourmeme.com/memes/sure-grandma-lets-get-you-to-bed",
  },
  {
    id: "bernie-once-again-asking",
    example: "“I am once again asking for your financial support.” — reused for any persistent nag.",
    name: "Bernie: I Am Once Again Asking",
    image: "https://i.imgflip.com/3oevdk.jpg",
    viralDate: "2019-11-15",
    blurb:
      "Bernie Sanders's 'I am once again asking for your financial support' video became a 2019 template.",
    source: "https://knowyourmeme.com/memes/i-am-once-again-asking-for-your-financial-support",
  },
  {
    id: "buff-doge-cheems",
    example: "Buff Doge: “music from when I was a kid” / weak Cheems: “music today.”",
    name: "Buff Doge vs. Cheems",
    image: "https://i.imgflip.com/43a45p.png",
    viralDate: "2020-01-15",
    blurb:
      "Muscular 'then' Doge vs. weak 'now' Cheems became the past-vs-present meme in early 2020.",
    source: "https://knowyourmeme.com/memes/swole-doge-vs-cheems",
  },
  {
    id: "same-picture",
    example: "Pam holds up two ‘different’ photos: “Corporate wants you to find the difference.” “They’re the same picture.”",
    name: "They're the Same Picture (Pam)",
    image: "https://i.imgflip.com/2za3u1.jpg",
    viralDate: "2020-01-15",
    blurb:
      "Pam from The Office insisting two 'different' photos are identical became a 2020 staple.",
    source: "https://knowyourmeme.com/memes/corporate-needs-you-to-find-the-differences",
  },
  {
    id: "yes-chad",
    example: "A ranting soyboy lists complaints; the blond Chad just replies, “Yes.”",
    name: "Soyboy vs. Yes Chad",
    image: "https://i.imgflip.com/3umnr3.jpg",
    viralDate: "2020-01-15",
    blurb:
      "The stoic blond 'Yes' Chad shrugging off a ranting soyboy became a confidence meme by 2020.",
    source: "https://knowyourmeme.com/memes/nordic-gamer-yes-chad",
  },
  {
    id: "grant-gustin-grave",
    example: "Grant Gustin throwing up a peace sign next to a tombstone labeled with a dead trend.",
    name: "Grant Gustin Next to Oliver Queen's Grave",
    image: "https://i.imgflip.com/3nx72a.png",
    viralDate: "2020-01-28",
    blurb:
      "Grant Gustin throwing a peace sign by Oliver Queen's grave became an object-labeling meme after going viral in early 2020.",
    source: "https://knowyourmeme.com/memes/grant-gustin-next-to-oliver-queens-grave",
  },
  {
    id: "panik-kalm-panik",
    example: "“Asked her out” (KALM) → “she said ‘we need to talk’” (PANIK).",
    name: "Panik Kalm Panik",
    image: "https://i.imgflip.com/3qqcim.png",
    viralDate: "2020-02-15",
    blurb:
      "A three-panel meme figure cycling panic → calm → panic took off in early 2020.",
    source: "https://knowyourmeme.com/memes/panik-kalm-panik",
  },
  {
    id: "anime-girl-terminator",
    example: "An anime girl hiding under a desk from a Terminator — the small dread looming over you.",
    name: "Anime Girl Hiding from a Terminator",
    image: "https://i.imgflip.com/3po4m7.jpg",
    viralDate: "2020-02-15",
    blurb:
      "Fan art of an anime girl cowering under a desk from a T-800 became an object-labeling format in February 2020.",
    source: "https://knowyourmeme.com/memes/anime-girl-hiding-from-a-terminator",
  },
  {
    id: "mr-incredible-mad",
    example: "Mr. Incredible’s glare for the exact moment a tiny annoyance pushes you over the edge.",
    name: "Mr. Incredible Mad",
    image: "https://i.imgflip.com/39sjn7.png",
    viralDate: "2020-04-15",
    blurb:
      "A glaring Mr. Incredible captioned the moment a small annoyance tips you over the edge, ~2020.",
    source: "https://knowyourmeme.com/memes/mr-incredible-becoming-angry",
  },
  {
    id: "undertaker-aj-styles",
    example: "AJ Styles smirks, oblivious to the Undertaker (the consequence) rising behind him.",
    name: "Undertaker Standing Behind AJ Styles",
    image: "https://i.imgflip.com/3vfrmx.jpg",
    viralDate: "2020-04-15",
    blurb:
      "From WrestleMania 36's Boneyard Match, the Undertaker looming behind a smug AJ Styles became a 2020 object-label meme.",
    source: "https://knowyourmeme.com/memes/undertaker-standing-behind-aj-styles",
  },
  {
    id: "i-bet-hes-thinking",
    example: "“I bet he’s thinking about another girl.” Him, staring off: “…do fish get thirsty?”",
    name: "I Bet He's Thinking About Other Women",
    image: "https://i.imgflip.com/1tl71a.jpg",
    viralDate: "2020-05-15",
    blurb:
      "A worried partner's 'I bet he's thinking about…' became a what's-he-really-thinking meme in 2020.",
    source: "https://knowyourmeme.com/memes/i-bet-hes-thinking-about-other-women",
  },
  {
    id: "laughing-leo",
    example: "DiCaprio pointing and cracking up at the TV — used to point at any too-real moment.",
    name: "Laughing Leo (Django)",
    image: "https://i.imgflip.com/4acd7j.png",
    viralDate: "2020-06-15",
    blurb:
      "DiCaprio laughing and pointing from Django became a 'pointing at relatable content' meme.",
    source: "https://knowyourmeme.com/memes/laughing-leo",
  },
  {
    id: "communist-bugs-bunny",
    example: "Bugs Bunny: “Your snacks? No. Our snacks.” — claiming everything as collective.",
    name: "Communist Bugs Bunny",
    image: "https://i.imgflip.com/44eggm.png",
    viralDate: "2020-07-15",
    blurb:
      "Bugs Bunny declaring 'our' over a hammer-and-sickle became the 'no individual ownership' joke meme in 2020.",
    source: "https://knowyourmeme.com/memes/communist-bugs-bunny",
  },
  {
    id: "always-has-been",
    example: "Astronaut: “Wait, it’s all rigged?” Other, drawing a gun: “Always has been.”",
    name: "Always Has Been (Among Us)",
    image: "https://i.imgflip.com/46e43q.png",
    viralDate: "2020-10-15",
    blurb:
      "The 'wait, it's all X? Always has been' astronaut format surged with Among Us in late 2020.",
    source: "https://knowyourmeme.com/memes/always-has-been",
  },
  {
    id: "they-dont-know",
    example: "Lone guy in the corner: “they don’t know I’m the funniest person at this party.”",
    name: "They Don't Know",
    image: "https://i.imgflip.com/4pn1an.png",
    viralDate: "2020-11-15",
    blurb:
      "A lonely partygoer thinking 'they don't know…' became a social-anxiety meme in late 2020.",
    source: "https://knowyourmeme.com/memes/they-dont-know",
  },
  {
    id: "giga-chad",
    example: "“Holds the door, says thank you, means it.” — the impossibly based GigaChad ideal.",
    name: "Giga Chad",
    image: "https://i.imgflip.com/35bdwf.jpg",
    viralDate: "2021-06-15",
    blurb:
      "Ernest Khalimov's chiseled black-and-white portrait became the ultimate 'Chad' ideal by 2021.",
    source: "https://knowyourmeme.com/memes/gigachad",
  },
  {
    id: "gus-fring-not-the-same",
    example: "Gus, calm and composed: “We both run a business. We are not the same.”",
    name: "Gus Fring: We Are Not the Same",
    image: "https://i.imgflip.com/5o32tt.png",
    viralDate: "2021-07-15",
    blurb:
      "A composed Gus Fring captioned 'I am not the same as you' became a superiority meme in 2021.",
    source: "https://knowyourmeme.com/memes/we-are-not-the-same",
  },
  {
    id: "megamind-no-bitches",
    example: "Megamind zoomed way in, reading a sad caption: “No friends? :(”",
    name: "Megamind (No Bitches?)",
    image: "https://i.imgflip.com/65939r.jpg",
    viralDate: "2021-08-15",
    blurb:
      "A zoomed Megamind captioned 'no bitches?' became a mocking-rejection meme in 2021.",
    source: "https://knowyourmeme.com/memes/no-bitches",
  },
  {
    id: "anakin-padme",
    example: "“We’re getting back together for good, right?” Padmé waits, smile fading. “…right?”",
    name: "Anakin & Padmé (4 Panel)",
    image: "https://i.imgflip.com/5c7lwq.png",
    viralDate: "2021-09-15",
    blurb:
      "'For the better, right?' — Padmé's hopeful smile fading to dread — became a 2021 format.",
    source: "https://knowyourmeme.com/memes/for-the-better-right",
  },
  {
    id: "trade-offer",
    example: "“Trade offer: you give me the aux cord, I give you the best playlist of your life.”",
    name: "Trade Offer",
    image: "https://i.imgflip.com/54hjww.jpg",
    viralDate: "2021-09-15",
    blurb:
      "The TikTok 'Here's a trade offer' format became a meme template in autumn 2021.",
    source: "https://knowyourmeme.com/memes/trade-offer",
  },
  {
    id: "squid-game",
    example: "Red Light, Green Light — freezing the instant someone might catch you.",
    name: "Squid Game (Red Light)",
    image: "https://i.imgflip.com/98qr33.jpg",
    viralDate: "2021-10-15",
    blurb:
      "Netflix's Squid Game became a global phenomenon and meme fountain in October 2021.",
    source: "https://knowyourmeme.com/memes/subcultures/squid-game",
  },
  {
    id: "bell-curve-midwit",
    example: "The dumb guy and the genius say the same simple thing; the midwit overcomplicates it.",
    name: "IQ Bell Curve (Midwit)",
    image: "https://i.imgflip.com/8tw3vb.png",
    viralDate: "2022-01-15",
    blurb:
      "The bell curve where the low-IQ and genius agree, mocking the 'midwit' in the middle, peaked in 2022.",
    source: "https://knowyourmeme.com/memes/iq-bell-curve-midwit",
  },
  {
    id: "will-smith-slap",
    example: "Will Smith marching up to slap away whatever just crossed the line.",
    name: "Will Smith Slapping Chris Rock",
    image: "https://i.imgflip.com/6a9d61.png",
    viralDate: "2022-03-15",
    blurb:
      "Will Smith slapping Chris Rock at the Oscars on March 27, 2022 instantly became a meme template.",
    source: "https://knowyourmeme.com/memes/events/will-smith-slapping-chris-rock",
  },
  {
    id: "two-guys-on-a-bus",
    example: "One rider faces a sunny view, the other a blank wall — same trip, opposite outlook.",
    name: "Two Guys on a Bus",
    image: "https://i.imgflip.com/5v6gwj.jpg",
    viralDate: "2022-06-15",
    blurb:
      "A painting of two bus riders — one facing a wall, one a view — became an outlook meme in 2022.",
    source: "https://knowyourmeme.com/memes/two-guys-on-a-bus",
  },
  {
    id: "corn-kid",
    example: "“It’s got the juice. I can’t imagine a more beautiful thing.” — Tariq’s pure love of corn.",
    name: "It's Corn (Corn Kid)",
    image: "https://i.imgflip.com/6syaus.jpg",
    viralDate: "2022-08-15",
    blurb:
      "Tariq, the 'Corn Kid,' gushing about corn in a Recess Therapy clip became a viral song and meme in August 2022.",
    source: "https://knowyourmeme.com/memes/corn-kid",
  },
  {
    id: "megamind-peeking",
    example: "Megamind peeks around the corner: “no way you actually fell for that.”",
    name: "Megamind Peeking",
    image: "https://i.imgflip.com/64sz4u.png",
    viralDate: "2022-09-15",
    blurb:
      "Megamind peeking around a corner became a 'no way you actually did X' reaction meme in 2022.",
    source: "https://knowyourmeme.com/memes/megamind-peeking-you-wouldnt-get-hit-by-the-train-if-you-stayed-on-the-bench",
  },
  {
    id: "wednesday-dance",
    example: "Recreating Jenna Ortega’s jerky goth dance from Wednesday for a TikTok.",
    name: "Wednesday Addams Dance",
    image: "https://i.imgflip.com/73z99t.jpg",
    viralDate: "2022-11-15",
    blurb:
      "Jenna Ortega's jerky goth dance in Netflix's Wednesday sparked a huge TikTok recreation trend in November 2022.",
    source: "https://knowyourmeme.com/memes/wednesday-dance-the-addams-family",
  },
  {
    id: "john-pork",
    example: "“John Pork is calling…” — the pig-man video call you’re too unnerved to answer.",
    name: "John Pork Is Calling",
    image: "https://i.imgflip.com/7ju95g.png",
    viralDate: "2023-03-15",
    blurb:
      "A pig-headed man in a selfie, 'John Pork,' fueled a surreal 'answer the call?' meme wave in early 2023.",
    source: "https://knowyourmeme.com/memes/john-pork",
  },
  {
    id: "grimace-shake",
    example: "Sipping the purple Grimace shake, then cutting to yourself ‘collapsed’ on the floor.",
    name: "Grimace Shake",
    image: "https://i.imgflip.com/7qzqt6.jpg",
    viralDate: "2023-06-15",
    blurb:
      "McDonald's purple Grimace birthday shake spawned a faux-horror 'drink it then collapse' TikTok trend in June 2023.",
    source: "https://knowyourmeme.com/memes/grimace-shake-trend",
  },
  {
    id: "absolute-cinema",
    example: "Scorsese lifting his arms in awe at a movie that’s pure ‘absolute cinema.’",
    name: "Absolute Cinema",
    image: "https://i.imgflip.com/8d317n.png",
    viralDate: "2024-05-15",
    blurb:
      "A black-and-white Martin Scorsese raising his arms, captioned 'absolute cinema,' spread in 2024.",
    source: "https://knowyourmeme.com/memes/absolute-cinema",
  },
  {
    id: "hawk-tuah",
    example: "The viral street-interview soundbite quoted as a cheeky one-liner.",
    name: "Hawk Tuah",
    image: "https://i.imgflip.com/8uh5gc.png",
    viralDate: "2024-06-15",
    blurb:
      "A street-interview clip in June 2024 turned its 'hawk tuah' soundbite into one of the year's biggest viral catchphrases.",
    source: "https://knowyourmeme.com/memes/hawk-tuah",
  },
  {
    id: "moo-deng",
    example: "Cooing over the slippery, bitey baby pygmy hippo flopping around her enclosure.",
    name: "Moo Deng",
    image: "https://i.imgflip.com/93qc5f.png",
    viralDate: "2024-09-15",
    blurb:
      "Moo Deng, a pygmy hippo at a Thai zoo, became the internet's favorite chaotic baby animal in September 2024.",
    source: "https://knowyourmeme.com/memes/moo-deng-the-baby-hippo",
  },
  {
    id: "chill-guy",
    example: "Unbothered cartoon dog shrugging: “Bombed the interview? Eh. He’s just a chill guy.”",
    name: "Just a Chill Guy",
    image: "https://i.imgflip.com/9axcnp.jpg",
    viralDate: "2024-11-15",
    blurb:
      "A nonchalant cartoon dog with his hands in his pockets — 'just a chill guy' — exploded across TikTok in November 2024.",
    source: "https://knowyourmeme.com/memes/just-a-chill-guy-my-new-character",
  },
];
