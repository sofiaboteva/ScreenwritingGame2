import { SoundId } from "../../../../../assets/sounds/sounds.js";
import { MainMenuScenes } from "../../../main-menu-scenes.js";
import { insightCategoryConfigs } from "../constants.js";
import { calculateTitlePosition, createBackButton } from "../utils.js";

function calculatePosition(index) {
  const xStep = width() / 3;
  const yStep = height() / 4;
  const x = index % 2;
  const y = Math.floor(index / 2);

  return { x: xStep * (x - 0.5), y: -height() / 5 + y * yStep }
}

export const createCategoriesListView = () => {

  scene(MainMenuScenes.INSIGHTS, () => {
    const insightsPage = add([
      rect(width(), height()),
      pos(width() / 2, height() / 2),
      z(1000),
      area(),
      anchor("center"),
      color(0, 0, 0),
    ]);

    insightsPage.add([
      text("Unlocked Insights", {
        font: "myfont"
      }),
      pos(0, calculateTitlePosition()),
      color(255, 255, 255),
      anchor("center")
    ]);

    Object.entries(insightCategoryConfigs)
      .forEach((categoryConfig, index) => {

        const position = calculatePosition(index);
        const button = insightsPage.add([
          rect(width() / 4.5, height() / 4.5, { radius: 8 }),
          color(100, 100, 100),
          area(),
          anchor("center"),
          pos(position.x, position.y)
        ]);

        button.add([
          text(categoryConfig[1].title, {
            font: "myfont",
            wrap: true,
            width: width() / 4.5 - 30,
            align: "center"
          }),
          color(255, 255, 255),
          anchor("center")
        ]);

        button.onClick(() => {
          play(SoundId.BUTTON_CLICK);
          const categoryId = categoryConfig[0];

          go(categoryId);
        });
      });
    createBackButton(insightsPage, () => go(MainMenuScenes.ACHIEVEMENTS));
  });
}