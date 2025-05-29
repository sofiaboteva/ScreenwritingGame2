import { MainMenuScenes } from "../main-menu/main-menu-scenes.js";
import { createButton } from "./menu-button.js";

let visible = false;

export function createLeaveToMenuPopup() {
  const POPUP_WIDTH = width() / 2;
  const POPUP_HEIGHT = height() / 2;
  const POPUP_PADDING = 12;

  visible = false;

  const overlay = add([
    rect(POPUP_WIDTH, POPUP_HEIGHT, { radius: 8 }),
    pos(width() / 2, height() / 2),
    area(),
    z(1000),
    color(0, 0, 0),
    anchor("center"),
  ]);

  overlay.add([
    text("Leave to the main menu? The progress will be saved", {
      width: POPUP_WIDTH - POPUP_PADDING * 2,
      wrap: true,
      size: 24,
      font: "myfont",
      align: "center"
    }),
    pos(0, -POPUP_HEIGHT / 2 + 80),
    anchor("center"),
    z(1001)
  ])

  const leaveGameButton = createButton(
    "Yes",
    -height() * 0.03,
    () => go(MainMenuScenes.MAIN_MENU),
    {
      parent: overlay,
      z: 1001
    }
  );

  const stayButton = createButton(
    "No",
    height() * 0.1,
    () => setVisibility(false),
    {
      parent: overlay,
      z: 1001
    }
  )

  function setVisibility(visibility) {
    if (visibility) {
      visible = true;
      overlay.hidden = false;
      leaveGameButton.setVisible(true);
      stayButton.setVisible(true);
      return;
    }
    visible = false;
    overlay.hidden = true;
    leaveGameButton.setVisible(false);
    stayButton.setVisible(false);
  }

  function toggle() {
    setVisibility(!visible);
  }

  setVisibility(false);

  return { overlay, toggle };
}