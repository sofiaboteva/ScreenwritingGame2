export const producersnotes = {
    "producersnotesintro": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "I've read your draft, and I’ve got notes. Lots of them.",
        "aspect": "balance, collaboration",
        "comment": "No real choise",
        "leftAnswer": {
            "text": "Oh no",
            "nextQuestion": "moretension"
        },
        "rightAnswer": {
            "text": "Here we go...",
            "nextQuestion": "moretension"
        }
    },
    "moretension": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "The script’s good, but it needs more tension.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "You’re right",
            "outcome": "You nod enthusiastically, but in fact, you're clueless about what they meant. Now you’re stuck.",
            "effect": {
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "intenseending"
        },
        "rightAnswer": {
            "text": "Can you clarify?",
            "nextQuestion": "ghostlover"
        }
    },
    "ghostlover": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "I mean... What if the ghost is also the protagonist's mom's lover? Think of the inner drama!",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "It doesn’t make any sense.",
            "outcome": "The producer: \"No imagination, huh? Maybe you're not cut out for this after all.\"",
            "effect": {
                "relationships": -10,
                "ego": -10
            },
            "nextQuestion": "intenseending"
        },
        "rightAnswer": {
            "text": "I'll think about it.",
            "outcome": "The producer beams, satisfied you’re open to their brilliance, not knowing you'll file it under \"ideas to ignore forever\".",
            "effect": {
                "relationships": 10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "intenseending"
        }
    },
    "intenseending": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "The ending is too intense. Audiences prefer happy endings, you know?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Sure, I agree (you don't)",
            "effect": {
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "christmascomedy"
        },
        "rightAnswer": {
            "text": "But I don't",
            "outcome": "Producer: \"I see, you're not open to new ideas. Well...\"",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "afternotes"
        }
    },
    "christmascomedy": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "Now that I think of it, what if we turn it into a Christmas comedy? We can have it ready for next year’s holiday season!",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Brilliant!",
            "outcome": "The producer’s ecstatic, but as you think of writing a rom-com with elves and jingle bells, you lose the will to live.",
            "effect": {
                "relationships": 10,
                "ego": -20
            },
            "nextQuestion": "afternotes"
        },
        "rightAnswer": {
            "text": "Over my dead body.",
            "outcome": "Producer: \"I see, you're not open to new ideas. Well...\"",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "afternotes"
        }
    },
    "afternotes": {
        "chapterId": "producersnotes",
        "character": "InnerVoice",
        "text": "You leave the producer’s office with a head full of notes and a script that's slipping out of your control.",
        "aspect": "balance, collaboration",
        "comment": "No real choise",
        "leftAnswer": {
            "text": "This is fine. Totally fine.",
            "nextQuestion": "makeitwork"
        },
        "rightAnswer": {
            "text": "AAAAAAAAA",
            "nextQuestion": "makeitwork"
        }
    },
    "makeitwork": {
        "chapterId": "producersnotes",
        "character": "InnerVoice",
        "text": "But we can make it work! Right?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Yes!",
            "effect": {
                "ego": 10
            },
            "nextQuestion": "notesinwriting"
        },
        "rightAnswer": {
            "text": "Not sure... ",
            "effect": {
                "ego": -10
            },
            "nextQuestion": "notesinwriting"
        }
    },
    "notesinwriting": {
        "chapterId": "producersnotes",
        "character": "InnerVoice",
        "text": "Should you ask for the producer’s notes in writing?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Yes",
            "nextQuestion": "courtcase"
        },
        "rightAnswer": {
            "text": "No, it’s all clear.",
            "outcome": "The next day, your scribbled notes make no sense. You vaguely remember something about a raver…or was it a rave?",
            "effect": {
                "ego": -10
            },
            "nextQuestion": "favscene"
        }
    },
    "courtcase": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "What is this, a court case? My assistant will call you tomorrow with the notes.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "I need them in writing.",
            "outcome": "The assistant emails you a summary riddled with typos, but hey, at least you’ve got evidence of their wild ideas.",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "favscene"
        },
        "rightAnswer": {
            "text": "Ok, fine.",
            "outcome": "The assistant calls the next day with a rambling, disorganized monologue. You’re no closer to clarity and even further from inspiration.",
            "effect": {
                "ego": -10
            },
            "nextQuestion": "favscene"
        }
    },
    "favscene": {
        "chapterId": "producersnotes",
        "character": "Producer",
        "text": "The producer's favourite scene doesn’t fit the new draft at all.",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Keep it anyway.",
            "effect": {
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "newscript"
        },
        "rightAnswer": {
            "text": "Cut it.",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "newscript"
        }
    },
    "newscript": {
        "chapterId": "producersnotes",
        "character": "InnerVoice",
        "text": "Let’s be real: making all the changes means writing an entirely new script. So, what’s the game plan?",
        "aspect": "balance, collaboration",
        "leftAnswer": {
            "text": "Rewrite everything.",
            "outcome": "It’s grueling and soul-crushing, but the script’s sharper than ever.",
            "effect": {
                "ego": -10,
                "skills": 20,
                "unlockInsight": "survivalguide2"
            },
            "nextChapter": "dj9"
        },
        "rightAnswer": {
            "text": "Minor tweaks will do.",
            "outcome": "You slap on a few changes just enough to look convincing. Here’s hoping the producer doesn’t dig too deep.",
            "effect": {
                "ego": -10,
                "skills": -10,
                "unlockInsight": "survivalguide2"
            },
            "nextChapter": "dj9"
        }
    },
}