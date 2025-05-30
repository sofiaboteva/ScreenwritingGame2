export const breakingIn1 = {
    "breakinginintro": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "You’ve been in LA for three months, and you’re still a nobody. Shocking! Time to prove what you’re made of.",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Right!",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "unlockInsight": "goldenageend"
            },
            "nextQuestion": "pitchspecintro"
        },
        "rightAnswer": {
            "text": "Ok...",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "unlockInsight": "goldenageend"
            },
            "nextQuestion": "pitchspecintro"
        }
    },

    "pitchspecintro": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "Do you already know the difference between pitching and writing a spec?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Totally!",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "pitchspec"
        },
        "rightAnswer": {
            "text": "Not really...",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0
            },
            "nextQuestion": "pitchspecexplained"
        }
    },

    "pitchspecexplained": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "A pitch is when you try to sell an idea before writing it. A spec script means writing the full script first and hoping someone will buy it.",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Makes sense.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "pitchspec"
        },
        "rightAnswer": {
            "text": "Still confused, but okay.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0
            },
            "nextQuestion": "pitchspec"
        }
    },



    "pitchspec": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "So will you pitch or spec your first movie?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Pitch.",
            "outcome": "Nobody’s listening to a newbie like you. After countless rejections, you just write a spec script anyway.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "firstmovietheme"
        },
        "rightAnswer": {
            "text": "Spec.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0
            },
            "nextQuestion": "firstmovietheme"
        }
    },
    "firstmovietheme": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "What will it be about? ",
        "aspect": "balance, standardisation",
        "leftAnswer": {
            "text": "A meaningful, personal theme, but not very trendy",
            "outcome": "You write the script in a week. Super niche, but you love it.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 10,
                "skills": 10,
                "unlockInsight": "doublestandards"

            },
            "nextQuestion": "advice"
        },
        "rightAnswer": {
            "text": "Hot topic that doesn't spark joy in you",
            "outcome": "The theme isn’t really your thing, so you keep dozing off mid-sentence, and it takes you six months to finish.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 5,
                "unlockInsight": "doublestandards"
            },
            "nextQuestion": "advice"
        }
    },
    "advice": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "So, who are you showing your precious first draft to?",
        "aspect": "balance, standardisation",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Hmmm...",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "advice1"
        },
        "rightAnswer": {
            "text": "Let's see",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "advice1"
        }
    },
    "advice1": {
        "chapterId": "breakingin1",
        "character": "screenwritingguru",
        "text": "Your old screenwriting teacher, a self-proclaimed 'guru'.",
        "aspect": "balance, standardisation",
        "leftAnswer": {
            "text": "Yes",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "gurucriticism"
        },
        "rightAnswer": {
            "text": "No",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "advice2"
        }
    },
    "gurucriticism": {
        "chapterId": "breakingin1",
        "character": "screenwritingguru",
        "text": "This is great, but where's the classic three-act structure? Reread The Hero's Journey and rewrite it!",
        "aspect": "balance, standardisation, collaboration",
        "leftAnswer": {
            "text": "Rewrite it",
            "outcome": "Now it’s got the perfect structure... but man, it’s boring.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": -10,
                "skills": 10
            },
            "nextQuestion": "getnoticed"
        },
        "rightAnswer": {
            "text": "Keep it as it is",
            "outcome": "Plot holes? Maybe. But they’re my plot holes!",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "getnoticed"
        }
    },
    "advice2": {
        "chapterId": "breakingin1",
        "character": "fellowscreenwriter",
        "text": "An alternative fellow-screenwriter",
        "aspect": "balance, standardisation, collaboration",
        "leftAnswer": {
            "text": "Yes",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "fellowcriticism"
        },
        "rightAnswer": {
            "text": "No",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "advice3"
        }
    },
    "fellowcriticism": {
        "chapterId": "breakingin1",
        "character": "fellowscreenwriter",
        "text": "You're too constrained! Break the narrative chains, throw in some dream sequences and symbolic details.",
        "aspect": "balance, standardisation, collaboration",
        "leftAnswer": {
            "text": "Keep it as is",
            "outcome": "Plot holes? Maybe. But they’re my plot holes!",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "getnoticed"
        },
        "rightAnswer": {
            "text": "Rewrite it",
            "outcome": "Now even you’re not sure what your movie’s about... but it sure looks deep.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 5,
                "skills": 15
            },
            "nextQuestion": "getnoticed"
        }
    },
    "advice3": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "Pay for professional script coverage.",
        "aspect": "balance, standardisation",
        "leftAnswer": {
            "text": "Yes",
            "outcome": "You received valuable insights, but wow, those words didn’t come cheap.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": -5,
                "skills": 20
            },
            "nextQuestion": "getnoticed"
        },
        "rightAnswer": {
            "text": "No",
            "outcome": "Why would you need someone’s criticism? Your genius is self-evident — at least, to you.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 20,
                "skills": 0
            },
            "nextQuestion": "getnoticed"
        }
    },
    "getnoticed": {
        "chapterId": "breakingin1",
        "character": "InnerVoice",
        "text": "What’s your plan to get your script noticed by producers?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Send 100 emails to every production company I know.",
            "outcome": "You get zero responses, but a year and a half later, you see a trailer for a film with a suspiciously similar storyline.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextChapter": "dj2"
        },
        "rightAnswer": {
            "text": "Call up a friend who’s a receptionist at one of the studios",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "friendhelp"
        }
    },
    "friendhelp": {
        "chapterId": "breakingin1",
        "character": "fellowscreenwriter",
        "text": "You didn't answer my messages for three months, and now you need my help?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Go with emails",
            "outcome": "You get zero responses, but a year and a half later, you see a trailer for a film with a suspiciously similar storyline.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextChapter": "dj2"
        },
        "rightAnswer": {
            "text": "Let's talk over dinner. It's on me.",
            "outcome": "\"Thanks for the dinner, but it’s clearly not what the studio is looking for. Feel free to show me your future projects, though.\"",
            "effect": {
                "money": -10,
                "relationships": 10,
                "ego": 0,
                "skills": 0
            },
            "nextChapter": "dj2"
        }
    },
};