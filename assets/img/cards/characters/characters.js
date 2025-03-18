export const Character = {
  AGENT: 'agent',
  ASSISTANT: 'assistant',
  DIRECTOR: 'director',
  FELLOW_SCREENWRITER: 'fellowscreenwriter',
  INNER_VOICE: 'innervoice',
  JOURNALIST: 'journalist',
  PARENTS: 'parents',
  PHOTOGRAPHER: 'thephotographer',
  PRODUCER: 'producer',
  SCREENWRITING_GURU: 'screenwritingguru',
  THE_STAR: 'thestar',
  HOLLYWOOD_GATEKEEPER: 'hollywoodgatekeeper'
};

export const CharacterName = {
  [Character.AGENT]: 'Agent',
  [Character.ASSISTANT]: 'Assistant',
  [Character.DIRECTOR]: 'Director',
  [Character.FELLOW_SCREENWRITER]: 'Fellow screenwriter',
  [Character.INNER_VOICE]: 'You',
  [Character.JOURNALIST]: 'The Journalist',
  [Character.PARENTS]: 'Father',
  [Character.PHOTOGRAPHER]: 'The Photographer',
  [Character.PRODUCER]: 'Producer',
  [Character.SCREENWRITING_GURU]: 'Screenwriting guru',
  [Character.THE_STAR]: 'The Star',
  [Character.HOLLYWOOD_GATEKEEPER]: 'Hollywood Gatekeeper'
}

export function loadCharacters() {
  loadSprite(Character.AGENT, "/assets/img/cards/characters/agent.png");
  loadSprite(Character.ASSISTANT, "/assets/img/cards/characters/assistant.png");
  loadSprite(Character.DIRECTOR, "/assets/img/cards/characters/director.png");
  loadSprite(Character.FELLOW_SCREENWRITER, "/assets/img/cards/characters/fellowscreenwriter.png");
  loadSprite(Character.INNER_VOICE, "/assets/img/cards/characters/innervoice.png");
  loadSprite(Character.JOURNALIST, "/assets/img/cards/characters/journalist.png");
  loadSprite(Character.PARENTS, "/assets/img/cards/characters/parents.png");
  loadSprite(Character.PHOTOGRAPHER, "/assets/img/cards/characters/photographer.png");
  loadSprite(Character.PRODUCER, "/assets/img/cards/characters/producer.png");
  loadSprite(Character.SCREENWRITING_GURU, "/assets/img/cards/characters/screenwritingguru.png");
  loadSprite(Character.THE_STAR, "/assets/img/cards/characters/thestar.png");
  loadSprite(Character.HOLLYWOOD_GATEKEEPER, "/assets/img/cards/characters/hollywoodgatekeeper.png");
}