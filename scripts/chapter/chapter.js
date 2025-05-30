// This script manages the game's interactive narrative system. It handles the display and
// processing of questions, tracks player choices and scores, and manages transitions between questions and chapters.
// and triggers different endings.

import { addPerk, hasOutcomeInformation, playerContext, removePerk, resetOutcomeInfotmation, saveOutcomeInfotmation, saveProgress, unlockInsight } from "../context/player-context.js";
import { createIndicators, createSkillIndicator } from "../indicators/indicator.js";
import { eventBus, EVENTS } from "./event-bus.js";
import { Card, CardAnswer } from "./card.js";
import { createBackground } from "../main-menu/utils.js";
import { appContext } from "../context/ApplicationContext.js";
import { ChapterId } from "./chapter-configs.js";
import { SoundId } from "../../assets/sounds/sounds.js";
import { CharacterName } from "../../assets/img/cards/characters/characters.js";
import { createLeaveToMenuPopup } from "../components/leave-to-menu-popup.js";
import { Icons } from "../components/icons.js";
import { createInsightUnlockedPopup } from "./insight-unlocked-popup.js";

// Defines scores thresholds
const MAX_CHARACTERISTICS_THRESHOLD = 100;
const MIN_CHARACTERISTICS_THRESHOLD = 0;
// const RISK_TAKER_THRESHOLD = 20;
const QUESTION_TEXT_SIZE = 20;             // Font size for question text



export class Chapter {
  // Private class properties for managing chapter state
  #sceneId = null;           // Current scene identifier
  #questions;                // Collection of questions for this chapter
  #indicators;              // UI indicators for player stats
  #skillIndicator;          // Skills indicator
  #questionObj;             // Current question display object
  #currentQuestion;         // Currently active question
  #characterName;           // Character name display
  #answerCard;              // Card component for displaying answers

