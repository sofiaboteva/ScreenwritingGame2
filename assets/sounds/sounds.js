export const SoundId = {
  BUTTON_CLICK: 'button-click',
  CARD_ACCEPT: 'card-accept',
  CARD_FLIP: 'card-flip',
  OUTBOUNDING_ENDING: 'outbounding-ending'
}

export function loadSounds() {
  loadSound(SoundId.BUTTON_CLICK, 'assets/sounds/button-click.mp3');
  loadSound(SoundId.CARD_ACCEPT, 'assets/sounds/card-accept.mp3');
  loadSound(SoundId.CARD_FLIP, 'assets/sounds/card-flip.mp3');
  loadSound(SoundId.OUTBOUNDING_ENDING, 'assets/sounds/outbounding-ending.mp3');
}