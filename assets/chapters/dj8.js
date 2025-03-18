export const dj8 = {
    "burnout1": {
        "chapterId": "dj8",
        "character": "InnerVoice",
        "text": "Congratulations! Your attempt to do it all has backfired spectacularly. You’re burned out, missed the theater deadline, and got fired.",
        "aspect": "hierarchisation",
        "requiresPerk": "theater",
        "comment": "No real choise",
        "leftAnswer": {
            "text": "Wait... ",
            "effect": {
                "ego": -10,
                "removePerk": "theater"
            },
            "nextQuestion": "payback, movein"
        },
        "rightAnswer": {
            "text": "What...",
            "effect": {
                "ego": -10,
                "removePerk": "theater"
            },
            "nextQuestion": "payback, movein"
        }
    },
    "burnout2": {
        "chapterId": "dj8",
        "character": "InnerVoice",
        "text": "Congratulations! Your attempt to do it all has backfired spectacularly. You’re burned out, missed the tire company deadline, and got fired.",
        "aspect": "hierarchisation",
        "requiresPerk": "tirecompany",
        "comment": "No real choise",
        "leftAnswer": {
            "text": "Wait... ",
            "effect": {
                "ego": -10,
                "removePerk": "tirecompany"
            },
            "nextQuestion": "payback, movein"
        },
        "rightAnswer": {
            "text": "What...",
            "effect": {
                "ego": -10,
                "removePerk": "tirecompany"
            },
            "nextQuestion": "payback, movein"
        }
    },
    "payback": {
        "chapterId": "dj8",
        "character": "FellowScreenwriter",
        "text": "Hey! Remember that money you lent me? Here’s half. I’ll get you the rest soon, Ok?",
        "aspect": "hierarchisation",
        "requiresPerk": "loan",
        "leftAnswer": {
            "text": "Fine",
            "outcome": "You take what you can get. Will the rest ever come? Who knows.",
            "effect": {
                "money": 5,
                "relationships": 10,
                "ego": -10
            },
            "nextQuestion": "movein"
        },
        "rightAnswer": {
            "text": "Nope. I want all of it. Now.",
            "outcome": "They reluctantly hand over the rest.",
            "effect": {
                "money": 10,
                "relationships": -10,
                "ego": 10,
                "removePerk": "loan"
            },
            "nextQuestion": "movein"
        }
    },
    "movein": {
        "chapterId": "dj8",
        "character": "InnerVoice",
        "text": "Your partner invites you to move in so you won’t have to pay rent anymore. You were about to break up with them, but now…\n",
        "leftAnswer": {
            "text": "Move in",
            "outcome": "Who knew living with someone you don’t love is so unbearable? You pay the rent with your self-esteem.",
            "effect": {
                "money": 5,
                "ego": -10,
                "addPerk": "partner"
            },
            "nextChapter": "producersnotes"
        },
        "rightAnswer": {
            "text": "Break up.",
            "outcome": "You've got no electricity, but at least you’re free and independent.",
            "effect": {
                "money": -5,
                "ego": 10
            },
            "nextChapter": "producersnotes"
        }
    },
}