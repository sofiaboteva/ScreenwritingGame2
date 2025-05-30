export const tutorial = {
    "tutorialstart": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "So I've heard you came to LA to become a screenwriter. Is that true?",
        "leftAnswer": {
            "text": "Yess!",
            "nextQuestion": "prepare"
        },
        "rightAnswer": {
            "text": "Well…",
            "nextQuestion": "prepare"
        }
    },
    "prepare": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Let me prepare you for your journey.",
        "leftAnswer": {
            "text": "Let's go!",
            "nextQuestion": "you"
        },
        "rightAnswer": {
            "text": "Ok.",
            "nextQuestion": "you"
        }
    },
    "you": {
        "chapterId": "tutorial",
        "character": "InnerVoice",
        "text": "First of all, the girl you see in front of you is you.",
        "leftAnswer": {
            "text": "Like I don’t know it.",
            "nextQuestion": "gatekeeper"
        },
        "rightAnswer": {
            "text": "And you are?..",
            "nextQuestion": "gatekeeper"
        }
    },
    "gatekeeper": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "And I am the Gatekeeper of Hollywood that you're seeing in your dream.",
        "leftAnswer": {
            "text": "Yeah, right.",
            "nextQuestion": "meetpeople"
        },
        "rightAnswer": {
            "text": "Let’s hope it isn’t a nightmare.",
            "nextQuestion": "meetpeople"
        }
    },
    "meetpeople": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Anyway, you'll meet a lot of different people here.",
        "leftAnswer": {
            "text": "Sounds exciting!",
            "nextQuestion": "makechoices"
        },
        "rightAnswer": {
            "text": "I hope they're good people",
            "nextQuestion": "makechoices"
        }
    },
    "makechoices": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "And you'll have to make a lot of choices.",
        "leftAnswer": {
            "text": "Great!",
            "nextQuestion": "decision"
        },
        "rightAnswer": {
            "text": "Oh, I'm not sure.",
            "nextQuestion": "decision"
        }
    },
    "decision": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Every decision you make will shape your career.",
        "leftAnswer": {
            "text": "I'm ready to choose!",
            "nextQuestion": "hollywoodsurvival"
        },
        "rightAnswer": {
            "text": "No pressure, right?",
            "nextQuestion": "hollywoodsurvival"
        }
    },
    "hollywoodsurvival": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "See those scores up there? They measure your Hollywood survival.",
        "comment": "Как-то подсветить скоры?",
        "leftAnswer": {
            "text": "Got it.",
            "nextQuestion": "egoscore"
        },
        "rightAnswer": {
            "text": "I think I'm having an anxiety attack.",
            "nextQuestion": "egoscore"
        }
    },
    "egoscore": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "The first one is Ego",
        "comment": "Как-то подсветить Эго (можно задействовать мигающий эффект, использованный при смене скоров)",
        "leftAnswer": {
            "text": "Alright.",
            "nextQuestion": "relationshipsscore"
        },
        "rightAnswer": {
            "text": "What does that even mean?",
            "nextQuestion": "relationshipsscore"
        }
    },
    "relationshipsscore": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "The next one is Money",
        "leftAnswer": {
            "text": "Money is important.",
            "nextQuestion": "moneyscore"
        },
        "rightAnswer": {
            "text": "Nice",
            "nextQuestion": "moneyscore"
        }
    },
    "moneyscore": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "The third one is Relationships",
        "leftAnswer": {
            "text": "Okay.",
            "nextQuestion": "toolow"
        },
        "rightAnswer": {
            "text": "How do you measure that?",
            "nextQuestion": "toolow"
        }
    },
    "toolow": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Keep them balanced. Make sure none of them get too low...",
        "leftAnswer": {
            "text": "Easy.",
            "effect": {
                "money": -45,
                "relationships": -45,
                "ego": -45
            },
            "nextQuestion": "toolow2"
        },
        "rightAnswer": {
            "text": "Right.",
            "effect": {
                "money": -45,
                "relationships": -45,
                "ego": -45
            },
            "nextQuestion": "toolow2"
        }
    },
    "toolow2": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Like this",
        "leftAnswer": {
            "text": "What's happening ?!",
            "effect": {
                "money": 90,
                "relationships": 90,
                "ego": 90
            },
            "nextQuestion": "toohigh"
        },
        "rightAnswer": {
            "text": "Give me my points back!",
            "effect": {
                "money": 90,
                "relationships": 90,
                "ego": 90
            },
            "nextQuestion": "toohigh"
        }
    },
    "toohigh": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "…Or too high, like this!",
        "comment": "Максимизировать все скоры",
        "leftAnswer": {
            "text": "Fair enough.",
            "effect": {
                "money": -45,
                "relationships": -45,
                "ego": -45
            },
            "nextQuestion": "onemorething"
        },
        "rightAnswer": {
            "text": "That's not fair!",
            "effect": {
                "money": -45,
                "relationships": -45,
                "ego": -45
            },
            "nextQuestion": "onemorething"
        }
    },
    "toohigh2": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Like this"
    },
    "onemorething": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "And one more thing...",
        "comment": "Вернуть скоры обратно",
        "leftAnswer": {
            "text": "I'm listening.",
            "nextQuestion": "skillscore"
        },
        "rightAnswer": {
            "text": "What else?",
            "nextQuestion": "skillscore"
        }
    },
    "skillscore": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Don't forget: to become a great screenwriter, you need to level up your scriptwriting skills.",
        "leftAnswer": {
            "text": "Absolutely!",
            "nextQuestion": "skillmeter"
        },
        "rightAnswer": {
            "text": "Got it!",
            "nextQuestion": "skillmeter"
        }
    },
    "skillmeter": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "See that meter down there? That's your writing skill level.",
        "leftAnswer": {
            "text": "What? Why it’s so low now?",
            "nextQuestion": "maxskill"
        },
        "rightAnswer": {
            "text": "Let's boost it!",
            "nextQuestion": "maxskill"
        }
    },
    "maxskill": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Try to max it out to ensure your career's success.",
        "leftAnswer": {
            "text": "I'll do my best!",
            "effect": {
                "skills": 100
            },
            "nextQuestion": "journey"
        },
        "rightAnswer": {
            "text": "Challenge accepted!",
            "effect": {
                "skills": 100
            },
            "nextQuestion": "journey"
        }
    },
    "journey": {
        "chapterId": "tutorial",
        "character": "HollywoodGatekeeper",
        "text": "Alright, time to start your journey.",
        "leftAnswer": {
            "text": "I'm ready!",
            "effect": {
                "skills": -100
            },
            "nextChapter": "djStart"
        },
        "rightAnswer": {
            "text": "Wait...",
            "effect": {
                "skills": -100
            },
            "nextChapter": "djStart"
        }
    }
}