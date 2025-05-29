// This script creates the endings page (reachable from the main menu)
import { MainMenuScenes } from "../main-menu-scenes.js";
import { createBackground } from "../utils.js";
import { playerContext } from "../../context/player-context.js";
import { createButton } from "../../components/menu-button.js";

// Links the endings to the display text
const endingDisplayText = {
  egoHigh: "Crazy Genius",
  egoLow: "Lost soul",
  moneyHigh: "Blockbuster Mogul",
  moneyLow: "Pennyless Poet",
  relationshipsHigh: "People Pleaser",
  relationshipsLow: "Lone Wolf",
  win1: "You Made It… Kinda",
  win2: "Solid Career",
  win3: "Hollywood Star",
  blacklisted: "Blacklisted"
};

export const createEndingsPage = () => {
  const HEADING_TEXT_SIZE = 25;
  const ACHIEVEMENT_TEXT_SIZE = 15;

  scene(MainMenuScenes.ENDINGS, () => {
    createBackground();

    // Create the heading text
    const heading = add([
      text(`Unlocked Endings: ${playerContext.endingsScore}/10`, {
        wrap: true,
        size: HEADING_TEXT_SIZE,
        font: "myfont",
      }),
      pos(width() / 2, height() * 0.17),
      anchor("center"),
    ]);

    // Create the text for each ending
    let yPosition = heading.pos.y + 50;

    // Display the endings that have been unlocked 
    Object.entries(playerContext.unlockedEndings).forEach(([endingKey, isUnlocked]) => {
      if (isUnlocked && endingDisplayText[endingKey]) {
        yPosition += 30;
        add([
          text(endingDisplayText[endingKey], { 
            size: ACHIEVEMENT_TEXT_SIZE,
            font: "myfont"
          }),
          pos(width() / 2, yPosition),
          anchor("center"),
        ]);
      }
    });

    // Two ways to go back to the achievements page
    onKeyPress("space", () => go(MainMenuScenes.ACHIEVEMENTS));
    onClick(() => go(MainMenuScenes.ACHIEVEMENTS));

    createButton('Back', 0.85 * height(), () => go(MainMenuScenes.ACHIEVEMENTS));
  });
}