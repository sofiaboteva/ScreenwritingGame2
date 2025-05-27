kaboom({
  background: [0, 0, 0],
  width: window.innerWidth,
  height: window.innerHeight,
  root: document.getElementById("game-container"),
});

// Import question data from external scripts.
import { Chapter } from "./chapter/chapter.js";
import { createCharacteristicOutboundEnding, EndingId } from "./endings/characteristic-outbound-endings.js";
import { createMainMenu } from "./main-menu/main-menu.js";
import { loadAssets } from "../assets/assets.js";
import { initializeProdPlayer, initializeTestPlayer } from "./context/player-context.js";
import { createExpandedEnding, ExpandedEndingId } from "./endings/expanded-ending.js";
import { createReplayabilityTeaser } from "./endings/replayability-teaser.js";
import { CHAPTER_CONFIG_LIST } from "./chapter/chapter-configs.js";
import { MainMenuScenes } from "./main-menu/main-menu-scenes.js";
import { craeteGoodEnding } from "./endings/good-ending.js";

loadAssets();

// initializeTestPlayer();
// use this function instead for a prod player
initializeProdPlayer();

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
