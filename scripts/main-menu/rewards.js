import { MainMenuScenes } from "./main-menu-scenes.js";
import { createBackground } from "./utils.js";
import { playerContext } from "/scripts/context/player-context.js";

// Links the rewards to the display text
const rewardDisplayText = {
  riskTaker: "Risk Taker",
  bigHead: "Big Head",
  artisticIntegrity: "Artistic Integrity",
};

// Function to create the rewards scene
export const createRewards = () => {
  const HEADING_TEXT_SIZE = 25;
  const REWARD_TEXT_SIZE = 15;

  scene(MainMenuScenes.REWARDS, () => {
    createBackground();

    const heading = add([
      text(`Unlocked Rewards: `, {
        wrap: true,
        size: HEADING_TEXT_SIZE,
        font: "myfont",
      }),
      pos(width() / 2, height() * 0.17),
      anchor("center"),
    ]);

    let yPosition = heading.pos.y + 50;

    // For each unlocked reward, create a text element
    Object.keys(playerContext.unlockedRewards).forEach((rewardKey) => {
      if (playerContext.unlockedRewards[rewardKey]) {
        yPosition += 50;
        const displayText = rewardDisplayText[rewardKey];
        add([
          text(displayText, { size: REWARD_TEXT_SIZE }),
          pos(width() / 2, yPosition),
          anchor("center"),
        ]);
      }
    });

    onKeyPress("space", () => go(MainMenuScenes.MAIN_MENU));
    onClick(() => go(MainMenuScenes.MAIN_MENU));
  });
}