import { createAchievements } from "./pages/achievements.js";
import { createEndingsPage } from "./pages/endings.js";
import { createInsightsPage } from "./pages/insights/insights-page.js";
import { createLevelsPage } from "./pages/levels.js";
import { createStart } from "./pages/start.js";


// Initialize all main menu pages
export const createMainMenu = () => {
  createStart();
  createLevelsPage();
  createInsightsPage();
  createEndingsPage();
  createAchievements();
}