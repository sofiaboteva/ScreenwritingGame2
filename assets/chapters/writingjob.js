export const writingjob = {
    "landedanagent": {
        "chapterId": "writingjob",
        "character": "InnerVoice",
        "text": "Against all odds, you’ve landed anagent! Time for the big offers to roll in.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Seriously?",
            "nextQuestion": "nosillygigs"
        },
        "rightAnswer": {
            "text": "I knew I had it in me.",
            "nextQuestion": "nosillygigs"
        }
    },
    "nosillygigs": {
        "chapterId": "writingjob",
        "character": "InnerVoice",
        "text": "At least now  you’ll never have to take on silly gigs again. Or so you think…",
        "leftAnswer": {
            "text": "Wait... ",
            "effect": {
                "money": 10,
                "ego": -10
            },
            "nextQuestion": "twoprojectsintro"
        },
        "rightAnswer": {
            "text": "What?",
            "effect": {
                "money": -1,
                "ego": 10
            },
            "nextQuestion": "twoprojectsintro"
        }
    },
    "twoprojectsintro": {
        "chapterId": "writingjob",
        "character": "Agent",
        "text": "I’ve got two projects for you to choose from.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "I'm intrigued",
            "nextQuestion": "twoprojectsintro2"
        },
        "rightAnswer": {
            "text": "Yeah?",
            "nextQuestion": "twoprojectsintro2"
        }
    },
    "twoprojectsintro2": {
        "chapterId": "writingjob",
        "character": "Agent",
        "text": "An autobiography for a big tech mogul who's about to get canceled.",
        "aspect": "hierarchisation, balance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Oh...",
            "nextQuestion": "twoprojectsintro3"
        },
        "rightAnswer": {
            "text": "I see...",
            "nextQuestion": "twoprojectsintro3"
        }
    },
    "twoprojectsintro3": {
        "chapterId": "writingjob",
        "character": "Agent",
        "text": "Or an unpaid ghostwriting internship for a famous screenwriter.",
        "aspect": "hierarchisation, balance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Hmm...",
            "nextQuestion": "twoprojects"
        },
        "rightAnswer": {
            "text": "Exciting..",
            "nextQuestion": "twoprojects"
        }
    },
    "twoprojects": {
        "chapterId": "writingjob",
        "character": "Agent",
        "text": "So which one will you choose?",
        "aspect": "hierarchisation, balance",
        "leftAnswer": {
            "text": "Big tech mogul",
            "outcome": "The mogul gets arrested before you can finish the book. Still, it was a fun and enriching experience—in more ways than one.",
            "effect": {
                "money": 20,
                "relationships": 0,
                "ego": 10,
                "skills": 10
            },
            "nextChapter": "dj6"
        },
        "rightAnswer": {
            "text": "Screenwriter",
            "outcome": "You ghostwrite the entire thing, and the screenwriter closes a deal with a big studio... without ever mentioning your name.",
            "effect": {
                "money": -1,
                "relationships": 0,
                "ego": -1,
                "skills": 20
            },
            "nextChapter": "dj6"
        }
    },
}