export const Background = {
  DEFAULT: 'screenwriter',
  AGENT_OFFICE: 'agentoffice',
  STUDIO: 'studio',
  WRITERS_ROOM: 'writersroom',
  COFFEE_SHOP: 'coffee_shop',
  PRODUCERS_OFFICE: 'producersoffice',
  TEST: 'test',
  LA: 'la',
  PARTY: 'party',
  STRIKES: 'strikes'
};

export function loadBackgrounds() {
  loadSprite(Background.DEFAULT, "/assets/img/screenwriter.png");
  loadSprite(Background.LA, "/assets/img/backgrounds/LAfaded.png");
  loadSprite(Background.PARTY, "/assets/img/backgrounds/partyfaded.png");
  loadSprite(Background.AGENT_OFFICE, "/assets/img/backgrounds/agentofficefaded.png");
  loadSprite(Background.STUDIO, "/assets/img/backgrounds/studio.png");
  loadSprite(Background.WRITERS_ROOM, "/assets/img/backgrounds/writersroom2.png");
  loadSprite(Background.COFFEE_SHOP, "/assets/img/backgrounds/coffee_shop.png");
  loadSprite(Background.PRODUCERS_OFFICE, "/assets/img/backgrounds/producersoffice.png");
  loadSprite(Background.TEST, "/assets/img/backgrounds/test.png");
  loadSprite(Background.STRIKES, "/assets/img/backgrounds/strikefaded.png");
} 