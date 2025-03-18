// This script creates the replayability teaser
import { Chapter } from "../chapter/chapter.js";

const REPLAYABILITY_TEASER_ID = "replayabilityTeaser";

const questions = {
  [REPLAYABILITY_TEASER_ID]: {
    id: REPLAYABILITY_TEASER_ID,
    character: "InnerVoice",
    text: "Replay to uncover the other ways to fail in your screenwriting career. Or, who knows? With persistence, you may even succeed.",
    leftAnswer: {
      text: "Challenge accepted.",
      nextScene: "levelList",
    },
    rightAnswer: {
      text: "Maybe not this time.",
      nextScene: "mainMenu"
    }
  }
};

const sceneConfig = {
  id: REPLAYABILITY_TEASER_ID,
  questions: questions,
  firstQuestionIds: [REPLAYABILITY_TEASER_ID]
};

export const createReplayabilityTeaser = () => {
  new Chapter(sceneConfig);
};