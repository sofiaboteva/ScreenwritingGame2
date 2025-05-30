export const buzzChapter = {
    "buzzintro": {
        "chapterId": "buzzchapter",
        "character": "InnerVoice",
        "text": "After a while it becomes clear that nothing is possible without an agent in this world.",
        "aspect": "hierarchisation, freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Got it.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "buzz"
        },
        "rightAnswer": {
            "text": "Oh...",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "buzz"
        }
    },
    "buzz": {
        "chapterId": "buzzchapter",
        "character": "InnerVoice",
        "text": "You need to create some 'buzz' to get the attention of an agent. How do you do it? ",
        "aspect": "hierarchisation, freelance, standardisation",
        "leftAnswer": {
            "text": "Write for a comedy Youtube-Show",
            "outcome": "The show is cringe-worthy, but you connect with some talented writers on the team.",
            "effect": {
                "money": 10,
                "relationships": 10,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "screenwritingcompetition"
        },
        "rightAnswer": {
            "text": "Make a dramatic Tiktok about screenwriting career",
            "outcome": "Original? Sure. If you ignore the other thousand TikToks just like it.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "screenwritingcompetition"
        }
    },
    "screenwritingcompetition": {
        "chapterId": "buzzchapter",
        "character": "InnerVoice",
        "text": "A prestigious screenwriting competition is open for submissions, but the entry fee isn't cheap. Do you take the risk?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Submit.",
            "outcome": "Your script makes the shortlist! Suddenly, everyone wants to grab a coffee with you\n",
            "effect": {
                "money": -10,
                "relationships": 10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "partycrash"
        },
        "rightAnswer": {
            "text": "I'm not paying to be judged.",
            "outcome": "Your wallet's happy, but watching others win feels like getting left off the group chat.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "partycrash"
        }
    },
    "partycrash": {
        "chapterId": "buzzchapter",
        "character": "fellowscreenwriter",
        "text": "Let's crash a Hollywood party!",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Let's do it! ",
            "outcome": "You mix up the address and end up crashing a corporate retirement party for a 60-year-old accountant",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "partycrash2"
        },
        "rightAnswer": {
            "text": "I need to work on my script.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "studentfilm"
        }
    },
    "partycrash2": {
        "chapterId": "buzzchapter",
        "character": "fellowscreenwriter",
        "text": "Will we stay?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Yes!",
            "outcome": "You meet a retired tax attorney who now wants to invest in Hollywood projects.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "studentfilm"
        },
        "rightAnswer": {
            "text": "Make a quiet exit",
            "outcome": "You slip out quietly but not before grabbing some hors d'oeuvres for dinner.",
            "effect": {
                "money": 5,
                "relationships": -10,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "studentfilm"
        }
    },
    "studentfilm": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "I love your short script! Can I film it as my graduation project?",
        "aspect": "freelance, collaboration",
        "leftAnswer": {
            "text": "Graduation film? That's below my level, but whatever",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "filmbudget"
        },
        "rightAnswer": {
            "text": "Finally, someone is shooting my script, yay!",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": -10,
                "skills": 0,
                "unlockInsight": "scriptdevelopment"
            },
            "nextQuestion": "filmbudget"
        }
    },
    "filmbudget": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "The school can't finance the film. Turns out spaceship scenes are a bit out of budget.",
        "aspect": "balance, freelance, collaboration",
        "leftAnswer": {
            "text": "I'll invest my own money",
            "effect": {
                "money": -20,
                "relationships": 10,
                "ego": 10,
                "skills": 0,
                "unlockInsight": "scriptdevelopment"
            },
            "nextQuestion": "fish"
        },
        "rightAnswer": {
            "text": "Okay, I'll turn it to a one-room Covid drama.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 10
            },
            "nextQuestion": "fish"
        }
    },
    "fish": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "I loved your story, but I want the protagonist to turn into a fish at the end.",
        "aspect": "marginalisation, collaboration",
        "leftAnswer": {
            "text": "Not sure the story will benefit from it.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 5,
                "skills": 0
            },
            "nextQuestion": "opinion"
        },
        "rightAnswer": {
            "text": "Ok, whatever...",
            "effect": {
                "money": 0,
                "relationships": 5,
                "ego": -10,
                "skills": 5
            },
            "nextQuestion": "nosense"
        }
    },
    "opinion": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "I think the script isn't quite there yet. What's your take?",
        "aspect": "marginalisation, collaboration",
        "leftAnswer": {
            "text": "It's good, but I know we can do better.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 0,
                "skills": 10
            },
            "nextQuestion": "missing"
        },
        "rightAnswer": {
            "text": "Why fix perfection?",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "fish2"
        }
    },
    "missing": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "Great new draft! But I still feel something is missing...",
        "aspect": "marginalisation, collaboration",
        "leftAnswer": {
            "text": "I have no idea...",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "fish2"
        },
        "rightAnswer": {
            "text": "The fish?..",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 0,
                "skills": 5
            },
            "nextQuestion": "fish2"
        }
    },
    "fish2": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "Let's still add the fish...",
        "aspect": "marginalisation, collaboration",
        "leftAnswer": {
            "text": "Whatever...",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": 5,
                "skills": 0,
                "unlockInsight": "survivalguide1"
            },
            "nextQuestion": "nosense"
        },
        "rightAnswer": {
            "text": "Ok, maybe you're right",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 0,
                "skills": 5,
                "unlockInsight": "survivalguide1"
            },
            "nextQuestion": "nosense"
        }
    },
    "nosense": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "You know what? The whole fish idea just doesn't make sense.",
        "aspect": "marginalisation, collaboration",
        "leftAnswer": {
            "text": "I told ya!",
            "effect": {
                "money": 0,
                "relationships": -5,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "tenrewrites"
        },
        "rightAnswer": {
            "text": "Fine, fish deleted.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": -5,
                "skills": 0
            },
            "nextQuestion": "tenrewrites"
        }
    },
    
    "tenrewrites": {
        "chapterId": "buzzchapter",
        "character": "Director",
        "text": "After ten rewrites, I'm starting to think the entire story doesn't make sense.",
        "aspect": "marginalisation, collaboration",
        "leftAnswer": {
            "text": "You don't make sense.\n",
            "outcome": "Frustrated, the director switches to a new project—a silent documentary about chairs. It wins every major festival award.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0,
                "unlockInsight": "auteurtheory"

            },
            "nextChapter": "dj3"
        },
        "rightAnswer": {
            "text": "Should we bring back the fish?",
            "outcome": "The film is a huge festival success, and you share the credits for the fish end everybody liked so much.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 10,
                "unlockInsight": "auteurtheory"
            },
            "nextChapter": "dj3"
        }
    },
};