export const dj7 = {
    "theater2": {
        "chapterId": "dj7",
        "character": "InnerVoice",
        "text": "The theater offers you to write another play. With a feature film script already on your plate, will you take on the extra work?",
        "aspect": "hierarchisation",
        "requiresPerk": "theater",
        "leftAnswer": {
            "text": "I can juggle both.",
            "outcome": "Well, let’s see how you’ll handle it.",
            "effect": {
                "money": 5,
                "ego": 10,
                "skills": 5
            },
            "nextQuestion": "lendmoney"
        },
        "rightAnswer": {
            "text": "Focus on the film",
            "effect": {
                "money": -5,
                "removePerk": "theater"
            },
            "nextQuestion": "lendmoney"
        }
    },
    "tirecompany2": {
        "chapterId": "dj7",
        "character": "InnerVoice",
        "text": "With a feature film script already on your plate, will you keep on working for a tire company?",
        "aspect": "hierarchisation",
        "requiresPerk": "tirecompany",
        "comment": "Reconsider salary scores",
        "leftAnswer": {
            "text": "I can juggle both.",
            "outcome": "Well, let’s see how you’ll handle it.",
            "effect": {
                "money": 10,
                "ego": -10
            },
            "nextQuestion": "lendmoney"
        },
        "rightAnswer": {
            "text": "Focus on the film",
            "effect": {
                "money": -10,
                "ego": 10,
                "removePerk": "tirecompany"
            },
            "nextQuestion": "lendmoney"
        }
    },
    "lendmoney": {
        "chapterId": "dj7",
        "character": "fellowscreenwriter",
        "text": "I've heard you're a big writer now… Can you lend me some money?",
        "comment": "Don't forget to add paying back card",
        "leftAnswer": {
            "text": "Sure.",
            "outcome": "Fellow Screenwriter: \"Thanks, you saved me! I'll pay you back as soon as I can.\" ",
            "effect": {
                "money": -10,
                "relationships": 10,
                "addPerk": "loan"
            },
            "nextChapter": "firstdraft"
        },
        "rightAnswer": {
            "text": "Not so big, sorry.",
            "outcome": "You can tell they won’t be texting you anytime soon.",
            "effect": {
                "relationships": -10
            },
            "nextChapter": "firstdraft"
        }
    },
}