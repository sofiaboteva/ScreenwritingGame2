export const directorsnotes = {
    "directorsnotesintro": {
        "chapterId": "directorsnotes",
        "character": "InnerVoice",
        "text": "Five drafts later, the script seems done… or so you thought. The Director and The Star step in, and of course, they each have their own vision.",
        "aspect": "balance, collaboration",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Oh, come on.",
            "nextQuestion": "dialoguecut"
        },
        "rightAnswer": {
            "text": "Of course they do.",
            "nextQuestion": "dialoguecut"
        }
    },
    "dialoguecut": {
        "chapterId": "directorsnotes",
        "character": "Director",
        "text": "Let's cut this dialogue – you know, the one you love – and replace it with a long, silent panoramic shot",
        "aspect": "balance, collaboration",
        "comment": "Reconsider scores",
        "leftAnswer": {
            "text": "Who needs these words anyway?",
            "outcome": "That dialogue explained a lot, and now the next three scenes make zero sense. But the Director calls it 'abstract storytelling.'",
            "effect": {
                "skills": -10,
                "unlockInsight": "developmenthell"

            },
            "nextQuestion": "lines"
        },
        "rightAnswer": {
            "text": "Only over my dead body.",
            "outcome": "The Director grumbles but lets it stay — for now. You're walking a thin line between visionary and problematic.\n",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "unlockInsight": "developmenthell"
            },
            "nextQuestion": "lines"
        }
    },
    "lines": {
        "chapterId": "directorsnotes",
        "character": "TheStar",
        "text": "I should say those powerful lines you gave my daughter. They'll hit harder coming from me.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "But these are her only lines...",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "younger"
        },
        "rightAnswer": {
            "text": "You're right, you rock.",
            "effect": {
                "relationships": 10,
                "ego": -10,
                "skills": -10
            },
            "nextQuestion": "younger"
        }
    },
    "younger": {
        "chapterId": "directorsnotes",
        "character": "TheStar",
        "text": "I feel like my heroine should be ten years younger. I just don't feel like a 38-year-old.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "But you are 38.",
            "outcome": "The Star is insulted and threatens to quit. The Producer begs you to do whatever she wants to keep her.",
            "effect": {
                "relationships": -10
            },
            "nextQuestion": "musical"
        },
        "rightAnswer": {
            "text": "Sure.",
            "outcome": "The heroine is now ten years older than her daughter. Let's hope no one notices.",
            "effect": {
                "relationships": 10,
                "ego": -10,
                "skills": 10
            },
            "nextQuestion": "younger2"
        }
    },
    "younger2": {
        "chapterId": "directorsnotes",
        "character": "Director",
        "text": "Why is the mother now ten years older than her daughter? Actually, I think she should be her grandmother.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "I'll change it back.",
            "outcome": "The Star is insulted and threatens to quit. The Producer begs you to do whatever she wants to keep her.",
            "effect": {
                "relationships": -10
            },
            "nextQuestion": "musical"
        },
        "rightAnswer": {
            "text": "Maybe the daughter was adopted?",
            "outcome": "The Director thinks that adds an interesting twist. The Star thanks you, and the Producer looks relieved.",
            "effect": {
                "relationships": 10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "carnival"
        }
    },
    "musical": {
        "chapterId": "directorsnotes",
        "character": "TheStar",
        "text": "I've been working on my vocals. Can we add a scene where I sing? It'll be emotional!",
        "aspect": "balance, collaboration",
        "comment": "Reconsider scores",
        "leftAnswer": {
            "text": "It's not a musical.",
            "outcome": "The Star quits, calling you 'impossible to work with.' One second later, you're fired.",
            "effect": {
                "money": -10,
                "relationships": -20
            },
            "nextChapter": "strikes"
        },
        "rightAnswer": {
            "text": "Sure.",
            "outcome": "The Director loves the singing, and now your dramatic horror is a musical.",
            "effect": {
                "relationships": 10,
                "ego": -10,
                "skills": -10
            },
            "nextQuestion": "carnival"
        }
    },
    "carnival": {
        "chapterId": "directorsnotes",
        "character": "Director",
        "text": "Let's add a massive carnival scene at the end, with fireworks and hundreds of dancers in costumes.",
        "aspect": "balance, collaboration",
        "comment": "Reconsider scores",
        "leftAnswer": {
            "text": "But that makes no sense.",
            "outcome": "The Director quits, calling you 'impossible to work with.' One second later, you're fired.",
            "effect": {
                "money": -10,
                "relationships": -20
            },
            "nextChapter": "strikes"
        },
        "rightAnswer": {
            "text": "Alright.",
            "outcome": "The Director is happy, but the Producer...",
            "effect": {
                "relationships": 10
            },
            "nextQuestion": "budget"
        }
    },
    "budget": {
        "chapterId": "directorsnotes",
        "character": "Producer",
        "text": "What have I told you about scenes like that? Are you trying to bankrupt me?",
        "aspect": "balance, collaboration",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Oh...",
            "nextQuestion": "directorsnotesoutro"
        },
        "rightAnswer": {
            "text": "But... ",
            "nextQuestion": "directorsnotesoutro"
        }
    },
    "directorsnotesoutro": {
        "chapterId": "directorsnotes",
        "character": "InnerVoice",
        "text": "Eventually, it becomes clear to everyone: the script is a mess. Of course, everybody blames you. Congratulations, you're fired.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "What?",
            "effect": {
                "unlockInsight": "creativecontrol"
            },
            "nextChapter": "strikes"
        },
        "rightAnswer": {
            "text": "How?",
            "effect": {
                "unlockInsight": "creativecontrol"
            },
            "nextChapter": "strikes"
        }
    },
}