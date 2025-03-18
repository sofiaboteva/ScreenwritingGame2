export const dj9 = {
    "movein2": {
        "chapterId": "dj9",
        "character": "InnerVoice",
        "text": "Will you keep living with your partner?",
        "aspect": "hierarchisation",
        "requiresPerk": "partner",
        "leftAnswer": {
            "text": "Yes.",
            "outcome": "Within a month, your partner realizes you don’t love them and makes you move out.",
            "effect": {
                "money": 5,
                "ego": -20,
                "removePerk": "partner"
            },
            "nextQuestion": "teaching"
        },
        "rightAnswer": {
            "text": "No.",
            "outcome": "You've got no electricity, but at least you’re free and independent",
            "effect": {
                "money": -5,
                "ego": 10
            },
            "nextQuestion": "teaching"
        }
    },
    "teaching": {
        "chapterId": "dj9",
        "character": "InnerVoice",
        "text": "A film school offers you to teach a screenwriting master-class.",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Why not? I know my stuff. ",
            "outcome": "The students doubt your youth at first but soon come to appreciate your insights.",
            "effect": {
                "money": 10,
                "ego": 10,
                "addPerk": "teaching"
            },
            "nextChapter": "directorsnotes"
        },
        "rightAnswer": {
            "text": "Who am I to teach anybody?",
            "outcome": "The job went to your mate, who hasn’t written anything since their questionable short film in school",
            "effect": {
                "money": -5,
                "ego": 10
            },
            "nextChapter": "directorsnotes"
        }
    },
}