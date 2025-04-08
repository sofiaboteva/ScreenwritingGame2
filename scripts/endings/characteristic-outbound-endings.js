import { appContext } from "../context/ApplicationContext.js";
import { eventBus, EVENTS } from "../chapter/event-bus.js";
import { playerContext } from "../context/player-context.js";
import { createBackground } from "../main-menu/utils.js";
import { Card, CardAnswer } from "../chapter/card.js";

export const EndingId = {
  EGO_LOW: "ego-low",
  EGO_HIGH: "ego-high",
  MONEY_LOW: "money-low",
  MONEY_HIGH: "money-high",
  RELATIONSHIPS_LOW: "relationships-low",
  RELATIONSHIPS_HIGH: "relationships-high"
}

export const endingConfigList = {
  [EndingId.EGO_LOW]: {
    key: "egoLow",
    text: "You don't know how to defend your point. Actually, you don't even know what your point is. You surrender to your parents' wishes and head off to law school.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tell me more.",
      nextScene: "relationshipsEgoExpanded"
    }
  },
  [EndingId.EGO_HIGH]: {
    key: "egoHigh",
    text: "You lose all your friends and connections, persuaded that your scripts are underrated. You're a genius, but only in your mind. You end up making one-person shows that nobody buys tickets for.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tell me more.",
      nextScene: "relationshipsEgoExpanded"
    }
  },
  [EndingId.MONEY_LOW]: {
    key: "moneyLow",
    text: "You're so broke that you resort to stealing food. You get caught and end up in jail. On the bright side, you'll have some stories to tell when you get out.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tell me more.",
      nextScene: "moneyExpanded"
    }
  },
  [EndingId.MONEY_HIGH]: {
    key: "moneyHigh",
    text: "You're lured by the glitter of money and bid farewell to your artistic dreams. You become a producer, but word on the street is that your bankroll is more mob-connected than your movie plots.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tell me more.",
      nextScene: "moneyExpanded"
    }
  },
  [EndingId.RELATIONSHIPS_LOW]: {
    key: "relationshipsLow",
    text: "Persuaded your scripts are underrated, you were too focused on your vision, pushing away collaborators, ignoring feedback, and claiming the spotlight. Hollywood prefers team players over divas. You end up making one-person shows that nobody buys tickets for.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tell me more.",
      nextScene: "relationshipsEgoExpanded"
    }
  },
  [EndingId.RELATIONSHIPS_HIGH]: {
    key: "relationshipsHigh",
    text: "Your desperate bid to please everyone turns you into a doormat. You don't know how to defend your point. Actually, you don't even know what your point is. Before you knew it, you became famous in Hollywood…as a dogsitter. Now, you post tons of other people's dogs in a desperate attempt to gain some fleeting fame.",
    leftAnswer: {
      text: "Ok...",
      nextScene: "replayabilityTeaser"
    },
    rightAnswer: {
      text: "Tell me more.",
      nextScene: "relationshipsEgoExpanded"
    }
  }
};

export function createCharacteristicOutboundEnding(endingId) {
  const endingConfig = endingConfigList[endingId];

  scene(endingConfig.key, () => {
    createBackground();

    if (!playerContext.unlockedEndings[endingConfig.key]) {
      playerContext.endingsScore++;
      playerContext.unlockedEndings[endingConfig.key] = true;

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
