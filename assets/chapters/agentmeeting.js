export const agentmeeting = {
    "agentmeetingintro": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "Well, it seems nothing gets done in Hollywood without an agent. Lucky for you, a friend set up a meeting with theirs.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Great! ",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "unlockInsight": "agentinsight"
            },
            "nextQuestion": "prepareformeeting"
        },
        "rightAnswer": {
            "text": "Ok...",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "unlockInsight": "agentinsight"
            },
            "nextQuestion": "prepareformeeting"
        }
    },
    "prepareformeeting": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "What's the best way to nail this meeting?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Perfect your pitch",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "looks"
        },
        "rightAnswer": {
            "text": "Research everything about the agent",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "looks"
        }
    },
    "looks": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "Time to work on the looks. What's the move?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Get a haircut.",
            "outcome": "The haircut is so bad, you have to cover it with a wig.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "addPerk": "wig"
            },
            "nextQuestion": "outfit"
        },
        "rightAnswer": {
            "text": "Messy hair is a sign of 'writing genius.'",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "outfit"
        }
    },
    "outfit": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "Time to pick the outfit.",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Buy an expensive suit.",
            "effect": {
                "money": -10,
                "relationships": 0,
                "ego": 0,
                "skills": 0,
                "addPerk": "suit"
            },
            "nextQuestion": "sweatypalms"
        },
        "rightAnswer": {
            "text": "Stick with my old jeans—I'm a writer after all. ",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "sweatypalms"
        }
    },
    "sweatypalms": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "You step into the agent's office, heart racing and palms sweaty.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Breathe. Just breathe.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0
            },
            "nextQuestion": "sitstand"
        },
        "rightAnswer": {
            "text": "Why is it so hot in here?",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "sitstand"
        }
    },
    "sitstand": {
        "chapterId": "agentmeeting",
        "character": "Assistant",
        "text": "Take a seat, they'll be with you shortly.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Sit",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0
            },
            "nextQuestion": "nicewig, brush"
        },
        "rightAnswer": {
            "text": "Stand",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "nicewig, brush"
        }
    },
    "nicewig": {
        "chapterId": "agentmeeting",
        "character": "Assistant",
        "text": "Nice wig by the way. You're strange, he'll like it.",
        "aspect": "freelance",
        "requiresPerk": "wig",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Uh… thanks?",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "suit, jeans"
        },
        "rightAnswer": {
            "text": "Well, that's reassuring.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "suit, jeans"
        }
    },
    "brush": {
        "chapterId": "agentmeeting",
        "character": "Assistant",
        "text": "Need a brush?",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "No, thanks",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10
            },
            "nextQuestion": "suit, jeans"
        },
        "rightAnswer": {
            "text": "That bad, huh",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "suit, jeans"
        }
    },
    "suit": {
        "chapterId": "agentmeeting",
        "character": "Assistant",
        "text": "Wow, a suit! I see you're taking this seriously.",
        "aspect": "freelance",
        "requiresPerk": "suit",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Fake it till you make it.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "agentsoffice"
        },
        "rightAnswer": {
            "text": "I even ironed it!",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "agentsoffice"
        }
    },
    "jeans": {
        "chapterId": "agentmeeting",
        "character": "Assistant",
        "text": "Jeans and a t-shirt? You must really want your script to do all the talking.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Hey, at least it's clean.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "agentsoffice"
        },
        "rightAnswer": {
            "text": "Exactly",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "agentsoffice"
        }
    },
    "agentsoffice": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "You're finally ushered into the agent's office.",
        "aspect": "freelance",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Showtime.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "startmeeting"
        },
        "rightAnswer": {
            "text": "This is it. Stay cool.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "startmeeting"
        }
    },
    "startmeeting": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "How do we start the meeting?\n",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "It's an honor to meet you.",
            "outcome": "Nice opening. Now, let's get down to business.",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "genremix"
        },
        "rightAnswer": {
            "text": "This moment! I've been dreaming of this day forever!",
            "outcome": "Wow, calm down. We haven't decided anything yet.",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "genremix"
        }
    },
    "genremix": {
        "chapterId": "agentmeeting",
        "character": "Agent",
        "text": "I loved your script. It would make a perfect romcom.",
        "aspect": "freelance, collaboration, standardisation",
        "leftAnswer": {
            "text": "Play along and pitch your horror movie as a romcom",
            "outcome": "Agent: \"Okay, I can see pitching isn't your strong suit.'",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "whattodo"
        },
        "rightAnswer": {
            "text": "It's actually a horror movie.",
            "outcome": "Ah, my mistake",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 0
            },
            "nextQuestion": "dramasdontsell"
        }
    },
    "whattodo": {
        "chapterId": "agentmeeting",
        "character": "InnerVoice",
        "text": "What to we do?",
        "aspect": "freelance, collaboration, standardisation",
        "leftAnswer": {
            "text": "Double down and keep pitching.",
            "outcome": "You stumble through a bizarre pitch about serial-killing soulmates. To your shock, the agent loves it: finally, something fresh!",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "industry"
        },
        "rightAnswer": {
            "text": "Admit, It's actually a horror movie.",
            "outcome": "Agent: \"Why didn't you just say that? \"",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "dramasdontsell"
        }
    },
    "dramasdontsell": {
        "chapterId": "agentmeeting",
        "character": "Agent",
        "text": "The thing is, we have enough horror movies...",
        "aspect": "freelance, collaboration, standardisation",
        "leftAnswer": {
            "text": "I can do romcoms, too...",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "industry"
        },
        "rightAnswer": {
            "text": "But none of them are like mine.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "industry"
        }
    },
    "industry": {
        "chapterId": "agentmeeting",
        "character": "Agent",
        "text": "So, do you know anyone in the industry?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "Random name drop. ",
            "outcome": "Agent: \"Oh, I'm actually having dinner with them tonight. We'll talk about you\"",
            "effect": {
                "money": 0,
                "relationships": -10,
                "ego": -10,
                "skills": 0
            },
            "nextQuestion": "representation"
        },
        "rightAnswer": {
            "text": "Warner Brothers' receptionist is a great friend of mine.",
            "outcome": "Agent: \"Cute. Well, everyone starts somewhere. Let's see what we can do together.\"",
            "effect": {
                "money": 0,
                "relationships": 10,
                "ego": 0,
                "skills": 0
            },
            "nextQuestion": "representation"
        }
    },
    "representation": {
        "chapterId": "agentmeeting",
        "character": "Agent",
        "text": "Why should I represent you instead of the other hundred writers knocking on my door?",
        "aspect": "freelance",
        "leftAnswer": {
            "text": "I'm the best thing to happen to Hollywood.",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": 10,
                "skills": 0
            },
            "nextChapter": "dj5",
            "outcome": "Curious to see if that’s true. I’ll be in touch.",
        },
        "rightAnswer": {
            "text": "I'm not saying you should... Should you?",
            "effect": {
                "money": 0,
                "relationships": 0,
                "ego": -10,
                "skills": 0
            },
            "nextChapter": "dj5",
            "outcome": "You’re weird. But maybe that’s what I need. I’ll call you."
        }
    },
}