import { appContext } from "../context/ApplicationContext.js";
import { eventBus, EVENTS } from "../chapter/event-bus.js";
import { playerContext, resetSave } from "../context/player-context.js";
import { createBackground } from "../main-menu/utils.js";
import { Card, CardAnswer } from "../chapter/card.js";

export const EndingId = {
  EGO_LOW: "ego-low",
  EGO_HIGH: "ego-high",
  MONEY_LOW: "money-low",
  MONEY_HIGH: "money-high",
  RELATIONSHIPS_LOW: "relationships-low",
  RELATIONSHIPS_HIGH: "relationships-high",
  BLACKLISTED: "blacklisted"
}

export const endingConfigList = {
  [EndingId.EGO_LOW]: {
    key: "egoLow",
    text: "Can your EGO get any LOWER? You don't know how to defend your point. Actually, you don't even know what your point is. You surrender to your parents' wishes and head off to law school.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tough luck!",
      nextScene: "replayabilityTeaser"
    }
  },
  [EndingId.EGO_HIGH]: {
    key: "egoHigh",
    text: "Oops, your EGO GOT TOO HIGH! You lose all your friends and connections, persuaded that your scripts are underrated. You're a genius, but only in your mind. You end up making one-person shows that nobody buys tickets for.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tough luck!",
      nextScene: "replayabilityTeaser"
    }
  },
  [EndingId.MONEY_LOW]: {
    key: "moneyLow",
    text: "You officially have ZERO MONEY. You're so broke that you resort to stealing food. You get caught and end up in jail. On the bright side, you'll have some stories to tell when you get out.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tough luck!",
      nextScene: "replayabilityTeaser"
    }
  },
  [EndingId.MONEY_HIGH]: {
    key: "moneyHigh",
    text: "You have SO MUCH MONEY… but it's never enough. You're lured by the glitter of money and bid farewell to your artistic dreams. You become a producer, but word on the street is that your bankroll is more mob-connected than your movie plots.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tough luck!",
      nextScene: "replayabilityTeaser"
    }
  },
  [EndingId.RELATIONSHIPS_LOW]: {
    key: "relationshipsLow",
    text: "Your RELATIONSHIPS score hit ZERO, and so did your social life. People are afraid to deal with you. You end up alone, writing scripts that nobody will ever read and go crazy talking to your characters. At least they listen to you.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tough luck!",
      nextScene: "replayabilityTeaser"
    }
  },
  [EndingId.RELATIONSHIPS_HIGH]: {
    key: "relationshipsHigh",
    text: "Your RELATIONSHIPS score is SKY-HIGH, and so is your people-pleasing... Before you knew it, you became famous in Hollywood…as a dogsitter. Now, you post tons of other people's dogs in a desperate attempt to gain some fleeting fame.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tough luck!",
      nextScene: "replayabilityTeaser"
    }
  },

  [EndingId.BLACKLISTED]: {
    key: "blacklisted",
    text: "Whispers spread faster than you thought. The union blacklists you, and every door in Hollywood slams shut. Your career is over.",
    leftAnswer: {
      text: "What?!",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Wait, I didn't know the rules...",
      nextScene: "replayabilityTeaser"
    }
  }
};

export function createCharacteristicOutboundEnding(endingId) {
  const endingConfig = endingConfigList[endingId];

  scene(endingConfig.key, () => {
    createBackground();

    resetSave();

    if (!playerContext.unlockedEndings[endingConfig.key]) {
      playerContext.unlockedEndings[endingConfig.key] = true;
      playerContext.endingsScore++;

      add([
        text("New ending unlocked!", {
          width: appContext.CENTRAL_WIDTH - 2 * appContext.PADDING,
          wrap: true,
          size: 24,
          font: "myfont",
          align: "center"
        }),
        pos(width() / 2, height() * 0.2),
        anchor("center"),
      ]);
    }

    const answerCard = new Card();
    answerCard.setAnswers(endingConfig.leftAnswer, endingConfig.rightAnswer);
    answerCard.showEnding(endingConfig.text);

    eventBus.on(EVENTS.ANSWER_SELECTED_EVENT, (data) => {
      const { answer } = data;
      const nextScene = answer === CardAnswer.LEFT
        ? endingConfig.leftAnswer.nextScene
        : endingConfig.rightAnswer.nextScene;
      go(nextScene);
    });
  });
}
