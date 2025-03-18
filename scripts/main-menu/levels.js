// This script creates the levels page (reachable from the main menu)

import { createBackground } from "./utils.js";
import { MainMenuScenes } from "./main-menu-scenes.js";
import { ChapterId } from "../chapter/chapter-configs.js";
import { playerContext } from "../context/player-context.js";
import { appContext } from "../context/ApplicationContext.js";
import { SoundId } from "../../assets/sounds/sounds.js";

// Links the levels to the display text 

const levelConfigList = {
  [ChapterId.START]: "Level 0: Start",
  [ChapterId.PACHAPTER]: "Level 1: Breaking In",
  [ChapterId.THEPITCH]: "Level 2: Your First Hollywood Gig",
  [ChapterId.PRODUCERSNOTES]: "Level 3: Welcome to Development Hell"
}

// Creates buttons for each level 
function createLevelButton(buttonText, chapterId, index) {
  const MENU_BUTTON_WIDTH = 300;
  const MENU_BUTTON_HEIGHT = 80;
  const BUTTON_PADDING = 12;
  const BUTTON_SPACING = 12;

  const buttonYPos = height() / 4 + (MENU_BUTTON_HEIGHT + BUTTON_SPACING) * index;

  // Create the button
  const button = add([
    rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 4 }),
    pos(width() / 2, buttonYPos),
    area(),
    scale(1),
    anchor("center"),
    outline(4),
  ]);

  // Create the text on the button  
  button.add([
    text(buttonText, {
      width:  MENU_BUTTON_WIDTH - 2 * BUTTON_PADDING,
      font: "myfont",
      size: 20,
      wrap: true,
      align: "center"
    }),
    anchor("center"),
    color(0, 0, 0),
  ]);

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

  button.onClick(() => {
    play(SoundId.BUTTON_CLICK);
    go(chapterId);
  });
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
    const unlockedLevels =[...playerContext.unlockedLevels.values()];
    Object.entries(levelConfigList).forEach(([chapterId, buttonText], index) => {
      if (unlockedLevels.includes(chapterId)) {
        createLevelButton(buttonText, chapterId, index);
      }
    });
  });
}