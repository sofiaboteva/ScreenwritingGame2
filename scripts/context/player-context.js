import { ChapterId } from "../chapter/chapter-configs.js";
import { insightList } from "../main-menu/pages/insights/constants.js";

export const playerContext = {
  currentChapter: null,
  currentQuestion: null,
  currentAnswer: null,
  isInOutcomeMode: false,
  rewardText: null,
  finishedTutorial: true,
  unlockedInsights: [],
  insightOpenedFrom: null,
  scores: {
    skills: 0,
    ego: 0,
    money: 0,
    relationships: 0
  },
  perks: [],
  unlockedLevels: null,

  // Lists of achievements
  unlockedEndings: {
    egoHigh: false,
    egoLow: false,
    moneyHigh: false,
    moneyLow: false,
    relationshipsHigh: false,
    relationshipsLow: false,
    fameHigh: false,
    fameLow: false,
    win1: false,
    win2: false,
    blacklisted: false,
  },
  endingsScore: 0,
};

export function resetScores() {
  playerContext.scores.skills = 50;
  playerContext.scores.ego = 50;
  playerContext.scores.money = 50;
  playerContext.scores.relationships = 50;
}

export function addPerk(perk) {
  playerContext.perks.push(perk);
}

export function removePerk(perksToRemove) {
  const index = playerContext.perks.indexOf(perksToRemove);
  if (index > -1) {
    playerContext.perks.splice(index, 1);
  }
}

export function unlockInsight(insight) {
  playerContext.unlockedInsights.push(insight);
}

export function initializeTestPlayer() {
  playerContext.finishedTutorial = true;
  playerContext.unlockedInsights = Object.keys(insightList);
  playerContext.unlockedLevels = [ChapterId.START, ChapterId.PACHAPTER, ChapterId.THEPITCH, ChapterId.PRODUCERSNOTES];
  resetScores();
}

export function initializeProdPlayer() {
  playerContext.finishedTutorial = false;
  playerContext.unlockedInsights = [];
  playerContext.unlockedLevels = [ChapterId.START];
  resetScores();
}

export function setInsightSource(source) {
  playerContext.insightOpenedFrom = source;
}

export function clearInsightSource() {
  playerContext.insightOpenedFrom = null;
}

export function resetSave() {
  playerContext.currentChapter = null;
  playerContext.currentQuestion = null;
  playerContext.currentAnswer = null;
  playerContext.isInOutcomeMode = false;
}

export function saveProgress(currentChapter, currentQuestion) {
  playerContext.currentChapter = currentChapter;
  playerContext.currentQuestion = currentQuestion;
}

export function saveOutcomeInfotmation(answer) {
  playerContext.isInOutcomeMode = true;
  playerContext.currentAnswer = answer;
}

export function resetOutcomeInfotmation() {
    playerContext.isInOutcomeMode = false;
  playerContext.currentAnswer = null;
}

export function hasOutcomeInformation() {
  return playerContext.isInOutcomeMode && playerContext.currentAnswer;
}