  // Constructor: Initializes a new chapter with the provided configuration
  constructor(sceneConfig) {
    this.#questions = { ...sceneConfig.questions };
    this.#sceneId = sceneConfig.id;

    // Set up the game scene with all necessary components
    scene(sceneConfig.id, () => {
      console.log("Chapter scene config:", sceneConfig); // Debug log
      console.log("Using background:", sceneConfig.background); // Debug log
      createBackground(sceneConfig.background);

      // menu overlay
      this.#createMenuPopup();

      this.#answerCard = new Card();

      // Clear previous events and set up new event listeners
      eventBus.clearEvents();
      // Each time the ANSWER_SELECTED_EVENT is triggered, the eventBus is on
      eventBus.on(EVENTS.ANSWER_SELECTED_EVENT, (data) => {
        const { answer } = data;
        const answerObj = answer === CardAnswer.LEFT
          ? this.#currentQuestion.leftAnswer
          : this.#currentQuestion.rightAnswer;
        this.selectAnswer(answerObj);
      });

      // Create and position the question text display
      this.#questionObj = add([
        text("Question", {
          width: appContext.CENTRAL_WIDTH,
          wrap: true,
          size: QUESTION_TEXT_SIZE,
          font: "myfont",
          align: "center"
        }),
        pos(width() / 2, height() * 0.15),
        anchor("top"),
      ]);

      // Initialize indicators and character name
      this.#indicators = createIndicators();
      this.#characterName = this.#createCharacterName();
      this.#skillIndicator = createSkillIndicator(playerContext.scores.skills);

      // Set up the first question of the chapter
      this.#setFirstQuestion(sceneConfig);
    });
  }

  #hasSavedQuestion(sceneConfig) {
    return playerContext.currentChapter && sceneConfig.questions[playerContext.currentQuestion];
  }

  // Sets up the first question of the chapter
  #setFirstQuestion(sceneConfig) {
    // return to saved question
    if (this.#hasSavedQuestion(sceneConfig)) {
      const nextQuestion = {
        id: playerContext.currentQuestion,
        question: sceneConfig.questions[playerContext.currentQuestion]
      };
      this.#setNextQuestionIfFound(nextQuestion);
      return;
    }

    // Check if the first question exists
    if (!sceneConfig.firstQuestionIds?.length || sceneConfig.firstQuestionIds.length === 0) {
      console.error("Failed to set first question, no first question ids provided");
      return;
    }

    const questions = sceneConfig.firstQuestionIds
      .map(questionId => ({ id: questionId, question: sceneConfig.questions[questionId] }));

    // Check if the question requires a specific perk
    const questionRequiringPerk = questions
      .find(({ id, question }) => question.requiresPerk && playerContext.perks.includes(question.requiresPerk));

    // If that question exists, set it as the next question
    if (questionRequiringPerk) {
      this.#setNextQuestionIfFound(questionRequiringPerk);
      return;
    }

    // Fall back to questions that don't require a perk
    const questionWithoutPerk = questions
      .find(({ id, question }) => !question.requiresPerk);

    if (questionWithoutPerk) {
      this.#setNextQuestionIfFound(questionWithoutPerk);
      return;
    }

    console.error("Failed to set first question, no question found");
  }

  // Function to move to the next question.
  #setNextQuestionIfFound(nextQuestion) {
    const currentChapter = nextQuestion.question.chapterId;
    const currentQuestion = nextQuestion.id;
    saveProgress(currentChapter, currentQuestion);
    this.#loadNextQuestion(nextQuestion.question);
    if (hasOutcomeInformation()) {
      this.#displayOutcome(playerContext.currentAnswer);
    }
  }

  // Loads the next question
  #loadNextQuestion(nextQuestion) {
    const question = { ...nextQuestion };
    this.#showQuestion(question);
    this.#currentQuestion = question;
  }

  // Displays the current question, its answers and the character name
  #showQuestion(question) {
    this.#questionObj.text = question.text;
    this.#answerCard.setAnswers(question.leftAnswer, question.rightAnswer);

    const character = question.character ? question.character.toLowerCase() : 'character';
    this.#answerCard.setCharacter(character);
    this.#characterName.text = CharacterName[character] ?? '';
  }

  // Processes player's answer selection
  selectAnswer(answer) {
    // Checks if the answer is not an outcome and has an effect
    if (!this.#answerCard.isInOutcomeMode && answer.effect) {
      this.#applyEffect(answer);
      // Launches the function that checks if the game should end because of scores too high or too low
      this.#checkCharacteristicThresholds();
    }

    resetOutcomeInfotmation();
    if (this.#shouldDisplayOutcome(answer)) {
      this.#displayOutcome(answer);
      saveOutcomeInfotmation(answer);
      return;
    }
    this.#gotoNextQuestion(answer);
  }

  #displayOutcome(answer) {
    // hack : set both answers to the same object so that the answer of the outcome (LEFT / RIGHT) will not omit the choice
    // made before the outcome
    this.#currentQuestion.leftAnswer = answer;
    this.#currentQuestion.rightAnswer = answer;
    this.#answerCard.showOutcome(answer.outcome);
    this.#questionObj.text = '';
  }

  // Navigates to next question or chapter based on answer
  #gotoNextQuestion(answer) {
    // Check if the answer has a next question (in the same chapter)
    if (answer.nextQuestion) {
      wait(0.05, () => {
        // Split by comma and trim whitespace
        const questionIds = answer.nextQuestion.split(',').map(id => id.trim());

        // Try to find a question that requires a perk the player has
        const questionWithPerk = questionIds
          .map(id => ({ id, question: this.#questions[id] }))
          .find(({ id, question }) => question.requiresPerk && playerContext.perks.includes(question.requiresPerk));

        if (questionWithPerk) {
          this.#setNextQuestionIfFound(questionWithPerk);
          return; // Stop here, don't continue to fallback
        }

        // Fall back to questions without perk requirements
        const questionWithoutPerk = questionIds
          .map(id => ({ id, question: this.#questions[id] }))
          .find(q => !q.question.requiresPerk);

        if (questionWithoutPerk) {
          this.#setNextQuestionIfFound(questionWithoutPerk);
          return;
        }

        console.error("Failed to find valid next question");
      });
      return;
    }

    // Check if the answer leads to a new chapter 
    // And unlocks the current level
    if (answer.nextChapter) {
      this.#unlockCurrentLevel();
      this.#transitionToScene(answer.nextChapter);
      return;
    }

    // Check if the answer leads to a new scene
    if (answer.nextScene) {
      this.#unlockCurrentLevel();
      this.#transitionToScene(answer.nextScene);
      return;
    }
  }

  // Unlocks the current level
  #unlockCurrentLevel() {
    // Check if the current scene ID is a valid chapter ID 
    // (to avoid unlocking scenes that are not chapters)
    const isChapterId = Object.values(ChapterId).includes(this.#sceneId);
    // If yes, add it to the unlocked levels
    if (isChapterId) {
      if (playerContext.unlockedLevels === null) {
        playerContext.unlockedLevels = [];
      }
      // Check if level is not already unlocked to avoid duplicates
      if (!playerContext.unlockedLevels.includes(this.#sceneId)) {
        playerContext.unlockedLevels.push(this.#sceneId);
      }
    }
  }

  // Checks if an answer should display an outcome
  #shouldDisplayOutcome(answer) {
    // Check if the answer has an outcome and if the outcome is not already displayed
    return answer.outcome && !this.#answerCard.isInOutcomeMode;
  }

  // Applies the effects of a player's answer
  #applyEffect(answer) {
    const effect = answer.effect;
    this.#updateScores(effect);
    this.#updatePerks(effect);
    this.#updateIndicators(playerContext.scores, effect);
    this.#updateTutorialStatus(effect);
    // this.#updateRiskyChoices(effect);
    // this.#updateArticticIntegrity(answer);
  }

  // Updates player scores based on answer effects
  #updateScores(effect) {
    if (effect.skills) {
      playerContext.scores.skills += effect.skills;
    }
    if (effect.ego) {
      playerContext.scores.ego += effect.ego;
    }
    if (effect.money) {
      playerContext.scores.money += effect.money;
    }
    if (effect.relationships) {
      playerContext.scores.relationships += effect.relationships;
    }
  }

  // Add / remove perk
  #updatePerks(effect) {
    if (effect.addPerk) {
      addPerk(effect.addPerk);
    }

    // If the answer unlocks an insight, unlock it and show the popup
    if (effect.unlockInsight && !playerContext.unlockedInsights.includes(effect.unlockInsight)) {
      unlockInsight(effect.unlockInsight);
      // insight unlocked popup
      createInsightUnlockedPopup(effect.unlockInsight);
    }

    if (effect.removePerk) {
      const perksToRemove = effect.removePerk;
      removePerk(perksToRemove);
    }
  }

  // Updates tutorial completion status
  #updateTutorialStatus(effect) {
    if (effect.finishTutorial) {
      playerContext.finishedTutorial = true;
    }
  }

  // Updates visual indicators to reflect score changes 
  #updateIndicators(scores, scoreChanges) {
    Object.entries(this.#indicators).forEach(([scoreId, indicator]) => {
      const scoreChange = scoreChanges[scoreId] ?? 0;
      if (scoreChange !== 0) {
        indicator.updateFill(scores[scoreId], scoreChange > 0 ? "up" : "down");
      }
    });

    // Only update skill indicator if skills value changed
    const skillChange = scoreChanges.skills ?? 0;
    if (skillChange !== 0) {
      this.#skillIndicator.updateFill(scores.skills, skillChange > 0 ? "up" : "down");
    }
  }

  // Checks if the scores have reached threshold values
  #checkCharacteristicThresholds() {
    this.#handleOutboundingCharacteristics("High");
    this.#handleOutboundingCharacteristics("Low");
  }

  // Handles special endings when characteristics reach maximum or minimum values
  #handleOutboundingCharacteristics(suffix) {
    const outbondingCharacteristic = Object.entries(playerContext.scores).find(([key, value]) => {
      return suffix === "High"
        ? value >= MAX_CHARACTERISTICS_THRESHOLD && key !== 'skills'
        : value <= MIN_CHARACTERISTICS_THRESHOLD && key !== 'skills';
    });

    if (outbondingCharacteristic) {
      play(SoundId.OUTBOUNDING_ENDING);
      // Get the characteristic name
      const characteristicKey = outbondingCharacteristic[0];
      // Get the ending scene name
      const endingSceneName = `${characteristicKey}${suffix}`;
      this.#transitionToScene(endingSceneName);
    }
  }

  #transitionToScene(targetScene) {
    if (playerContext.rewardText) {
      wait(2, () => {
        go(targetScene);
      });
    } else {
      go(targetScene);
    }
  }

  // Creates and positions the character name
  #createCharacterName() {
    return add([
      text('', {
        font: "myFont",
        size: 20,
        align: "center"
      }),
      pos(width() / 2, height() - 100),
      anchor("center")
    ]);
  }

  #createMenuPopup() {
    const menuButton = add([
      sprite(Icons.MENU, {
        width: 50,
        height: 50
      }),
      area(),
      pos(width() * 0.05, height() * 0.05),
      anchor("center")
    ]);
    const { toggle } = createLeaveToMenuPopup();
    menuButton.onClick(() => toggle());
    onKeyPress("escape", () => toggle());
  }
}
