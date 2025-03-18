kaboom({
  background: [0, 0, 0],
  width: window.innerWidth,
  height: window.innerHeight,
  root: document.getElementById("game-container"),
});

// Import question data from external scripts.
import { Chapter } from "/scripts/chapter/chapter.js";
import { createCharacteristicOutboundEnding, EndingId } from "./endings/characteristic-outbound-endings.js";
import { createMainMenu } from "/scripts/main-menu/main-menu.js";
import { loadAssets } from "/assets/assets.js";
import { playerContext, resetScores } from "./context/player-context.js";
import { createExpandedEnding, ExpandedEndingId } from "./endings/expanded-ending.js";
import { createReplayabilityTeaser } from "./endings/replayability-teaser.js";
import { CHAPTER_CONFIG_LIST, ChapterId } from "./chapter/chapter-configs.js";
import { MainMenuScenes } from "./main-menu/main-menu-scenes.js";
import { craeteGoodEnding } from "./endings/good-ending.js";

loadAssets();

resetScores();

// LEVEL MANAGEMENT
// For testing purposes, all levels are unlocked.

const allLevels = new Set([ChapterId.START, ChapterId.PACHAPTER, ChapterId.THEPITCH, ChapterId.PRODUCERSNOTES]);
// const defaultStart = new Set([ChapterId.START]);
playerContext.unlockedLevels = allLevels;
// playerContext.riskyChoicesMade = 0;
// playerContext.artisticIntegrityScore = 0;

createMainMenu();

// Creates a new Chapter instance for each configuration in the CHAPTER_CONFIG_LIST
CHAPTER_CONFIG_LIST.forEach(chapterConfig => new Chapter(chapterConfig));

// Creates all characteristic outbound endings
Object.values(EndingId).forEach(endingId => createCharacteristicOutboundEnding(endingId));

// Creates all expanded endings
Object.values(ExpandedEndingId).forEach(expandedEndingId => createExpandedEnding(expandedEndingId));

// Creates the good ending
craeteGoodEnding();

// Creates the replayability teaser
createReplayabilityTeaser();

// Starts the main menu scene
go(MainMenuScenes.MAIN_MENU);
