// This script manages the interactive card interface

import { appContext } from "/scripts/context/ApplicationContext.js";
import { eventBus, EVENTS } from "/scripts/chapter/event-bus.js";
import { SoundId } from "../../assets/sounds/sounds.js";

// Defines the possible answer directions for the card 
export const CardAnswer = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
}

// The width of the answer boxes
const ANSWER_CARD_WIDTH = window.innerWidth * 0.31;
const TEXT_ANSWER_PADDING = ANSWER_CARD_WIDTH * 0.02;

// Main card dimensions
const CARD_OBJ_WIDTH = appContext.CENTRAL_WIDTH - appContext.GAME_ZONE_PADDING * 2;
const CARD_OBJ_HEIGHT = CARD_OBJ_WIDTH;

export class Card {
  // Defines class properties
  #isDragging = false;
  #cardOriginalPos = vec2(width() / 2,  height() * (1 / 2 + 0.05));
  #startMousePos;
  #startCardPos;

  #cardObj;
  #cardTextObj;

  #rightRect; // Boxes that contain the answers
  #leftRect;
  #rightText;
  #leftText;
  #leftAnswer;
  #rightAnswer;

  isInOutcomeMode = false;

  constructor() {
    this.#initializeCardObj();
    this.#initializeAnswerCards();
    this.#setupCardDrag();
  }

  // Shows the outcome, hides the answers and the character
  showOutcome(outcomeText) {
    if (!this.isInOutcomeMode) {
      this.isInOutcomeMode = true;
      this.#leftText.text = '';
      this.#rightText.text = '';
      this.#cardTextObj.text = outcomeText;
      this.setCharacter('outcome');
    }
  }

  // Show the ending
  showEnding(endingText) {
    this.#cardTextObj.text = endingText;
    this.setCharacter('outcome');
  }

  // Set the answers for the new question
  setAnswers(leftAnswer, rightAnswer) {
    this.isInOutcomeMode = false;
    this.#leftAnswer = leftAnswer; // Stores answers data
    this.#rightAnswer = rightAnswer;
    this.#rightText.text = rightAnswer.text;
    this.#leftText.text = leftAnswer.text;
    this.#cardTextObj.text = ''; 
    this.#adjustTextHeights();  // Adjusts the height of answer boxes
  }

