export const moviepremiere = {
    "moviepremiereintro": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "The day has finally come. It's the premiere of your first movie—the one you were fired from two years ago...",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Well, well, well.",
            "nextQuestion": "moviepremiereintro2"
        },
        "rightAnswer": {
            "text": "Yay… I think?",
            "nextQuestion": "moviepremiereintro2"
        }
    },

    "moviepremiereintro2": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "But that's all in the past. Now, it's time to enjoy the moment.",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "I'll try",
            "nextQuestion": "premieredate"
        },
        "rightAnswer": {
            "text": "Let's go!",
            "nextQuestion": "premieredate"
        }
    },

    "premieredate": {
        "chapterId": "moviepremiere",
        "character": "TheStar",
        "text": "Come with me to the premiere. I never thought I'd end up going with you, but my date canceled. At least you'll get your moment of fame.",
        "aspect": "hierarchisation, marginalisation",
        "leftAnswer": {
            "text": "I can shine on my own.",
            "effect": {
                "relationships": -10,
                "ego": 10
            },
            "nextQuestion": "fame"
        },
        "rightAnswer": {
            "text": "Won't miss this chance.",
            "effect": {
                "relationships": 10
            },
            "nextQuestion": "fame"
        }
    },
    "fame": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "Flashes from the cameras light up the red carpet. Is it what the fame tastes like?",
        "leftAnswer": {
            "text": "I should've worn sunglasses.",
            "nextQuestion": "redcarpet"
        },
        "rightAnswer": {
            "text": "It's something new.",
            "nextQuestion": "redcarpet"
        }
    },
    "redcarpet": {
        "chapterId": "moviepremiere",
        "character": "ThePhotographer",
        "text": "Excuse me, could you step aside? I'm taking a photo of the crew… and I don't know who you are.",
        "aspect": "hierarchisation, marginalisation",
        "leftAnswer": {
            "text": "Sure, no problem...",
            "outcome": "You step aside with a polite smile. Fame was fleeting; now you're invisible again.",
            "effect": {
                "relationships": -10,
                "ego": -10
            },
            "nextQuestion": "screening"
        },
        "rightAnswer": {
            "text": "I'm the writer. Want me to spell it out for you?",
            "outcome": "The Photographer apologizes awkwardly and takes an extra shot with you just in case.",
            "effect": {
                "relationships": 10,
                "ego": 10
            },
            "nextQuestion": "screening"
        }
    },
    "screening": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "The lights dim, and the movie begins.",
        "aspect": "hierarchisation, marginalisation",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "I'm scared.",
            "effect": {
                "unlockInsight": "creditsystem"
            },
            "nextQuestion": "screening2"
        },
        "rightAnswer": {
            "text": "Here we go.",
            "effect": {
                "unlockInsight": "creditsystem"
            },
            "nextQuestion": "screening2"
        }
    },

    "screening2": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "It's far from the story you imagined, half of it isn't even yours. Honestly, you don't even like it.  Still, your name is in the credits. ",
        "aspect": "hierarchisation, marginalisation",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Not how I pictured this.",
            "effect": {
                "unlockInsight": "creditsystem"
            },
            "nextQuestion": "credit"
        },
        "rightAnswer": {
            "text": "So… congrats?",
            "effect": {
                "unlockInsight": "creditsystem"
            },
            "nextQuestion": "credit"
        }
    },
    "credit": {
        "chapterId": "moviepremiere",
        "character": "FellowScreenwriter",
        "text": "The movie is brilliant—especially that heartbreaking monologue in the third act. Pure genius!\n(You didn't write it.)",
        "aspect": "hierarchisation, marginalisation",
        "leftAnswer": {
            "text": "Angels whispered it to me.",
            "outcome": "\nFellow Screenwriter: 'We should totally write something together!'",
            "effect": {
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "symbol"
        },
        "rightAnswer": {
            "text": "Actually, I didn't write it",
            "outcome": "Fellow Screenwriter: 'Who wrote it, then? I should absolutely meet them!'",
            "effect": {
                "relationships": -10
            },
            "nextQuestion": "symbol"
        }
    },
    "symbol": {
        "chapterId": "moviepremiere",
        "character": "Journalist",
        "text": "\"The use of fog in the film seems to symbolize the veil of ignorance that shrouds society. Would you agree?\"\n(You'd never thought of it this way)",
        "leftAnswer": {
            "text": "Absolutely.",
            "outcome": "The Journalist nods, satisfied. You smile, though you think this analysis is cheap.",
            "effect": {
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "afterpartyintro"
        },
        "rightAnswer": {
            "text": "Sometimes a fog is just a fog.",
            "outcome": "The journalist sighs in disappointment.",
            "effect": {
                "relationships": -10,
                "ego": 10
            },
            "nextQuestion": "afterpartyintro"
        }
    },
    "afterpartyintro": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "The afterparty buzzes behind you, but out here under the night sky, it's quiet. Your agent joins you with a glass of champagne.",
        "leftAnswer": {
            "text": "Quite a night, huh?",
            "effect": {
                "unlockInsight": "why"
            },
            "nextQuestion": "sequel"
        },
        "rightAnswer": {
            "text": "Hey.",
            "effect": {
                "unlockInsight": "why"
            },
            "nextQuestion": "sequel"
        }
    },
    "sequel": {
        "chapterId": "moviepremiere",
        "character": "Agent",
        "text": "The executive just asked me if you'd be interested in a sequel. He's ready to close the deal right away.",
        "leftAnswer": {
            "text": "Not like I have anything better to do.",
            "effect": {
                "money": 20,
                "relationships": 10,
                "ego": -10,
                "skills": 10
            },
            "nextQuestion": "theend"
        },
        "rightAnswer": {
            "text": "Never again.",
            "effect": {
                "relationships": -10,
                "ego": 10
            },
            "nextQuestion": "plans"
        }
    },
    "plans": {
        "chapterId": "moviepremiere",
        "character": "Agent",
        "text": "So, what's next for you? Are you thinking about another screenplay, or taking a break?",
        "leftAnswer": {
            "text": "Going right back to work.",
            "effect": {
                "money": 20,
                "relationships": 10,
                "skills": 10
            },
            "nextQuestion": "plans2"
        },
        "rightAnswer": {
            "text": "A break. Just bought a ticket to Hawaii.",
            "effect": {
                "money": -10,
                "relationships": -10,
                "ego": 10,
                "skills": -10
            },
            "nextQuestion": "theend"
        }
    },
    "plans2": {
        "chapterId": "moviepremiere",
        "character": "Agent",
        "text": "And what will it be?",
        "leftAnswer": {
            "text": "Write and direct my own screenplay.",
            "outcome": "Agent: \"Ambitious. Just make sure you've got enough savings to survive the process.\"",
            "effect": {
                "money": -20,
                "ego": 10,
                "skills": 20
            },
            "nextQuestion": "theend"
        },
        "rightAnswer": {
            "text": "Don't know yet.",
            "outcome": "Agent: \"Take your time. Just don't take too long, Hollywood forgets quickly.\"",
            "effect": {
                "relationships": -10,
                "ego": -10
            },
            "nextQuestion": "theend"
        }
    },
    "theend": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "It was a fun night. But have you truly made it? Not yet.",
        "leftAnswer": {
            "text": "Getting there.",
            "nextQuestion": "theend2"
        },
        "rightAnswer": {
            "text": "Don't remind me.",
            "nextQuestion": "theend2"
        }
    },

    "theend2": {
        "chapterId": "moviepremiere",
        "character": "InnerVoice",
        "text": "The journey ahead is long and full uncertainty. But as you drift to sleep, your dreams reveal glimpses of your future.",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Let's find out.",
            "nextScene": "win"
        },
        "rightAnswer": {
            "text": "Let's find out.",
            "nextScene": "win"
        }
    }
}
