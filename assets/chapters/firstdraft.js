export const firstdraft = {
    "advancepaymentintro": {
        "chapterId": "firstdraft",
        "character": "Producer",
        "text": "Congrats! You just received an advance payment for your script.",
        "aspect": "portfolio",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Well, that's new.",
            "effect": {
                "money": 15,
                "unlockInsight": "salaries"
            },
            "nextQuestion": "advancepayment"
        },
        "rightAnswer": {
            "text": "I'm rich!",
            "effect": {
                "money": 15,
                "unlockInsight": "salaries"
            },
            "nextQuestion": "advancepayment"
        }
    },
    "advancepayment": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "What will you do with the money?",
        "aspect": "portfolio",
        "leftAnswer": {
            "text": "Celebrate! I deserve it.",
            "nextQuestion": "advancepayment2"
        },
        "rightAnswer": {
            "text": "Save it for later.",
            "outcome": "Smart move. Unfortunately, responsible decisions don't spark much inspiration.",
            "effect": {
                "money": 10,
                "ego": -10
            },
            "nextQuestion": "timetowrite"
        }
    },
    "advancepayment2": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "How?",
        "aspect": "portfolio",
        "leftAnswer": {
            "text": "Throw a big party.",
            "outcome": "The party was a blast. But were those connections really worth all the broken furniture?",
            "effect": {
                "money": -15,
                "relationships": 10
            },
            "nextQuestion": "timetowrite"
        },
        "rightAnswer": {
            "text": "Spa day.",
            "outcome": "You emerge refreshed and glowing.",
            "effect": {
                "money": -10,
                "ego": 10
            },
            "nextQuestion": "timetowrite"
        }
    },
    "timetowrite": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "But now it's time to write...",
        "aspect": "collaboration, balance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Ugh, already?",
            "nextQuestion": "fourweeks"
        },
        "rightAnswer": {
            "text": "Fine, fine...",
            "nextQuestion": "fourweeks"
        }
    },
    "fourweeks": {
        "chapterId": "firstdraft",
        "character": "Producer",
        "text": "You've got four weeks. Don't make me regret this.",
        "aspect": "portfolio, collaboration, balance",
        "leftAnswer": {
            "text": "No pressure, huh?",
            "nextQuestion": "emptypage"
        },
        "rightAnswer": {
            "text": "Gulp.",
            "nextQuestion": "emptypage"
        }
    },
    "emptypage": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "It's just you and the empty page now. Terrifying, isn't it?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Yes.",
            "effect": {
                "ego": -10
            },
            "nextQuestion": "fear"
        },
        "rightAnswer": {
            "text": "No.",
            "effect": {
                "ego": 10,
                "skills": 5
            },
            "nextQuestion": "emptypage2"
        }
    },
    "emptypage2": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "If it's not scary, then why have you been staring at the blank page for five days?",
        "aspect": "balance, collaboration",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Uhhh...",
            "nextQuestion": "fear"
        },
        "rightAnswer": {
            "text": "Well...",
            "nextQuestion": "fear"
        }
    },
    "fear": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "You seem frozen with fear. Seriously, are you even good enough for this? Can you handle this story?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Time for some self-reflection.",
            "outcome": "You spiral into self-loathing and doubt. Now you're too paralyzed to even open your laptop.",
            "effect": {
                "ego": -15
            },
            "nextQuestion": "firstscene"
        },
        "rightAnswer": {
            "text": "Ignore it and push forward.",
            "outcome": "You hammer out some ideas. They're rough. They're ugly. But  at least you're moving somewhere.",
            "effect": {
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "firstscene"
        }
    },
    "firstscene": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "You've written the first scene, but is it any good? What if it's terrible? Maybe you should rewrite it?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Rewrite it.",
            "outcome": "You've rewritten the same scene six times. It's perfect. Or maybe it's worse? Who can tell anymore?",
            "effect": {
                "ego": -10
            },
            "nextQuestion": "week"
        },
        "rightAnswer": {
            "text": "Move forward.",
            "outcome": "The scene might not be perfect, but better mediocre progress than polished procrastination.",
            "effect": {
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "week"
        }
    },
    "week": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "A week has passed. You've written 5 pages out of 120. What's the plan for today?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Just type words.",
            "outcome": "You write two pages of not-so-great text. But hey, at least it's something, right? Right?..",
            "effect": {
                "ego": 5,
                "skills": 10
            },
            "nextQuestion": "tenpages"
        },
        "rightAnswer": {
            "text": "Seek inspiration.",
            "nextQuestion": "inspiration"
        }
    },
    "inspiration": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "How do you plan to find it?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Go for a walk",
            "outcome": "Strolling the sidewalks of LA, you spot a homeless man and a dead crow. Not exactly a creative epiphany.",
            "effect": {
                "ego": -10,
            },
            "nextQuestion": "tenpages"
        },
        "rightAnswer": {
            "text": "Ask for help",
            "nextQuestion": "mckee"
        }
    },

    "mckee": {
        "chapterId": "firstdraft",
        "character": "ScreenwritingGuru",
        "text": "McKee's in town, and his masterclass will blow your mind. You'll finally crack your story. Are you coming?",
        "aspect": "balance, collaboration, innovation",
        "leftAnswer": {
            "text": "No",
            "effect": {
                "unlockInsight": "screenwritingmanuals"
            },
            "nextQuestion": "spiritualreset"
        },
        "rightAnswer": {
            "text": "Yes",
            "outcome": "Your wallet's considerably thinner, but you've mastered the art of perfectly boring storytelling.",
            "effect": {
                "money": -10,
                "relationships": 10,
                "ego": -5,
                "skills": 15,
                "unlockInsight": "screenwritingmanuals"
            },
            "nextQuestion": "spiritualreset"
        }
    },

    "spiritualreset": {
        "chapterId": "firstdraft",
        "character": "FellowScreenwriter",
        "text": "You need a spiritual reset. Let's hit up Ayahuasca. It'll be life-changing. Are you in?",
        "aspect": "balance, collaboration, innovation",
        "leftAnswer": {
            "text": "Let's go!",
            "outcome": "The trip was transformative. You saw the entire movie in your head. Too bad none of it stuck when you came back.",
            "effect": {
                "relationships": 10,
                "ego": -10,
                "skills": -10,
                "unlockInsight": "ruleskill"
            },
            "nextQuestion": "tenpages"
        },
        "rightAnswer": {
            "text": "No, thanks",
            "outcome": "You stay home and write. No breakthroughs, but you're one page closer to a draft.",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10,
                "unlockInsight": "ruleskill"
            },
            "nextQuestion": "tenpages"
        }
    },
    
    "tenpages": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "Two weeks in, and you've managed a grand total of 10 pages. What's the plan for today?",
        "aspect": "balance, collaboration, innovation",
        "leftAnswer": {
            "text": "Just type words.",
            "outcome": "It's one of those days. You manage to hammer out half a page, but it's clunky and uninspired. You hope tomorrow will be better.",
            "effect": {
                "ego": -10,
                "skills": 5
            },
            "nextQuestion": "deadline"
        },
        "rightAnswer": {
            "text": "Seek inspiration from movies.",
            "outcome": "You dive into a movie marathon and feel electrified by the artistry. But wait—how did it get to 2 a.m. already? Not a single new word written.",
            "effect": {
                "ego": 10,
                "skills": -5
            },
            "nextQuestion": "deadline"
        }
    },
    "deadline": {
        "chapterId": "firstdraft",
        "character": "InnerVoice",
        "text": "Deadline's tomorrow, and you've got half a draft. What's the plan, genius?",
        "aspect": "balance, collaboration, innovation",
        "leftAnswer": {
            "text": "Ask for an extension",
            "outcome": "The producer grants you a week but makes it painfully clear they're not impressed.",
            "effect": {
                "relationships": -15,
                "ego": 10,
                "skills": -10
            },
            "nextChapter": "dj8"
        },
        "rightAnswer": {
            "text": "Pull an all-nighter on caffeine",
            "outcome": "Fueled by enough caffeine to kill a small horse, you churn out 60 more shaky pages. They'll need rewriting, but you've met the deadline.",
            "effect": {
                "relationships": 10,
                "ego": -10,
                "skills": 20
            },
            "nextChapter": "dj8"
        }
    },
}