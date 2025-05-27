import { MainMenuScenes } from "../main-menu/main-menu-scenes.js";
import { createBackground } from "../main-menu/utils.js";
import { eventBus, EVENTS } from "../chapter/event-bus.js";
import { playerContext } from "../context/player-context.js";
import { Card } from "../chapter/card.js";

// Defines the configurations for each good ending
const goodEndingConfigs = {
  WIN1: {
    text: "You made it as a screenwriter… technically. But you never pushed yourself hard enough to truly break through. Now, you scrape by with script doctoring gigs, fixing dialogue on projects you'd rather not mention, and writing sketches for low-budget talk shows. This is definitely not the career you dreamt of.",
    leftAnswer: {
      text: "Oh..."
    },
    rightAnswer: {
      text: "Well… this isn't great."
    }
  },
  WIN2: {
    text: "You've built a solid career. You're not a Hollywood star, but you're a working screenwriter with steady gigs and a decent reputation. You won't go down in history, but the industry has accepted you.",
    leftAnswer: {
      text: "Well, that's something!"
    },
    rightAnswer: {
      text: "I'll take it."
    }
  },
  WIN3: {
    text: "You're not just a screenwriter, you're a star. Producers chase your ideas, directors trust your vision, and your films bring in both awards and box office success. You no longer look for work—the work looks for you. Congratulations, you've made it to the top.",
    leftAnswer: {
      text: "I've made it?"
    },
    rightAnswer: {
      text: "I've made it!"
    }
  }
}

export function craeteGoodEnding() {
  // Defines the thresholds for each level
  const LEVEL_1_MAX_SCORE = 140;
  const LEVEL_2_MAX_SCORE = 280;

  scene("win", () => {
    createBackground();

    playerContext.currentChapter = null;
    playerContext.currentQuestion = null;

    // Determines which ending to show based on the skill score
    const answerCard = new Card();
    let endingConfig;
    
    if (playerContext.scores.skills <= LEVEL_1_MAX_SCORE) {
      endingConfig = goodEndingConfigs.WIN1;
      if (!playerContext.unlockedEndings.win1) {
        playerContext.unlockedEndings.win1 = true;
        playerContext.endingsScore++;
      }
    } else if (playerContext.scores.skills <= LEVEL_2_MAX_SCORE) {
      endingConfig = goodEndingConfigs.WIN2;
      if (!playerContext.unlockedEndings.win2) {
        playerContext.unlockedEndings.win2 = true;
        playerContext.endingsScore++;
      }
    } else {
      endingConfig = goodEndingConfigs.WIN3;
      if (!playerContext.unlockedEndings.win3) {
        playerContext.unlockedEndings.win3 = true;
        playerContext.endingsScore++;
      }
    }
    
    answerCard.setAnswers(endingConfig.leftAnswer, endingConfig.rightAnswer);
    answerCard.showEnding(endingConfig.text);
    
    // Two ways to go back to the main menu
    onKeyPress("space", () => go(MainMenuScenes.MAIN_MENU));
    eventBus.on(EVENTS.ANSWER_SELECTED_EVENT, () => {
      go(MainMenuScenes.MAIN_MENU);
    });
  });
}