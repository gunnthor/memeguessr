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
};

export const MEMES: Meme[] = [
  {
    id: "disaster-girl",
    name: "Disaster Girl",
    image: "https://i.imgflip.com/23ls.jpg",
    viralDate: "2008-01-15",
    blurb:
      "Zoé Roth's smirk in front of a house fire (photo 2005) spread as a reaction meme through 2007–08.",
    source: "https://knowyourmeme.com/memes/disaster-girl",
  },
  {
    id: "yo-dawg",
    name: "Yo Dawg (Xzibit)",
    image: "https://i.imgflip.com/26hg.jpg",
    viralDate: "2009-01-15",
    blurb:
      "The 'Yo dawg, I heard you like X' recursion format, built on Xzibit and Pimp My Ride, peaked around 2009.",
    source: "https://knowyourmeme.com/memes/xzibit-yo-dawg",
  },
  {
    id: "one-does-not-simply",
    name: "One Does Not Simply",
    image: "https://i.imgflip.com/1bij.jpg",
    viralDate: "2011-01-15",
    blurb:
      "Boromir's 'One does not simply walk into Mordor' became a top advice-animal format in 2011.",
    source: "https://knowyourmeme.com/memes/one-does-not-simply-walk-into-mordor",
  },
  {
    id: "futurama-fry",
    name: "Futurama Fry (Not Sure If)",
    image: "https://i.imgflip.com/1bgw.jpg",
    viralDate: "2011-02-15",
    blurb:
      "Squinting Fry powered the 'Not sure if X or just Y' format across Reddit in 2011.",
    source: "https://knowyourmeme.com/memes/futurama-fry-not-sure-if",
  },
  {
    id: "ancient-aliens",
    name: "Ancient Aliens (Giorgio)",
    image: "https://i.imgflip.com/26am.jpg",
    viralDate: "2011-03-15",
    blurb:
      "Giorgio Tsoukalos's 'I'm not saying it was aliens, but… aliens' became a 2011 staple.",
    source: "https://knowyourmeme.com/memes/ancient-aliens",
  },
  {
    id: "hide-the-pain-harold",
    name: "Hide the Pain Harold",
    image: "https://i.imgflip.com/gk5el.jpg",
    viralDate: "2011-09-15",
    blurb:
      "Stock-photo model András Arató's strained smile became the face of concealed pain around 2011.",
    source: "https://knowyourmeme.com/memes/hide-the-pain-harold",
  },
  {
    id: "x-everywhere",
    name: "X, X Everywhere (Buzz Lightyear)",
    image: "https://i.imgflip.com/1ihzfe.jpg",
    viralDate: "2012-01-15",
    blurb:
      "Buzz telling Woody 'X, X everywhere' took off as an observation format in 2012.",
    source: "https://knowyourmeme.com/memes/x-x-everywhere",
  },
  {
    id: "skeptical-third-world-kid",
    name: "Third World Skeptical Kid",
    image: "https://i.imgflip.com/265k.jpg",
    viralDate: "2012-04-15",
    blurb:
      "A squinting kid became the face of skeptical 'so you're telling me…' captions in 2012.",
    source: "https://knowyourmeme.com/memes/skeptical-third-world-kid",
  },
  {
    id: "grandma-finds-internet",
    name: "Grandma Finds the Internet",
    image: "https://i.imgflip.com/1bhw.jpg",
    viralDate: "2012-05-15",
    blurb:
      "A bewildered grandmother at a computer fronted clueless-internet jokes in 2012.",
    source: "https://knowyourmeme.com/memes/grandma-finds-the-internet",
  },
  {
    id: "oprah-you-get-a",
    name: "Oprah You Get A",
    image: "https://i.imgflip.com/gtj5t.jpg",
    viralDate: "2013-01-15",
    blurb:
      "Oprah's giveaway 'You get an X! Everybody gets an X!' became a reaction template by 2013.",
    source: "https://knowyourmeme.com/memes/oprahs-favorite-things",
  },
  {
    id: "but-thats-none-of-my-business",
    name: "But That's None of My Business",
    image: "https://i.imgflip.com/9sw43.jpg",
    viralDate: "2014-06-15",
    blurb:
      "Kermit sipping Lipton tea became the passive-aggressive shade meme in mid-2014.",
    source: "https://knowyourmeme.com/memes/but-thats-none-of-my-business",
  },
  {
    id: "waiting-skeleton",
    name: "Waiting Skeleton",
    image: "https://i.imgflip.com/2fm6x.jpg",
    viralDate: "2015-01-15",
    blurb:
      "A skeleton slumped 'still waiting' became shorthand for long waits around 2015.",
    source: "https://knowyourmeme.com/memes/waiting-skeleton",
  },
  {
    id: "boardroom-suggestion",
    name: "Boardroom Meeting Suggestion",
    image: "https://i.imgflip.com/m78d.jpg",
    viralDate: "2015-09-15",
    blurb:
      "The 'good idea / better idea / *thrown out window*' boardroom format spread in 2015.",
    source: "https://knowyourmeme.com/memes/boardroom-meeting-suggestion",
  },
  {
    id: "drakeposting",
    name: "Drakeposting",
    image: "https://i.imgflip.com/30b1gx.jpg",
    viralDate: "2015-12-15",
    blurb:
      "Drake's 'Hotline Bling' video gave us the no/yes preference format in late 2015.",
    source: "https://knowyourmeme.com/memes/drakeposting",
  },
  {
    id: "this-is-fine",
    name: "This Is Fine",
    image: "https://i.imgflip.com/wxica.jpg",
    viralDate: "2016-01-15",
    blurb:
      "KC Green's 2013 'On Fire' comic exploded into the reaction meme 'This is fine' in early 2016.",
    source: "https://knowyourmeme.com/memes/this-is-fine",
  },
  {
    id: "squidward-window",
    name: "Squidward Looking Out the Window",
    image: "https://i.imgflip.com/145qvv.jpg",
    viralDate: "2016-03-15",
    blurb:
      "Squidward gazing wistfully out a window became a relatable-longing meme in 2016.",
    source: "https://knowyourmeme.com/memes/handsome-squidward-squidward-falls",
  },
  {
    id: "the-rock-driving",
    name: "The Rock Driving",
    image: "https://i.imgflip.com/grr.jpg",
    viralDate: "2016-06-15",
    blurb:
      "A two-panel of The Rock turning to react became a question/answer format in mid-2016.",
    source: "https://knowyourmeme.com/memes/the-rock-driving",
  },
  {
    id: "daily-struggle",
    name: "Two Buttons / Daily Struggle",
    image: "https://i.imgflip.com/1g8my4.jpg",
    viralDate: "2016-06-15",
    blurb:
      "The sweating man agonizing over two buttons took off as a decision meme in mid-2016.",
    source: "https://knowyourmeme.com/memes/daily-struggle",
  },
  {
    id: "sad-pablo-escobar",
    name: "Sad Pablo Escobar (Waiting)",
    image: "https://i.imgflip.com/1c1uej.jpg",
    viralDate: "2016-09-15",
    blurb:
      "A lone, waiting Pablo from the Narcos era became a meme of restless boredom in 2016.",
    source: "https://knowyourmeme.com/memes/sad-pablo-escobar",
  },
  {
    id: "evil-kermit",
    name: "Evil Kermit",
    image: "https://i.imgflip.com/1e7ql7.jpg",
    viralDate: "2016-11-15",
    blurb:
      "Hooded 'Constantine' Kermit voicing your bad impulses ('me to me') went viral in late 2016.",
    source: "https://knowyourmeme.com/memes/evil-kermit",
  },
  {
    id: "roll-safe",
    name: "Roll Safe (Think About It)",
    image: "https://i.imgflip.com/1h7in3.jpg",
    viralDate: "2017-01-15",
    blurb:
      "Kayode Ewumi tapping his temple became the 'can't fail if you don't try' meme in early 2017.",
    source: "https://knowyourmeme.com/memes/roll-safe",
  },
  {
    id: "left-exit-12",
    name: "Left Exit 12 Off Ramp",
    image: "https://i.imgflip.com/22bdq6.jpg",
    viralDate: "2017-02-15",
    blurb:
      "A car swerving onto an exit ramp became the go-to 'choosing the chaotic option' meme in 2017.",
    source: "https://knowyourmeme.com/memes/left-exit-12-off-ramp",
  },
  {
    id: "expanding-brain",
    name: "Expanding Brain",
    image: "https://i.imgflip.com/1jwhww.jpg",
    viralDate: "2017-02-15",
    blurb: "The glowing-brain escalation format spread rapidly in early 2017.",
    source: "https://knowyourmeme.com/memes/expanding-brain",
  },
  {
    id: "sleeping-shaq",
    name: "Sleeping Shaq",
    image: "https://i.imgflip.com/1nck6k.jpg",
    viralDate: "2017-03-15",
    blurb:
      "Shaq unbothered then hyped became the 'what I ignore vs. what excites me' meme in 2017.",
    source: "https://knowyourmeme.com/memes/sleeping-shaq",
  },
  {
    id: "who-killed-hannibal",
    name: "Who Killed Hannibal",
    image: "https://i.imgflip.com/28s2gu.jpg",
    viralDate: "2017-05-15",
    blurb:
      "Eric André shooting Hannibal then asking 'why?' became a self-sabotage meme in 2017.",
    source: "https://knowyourmeme.com/memes/who-killed-hannibal",
  },
  {
    id: "mocking-spongebob",
    name: "Mocking SpongeBob",
    image: "https://i.imgflip.com/1otk96.jpg",
    viralDate: "2017-05-15",
    blurb:
      "AlTeRnAtInG cApS over a chicken-posed SpongeBob became peak mockery in mid-2017.",
    source: "https://knowyourmeme.com/memes/mocking-spongebob",
  },
  {
    id: "scroll-of-truth",
    name: "The Scroll of Truth",
    image: "https://i.imgflip.com/21tqf4.jpg",
    viralDate: "2017-06-15",
    blurb:
      "A seeker finds a scroll, reads an unwelcome truth, and screams 'NO!' — viral mid-2017.",
    source: "https://knowyourmeme.com/memes/the-scroll-of-truth",
  },
  {
    id: "running-away-balloon",
    name: "Running Away Balloon",
    image: "https://i.imgflip.com/261o3j.jpg",
    viralDate: "2017-08-15",
    blurb:
      "A person chasing a balloon held back by a weight became a 'what stops me' meme in 2017.",
    source: "https://knowyourmeme.com/memes/running-away-balloon",
  },
  {
    id: "distracted-boyfriend",
    name: "Distracted Boyfriend",
    image: "https://i.imgflip.com/1ur9b0.jpg",
    viralDate: "2017-08-15",
    blurb:
      "Antonio Guillem's stock photo became the definitive object-labeling meme in August 2017.",
    source: "https://knowyourmeme.com/memes/distracted-boyfriend",
  },
  {
    id: "gru-plan",
    name: "Gru's Plan",
    image: "https://i.imgflip.com/26jxvz.jpg",
    viralDate: "2017-11-15",
    blurb:
      "The four-panel whiteboard from Despicable Me became a plan-gone-wrong meme in late 2017.",
    source: "https://knowyourmeme.com/memes/grus-plan",
  },
  {
    id: "pawn-stars",
    name: "Pawn Stars (Best I Can Do)",
    image: "https://i.imgflip.com/19vcz0.jpg",
    viralDate: "2017-12-15",
    blurb:
      "Rick Harrison's lowball 'Best I can do is…' became a haggling meme in late 2017.",
    source: "https://knowyourmeme.com/memes/best-i-can-do-is",
  },
  {
    id: "pepe-silvia",
    name: "Charlie Conspiracy (Pepe Silvia)",
    image: "https://i.imgflip.com/1itoun.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Charlie's red-string corkboard rant from It's Always Sunny became a conspiracy meme in 2018.",
    source: "https://knowyourmeme.com/memes/pepe-silvia",
  },
  {
    id: "change-my-mind",
    name: "Change My Mind",
    image: "https://i.imgflip.com/24y43o.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Steven Crowder's campus table sign became an editable hot-take template in early 2018.",
    source: "https://knowyourmeme.com/memes/change-my-mind-steven-crowder",
  },
  {
    id: "american-chopper",
    name: "American Chopper Argument",
    image: "https://i.imgflip.com/2896ro.jpg",
    viralDate: "2018-04-15",
    blurb:
      "A five-panel shouting match from American Chopper became a debate meme in spring 2018.",
    source: "https://knowyourmeme.com/memes/american-chopper-argument",
  },
  {
    id: "blank-nut-button",
    name: "Blank Nut Button",
    image: "https://i.imgflip.com/1yxkcp.jpg",
    viralDate: "2018-05-15",
    blurb:
      "A hand slamming a red button became the 'press for instant payoff' meme in 2018.",
    source: "https://knowyourmeme.com/memes/nut-button",
  },
  {
    id: "is-this-a-pigeon",
    name: "Is This a Pigeon?",
    image: "https://i.imgflip.com/1o00in.jpg",
    viralDate: "2018-05-15",
    blurb:
      "An anime screenshot became the go-to misidentification meme in spring 2018.",
    source: "https://knowyourmeme.com/memes/is-this-a-pigeon",
  },
  {
    id: "monkey-puppet",
    name: "Monkey Puppet (Awkward Look)",
    image: "https://i.imgflip.com/2gnnjh.jpg",
    viralDate: "2018-06-15",
    blurb:
      "A side-eyeing puppet from a Japanese kids' show became the awkward-glance meme in 2018.",
    source: "https://knowyourmeme.com/memes/awkward-look-monkey-puppet",
  },
  {
    id: "spiderman-pointing",
    name: "Spider-Man Pointing at Spider-Man",
    image: "https://i.imgflip.com/1tkjq9.jpg",
    viralDate: "2018-07-15",
    blurb:
      "The 1967 cartoon's two Spideys pointing became the 'we're the same' meme in mid-2018.",
    source: "https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man",
  },
  {
    id: "epic-handshake",
    name: "Epic Handshake (Predator)",
    image: "https://i.imgflip.com/28j0te.jpg",
    viralDate: "2018-08-15",
    blurb:
      "The Predator forearm clasp became the 'two things united by a shared trait' meme in 2018.",
    source: "https://knowyourmeme.com/memes/epic-handshake",
  },
  {
    id: "surprised-pikachu",
    name: "Surprised Pikachu",
    image: "https://i.imgflip.com/2kbn1e.jpg",
    viralDate: "2018-10-15",
    blurb:
      "Open-mouthed Pikachu became the face of feigned shock at obvious outcomes in late 2018.",
    source: "https://knowyourmeme.com/memes/surprised-pikachu",
  },
  {
    id: "uno-draw-25",
    name: "UNO Draw 25 Cards",
    image: "https://i.imgflip.com/3lmzyx.jpg",
    viralDate: "2018-12-15",
    blurb:
      "'Do X or draw 25' — refusing a simple task for a huge handful of cards — caught on in 2018.",
    source: "https://knowyourmeme.com/memes/uno-draw-25-cards",
  },
  {
    id: "tuxedo-pooh",
    name: "Tuxedo Winnie the Pooh",
    image: "https://i.imgflip.com/2ybua0.png",
    viralDate: "2019-01-15",
    blurb:
      "Plain Pooh vs. fancy tuxedo Pooh became the 'classy way to say the same thing' meme in 2019.",
    source: "https://knowyourmeme.com/memes/tuxedo-winnie-the-pooh",
  },
  {
    id: "three-headed-dragon",
    name: "Three-Headed Dragon",
    image: "https://i.imgflip.com/33e92f.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A hydra with two scary heads and one goofy one became a 'left brain' meme in 2019.",
    source: "https://knowyourmeme.com/memes/ghidorah-three-heads",
  },
  {
    id: "clown-makeup",
    name: "Clown Applying Makeup",
    image: "https://i.imgflip.com/38el31.jpg",
    viralDate: "2019-04-15",
    blurb:
      "A four-panel clown transformation tracked increasingly foolish reasoning in 2019.",
    source: "https://knowyourmeme.com/memes/clown-applying-makeup",
  },
  {
    id: "woman-yelling-cat",
    name: "Woman Yelling at a Cat",
    image: "https://i.imgflip.com/345v97.jpg",
    viralDate: "2019-05-15",
    blurb:
      "A Real Housewives still next to Smudge the cat became a two-panel classic in May 2019.",
    source: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat",
  },
  {
    id: "soldier-sleeping-child",
    name: "Soldier Protecting Sleeping Child",
    image: "https://i.imgflip.com/2tzo2k.jpg",
    viralDate: "2019-08-15",
    blurb:
      "A soldier shielding a sleeping child became a 'thing that protects me from a worse thing' meme.",
    source: "https://knowyourmeme.com/memes/soldier-protecting-sleeping-child",
  },
  {
    id: "buff-doge-cheems",
    name: "Buff Doge vs. Cheems",
    image: "https://i.imgflip.com/43a45p.png",
    viralDate: "2020-01-15",
    blurb:
      "Muscular 'then' Doge vs. weak 'now' Cheems became the past-vs-present meme in early 2020.",
    source: "https://knowyourmeme.com/memes/swole-doge-vs-cheems",
  },
  {
    id: "same-picture",
    name: "They're the Same Picture (Pam)",
    image: "https://i.imgflip.com/2za3u1.jpg",
    viralDate: "2020-01-15",
    blurb:
      "Pam from The Office insisting two 'different' photos are identical became a 2020 staple.",
    source: "https://knowyourmeme.com/memes/corporate-needs-you-to-find-the-differences",
  },
  {
    id: "panik-kalm-panik",
    name: "Panik Kalm Panik",
    image: "https://i.imgflip.com/3qqcim.png",
    viralDate: "2020-02-15",
    blurb:
      "A three-panel meme figure cycling panic → calm → panic took off in early 2020.",
    source: "https://knowyourmeme.com/memes/panik-kalm-panik",
  },
  {
    id: "i-bet-hes-thinking",
    name: "I Bet He's Thinking About Other Women",
    image: "https://i.imgflip.com/1tl71a.jpg",
    viralDate: "2020-05-15",
    blurb:
      "A worried partner's 'I bet he's thinking about…' became a what's-he-really-thinking meme in 2020.",
    source: "https://knowyourmeme.com/memes/i-bet-hes-thinking-about-other-women",
  },
  {
    id: "laughing-leo",
    name: "Laughing Leo (Django)",
    image: "https://i.imgflip.com/4acd7j.png",
    viralDate: "2020-06-15",
    blurb:
      "DiCaprio laughing and pointing from Django became a 'pointing at relatable content' meme.",
    source: "https://knowyourmeme.com/memes/laughing-leo",
  },
  {
    id: "always-has-been",
    name: "Always Has Been (Among Us)",
    image: "https://i.imgflip.com/46e43q.png",
    viralDate: "2020-10-15",
    blurb:
      "The 'wait, it's all X? Always has been' astronaut format surged with Among Us in late 2020.",
    source: "https://knowyourmeme.com/memes/always-has-been",
  },
  {
    id: "they-dont-know",
    name: "They Don't Know",
    image: "https://i.imgflip.com/4pn1an.png",
    viralDate: "2020-11-15",
    blurb:
      "A lonely partygoer thinking 'they don't know…' became a social-anxiety meme in late 2020.",
    source: "https://knowyourmeme.com/memes/they-dont-know",
  },
  {
    id: "megamind-no-bitches",
    name: "Megamind (No Bitches?)",
    image: "https://i.imgflip.com/65939r.jpg",
    viralDate: "2021-08-15",
    blurb:
      "A zoomed Megamind captioned 'no bitches?' became a mocking-rejection meme in 2021.",
    source: "https://knowyourmeme.com/memes/no-bitches",
  },
  {
    id: "anakin-padme",
    name: "Anakin & Padmé (4 Panel)",
    image: "https://i.imgflip.com/5c7lwq.png",
    viralDate: "2021-09-15",
    blurb:
      "'For the better, right?' — Padmé's hopeful smile fading to dread — became a 2021 format.",
    source: "https://knowyourmeme.com/memes/for-the-better-right",
  },
  {
    id: "trade-offer",
    name: "Trade Offer",
    image: "https://i.imgflip.com/54hjww.jpg",
    viralDate: "2021-09-15",
    blurb:
      "The TikTok 'Here's a trade offer' format became a meme template in autumn 2021.",
    source: "https://knowyourmeme.com/memes/trade-offer",
  },
  {
    id: "bell-curve-midwit",
    name: "IQ Bell Curve (Midwit)",
    image: "https://i.imgflip.com/8tw3vb.png",
    viralDate: "2022-01-15",
    blurb:
      "The bell curve where the low-IQ and genius agree, mocking the 'midwit' in the middle, peaked in 2022.",
    source: "https://knowyourmeme.com/memes/iq-bell-curve-midwit",
  },
  {
    id: "two-guys-on-a-bus",
    name: "Two Guys on a Bus",
    image: "https://i.imgflip.com/5v6gwj.jpg",
    viralDate: "2022-06-15",
    blurb:
      "A painting of two bus riders — one facing a wall, one a view — became an outlook meme in 2022.",
    source: "https://knowyourmeme.com/memes/two-guys-on-a-bus",
  },
  {
    id: "absolute-cinema",
    name: "Absolute Cinema",
    image: "https://i.imgflip.com/8d317n.png",
    viralDate: "2024-05-15",
    blurb:
      "A black-and-white Martin Scorsese raising his arms, captioned 'absolute cinema,' spread in 2024.",
    source: "https://knowyourmeme.com/memes/absolute-cinema",
  },
];
