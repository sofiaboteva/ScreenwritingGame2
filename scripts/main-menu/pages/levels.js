// This script creates the levels page (reachable from the main menu)

import { createBackground } from "../utils.js";
import { MainMenuScenes } from "../main-menu-scenes.js";
import { ChapterId } from "../../chapter/chapter-configs.js";
import { playerContext, resetScores } from "../../context/player-context.js";
import { appContext } from "../../context/ApplicationContext.js";
import { createButton, MENU_BUTTON_HEIGHT } from "../../shared-elements/menu-button.js";

// Links the levels to the display text 

const levelConfigList = {
  [ChapterId.START]: "Level 0: Start",
  [ChapterId.PACHAPTER]: "Level 1: Breaking In",
  [ChapterId.THEPITCH]: "Level 2: Your First Hollywood Gig",
  [ChapterId.PRODUCERSNOTES]: "Level 3: Welcome to Development Hell"
}

function startChapter(chapterId) {
  playerContext.currentChapter = null;
  playerContext.currentQuestion = null;
  resetScores();
  go(chapterId);
}

// Creates buttons for each level 
function createLevelButton(buttonText, chapterId, index) {
  const BUTTON_SPACING = 12;
  const buttonYPos = height() / 4 + (MENU_BUTTON_HEIGHT + BUTTON_SPACING) * index;

  const nextChapter = playerContext.finishedTutorial ? chapterId : ChapterId.TUTORIAL;

  createButton(buttonText, buttonYPos, () => startChapter(nextChapter));

  // TO FINISH LATER  
  // Checking if player already completed the tutorial. If not, proceed to the toturial first

  // button.onClick(() => {
  //   play(SoundId.BUTTON_CLICK);
  //   if (playerContext.tutorialCompleted) {
  //     go(ChapterId.START);
  //   } else {
  //     go(ChapterId.START);
  //   }
  // });

}

// Creates the levels page
export function createLevelsPage() {

  scene(MainMenuScenes.LEVEL_LIST, () => {
    createBackground();

    // Create the heading text
    add([
      text("Where do you want to start?", {
        font: "myfont",
        size: 22,
        align: "center",
        width: appContext.CENTRAL_WIDTH - 2 * appContext.GAME_ZONE_PADDING
      }),
      anchor("center"),
      pos(width() / 2, height() * 0.15)
    ]);

    // Create the buttons for each unlocked level  
    const unlockedLevels = [...playerContext.unlockedLevels.values()];
    Object.entries(levelConfigList).forEach(([chapterId, buttonText], index) => {
      if (unlockedLevels.includes(chapterId)) {
        createLevelButton(buttonText, chapterId, index);
      }
    });

    createButton('Back', 0.85 * height(), () => go(MainMenuScenes.MAIN_MENU));
  });
}