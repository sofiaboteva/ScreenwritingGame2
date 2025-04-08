import { loadCharacters } from "./img/cards/characters/characters.js";
import { loadIndicators } from "./img/indicators/indicators.js";
import { loadSounds } from "./sounds/sounds.js";
import { loadBackgrounds } from "./img/backgrounds/backgrounds.js";

export function loadAssets() {
  loadFont("myfont", "assets/XTypewriter-Regular.ttf");

  loadSprite("character", "assets/img/character.png");
  loadSprite("outcome", "assets/img/cards/outcome.png");
  loadSprite("back", "assets/img/cards/cardback.png");

  loadIndicators();
  loadCharacters();
  loadSounds();
  loadBackgrounds();
}
