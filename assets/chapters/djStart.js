export const chapterStart = {
   "start": {
        "chapterId": "djStart",
        "character": "InnerVoice",
        "text": "Where do you start?",
        "aspect": "hierarchisation, freelance",
        "leftAnswer": {
            "text": "Rent a Room",
            "outcome": "You’ve rented a room with a breathtaking ocean view, but without a car, you can’t reach a single studio in town.",
            "effect": {
                "money": -20,
                "relationships": -10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "bartender"
        },
        "rightAnswer": {
            "text": "Buy a Car",
            "outcome": "You’re now living out of your car, but hey, you can zip around any part of LA with ease.",
            "effect": {
                "money": -10,
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "bartender"
        }
    },
    "bartender": {
        "chapterId": "djStart",
        "character": "InnerVoice",
        "text": "You have some savings, but they won’t last forever. You’ve been offered a job at a bar. Will you take it?",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Yes",
            "outcome": "You’re now a bartender. You’re so exhausted that there’s almost no time left to write.",
            "effect": {
                "money": 10,
                "relationships": 0,
                "ego": -10,
                "skills": -10,
                "addPerk": "bartender"
            },
            "nextChapter": "breakingin1"
        },
        "rightAnswer": {
            "text": "No",
            "outcome": "You can dedicate yourself to creativity all day, but careful – funds don’t last forever.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": 10,
                "skills": 10
            },
            "nextChapter": "breakingin1"
        }
    },
};