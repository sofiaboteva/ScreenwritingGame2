export const pachapter = {
    "producerassistant": {
        "chapterId": "pachapter",
        "character": "InnerVoice",
        "text": "...as a producer's assistant.",
        "aspect": "hierarchisation",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Wait, what? ",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "unlockInsight": "dayjobs"
            },
            "nextQuestion": "producerdemand"
        },
        "rightAnswer": {
            "text": "Oh, no...",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "unlockInsight": "dayjobs"
            },
            "nextQuestion": "producerdemand"
        }
    },
    "producerdemand": {
        "chapterId": "pachapter",
        "character": "Producer",
        "text": "I know it's 10 PM, but here's a quick list of things for tomorrow morning. Shouldn't take you more than 3 hours!",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "On it, boss!",
            "outcome": "You power through another sleepless night. The producer sends you another 'quick' list at 8 AM, because 'you're so reliable'!",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "bagels"
        },
        "rightAnswer": {
            "text": "Sure, right after I invent a time machine.",
            "outcome": "The producer calls you 'difficult,' and gives the tasks to someone else. You finally sleep… for now.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "bagels"
        }
    },
    "bagels": {
        "chapterId": "pachapter",
        "character": "Producer",
        "text": "Can you find the best bagels in the city for my afternoon meeting with the studio execs? Thanks!",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Conduct an in-depth bagel investigation.",
            "outcome": "You crisscross the city, sampling artisan bagels and delivering a box of perfection, while your script gathers dust.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "shooting"
        },
        "rightAnswer": {
            "text": "Bagels from the nearest supermarket will do. I'll work on my script.",
            "outcome": "The producer and studio execs got food poisoning, but at least you finished a killer scene",
            "effect": {
                "money": 0,
                "relationships": -20,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "shooting"
        }
    },
    "shooting": {
        "chapterId": "pachapter",
        "character": "Producer",
        "text": "The director refuses to shoot the scene as written. Everyone agrees the scene's great—even our PA. Riiight?",
        "aspect": "hierarchisation, collaboration, balance",
        "leftAnswer": {
            "text": "Right, boss",
            "outcome": "The execs call the scene offensive and a little racist. The producer gets fired the next day, and so do you.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextChapter": "dj4"
        },
        "rightAnswer": {
            "text": "It’s actually a pretty stupid scene",
            "outcome": "Director triumphs, the producer is mad.",
            "effect": {
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "genius"
        }
    },
    "genius": {
        "chapterId": "pachapter",
        "character": "Producer",
        "text": "Okay, genius. Got a better idea?",
        "aspect": "hierarchisation, collaboration, balance",
        "leftAnswer": {
            "text": "I'm just a PA here",
            "outcome": "The producer : 'Exactly. So why are you even talking?'\nThe Director despises you, but at least you kept your job.\"",
            "effect": {
                "money": 10,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextChapter": "dj4"
        },
        "rightAnswer": {
            "text": "To be honest, yes. ",
            "outcome": "The director loves your idea. The scene is the film's standout moment, but you're fired for blowing the budget.\n",
            "effect": {
                "money": -20,
                "relationships": 5,
                "ego": 10,
                "skills": 10
            },
            "nextChapter": "dj4"
        }
    },
};