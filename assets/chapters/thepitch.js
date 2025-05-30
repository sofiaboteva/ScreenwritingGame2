export const thepitch = {
    "thepitchintro": {
        "chapterId": "thepitch",
        "character": "Agent",
        "text": "Big news! I've set up a meeting with a producer for your script. Play it cool, okay? No pressure… just your entire future riding on it.",
        "aspect": "portfolio",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Right...",
            "effect": {
                "unlockInsight": "writerenterpreneur"
            },
            "nextQuestion": "rehearse1"
        },
        "rightAnswer": {
            "text": "Got it",
            "effect": {
                "unlockInsight": "writerenterpreneur"
            },
            "nextQuestion": "rehearse1"
        }
    },
    "rehearse1": {
        "chapterId": "thepitch",
        "character": "InnerVoice",
        "text": "Time to rehearse our pitch! Who's the lucky audience? Maybe, your parents?",
        "aspect": "portfolio, collaboration",
        "leftAnswer": {
            "text": "Yes",
            "outcome": "Parents: \"Wait, who's actually going to watch this movie?\"",
            "effect": {
                "relationships": -10,
                "ego": -10,
                "skills": 5
            },
            "nextQuestion": "producerintro"
        },
        "rightAnswer": {
            "text": "No",
            "nextQuestion": "rehearse2"
        }
    },
    "rehearse2": {
        "chapterId": "thepitch",
        "character": "InnerVoice",
        "text": "Your fellow screenwriter?",
        "aspect": "portfolio, collaboration",
        "leftAnswer": {
            "text": "Yes",
            "outcome": "Fellow Screenwriter: \"You go, girl!\"\nWasn't much of a help, but now you feel confident about yourself.",
            "effect": {
                "ego": 10,
                "skills": 5
            },
            "nextQuestion": "producerintro"
        },
        "rightAnswer": {
            "text": "No",
            "nextQuestion": "rehearse3"
        }
    },
    "rehearse3": {
        "chapterId": "thepitch",
        "character": "InnerVoice",
        "text": "Screenwriting guru?",
        "aspect": "portfolio, collaboration",
        "leftAnswer": {
            "text": "Yes",
            "outcome": "Screenwriting Guru: \"It's solid. Except for the second act. And maybe the ending. Actually, the first act could use some work too.\"",
            "effect": {
                "relationships": 10,
                "ego": -10,
                "skills": 10
            },
            "nextQuestion": "producerintro"
        },
        "rightAnswer": {
            "text": "No",
            "outcome": "You choose to trust your instincts. Brave or stupid?",
            "effect": {
                "ego": 10,
                "skills": -10
            },
            "nextQuestion": "producerintro"
        }
    },
    "producerintro": {
        "chapterId": "thepitch",
        "character": "InnerVoice",
        "text": "You step into the producer's office, the air thick with power and the faint scent of overpriced cologne.",
        "aspect": "portfolio",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Terrifying.",
            "nextQuestion": "producerstart"
        },
        "rightAnswer": {
            "text": "Thrilling.",
            "nextQuestion": "producerstart"
        }
    },
    "producerstart": {
        "chapterId": "thepitch",
        "character": "Producer",
        "text": "Alright, let's start. Whenever you're ready.",
        "aspect": "portfolio",
        "leftAnswer": {
            "text": "Here's the logline—it's short and sweet.",
            "outcome": "Producer: \"Okay, I'm intrigued. Keep going.\"",
            "effect": {
                "relationships": 10,
                "ego": 10,
                "skills": 5
            },
            "nextQuestion": "tuningout"
        },
        "rightAnswer": {
            "text": "\"The story starts with the protagonist waking up in the morning\"...",
            "outcome": "Producer: \"Do I look like I have time to hear an audiobook?\"",
            "effect": {
                "relationships": -10,
                "ego": -10,
                "skills": -5
            },
            "nextQuestion": "tuningout"
        }
    },
    "tuningout": {
        "chapterId": "thepitch",
        "character": "InnerVoice",
        "text": "Uh-oh, they're tuning out mid-pitch. How do we save this?",
        "aspect": "portfolio",
        "leftAnswer": {
            "text": "Keep pitching. ",
            "outcome": "The producer falls asleep. Maybe sleep meditation is your true calling?",
            "effect": {
                "relationships": -10,
                "ego": -10,
                "skills": -5
            },
            "nextQuestion": "starring"
        },
        "rightAnswer": {
            "text": "Turn up the drama and act it out!",
            "outcome": "You leap onto the table, twist your ankle, but wow the producer with your passion.",
            "effect": {
                "relationships": 10,
                "ego": 10,
                "skills": 10
            },
            "nextQuestion": "starring"
        }
    },
    "starring": {
        "chapterId": "thepitch",
        "character": "Producer",
        "text": "Now who do you see starring in this?",
        "aspect": "portfolio, collaboration",
        "leftAnswer": {
            "text": "Timothée Chalamet",
            "effect": {
                "relationships": 10,
                "ego": 10
            },
            "nextQuestion": "thepitchend"
        },
        "rightAnswer": {
            "text": "Someone fresh and unknown.",
            "outcome": "Right, because selling a no-name is so easy.",
            "effect": {
                "relationships": -10,
                "ego": -10
            },
            "nextQuestion": "thepitchend"
        }
    },
    "thepitchend": {
        "chapterId": "thepitch",
        "character": "InnerVoice",
        "text": "They said it wouldn't happen, but you just signed your first feature film contract.",
        "aspect": "portfolio",
        "comment": "No real choice",
        "leftAnswer": {
            "text": "Pinch me.",
            "nextChapter": "dj7"
        },
        "rightAnswer": {
            "text": "Woohoo!",
            "nextChapter": "dj7"
        }
    },
}