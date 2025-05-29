// This script creates a popup that appears when a new insight is unlocked

import { SoundId } from "../../assets/sounds/sounds.js";
import { setInsightSource } from "../context/player-context.js";


let popupObj = null;

export const createInsightUnlockedPopup = (unlockedInsightId) => {
	const POPUP_WIDTH = width() / 4;
	const POPUP_HEIGHT = 200;
	const PADDING = 15;

	if (popupObj) {
		destroy(popupObj);
	}

	// Create the popup box
	popupObj = add([
		rect(POPUP_WIDTH, POPUP_HEIGHT, { radius: 4 }),
		color(139,0,0),
		pos(width() - 200, 150),
		anchor("center"),
		outline(2, rgb(255, 255, 255)),
	]);

	// Create the popup text
	popupObj.add([
		text("You just unlocked a new insight! Click the button to read more", {
			font: "myfont",
			size: 20,
			wrap: true,
			width: POPUP_WIDTH - 2 * PADDING,
			align: "center"
		}),
		pos(0, - POPUP_HEIGHT / 2 + 40),
		anchor("center")
	]);

	// Create the button to go to insights page
	const goToInsightsButton = popupObj.add([
		rect(170, 80, { radius: 4 }),
		pos(0, 40),
		anchor("center"),
		area()
	]);

	goToInsightsButton.add([
		text("Go to insights", {
			font: "myfont",
			size: 18,
			align: "center",
		}),
		color(0, 0, 0),
		pos(0, 0),
		anchor("center")
	]);

	// When the player clicks the button, destroy the popup and go to the insights page
	goToInsightsButton.onClick(() => {
		play(SoundId.BUTTON_CLICK);
		setInsightSource('game');
		destroy(popupObj);
		go(unlockedInsightId);
	});

	// Destroy the popup after 5 seconds if the player doesn't click the button
	wait(8, () => {
		destroy(popupObj);
	})
}