export const dj6 = {
    "lookingforajob": {
        "chapterId": "dj6",
        "character": "InnerVoice",
        "text": "Need a day job to survive?",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Yes",
            "nextQuestion": "theater"
        },
        "rightAnswer": {
            "text": "No",
            "nextChapter": "thepitch"
        }
    },
    "theater": {
        "chapterId": "dj6",
        "character": "InnerVoice",
        "text": "You can write a play for a local theater for a modest fee, or SMM for a tire company that offers a steady pay. Which do you choose?",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Theater",
            "outcome": "The experience fuels your creative drive and gives you just enough money to cover one-third of your rent.",
            "effect": {
                "money": 5,
                "relationships": 5,
                "ego": 10,
                "skills": 10,
                "addPerk": "theater"
            },
            "nextChapter": "thepitch"
        },
        "rightAnswer": {
            "text": "Tire company",
            "outcome": "The paycheck is steady, but writing about tires drains your enthusiasm for storytelling.",
            "effect": {
                "money": 10,
                "ego": -10,
                "addPerk": "tirecompany"
            },
            "nextChapter": "thepitch"
        }
    },
}