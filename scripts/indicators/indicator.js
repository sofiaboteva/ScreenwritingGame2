// This script creates and updates the indicators

import { playerContext } from "../context/player-context.js";
import { IndicatorSprite } from "./sprites.js";
import { appContext } from "../context/ApplicationContext.js";

const ICON_WIDTH = 60;
const ICON_HEIGHT = 60;

const Characteristics = {
  SKILLS: "skills",
  EGO: "ego",
  MONEY: "money",
  RELATIONSHIPS: "relationships"
};

// Create the indicators from keys dynamically
const indicatorConfigList = () => [
  {
    id: Characteristics.EGO,
    sprite: IndicatorSprite.EGO,
    score: playerContext.scores.ego
  },
  {
    id: Characteristics.MONEY,
    sprite: IndicatorSprite.MONEY,
    score: playerContext.scores.money
  },
  {
    id: Characteristics.RELATIONSHIPS,
    sprite: IndicatorSprite.RELATIONSHIPS,
    score: playerContext.scores.relationships
  }
];

// Calculates the position of the indicator in UI 

function getIndicatorPosition(indicatorIndex, maxIndex) {
  const INDICATOR_ZONE_PADDING = 1.5 * appContext.GAME_ZONE_PADDING;

  const leftBorder = (window.innerWidth - appContext.CENTRAL_WIDTH + ICON_WIDTH) / 2 + INDICATOR_ZONE_PADDING;
  const spacing = maxIndex > 1
    ? (appContext.CENTRAL_WIDTH - 2 * INDICATOR_ZONE_PADDING - ICON_WIDTH) / (maxIndex - 1)
    : 0;
  return {
    x: leftBorder + indicatorIndex * spacing,
    y: INDICATOR_ZONE_PADDING + 15
  };
}

// Creates the indicator
function createIndicator(spriteName, position, initValue = 0) {
  const flashSpeed = 1;
  const maxValue = 100;
  const colors = {
    neutral_fill: rgb(255, 255, 255),
    neutral_cover: rgb(110, 110, 110),
    bright_fill: rgb(102, 255, 0), // when the score is increasing
    bright_cover: rgb(180, 180, 180),
    dark_fill: rgb(238,75,43), // when the score is decreasing
    dark_cover: rgb(70, 70, 70)
  };
  const { x: xPos, y: yPos } = position;

  // Add icon that acts as an "empty space" to fill 
  add([
    sprite(spriteName, {
      with: ICON_WIDTH,
      height: ICON_HEIGHT
    }),
    pos(xPos, yPos),
    anchor("center"),
    z(3)
  ]);

  // The fill of the indicator
  const fill = add([
    rect(ICON_WIDTH, ICON_HEIGHT),
    pos(xPos - ICON_WIDTH / 2, yPos - ICON_HEIGHT / 2),
    z(1)
  ]);
  fill.color = colors.neutral_fill;

  // The background of the indicator
  const cover = add([
    rect(ICON_WIDTH, ICON_HEIGHT * (1 - initValue / maxValue)),
    pos(xPos - ICON_WIDTH / 2, yPos - ICON_HEIGHT / 2),
    z(2)
  ]);
  cover.color = colors.neutral_cover;


  // Update the cover (background)height based on the value
  function updateFill(newValue, direction) {
    // Calculate the height of the cover based on the score
    cover.height = ICON_HEIGHT * (1 - newValue / maxValue);
    flash(direction);
  }

  function flash(direction) {
    let progress = 0;
    let isBrightening = true;
    onUpdate(() => {
      if (isBrightening) {
        // Increase the brightness of the indicator
        progress += dt() * flashSpeed;
        // Brighten the indicator if the score is increasing
        if (direction == "up") {
          setBrightColor();
        } else {
          // Darken the indicator if the score is decreasing
          setDarkColor();
        }

        if (progress >= 1) {
          progress = 0;
          setNeutralColor();
          isBrightening = false;
        }
      }
    });
  }

  function setBrightColor() {
    fill.color = colors.bright_fill;
    cover.color = colors.bright_cover;
  }

  function setDarkColor() {
    fill.color = colors.dark_fill;
    cover.color = colors.dark_cover;
  }

  function setNeutralColor() {
    fill.color = colors.neutral_fill;
    cover.color = colors.neutral_cover;
  }

  return { updateFill };
}

export function createIndicators() {
  return Object.fromEntries(indicatorConfigList().map((config, index) => {
    const indicator = createIndicator(
      config.sprite,
      getIndicatorPosition(index, indicatorConfigList().length),
      config.score
    );
    return [[config.id], indicator];
  }));
}

export function createSkillIndicator(initialSkill) {
  const MAX_BAR_WIDTH = 300;
  const FILL_COLOR = rgb(250, 250, 250);
  const flashSpeed = 1;

  const colors = {
    neutral: rgb(250, 250, 250),
    bright: rgb(102, 255, 0), // when the score is increasing
    dark: rgb(238, 75, 43)    // when the score is decreasing
  };

  const calculateFillWidth = (skillValue) => {
    const MAX_SKILL_VALUE = 300;
    return skillValue / MAX_SKILL_VALUE * MAX_BAR_WIDTH;
  };

  add([
    text("Writing skill", {
      width: 400,
      size: 22,
      font: "myfont",
      align: "center"
    }),
    pos(window.innerWidth / 2, window.innerHeight - 50),
    anchor("center"),
  ]);

  // The background of the indicator
  const fill = add([
    rect(calculateFillWidth(initialSkill), 30),
    pos((window.innerWidth - MAX_BAR_WIDTH) / 2, window.innerHeight - 50),
    anchor("left"),
    opacity(0.3)
  ]);
  fill.color = colors.neutral;

  function flash(direction) {
    let progress = 0;
    let isBrightening = true;
    onUpdate(() => {
      if (isBrightening) {
        progress += dt() * flashSpeed;
        fill.color = direction === "up" ? colors.bright : colors.dark;

        if (progress >= 1) {
          progress = 0;
          fill.color = colors.neutral;
          isBrightening = false;
        }
      }
    });
  }

  function updateFill(newValue, direction) {
    fill.width = calculateFillWidth(newValue);
    if (direction) {
      flash(direction);
    }
  }

  return { updateFill };
};
