import { createAchievements } from "./achievements.js";
import { createEndingsPage } from "./endings.js";
import { createLevelsPage } from "./levels.js";
import { createRewards } from "./rewards.js";
import { createStart } from "./start.js";

// Initialize all main menu pages
export const createMainMenu = () => {
  createStart();
  createLevelsPage();
  createRewards();
  createEndingsPage();
  createAchievements();
}