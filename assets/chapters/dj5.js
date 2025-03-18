export const dj5 = {
    "polishing1": {
        "chapterId": "dj5",
        "character": "InnerVoice",
        "text": "The streaming service asks you to polish a B-movie script. No contract, just a \"trust us.\"  But you’ll have to quit your toothpaste job. Do you take it?",
        "aspect": "hierarchisation",
        "requiresPerk": "toothpaste",
        "leftAnswer": {
            "text": "Sure.",
            "outcome": "You deliver the edits, and they ghost you. Lesson learned.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": -10,
                "skills": 10,
                "removePerk": "toothpaste"
            },
            "nextChapter": "writingjob"
        },
        "rightAnswer": {
            "text": "No way, I need stability.",
            "outcome": "You stick to the toothpaste job, but after one month, you’ve had enough and quit on your own.",
            "effect": {
                "money": 10,
                "relationships": 0,
                "ego": 10,
                "skills": 0,
                "removePerk": "toothpaste"
            },
            "nextChapter": "writingjob"
        }
    },
    "polishing2": {
        "chapterId": "dj5",
        "character": "InnerVoice",
        "text": "The streaming service asks you to polish a B-movie script. No contract, just a \"trust us.\" Do you take it?",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Sure.",
            "outcome": "You deliver the edits, and they ghost you. Lesson learned.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 10
            },
            "nextChapter": "writingjob"
        },
        "rightAnswer": {
            "text": "No contract, no deal.",
            "outcome": "They balk at your terms and walk away.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 10,
                "skills": 0
            },
            "nextChapter": "writingjob"
        }
    },
}