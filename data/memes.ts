// MemeGuessr dataset.
//
// Images are hosted by Imgflip (stable template CDN, i.imgflip.com). These are
// meme *templates*, used here for the guessing game. Imgflip is a common source
// for blank templates; if you want to be conservative about rights, swap in
// images you host yourself — just keep the URL + date + source shape below.
//
// `viralDate` = the month the meme broke into mainstream virality (YYYY-MM-DD;
// day is set to 15 as a mid-month approximation when only the month is known).
// Verify each against its `source` before launch — date accuracy is the game.

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
    id: "hide-the-pain-harold",
    name: "Hide the Pain Harold",
    image: "https://i.imgflip.com/gk5el.jpg",
    viralDate: "2011-09-15",
    blurb:
      "Stock-photo model András Arató's strained smile became the face of concealed pain around 2011.",
    source: "https://knowyourmeme.com/memes/hide-the-pain-harold",
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
    id: "daily-struggle",
    name: "Two Buttons / Daily Struggle",
    image: "https://i.imgflip.com/1g8my4.jpg",
    viralDate: "2016-06-15",
    blurb:
      "The sweating man agonizing over two buttons took off as a decision meme in mid-2016.",
    source: "https://knowyourmeme.com/memes/daily-struggle",
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
    id: "expanding-brain",
    name: "Expanding Brain",
    image: "https://i.imgflip.com/1jwhww.jpg",
    viralDate: "2017-02-15",
    blurb:
      "The glowing-brain escalation format spread rapidly in early 2017.",
    source: "https://knowyourmeme.com/memes/expanding-brain",
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
    id: "change-my-mind",
    name: "Change My Mind",
    image: "https://i.imgflip.com/24y43o.jpg",
    viralDate: "2018-03-15",
    blurb:
      "Steven Crowder's campus table sign became an editable hot-take template in early 2018.",
    source: "https://knowyourmeme.com/memes/change-my-mind-steven-crowder",
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
    id: "surprised-pikachu",
    name: "Surprised Pikachu",
    image: "https://i.imgflip.com/2kbn1e.jpg",
    viralDate: "2018-10-15",
    blurb:
      "Open-mouthed Pikachu became the face of feigned shock at obvious outcomes in late 2018.",
    source: "https://knowyourmeme.com/memes/surprised-pikachu",
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
    id: "always-has-been",
    name: "Always Has Been (Among Us)",
    image: "https://i.imgflip.com/46e43q.png",
    viralDate: "2020-10-15",
    blurb:
      "The 'wait, it's all X? Always has been' astronaut format surged with Among Us in late 2020.",
    source: "https://knowyourmeme.com/memes/always-has-been",
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
];
