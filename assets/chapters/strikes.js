export const strikes = {
    "strikesintro": {
        "chapterId": "strikes",
        "character": "InnerVoice",
        "text": "Studios are raking in profits, but writers see little of it. The union declares a strike.",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Well, here we go.",
            "nextQuestion": "strike"
        },
        "rightAnswer": {
            "text": "Cool. Just what I needed.",
            "nextQuestion": "strike"
        }
    },
    "strike": {
        "chapterId": "strikes",
        "character": "Producer",
        "text": "I've got a project for you — a movie with A-list stars and a big studio budget. No one has to know.",
        "aspect": "hierarchisation, marginalisation",
        "comment": "Immediate death!!!",
        "leftAnswer": {
            "text": "Let's do that.",
            "nextScene": "blacklisted"
        },
        "rightAnswer": {
            "text": "I'm not a scab.",
            "effect": {
                "relationships": 10,
                "unlockInsight": "wga"
            },
            "outcome": "The union appreciates your dedication.",
            "nextQuestion": "strike2"
        }
    },
    "strike2": {
        "chapterId": "strikes",
        "character": "InnerVoice",
        "text": "How will you survive during the strike, then?",
        "aspect": "hierarchisation, marginalisation",
        "comment": "Reconsider scores",
        "leftAnswer": {
            "text": "Live off savings.",
            "outcome": "You tighten your belt and stay home. After weeks of isolation, you start talking to your houseplants, but you've finished a spec you had been putting off for ages.\n",
            "effect": {
                "money": -10,
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextChapter": "moviepremiere"
        },
        "rightAnswer": {
            "text": "Work in a cafe.",
            "outcome": "During one of your shifts, you randomly meet a famous producer. After a quick chat, they suggest meeting once the strike is over.",
            "effect": {
                "money": 10,
                "relationships": 10,
                "ego": -10
            },
            "nextChapter": "moviepremiere"
        }
    },
}