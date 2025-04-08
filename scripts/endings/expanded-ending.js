import { SoundId } from "../../assets/sounds/sounds.js";
import { appContext } from "../context/ApplicationContext.js";

export const ExpandedEndingId = {
  RELATIONSHIPS: 'relationshipsEgoExpanded',
  MONEY: 'moneyExpanded'
}

const expandedEndingConfigList = {
  [ExpandedEndingId.RELATIONSHIPS]: {
    heading: "Success in Hollywood: The Art of Balance",
    text: `

Screenwriting is considered one of the most collaborative artistic professions. Relationships are a screenwriter's most important asset, but it's equally important not to silence your own voice as an artist. The key to success lies in mastering the balance between collaboration and your vision.

"— The one reputational aspect that can be influenced by the writer themselves is the first one: personal behavior and relationships. As one film writer succinctly put it: 'Your success as a film scriptwriter probably depends less on your skill with words than it does on your ability to deal with people.'"

"— The best writers in the industry are simultaneously able to defend their vision and also collaborate with other people. They respect the world of film finance but know when the tipping point comes, beyond which a project may be irrevocably damaged."

— Peter Bloore, The Screenplay Business
    `
  },
  [ExpandedEndingId.MONEY]: {
    heading: "Screenwriting and Survival: Money Matters",
    text: `
Making a living as a screenwriter isn't easy. While Hollywood screenwriters can earn big paychecks for individual projects, the unpredictable nature of the industry means years could pass before their next gig. Therefore, most people have to take on various day jobs alongside their screenwriting career to ensure financial stability. When working on projects, you can't ignore the financial aspect either.

"Match the film and the budget: more money does not always bring more freedom. Look, the crazier your idea, the lower the budget. It's really, really simple. Film-making is a business. And I think writers should always be aware of that. Like it or not, it's a business. [... ]And when you're in the insane asylum you fund it yourself. You shoot it on your camera and do it your way. And you've got complete control over your craziness but it has to cost almost nothing to anyone else."

— Peter Bloore, The Screenplay Business
    `
  }
};

export const createExpandedEnding = (endingId) => {
  const POPUP_WIDTH = width() * 0.6;
  const POPUP_HEIGHT = height() * 0.8;
  const BUTTON_WIDTH = 250;
  const BUTTON_HEIGHT = 50;
  const endingConfig = expandedEndingConfigList[endingId];
  scene(endingId, () => {
    add([
      sprite("screenwriter", { width: width(), anchor: "bottom" }),
      pos(width() / 2, height() / 2),
      anchor("center")
    ]);

    const popup = add([
      rect(POPUP_WIDTH, POPUP_HEIGHT, { radius: 4 }),
      pos(width() / 2, height() / 2),
      anchor("center"),
      color(0, 0, 0)
    ]);

    // Add heading if present
    if (endingConfig.heading) {
      popup.add([
        text(endingConfig.heading, {
          width: POPUP_WIDTH - 2 * appContext.PADDING,
          size: 24,
          font: "myfont",
          align: "left"
        }),
        pos(-POPUP_WIDTH/2 + appContext.PADDING, -POPUP_HEIGHT/2 + 40),
        anchor("topleft"),
      ]);
    }

    // Add main content
    popup.add([
      text(endingConfig.text.trim(), {
        width: POPUP_WIDTH - 2 * appContext.PADDING,
        wrap: true,
        size: 16,
        font: "myfont",
        align: "left"
      }),
      pos(-POPUP_WIDTH/2 + appContext.PADDING, -POPUP_HEIGHT/2 + 100),
      anchor("topleft"),
    ]);

    const button = add([
      rect(BUTTON_WIDTH, BUTTON_HEIGHT, { radius: 4 }),
      pos(width() / 2, (height() + POPUP_HEIGHT) / 2 - BUTTON_HEIGHT),
      area(),
      anchor("center"),
      outline(4),
    ]);

    button.add([
      text("Got it, no need for a TED Talk.", {
        width: BUTTON_WIDTH - 2 * 12,
        font: "myfont",
        align: "center",
        size: 16
      }),
      anchor("center"),
      color(0, 0, 0),
    ]);

    button.onClick(() => {
      play(SoundId.BUTTON_CLICK);
      go("replayabilityTeaser");
    });
  });
};