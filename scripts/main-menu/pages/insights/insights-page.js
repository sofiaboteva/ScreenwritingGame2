import { createCategoriesListView } from "./views/category-list-view.js";
import { createCategoryViews } from "./views/category-view.js";
import { createInsights } from "./views/insight-view.js";

// Function to create the insights scene
export const createInsightsPage = () => {
  createCategoriesListView();
  createCategoryViews();
  createInsights();
};