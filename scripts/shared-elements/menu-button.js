import { SoundId } from "../../assets/sounds/sounds.js";

export const MENU_BUTTON_WIDTH = 300;
export const MENU_BUTTON_HEIGHT = 80;
export const BUTTON_PADDING = 12;

export function createButton(buttonText, buttonYPos, clickCallback, options) {
  let buttonObj;
  let isVisible = true;
  if (options?.parent) {
    buttonObj = options.parent.add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 4 }),
      pos(0, buttonYPos),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  } else {
    buttonObj = add([
      rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, { radius: 4 }),
      pos(width() / 2, buttonYPos),
      area(),
      scale(1),
      anchor("center"),
      outline(4),
    ]);
  }

  if (options?.z) {
    buttonObj.z = options.z;
  }

  // Create the text on the button  
  const textObj = buttonObj.add([
    text(buttonText, {
      width: MENU_BUTTON_WIDTH - 2 * BUTTON_PADDING,
      font: "myfont",
      size: options?.size ?? 20,
      wrap: true,
      align: "center"
    }),
    anchor("center"),
    color(0, 0, 0),
  ]);

  buttonObj.onClick(() => {
    if (isVisible) {
      play(SoundId.BUTTON_CLICK);
      clickCallback();
    }
  });

  function setVisible(visible) {
    if (visible) {
      buttonObj.hidden = false;
      textObj.hidden = false;
      isVisible = true;
      return;
    }
    buttonObj.hidden = true;
    textObj.hidden = true;
    isVisible = false;
  }

  return { buttonObj, setVisible };
}
