// This script creates the start page

import { SoundId } from "../../assets/sounds/sounds.js";
import { resetScores } from "../context/player-context.js";
import { MainMenuScenes } from "./main-menu-scenes.js";
import { createBackground } from "./utils.js";
import { appContext } from "/scripts/context/ApplicationContext.js";

export const createStart = () => {
  const GAME_TITLE_TEXT_SIZE = 30;
  const MENU_BUTTON_WIDTH = 300;
  const MENU_BUTTON_HEIGHT = 80;

  // Main menu scene
  scene(MainMenuScenes.MAIN_MENU, () => {
    createBackground();

    resetScores();

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
  
    const tutorialButton = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
      pos(width() / 2, height() / 4 + (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING)),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  
    const startButton = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
      pos(width() / 2, height() / 4 + 2 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING)),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  
    const AchievementsButton = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
      pos(width() / 2, height() / 4 + 3 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING)),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  
    tutorialButton.add([
      text("Tutorial", { font: "myfont" }),
      anchor("center"),
      color(0, 0, 0),
    ]);

    startButton.add([
      text("Start", { font: "myfont" }),
      anchor("center"),
      color(0, 0, 0),
    ]);

    AchievementsButton.add([
      text("Achievements", { font: "myfont" }),
      anchor("center"),
      color(0, 0, 0),
    ]);
  
    tutorialButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go("tutorial");
    });

    startButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go(MainMenuScenes.LEVEL_LIST);
    });
  
    AchievementsButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go(MainMenuScenes.ACHIEVEMENTS);
    });
  });
}