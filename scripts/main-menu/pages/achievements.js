import { SoundId } from "../../../assets/sounds/sounds.js";
import { MainMenuScenes } from "../main-menu-scenes.js";
import { createBackground } from "../utils.js";
import { appContext } from "../../context/ApplicationContext.js";
import { createButton } from "../../components/menu-button.js";
import { setInsightSource } from "../../context/player-context.js";

export const createAchievements = () => {
  const MENU_BUTTON_WIDTH = 300;
  const MENU_BUTTON_HEIGHT = 80;

  scene(MainMenuScenes.ACHIEVEMENTS, () => {
    createBackground();

        // Create the heading text
        add([
          text("Achievements", {
            font: "myfont",
            size: 22,
            align: "center",
            width: appContext.CENTRAL_WIDTH - 2 * appContext.GAME_ZONE_PADDING
          }),
          anchor("center"),
          pos(width() / 2, height() * 0.15)
        ]);

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
  
    const insightsButton = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 2 }),
      pos(width() / 2, height() / 4 + 2 * (MENU_BUTTON_HEIGHT + appContext.BUTTON_SPACING)),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  
    insightsButton.add([
      text("Insights", { font: "myfont" }),
      anchor("center"),
      color(0, 0, 0),
    ]);
  
    endingsButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go(MainMenuScenes.ENDINGS);
    });
  
    insightsButton.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      setInsightSource('menu');
      go(MainMenuScenes.INSIGHTS);
    });

    createButton('Back', height() - 100, () => go(MainMenuScenes.MAIN_MENU));
  });
}