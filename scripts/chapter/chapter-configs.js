// This script manages the game's narrative structure by defining chapters and
// their first questions. 

// Import questions for each chapter from chapter files
import { breakingIn1 } from "../../assets/chapters/breaking-in.js";
import { chapterStart } from "../../assets/chapters/djStart.js";
import { dj2 } from "../../assets/chapters/dj2.js";
import { buzzChapter } from "../../assets/chapters/buzzchapter.js";
import { dj3 } from "../../assets/chapters/dj3.js";
import { dj4 } from "../../assets/chapters/dj4.js";
import { pachapter } from "../../assets/chapters/pachapter.js";
import { dj5 } from "../../assets/chapters/dj5.js";
import { writingjob } from "../../assets/chapters/writingjob.js";
import { dj6 } from "../../assets/chapters/dj6.js";
import { thepitch } from "../../assets/chapters/thepitch.js";
import { dj7 } from "../../assets/chapters/dj7.js";
import { firstdraft } from "../../assets/chapters/firstdraft.js";
import { dj8 } from "../../assets/chapters/dj8.js";
import { dj9 } from "../../assets/chapters/dj9.js";
import { producersnotes } from "../../assets/chapters/producersnotes.js";
import { directorsnotes } from "../../assets/chapters/directorsnotes.js";
import { strikes } from "../../assets/chapters/strikes.js";
import { moviepremiere } from "../../assets/chapters/moviepremiere.js";
import { agentmeeting } from "../../assets/chapters/agentmeeting.js";
import { tutorial } from "../../assets/chapters/tutorial.js";
import { Background } from "../../assets/img/backgrounds/backgrounds.js"; // Import background images

// Defines identifiers for each chapter

export const ChapterId = {
  TUTORIAL: "tutorial",
  START: "djStart",
  BREAKING_IN1: "breakingin1",
  DJ2: "dj2",
  BUZZCHAPTER: "buzzchapter",
  DJ3: "dj3",
  PACHAPTER: "pachapter",
  DJ4: "dj4",
  AGENTMEETING: "agentmeeting",
  DJ5: "dj5",
  WRITINGJOB: "writingjob",
  DJ6: "dj6",
  THEPITCH: "thepitch",
  DJ7: "dj7",
  FIRSTDRAFT: "firstdraft",
  DJ8: "dj8",
  PRODUCERSNOTES: "producersnotes",
  DJ9: "dj9",
  DIRECTORSNOTES: "directorsnotes",
  STRIKES: "strikes",
  MOVIEPREMIERE: "moviepremiere",
}

// Defines the sequence of chapters in the game, their questions and their first questions

export const CHAPTER_CONFIG_LIST = [

  {
    id: ChapterId.TUTORIAL,
    questions: tutorial,
    firstQuestionIds: ["swipeintro"]
  },
  {
    id: ChapterId.START,
    questions: chapterStart,
    firstQuestionIds: ["start"],
    background: Background.LA
  },
  {
    id: ChapterId.BREAKING_IN1,
    questions: breakingIn1,
    firstQuestionIds: ["breakinginintro"],
    background: Background.LA
  },
  {
    id: ChapterId.DJ2,
    questions: dj2,
    firstQuestionIds: ["salarybar", "parents"],
    background: Background.LA
  },
  {
    id: ChapterId.BUZZCHAPTER,
    questions: buzzChapter,
    firstQuestionIds: ["buzzintro"],
    background: Background.PARTY
  },
  {
    id: ChapterId.DJ3,
    questions: dj3,
    firstQuestionIds: ["salarybar2", "salarybarmore", "salaryparents", "firsthollywoodjob2"],
    background: Background.LA
  },
  {
    id: ChapterId.PACHAPTER,
    questions: pachapter,
    firstQuestionIds: ["producerassistant"],
    background: Background.STUDIO
  },
  {
    id: ChapterId.DJ4,
    questions: dj4,
    firstQuestionIds: ["toothpaste"],
    background: Background.LA
  },
  {
    id: ChapterId.AGENTMEETING,
    questions: agentmeeting,
    firstQuestionIds: ["agentmeetingintro"],
    background: Background.AGENT_OFFICE
  },
  {
    id: ChapterId.DJ5,
    questions: dj5,
    firstQuestionIds: ["polishing1", "polishing2"],
    background: Background.LA
  },
  {
    id: ChapterId.WRITINGJOB,
    questions: writingjob,
    firstQuestionIds: ["landedanagent"],
    background: Background.AGENT_OFFICE
  },
  {
    id: ChapterId.DJ6,
    questions: dj6,
    firstQuestionIds: ["lookingforajob"],
    background: Background.LA
  },
  {
    id: ChapterId.THEPITCH,
    questions: thepitch,
    firstQuestionIds: ["thepitchintro"],
    background: Background.PRODUCERS_OFFICE
  },
  {
    id: ChapterId.DJ7,
    questions: dj7,
    firstQuestionIds: ["theater2", "tirecompany2", "lendmoney"],
    background: Background.LA
  },
  {
    id: ChapterId.FIRSTDRAFT,
    questions: firstdraft,
    firstQuestionIds: ["advancepaymentintro"],
    background: Background.WRITERS_ROOM
  },
  {
    id: ChapterId.DJ8,
    questions: dj8,
    firstQuestionIds: ["burnout1", "burnout2", "payback", "movein"],
    background: Background.LA
  },
  {
    id: ChapterId.PRODUCERSNOTES,
    questions: producersnotes,
    firstQuestionIds: ["producersnotesintro"],
    background: Background.PRODUCERS_OFFICE
  },
  {
    id: ChapterId.DJ9,
    questions: dj9,
    firstQuestionIds: ["movein2", "teaching"],
    background: Background.LA
  },
  {
    id: ChapterId.DIRECTORSNOTES,
    questions: directorsnotes,
    firstQuestionIds: ["directorsnotesintro"],
    background: Background.STUDIO
  },
  {
    id: ChapterId.STRIKES,
    questions: strikes,
    firstQuestionIds: ["strikesintro"],
    background: Background.STRIKES
  },
  {
    id: ChapterId.MOVIEPREMIERE,
    questions: moviepremiere,
    firstQuestionIds: ["moviepremiereintro"],
    background: Background.PREMIERE
  }
];
