import { insightList } from "../constants.js";
import { calculateTitlePosition, createBackButton } from "../utils.js";
import { playerContext, clearInsightSource } from "../../../../context/player-context.js";
import { createButton } from "../../../../components/menu-button.js";

export const createInsights = () => {
  Object.entries(insightList).forEach(([insightId, insightConfig]) => {
    scene(insightId, () => {
      createInsightView(insightConfig);
    });
  });
}

export const createInsightView = (insightConfig) => {
  const view = add([
    rect(width(), height()),
    pos(width() / 2, height() / 2),
    z(1000),
    area(),
    anchor("center"),
    color(0, 0, 0),
  ]);

  view.add([
    text(insightConfig.title, {
      font: "myfont"
    }),
    pos(0, calculateTitlePosition()),
    color(255, 255, 255),
    anchor("center")
  ]);

  view.add([
    text(insightConfig.body, {
      font: "myfont",
      width: width() * 0.8,
      wrap: true,
      align: "left",
      size: 18
    }),
    pos(0, calculateTitlePosition() + 50),
    color(255, 255, 255),
    anchor("top")
  ]);
  
  // Conditional navigation based on source
  if (playerContext.insightOpenedFrom === 'game') {
    // Show only Continue button to return to game
    createButton('Continue', height() * 0.4, () => {
      clearInsightSource();
      go(playerContext.currentChapter);
    }, { parent: view, z: 1001 });
  } else {
    // Show only Back button for menu navigation
    createBackButton(view, () => go(insightConfig.category));
  }

  return view;
};