import { SoundId } from "../../../../../assets/sounds/sounds.js";
import { playerContext } from "../../../../context/player-context.js";
import { MainMenuScenes } from "../../../main-menu-scenes.js";
import { insightCategoryConfigs, insightList } from "../constants.js";
import { calculateTitlePosition, createBackButton } from "../utils.js";

function calculateInsightPosition(index) {
  const colNumber = 3;
  const xStep = width() / 3.5;
  const yStep = height() / 6;
  const x = index % colNumber;
  const y = Math.floor(index / colNumber);

  return { x: xStep * (x - 1), y: y * yStep }
}

export const createCategoryViews = () => {
  Object.entries(insightCategoryConfigs).forEach(([categoryId, categoryConfig]) => {
    console.log("creating", categoryId);
    scene(categoryId, () => {
      createCategoryView(categoryId, categoryConfig);
    })
  });
}

const createCategoryView = (category, categoryConfig) => {

  const view = add([
    rect(width(), height()),
    pos(width() / 2, height() / 2),
    z(1000),
    area(),
    anchor("center"),
    color(0, 0, 0),
  ]);

  view.add([
    text(categoryConfig.title, {
      font: "myfont"
    }),
    pos(0, calculateTitlePosition()),
    color(255, 255, 255),
    anchor("center")
  ]);

  view.add([
    text(categoryConfig.description, {
      font: "myfont",
      width: width() * 0.8,
      wrap: true,
      align: "center",
      size: 18
    }),
    pos(0, calculateTitlePosition() + 50),
    color(255, 255, 255),
    anchor("top")
  ]);

  Object.entries(insightList)
    .filter(([_, insightConfig]) => category === insightConfig.category)
    .filter(([insightId, _]) => playerContext.unlockedInsights.includes(insightId))
    .forEach(([insightId, insightConfig], index) => {
      const position = calculateInsightPosition(index);

      const button = view.add([
        rect(width() / 4.5, height() / 8, { radius: 8 }),
        color(100, 100, 100),
        area(),
        anchor("center"),
        pos(position.x, position.y)
      ]);

      button.add([
        text(insightConfig.title, {
          font: "myfont",
          wrap: true,
          width: width() / 4.5 - 30,
          align: "center",
          size: 20
        }),
        color(255, 255, 255),
        anchor("center")
      ]);

      button.onClick(() => {
        play(SoundId.BUTTON_CLICK);

        go(insightId);
      });
    });

  createBackButton(view, () => go(MainMenuScenes.INSIGHTS));
};
