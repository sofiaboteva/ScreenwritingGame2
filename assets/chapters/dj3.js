export const dj3 = {
    "salarybar2": {
        "chapterId": "dj3",
        "character": "InnerVoice",
        "text": "Your paycheck has arrived! (job: Bartender)",
        "aspect": "hierarchisation",
        "requiresPerk": "bartender",
        "comment": "No real choice.",
        "leftAnswer": {
            "text": "About time.",
            "effect": {
                "money": 10
            },
            "nextQuestion": "badtiming"
        },
        "rightAnswer": {
            "text": "Hope it lasts",
            "effect": {
                "money": 10
            },
            "nextQuestion": "badtiming"
        }
    },
    "salarybarmore": {
        "chapterId": "dj3",
        "character": "InnerVoice",
        "text": "Your paycheck has arrived! (job: Bartender)",
        "aspect": "hierarchisation",
        "requiresPerk": "moreshifts",
        "comment": "No real choice.",
        "leftAnswer": {
            "text": "About time.",
            "effect": {
                "money": 15
            },
            "nextQuestion": "badtiming"
        },
        "rightAnswer": {
            "text": "Hope it lasts",
            "effect": {
                "money": 15
            },
            "nextQuestion": "badtiming"
        }
    },
    "badtiming": {
        "chapterId": "dj3",
        "character": "InnerVoice",
        "text": "You’ve been invited to a last-minute pitching session for your dream project, but your bar shift is at the same time. What do you do?",
        "aspect": "freelance",
        "requiresPerk": "bartender",
        "leftAnswer": {
            "text": "Call in sick and head to the pitch.",
            "outcome": "The pitch didn’t go well. And, tired of your lies, your boss fires you without paying your last salary.",
            "effect": {
                "stress": 10,
                "money": 0,
                "relationships": -10,
                "ego": 5,
                "skills": 5,
                "removePerk": "bartender, moreshifts"
            },
            "nextQuestion": "firsthollywoodjob"
        },
        "rightAnswer": {
            "text": "Stick to the bar job",
            "outcome": "Fed up with the job that stole your dream, you quit right after your next paycheck.",
            "effect": {
                "stress": -10,
                "money": 10,
                "relationships": 0,
                "ego": -10,
                "skills": 0,
                "removePerk": "bartender, moreshifts"
            },
            "nextQuestion": "firsthollywoodjob"
        }
    },
    "salaryparents": {
        "chapterId": "dj3",
        "character": "Parents",
        "text": "Here’s your monthly check.",
        "aspect": "hierarchisation, marginalisation",
        "requiresPerk": "parents",
        "comment": "No real choice.",
        "leftAnswer": {
            "text": "Much appreciated.",
            "effect": {
                "money": 10
            },
            "nextQuestion": "parents2"
        },
        "rightAnswer": {
            "text": "Don't worry, I'll pay you back eventually",
            "effect": {
                "money": 10
            },
            "nextQuestion": "parents2"
        }
    },
    "parents2": {
        "chapterId": "dj3",
        "character": "Parents",
        "text": "By the way, how’s the search for a ‘real job’ going? You know we won’t be able to support you forever.",
        "aspect": "hierarchisation, marginalisation",
        "requiresPerk": "parents",
        "leftAnswer": {
            "text": "Having interviews each day, but no luck yet...",
            "outcome": "They realize you’re lying, but not before sending you one more payment.",
            "effect": {
                "money": 10,
                "relationships": 0,
                "ego": -10,
                "skills": 0,
                "removePerk": "parents"
            },
            "nextQuestion": "firsthollywoodjob"
        },
        "rightAnswer": {
            "text": "I’m never going to be a lawyer. Accept it.",
            "outcome": "Goodbye, family bank.",
            "effect": {
                "stress": 10,
                "money": -10,
                "relationships": 0,
                "ego": 10,
                "skills": 0,
                "removePerk": "parents"
            },
            "nextQuestion": "firsthollywoodjob"
        }
    },
    "firsthollywoodjob": {
        "chapterId": "dj3",
        "character": "InnerVoice",
        "text": "But don't worry, you’ve finally landed your first Hollywood job…",
        "aspect": "hierarchisation",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "What?",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextChapter": "pachapter"
        },
        "rightAnswer": {
            "text": "How?\n",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextChapter": "pachapter"
        }
    },
    "firsthollywoodjob2": {
        "chapterId": "dj3",
        "character": "InnerVoice",
        "text": "Congratulations, you’ve finally landed your first Hollywood job…",
        "aspect": "hierarchisation",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "What?",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextChapter": "pachapter"
        },
        "rightAnswer": {
            "text": "How?\n",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextChapter": "pachapter"
        }
    }
}