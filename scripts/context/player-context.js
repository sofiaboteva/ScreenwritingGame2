export let playerContext = {
  riskyChoicesMade: 0,
  artisticIntegrityScore: 0,
  rewardText: null,
  tutorialCompleted: false,
  unlockedRewards: {
    riskTaker: false,
    bigHead: false,
    artisticIntegrity: false,
  },
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
    failedInterview: false,
  },
  endingsScore: 0,
};

export function resetScores() {
  playerContext.scores.skills = 50;
  playerContext.scores.ego = 50;
  playerContext.scores.money = 50;
  playerContext.scores.relationships = 50;
}