  setCharacter(spriteName) {
    if (this.#cardObj && spriteName) { // Checks if the card object exists 
    // and if the sprite name is provided
      this.#cardObj.use(sprite(spriteName, {
        // Sets the dimensions of the sprite
        width: CARD_OBJ_WIDTH, 
        height: CARD_OBJ_HEIGHT
      }));
    }
  }

  // Sets up the drag system
  #setupCardDrag() {
    // Coefficiens that control movement sensitivity
    const CARD_HORIZONTAL_DRAG_COEFFICIENT = 0.8; 
    const CARD_VERTICAL_DRAG_COEFFICIENT = 0.5;
    // Controls how much the card tilts
    const TILT_CARD_COEEFICIENT = 30.0;

    // Initialize starting positions for tracking drag
    this.#startMousePos = vec2(0, 0);
    this.#startCardPos = vec2(0, 0);

    
    onMouseDown(() => {
      // Start dragging only if mouse is over card and not already dragging
      if (this.#cardObj.isHovering() && this.#isDragging === false) {
        play(SoundId.CARD_FLIP);
        this.#isDragging = true;

        // Record the initial mouse and card positions
        this.#startMousePos = mousePos();
        this.#startCardPos = { ...this.#cardObj.pos };
      }
    });

    // Handle continuous card movement while dragging 
    onUpdate(() => {
      if (this.#isDragging) {
        const currentMousePos = mousePos();
        // Calculate how much the mouse has moved horizontally relative to screen width
        const relativeHorizontalDrag = (currentMousePos.x - this.#startMousePos.x) / width();
        
        // calculate horizontal card drag
        const cardOffsetX = relativeHorizontalDrag * CARD_HORIZONTAL_DRAG_COEFFICIENT * width();
        this.#cardObj.pos.x = this.#startCardPos.x + cardOffsetX;
        // calculate vertical card drag
        const verticalDrag = (currentMousePos.y - this.#startMousePos.y);
        const cardOffsetY = verticalDrag * CARD_VERTICAL_DRAG_COEFFICIENT;
        this.#cardObj.pos.y = this.#startCardPos.y + cardOffsetY;

        // calculate card tilt and distortion
        this.#cardObj.angle = relativeHorizontalDrag * TILT_CARD_COEEFICIENT;

        // If it is not an outcome, update the opacity of the answers boxes
        if (!this.isInOutcomeMode) {
          this.#updateAnswersOpacity(relativeHorizontalDrag);
        }
      }
    });

    // Handle when player releases the card
    onMouseRelease(() => {
      if (this.#isDragging) {
        this.#isDragging = false;

        // Reset the card position and angle
        this.#cardObj.pos = vec2(this.#cardOriginalPos.x, this.#cardOriginalPos.y);
        this.#cardObj.angle = 0;

        // Check if the card was released to the right or left
        this.#releaseCardDragCallback();
      }
    });
  }

  // Updates the opacity of the answer based on the card's position
  #updateAnswersOpacity(relativeHorizontalDrag) {
    const OPACITY_GAIN_COEFFICIENT = 4; // How quickly the opacity increases
    const MAX_ANSWER_OBJ_OPACITY = 1.0; 

    // If the card is dragged to the right (positive movement), 
    // increase the opacity of the right answer
    if (relativeHorizontalDrag > 0) {
      // Calculate the opacity based on the card's position, 
      // but don't exceed the maximum opacity
      const opacity = Math.min(OPACITY_GAIN_COEFFICIENT * relativeHorizontalDrag, 1);
      this.#rightRect.opacity = opacity * MAX_ANSWER_OBJ_OPACITY;
      this.#rightText.opacity = opacity;
    }
    // If the card is dragged to the right (positive movement), 
    // increase the opacity of the right answer
    if (relativeHorizontalDrag < 0) {
      const opacity = Math.min(OPACITY_GAIN_COEFFICIENT * relativeHorizontalDrag * (-1), 1);
      this.#leftRect.opacity = opacity * MAX_ANSWER_OBJ_OPACITY;
      this.#leftText.opacity = opacity;
    }
  }

  // Adjusts the height of the answer boxes to fit the longest text
  #adjustTextHeights() {
    // Find which text is taller between right and left answers
    const longestTextHeight = Math.max(this.#rightText.height, this.#leftText.height);
    // Set the height of both boxes to the height of the tallest text
    const newHeight = longestTextHeight + TEXT_ANSWER_PADDING * 2;
    this.#rightRect.height = newHeight;
    this.#leftRect.height = newHeight;
  }

  // Check if the card was released to the right or left
  #releaseCardDragCallback() {
    this.#resetCard();
    this.#resetOpacities();

    // TODO: make the 200 relative to the screen width
    // If the card is dragged more than 200 pixels right (> 1), it triggers the RIGHT answer
    const isRightAnswer = ((mousePos().x - this.#startMousePos.x) / 200) > 1;
    if (isRightAnswer) {
      play(SoundId.CARD_ACCEPT);
      // Triggers the callback to pass the answer to the chapter
      eventBus.trigger(EVENTS.ANSWER_SELECTED_EVENT, { answer: CardAnswer.RIGHT });
      return;
    }

    // If the card is dragged more than 200 pixels left (< -1), it triggers the LEFT answer
    const isLeftAnswer = (-1 * (mousePos().x - this.#startMousePos.x) / 200) > 1;
    if (isLeftAnswer) {
      play(SoundId.CARD_ACCEPT);
      eventBus.trigger(EVENTS.ANSWER_SELECTED_EVENT, { answer: CardAnswer.LEFT });
    }
  }

  // Resets the card position and angle
  #resetCard() {
    this.#cardObj.pos = vec2(this.#cardOriginalPos.x, this.#cardOriginalPos.y);
    this.#cardObj.angle = 0;
  }

  // Resets the opacities of the answer boxes
  #resetOpacities() {
    this.#rightRect.opacity = 0;
    this.#rightText.opacity = 0;
    this.#leftRect.opacity = 0;
    this.#leftText.opacity = 0;
  }

  #initializeCardObj() {
    const CARD_OBJ_HEIGHT = 400;
    const CARD_TEXT_SIZE = 18;
    const CARD_OBJ_PADDING = 30;

    // Add the back of the card
    add([
      sprite("back", {
        width: CARD_OBJ_WIDTH,
        height: CARD_OBJ_HEIGHT
      }),
      pos(this.#cardOriginalPos.x, this.#cardOriginalPos.y),
      anchor("center")
    ]);

    this.#cardObj = add([
      sprite("character", {
        width: CARD_OBJ_WIDTH,
        height: CARD_OBJ_HEIGHT
      }),
      z(10),
      pos(this.#cardOriginalPos.x, this.#cardOriginalPos.y),
      area(),
      anchor("center"),
      rotate(0)
    ]);

    this.#cardTextObj = this.#cardObj.add([
      text('', {
        size: CARD_TEXT_SIZE,
        width: CARD_OBJ_WIDTH - 2 * CARD_OBJ_PADDING,
        wrap: true,
        font: "myfont",
        align: "center"
      }),
      pos(0, 0),
      anchor("center"),
      color(255, 255, 255),
    ]);
  }

  // Initializes the answer boxes
  #initializeAnswerCards() {
    const RIGHT_ANSWER_POS_X = (width() + ANSWER_CARD_WIDTH) / 2;
    const LEFT_ANSWER_POS_X = (width() - ANSWER_CARD_WIDTH) / 2;
    const ANSWER_POS_Y = this.#cardObj.pos.y - height() / 5;
    const ANSWER_TEXT_SIZE = 25;

    this.#rightRect = add([
      rect(ANSWER_CARD_WIDTH, 40, { radius: 2 }),
      pos(RIGHT_ANSWER_POS_X, ANSWER_POS_Y),
      area(),
      z(11),
      color(255, 255, 255),
      anchor("topleft"),
      "rightRect",
      { opacity: 0 }
    ]);

    this.#rightText = this.#rightRect.add([
      text('', {
        size: ANSWER_TEXT_SIZE,
        width: ANSWER_CARD_WIDTH - TEXT_ANSWER_PADDING * 2,
        wrap: true,
        font: "myfont",
      }),
      pos(TEXT_ANSWER_PADDING, TEXT_ANSWER_PADDING),
      anchor("topleft"),
      color(0, 0, 0),
      { opacity: 0 }
    ]);

    this.#leftRect = add([
      rect(ANSWER_CARD_WIDTH, 40, { radius: 2 }),
      pos(LEFT_ANSWER_POS_X, ANSWER_POS_Y),
      area(),
      z(11),
      color(255, 255, 255),
      anchor("topright"),
      "leftRect",
      { opacity: 0 }
    ]);

    this.#leftText = this.#leftRect.add([
      text('', {
        size: ANSWER_TEXT_SIZE,
        width: ANSWER_CARD_WIDTH - TEXT_ANSWER_PADDING * 2,
        wrap: true,
        font: "myfont",
      }),
      pos(-TEXT_ANSWER_PADDING, TEXT_ANSWER_PADDING),
      anchor("topright"),
      color(0, 0, 0),
      { opacity: 0 }
    ]);
  }
}