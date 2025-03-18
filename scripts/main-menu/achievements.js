import { SoundId } from "../../assets/sounds/sounds.js";
import { MainMenuScenes } from "./main-menu-scenes.js";
import { createBackground } from "./utils.js";
import { appContext } from "/scripts/context/ApplicationContext.js";

export const createAchievements = () => {
  const MENU_BUTTON_WIDTH = 300;
  const MENU_BUTTON_HEIGHT = 80;

  scene(MainMenuScenes.ACHIEVEMENTS, () => {
    createBackground();

    const endingsButton = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
      pos(width() / 2, height() / 4 + (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING)),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  
    endingsButton.add([
      text("Endings", { font: "myfont" }),
      anchor("center"),
      color(0, 0, 0),
    ]);
  
    const rewardsButton = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
      pos(width() / 2, height() / 4 + 2 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING)),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  
    rewardsButton.add([
      text("Rewards", { font: "myfont" }),
      anchor("center"),
      color(0, 0, 0),
    ]);
  
    endingsButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go(MainMenuScenes.ENDINGS);
    });
  
    rewardsButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go(MainMenuScenes.REWARDS);
    });
  });
}