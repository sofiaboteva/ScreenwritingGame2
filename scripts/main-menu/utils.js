// This script sets up the background for the whole game
import { appContext } from "../context/ApplicationContext.js";
import { Background } from "../../assets/img/backgrounds/backgrounds.js";

export function createBackground(backgroundId = Background.DEFAULT) {
  console.log("Creating background with ID:", backgroundId); // Debug log
  
  // Add the background sprite
  add([
    sprite(backgroundId),
    pos(width() / 2, height() / 2),
    anchor("center")
  ]);

  // Add the semi-transparent black overlay for text readability
  add([
    rect(appContext.CENTRAL_WIDTH, appContext.CENTRAL_HEIGHT, { radius: 4 }),
    pos(width() / 2, height() / 2),
    anchor("center"),
    color(0, 0, 0)
  ]);
}