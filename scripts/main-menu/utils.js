// This script sets up the background for the whole game
import { appContext } from "/scripts/context/ApplicationContext.js";


export function createBackground() {
  add([
    sprite("screenwriter", { width: width(), anchor: "bottom" }),
    pos(width() / 2, height() / 2),
    anchor("center")
  ]);

  add([
    rect(appContext.CENTRAL_WIDTH, appContext.CENTRAL_HEIGHT, { radius: 4 }),
    pos(width() / 2, height() / 2),
    anchor("center"),
    color(0, 0, 0)
  ]);
}