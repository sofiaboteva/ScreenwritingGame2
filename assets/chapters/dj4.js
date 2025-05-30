export const dj4 = {
    "toothpaste": {
        "chapterId": "dj4",
        "character": "InnerVoice",
        "text": "A toothpaste brand is looking for a copywriter to whip up some catchy slogans. Will you give it a shot?",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Absolutely ",
            "outcome": "The client loves you so much they double your pay 'to support your artistic dream.' Who knew toothpaste could fund the next Aaron Sorkin?",
            "effect": {
                "money": 20,
                "relationships": 0,
                "ego": 10,
                "skills": -10,
                "addPerk": "toothpaste"
            },
            "nextQuestion": "toothpaste2"
        },
        "rightAnswer": {
            "text": "I'm not a sell out.",
            "outcome": "You tell yourself true artists don’t compromise, but the instant noodles are starting to taste like regret.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -5,
                "skills": 10
            },
            "nextChapter": "agentmeeting"
        }
    },
    "toothpaste2": {
        "chapterId": "dj4",
        "character": "InnerVoice",
        "text": "Now they want more. Do you keep writing toothpaste ads?",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Yes",
            "outcome": "You used to see your heroes in your dreams. Now it’s just teeth, endlessly sparkling.",
            "effect": {
                "money": 10,
                "relationships": 0,
                "ego": -10,
                "skills": -10
            },
            "nextChapter": "agentmeeting"
        },
        "rightAnswer": {
            "text": "No",
            "outcome": "Finally, you can focus on your screenplay. No teeth, just the good old existential dread.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": 10,
                "skills": 10,
                "removePerk": "toothpaste"
            },
            "nextChapter": "agentmeeting"
        }
    },
}