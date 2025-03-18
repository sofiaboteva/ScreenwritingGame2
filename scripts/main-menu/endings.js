// This script creates the endings page (reachable from the main menu)
import { MainMenuScenes } from "./main-menu-scenes.js";
import { createBackground } from "./utils.js";
import { playerContext } from "/scripts/context/player-context.js";

   // Links the endings to the display text
  const endingDisplayText = {
    fameHigh: "Red Carpet Regular",
    fameLow: "Indie Artist",
    egoHigh: "Crazy Genius",
    egoLow: "Lost soul",
    moneyHigh: "Blockbuster Mogul",
    moneyLow: "Pennyless Poet",
    relationshipsHigh: "People Pleaser",
    relationshipsLow: "Lone Wolf",

    // REPLACE
    win1: "Cinema School Star",
    win2: "Young Aspiring Author",
    failedInterview: "Failed Interview",
  };

export const createEndingsPage = () => {

  const HEADING_TEXT_SIZE = 25;
  const ACHIEVEMENT_TEXT_SIZE = 15;

  scene(MainMenuScenes.ENDINGS, () => {
    createBackground();

    // Create the heading text
    const heading = add([
      // Text that shows the number of endings unlocked
      text(`Unlocked Endings: ${playerContext.endingsScore}/13`, {
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
    Object.keys(playerContext.unlockedEndings).forEach((endingKey) => {
      if (playerContext.unlockedEndings[endingKey]) {
        yPosition += 30;
        const displayText = endingDisplayText[endingKey];
        add([
          text(displayText, { size: ACHIEVEMENT_TEXT_SIZE }),
          pos(width() / 2, yPosition),
          anchor("center"),
        ]);
      }
    });

    // Two ways to go back to the main menu 
    onKeyPress("space", () => go(MainMenuScenes.MAIN_MENU));
    onClick(() => go(MainMenuScenes.MAIN_MENU));
  });
}