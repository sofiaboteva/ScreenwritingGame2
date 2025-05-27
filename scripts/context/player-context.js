import { ChapterId } from "../chapter/chapter-configs.js";
import { insightList } from "../main-menu/pages/insights/constants.js";

export const playerContext = {
  currentChapter: null,
  currentQuestion: null,
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
  playerContext.unlockedLevels = new Set([ChapterId.START, ChapterId.PACHAPTER, ChapterId.THEPITCH, ChapterId.PRODUCERSNOTES]);
  resetScores();
}

export function initializeProdPlayer() {
  playerContext.finishedTutorial = false;
  playerContext.unlockedInsights = [];
  playerContext.unlockedLevels = new Set([ChapterId.START]);
  resetScores();
}

export function setInsightSource(source) {
  playerContext.insightOpenedFrom = source;
}

export function clearInsightSource() {
  playerContext.insightOpenedFrom = null;
}