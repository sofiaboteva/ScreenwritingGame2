// This script creates the start page

import { SoundId } from "../../../assets/sounds/sounds.js";
import { playerContext, resetScores } from "../../context/player-context.js";
import { MainMenuScenes } from "../main-menu-scenes.js";
import { createBackground } from "../utils.js";
import { appContext } from "../../context/ApplicationContext.js";
import { ChapterId } from "../../chapter/chapter-configs.js";

const MENU_BUTTON_WIDTH = 300;
const MENU_BUTTON_HEIGHT = 80;

const createMenuButton = (buttonText, yPos, toScene, disabled = false) => {
  const button = add([
    rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
    pos(width() / 2, yPos),
    area(),
    scale(1),
    anchor("center"),
    outline(4),
  ]);

  button.add([
    text(buttonText, { font: "myfont" }),
    anchor("center"),
    color(0, 0, 0)
  ]);

  button.color = disabled ? rgb(100, 100, 100) : rgb(255, 255, 255);
  
  if (!disabled) {
    button.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go(toScene);
    });
  }
  return button;
}

export const createStart = () => {
  const GAME_TITLE_TEXT_SIZE = 30;

  // Main menu scene
  scene(MainMenuScenes.MAIN_MENU, () => {
    createBackground();

    add([
      text("Between the Lines : A Screenwriter's Journey.", {
        width: appContext.CENTRAL_WIDTH - appContext.GAME_ZONE_PADDING,
        wrap: true,
        size: GAME_TITLE_TEXT_SIZE,
        font: "myfont",
        align: "center"
      }),
      pos(width() / 2, height() * 0.15),
      anchor("center"),
    ]);

    const hasGameSaved = !playerContext.currentChapter;

    createMenuButton(
      "Continue",
      height() / 4 + 1 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING),
      playerContext.currentChapter,
      hasGameSaved
    );

    createMenuButton(
      "New game",
      height() / 4 + 2 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING),
      MainMenuScenes.LEVEL_LIST
    );

    createMenuButton(
      "Achievements",
      height() / 4 + 3 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING),
      MainMenuScenes.ACHIEVEMENTS
    );
  });
}