import { SoundId } from "../../assets/sounds/sounds.js";
import { appContext } from "../context/ApplicationContext.js";
import { playerContext, resetSave } from "../context/player-context.js";

export const ExpandedEndingId = {
  RELATIONSHIPS: 'relationshipsEgoExpanded',
  MONEY: 'moneyExpanded',
  MARGINALISATION: 'marginalisationExpanded'
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
  },

  [ExpandedEndingId.MARGINALISATION]: {
    heading: "The Marginalised Author",
    text: `
The position of the screenwriter in the film industry has historically been marginalised, meaning that they’re often overlooked — and yes, that can seriously hurt their ego. This marginalisation shows up in many ways: ambiguous status of screenwriter, loss of creative control during development, little recognition for the writer’s artistic input, and the fact that the title of "main creator" usually goes to the director. In Hollywood, it’s even worse, thanks to the rewriting system and a complicated credit structure that rarely reflects who actually did the work.
Below, we’ll break all that down — so if you’re curious, keep reading!
Ambiguous status of screenwriter : an artist or a craftsman ? 
Back in the early days of cinema, screenplays were barely a thing. Most films were improvised on the spot, with directors, actors, and crew just winging it. What passed for a “script” was usually a few scribbled notes — more like reminders than actual plans. The result? Chaos. Props vanished and reappeared mid-scene, costumes changed for no reason, and characters magically teleported around the screen.
Then came Thomas Harper Ince (1820-1994), who decided enough was enough. He brought order to the madness, introducing structured scripts that broke scenes down shot by shot. The screenplay became the central document for production — full of technical details like lighting, costumes, camera angles, props, and sound cues.
But here’s the twist: the more technical the script became, the harder it was to see it as a work of art. And that’s the heart of the screenwriter’s identity crisis — are they an artist shaping stories, or just a cog in the production machine?
Auteur Theory: The Director as Main Artist (and the Writer as… what exactly?)
One major reason screenwriters got pushed to the sidelines was the rise of auteur theory — a critical movement in film that emerged in 1950s France, championed by director François Truffaut and critic André Bazin. Their idea? Auteur theory established a lasting dominance of the director as the primary creator of the film.
This vision took off worldwide, reshaping how people studied, critiqued, and taught cinema. Suddenly, the screenplay was seen as nothing more than a blueprint — something to build from, not something of artistic value in itself.
Sure, auteur theory helped cinema gain recognition as a serious and independent art form, but it came at the cost of diminishing the collaborative nature of filmmaking and the role of the screenwriter. Bazin famously said: “The director writes in film.” Oh really? Then… what exactly is the screenwriter doing?
Loss of creative control
In recent years, things have shifted a little — especially in quality television, where the showrunner, usually both a screenwriter and a producer, has become the key creative figure. In academia as well, there’s been a growing number of studies focusing on screenwriting and the role of screenwriters.
But in cinema, power still rests firmly with directors (in auteur cinema) and producers (in Hollywood). As for screenwriters? Once the contract is signed, they legally lose control over their own scripts.
In Hollywood, this lack of control goes even further thanks to rewriting — a system where new writers are brought onto a project to deliver yet another draft of the script. In other words: if you're working on a Hollywood film, there's a 99.9% chance you'll be fired. And bizarrely, that’s even considered a good sign — it means the project is moving forward and more likely to get greenlit.
Still, for screenwriters, it’s often a painful experience. Especially because the Hollywood credit system doesn’t always reflect actual contribution. For example, it’s not uncommon for the second and fourth writers, who did most of the heavy lifting, to go uncredited — while the first and third get the official recognition.
So yes. You may write the heart of the story… and never see your name on screen.
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

    // reset save after ending
    resetSave();

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