// export const dj2 = {
//     "keepjobbar": {
//         "chapterId": "dj2",
//         "character": "InnerVoice",
//         "text": "Will you keep working in the bar?",
//         "aspect": "hierarchisation",
//         "requiresPerk": "bartender",
//         "leftAnswer": {
//             "text": "Yes",
//             "effect": {
//                 "money": 0,
//                 "relationships": 0,
//                 "ego": 0,
//                 "skills": 0
//             },
//             "nextQuestion": "moreshifts"
//         },
//         "rightAnswer": {
//             "text": "No!",
//             "outcome": "Terrified of being stuck in the bar forever, you quit with a dramatic monologue.",
//             "effect": {
//                 "money": -10,
//                 "relationships": 0,
//                 "ego": 10,
//                 "skills": 10,
//                 "removePerk": "bartender"
//             },
//             "nextQuestion": "parents"
//         }
//     },
//     "moreshifts": {
//         "chapterId": "dj2",
//         "character": "InnerVoice",
//         "text": "The bar manager offers you to trade your soul for more shifts and a little extra cash. Do you agree?",
//         "aspect": "hierarchisation",
//         "leftAnswer": {
//             "text": "Yes, please\n",
//             "outcome": "Congratulations — now you’re writing even less!",
//             "effect": {
//                 "money": 15,
//                 "relationships": 0,
//                 "ego": -10,
//                 "skills": -15,
//                 "addPerk": "moreshifts",
//                 "removePerk": "bartender"
//             },
//             "nextChapter": "buzzchapter"
//         },
//         "rightAnswer": {
//             "text": "No!",
//             "outcome": "You tell yourself you’ll only work for one more month and then quit, but do you even believe that yourself?",
//             "effect": {
//                 "money": 10,
//                 "relationships": 0,
//                 "ego": -5,
//                 "skills": -10
//             },
//             "nextChapter": "buzzchapter"
//         }
//     },
//     "parents": {
//         "chapterId": "dj2",
//         "character": "Parents",
//         "text": "We’re worried. Let us help with a monthly allowance—just until you find a real job.",
//         "aspect": "hierarchisation",
//         "leftAnswer": {
//             "text": "Thanks, family bank!",
//             "effect": {
//                 "money": 10,
//                 "relationships": 0,
//                 "ego": -10,
//                 "skills": 0,
//                 "addPerk": "parents"
//             },
//             "nextChapter": "buzzchapter"
//         },
//         "rightAnswer": {
//             "text": "Nope, I'll earn my keep",
//             "effect": {
//                 "money": -10,
//                 "relationships": 0,
//                 "ego": 10,
//                 "skills": 0
//             },
//             "nextChapter": "buzzchapter"
//         }
//     },
// };



export const dj2 = {
    "salarybar": {
        "chapterId": "dj2",
        "character": "InnerVoice",
        "text": "Your paycheck has arrived! (job: Bartender)",
        "aspect": "hierarchisation",
        "requiresPerk": "bartender",
        "comment": "No real choice.",
        "leftAnswer": {
            "text": "About time.",
            "effect": {
                "money": 10
            },
            "nextQuestion": "keepjobbar"
        },
        "rightAnswer": {
            "text": "Hope it lasts",
            "effect": {
                "money": 10
            },
            "nextQuestion": "keepjobbar"
        }
    },
    "parents": {
        "chapterId": "dj2",
        "character": "Parents",
        "text": "We’re worried. Let us help with a monthly allowance—just until you find a real job.",
        "aspect": "hierarchisation",
        "leftAnswer": {
            "text": "Thanks, family bank!",
            "effect": {
                "money": 10,
                "relationships": 0,
                "ego": -10,
                "skills": 0,
                "addPerk": "parents"
            },
            "nextChapter": "buzzchapter"
        },
        "rightAnswer": {
            "text": "Nope, I'll earn my keep",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": 10,
                "skills": 0
            },
            "nextChapter": "buzzchapter"
        }
    },
    "keepjobbar": {
        "chapterId": "dj2",
        "character": "InnerVoice",
        "text": "Will you keep working in the bar?",
        "aspect": "hierarchisation",
        "requiresPerk": "bartender",
        "leftAnswer": {
            "text": "Yes",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "moreshifts"
        },
        "rightAnswer": {
            "text": "No!",
            "outcome": "Terrified of being stuck in the bar forever, you quit with a dramatic monologue.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": 10,
                "skills": 10,
                "removePerk": "bartender"
            },
            "nextChapter": "buzzchapter"
        }
    },
    "moreshifts": {
        "chapterId": "dj2",
        "character": "InnerVoice",
        "text": "The bar manager offers you to trade your soul for more shifts and a little extra cash. Do you agree?",
        "aspect": "hierarchisation",
        "requiresPerk": "bartender",
        "leftAnswer": {
            "text": "Yes, please\n",
            "outcome": "Congratulations — now you’re writing even less!",
            "effect": {
                "money": 15,
                "relationships": 0,
                "ego": -10,
                "skills": -15,
                "addPerk": "moreshifts",
                "removePerk": "bartender"
            },
            "nextChapter": "buzzchapter"
        },
        "rightAnswer": {
            "text": "No!",
            "outcome": "You tell yourself you’ll only work for one more month and then quit, but do you even believe that yourself?",
            "effect": {
                "money": 10,
                "relationships": 0,
                "ego": -5,
                "skills": -10
            },
            "nextChapter": "buzzchapter"
        }
    }
};