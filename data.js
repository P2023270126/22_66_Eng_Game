const GAME_DATA = {
  studentA: {
    engToChi: [
      { word: "Adventure", answer: "冒險" },
      { word: "Healthy", answer: "健康的" },
      { word: "Festival", answer: "節日" }
    ],

    chiToEng: {
      feeling: [
        { word: "happy", answer: "開心" },
        { word: "sad", answer: "傷心" }
      ],
      sports: [
        { word: "basketball", answer: "籃球" },
        { word: "badminton", answer: "羽毛球" }
      ],
      pastTense: [
        { word: "went", answer: "Go" },
        { word: "ate", answer: "Eat" }
      ],
      time: [
        { word: "yesterday", answer: "昨天" },
        { word: "tomorrow", answer: "明天" }
      ],
      other: [
        { word: "window", answer: "窗戶" },
        { word: "station", answer: "車站" }
      ],
      food: [
        { word: "spaghetti", answer: "意大利粉" },
        { word: "rice", answer: "飯" },
        { word: "risotto", answer: "意大利燴飯" }
      ]
    },

    spelling: [
      {
        word: "Police",
        display: "P_lic_",
        missingLetters: ["o", "e"],
        options: [
          ["o", "a", "u", "i"],
          ["e", "a", "i", "o"]
        ]
      },
      {
        word: "Adventure",
        display: "Ad_enture",
        missingLetters: ["v"],
        options: [
          ["v", "b", "d", "g"]
        ]
      }
    ],

    listening: [
      { word: "Adventure" },
      { word: "Healthy" },
      { word: "Festival" }
    ],

    readingCloze: {
      oneBlank: [
        {
          passage: "Tom goes to school by ___.",
          blanks: [
            { answer: "bus", options: ["bus", "car", "train", "taxi"] }
          ],
          type: "vocabulary"
        },
        {
          passage: "Amy was hungry, so she ate some ___.",
          blanks: [
            { answer: "bread", options: ["bread", "water", "chair", "window"] }
          ],
          type: "vocabulary"
        },
        {
          passage: "He stayed at home ___ it was raining.",
          blanks: [
            { answer: "because", options: ["because", "but", "although", "however"] }
          ],
          type: "conjunction"
        },
        {
          passage: "Mary wore a coat ___ it was cold outside.",
          blanks: [
            { answer: "because", options: ["because", "but", "since", "however"] }
          ],
          type: "conjunction"
        },
        {
          passage: "John felt thirsty, so he drank some ___.",
          blanks: [
            { answer: "water", options: ["water", "bread", "desk", "pencil"] }
          ],
          type: "vocabulary"
        }
      ],

      twoBlanks: [
        {
          passage: "Ben was late ___ he missed the bus. He went to school by ___.",
          blanks: [
            { answer: "because", options: ["because", "but", "although", "however"] },
            { answer: "taxi", options: ["taxi", "bread", "teacher", "river"] }
          ],
          type: "mixed"
        },
        {
          passage: "Mandy felt ___, so she drank some ___.",
          blanks: [
            { answer: "thirsty", options: ["thirsty", "yellow", "purple", "window"] },
            { answer: "water", options: ["water", "chair", "garden", "school"] }
          ],
          type: "mixed"
        },
        {
          passage: "Peter was tired ___ he slept late. He still went to school ___ time.",
          blanks: [
            { answer: "because", options: ["because", "but", "however", "although"] },
            { answer: "on", options: ["on", "in", "at", "under"] }
          ],
          type: "mixed"
        },
        {
          passage: "Lucy was hungry, ___ she bought a sandwich after school ___ went home.",
          blanks: [
            { answer: "so", options: ["so", "but", "because", "although"] },
            { answer: "and", options: ["and", "or", "but", "because"] }
          ],
          type: "mixed"
        },
        {
          passage: "It was raining, ___ Sam took an umbrella ___ his bag.",
          blanks: [
            { answer: "so", options: ["so", "but", "although", "because"] },
            { answer: "from", options: ["from", "on", "under", "during"] }
          ],
          type: "mixed"
        }
      ],

      threeBlanks: [
        {
          passage: "Ken was ___ because he got up late. However, he still went to school ___ time and arrived ___ the bell rang.",
          blanks: [
            { answer: "worried", options: ["worried", "teacher", "station", "purple"] },
            { answer: "on", options: ["on", "in", "at", "under"] },
            { answer: "before", options: ["before", "after", "during", "under"] }
          ],
          type: "mixed"
        },
        {
          passage: "Amy studied hard ___ she wanted good marks. She finished her homework ___ dinner and went to bed ___ 10 p.m.",
          blanks: [
            { answer: "because", options: ["because", "but", "although", "however"] },
            { answer: "after", options: ["after", "under", "during", "between"] },
            { answer: "before", options: ["before", "under", "beside", "through"] }
          ],
          type: "mixed"
        },
        {
          passage: "Tom felt ___ after the match, but he still smiled ___ his team tried hard and stayed ___ the end.",
          blanks: [
            { answer: "tired", options: ["tired", "window", "colour", "basket"] },
            { answer: "because", options: ["because", "although", "however", "but"] },
            { answer: "until", options: ["until", "under", "between", "from"] }
          ],
          type: "mixed"
        },
        {
          passage: "Lucy was ___ to see the dog, so she ran ___ the park and looked ___ her mother.",
          blanks: [
            { answer: "happy", options: ["happy", "station", "yellow", "pencil"] },
            { answer: "into", options: ["into", "under", "during", "beside"] },
            { answer: "for", options: ["for", "with", "under", "above"] }
          ],
          type: "mixed"
        },
        {
          passage: "Jack forgot his homework, ___ he felt nervous. He called his father ___ ask for help and waited ___ the school gate.",
          blanks: [
            { answer: "so", options: ["so", "but", "although", "because"] },
            { answer: "to", options: ["to", "for", "under", "between"] },
            { answer: "at", options: ["at", "during", "through", "under"] }
          ],
          type: "mixed"
        }
      ]
    }
  },

  studentB: {
    engToChi: [
      { word: "Responsible", answer: "負責任的" },
      { word: "Opportunity", answer: "機會" },
      { word: "Nevertheless", answer: "然而" }
    ],

    chiToEng: {
      feeling: [
        { word: "excited", answer: "興奮" },
        { word: "disappointed", answer: "失望" }
      ],
      sports: [
        { word: "volleyball", answer: "排球" },
        { word: "swimming", answer: "游泳" }
      ],
      pastTense: [
        { word: "forgot", answer: "Forget" },
        { word: "brought", answer: "Bring" }
      ],
      time: [
        { word: "recently", answer: "最近" },
        { word: "immediately", answer: "立刻" }
      ],
      other: [
        { word: "responsibility", answer: "責任" },
        { word: "opportunity", answer: "機會" }
      ],
      food: [
        { word: "spaghetti", answer: "意大利粉" },
        { word: "lasagna", answer: "千層麵" },
        { word: "dumplings", answer: "餃子" }
      ]
    },

    spelling: [
      {
        word: "Responsible",
        display: "Respo_sible",
        missingLetters: ["n"],
        options: [
          ["n", "m", "r", "l"]
        ]
      },
      {
        word: "Opportunity",
        display: "Oppo_tunity",
        missingLetters: ["r"],
        options: [
          ["r", "n", "l", "m"]
        ]
      }
    ],

    listening: [
      { word: "Responsible" },
      { word: "Opportunity" },
      { word: "Nevertheless" }
    ],

    readingCloze: {
      oneBlank: [
        {
          passage: "He worked hard ___ he wanted to improve.",
          blanks: [
            { answer: "because", options: ["because", "but", "although", "however"] }
          ],
          type: "conjunction"
        },
        {
          passage: "The teacher gave us an ___ to join the competition.",
          blanks: [
            { answer: "opportunity", options: ["opportunity", "window", "market", "banana"] }
          ],
          type: "vocabulary"
        },
        {
          passage: "She stayed calm ___ the situation was difficult.",
          blanks: [
            { answer: "although", options: ["although", "because", "so", "but"] }
          ],
          type: "conjunction"
        },
        {
          passage: "He felt proud after taking on more ___.",
          blanks: [
            { answer: "responsibility", options: ["responsibility", "garden", "umbrella", "traffic"] }
          ],
          type: "vocabulary"
        },
        {
          passage: "They finished the work early ___ they planned carefully.",
          blanks: [
            { answer: "because", options: ["because", "however", "although", "but"] }
          ],
          type: "conjunction"
        }
      ],

      twoBlanks: [
        {
          passage: "Jenny was tired ___ she had too much homework. ___, she still finished everything.",
          blanks: [
            { answer: "because", options: ["because", "although", "however", "since"] },
            { answer: "However", options: ["However", "Because", "Although", "Since"] }
          ],
          type: "mixed"
        },
        {
          passage: "Although Kevin felt ___, he continued to practise ___ he wanted to improve.",
          blanks: [
            { answer: "nervous", options: ["nervous", "station", "purple", "market"] },
            { answer: "because", options: ["because", "but", "however", "although"] }
          ],
          type: "mixed"
        },
        {
          passage: "The team lost the match, ___ they did not give up ___ kept training.",
          blanks: [
            { answer: "but", options: ["but", "because", "since", "although"] },
            { answer: "and", options: ["and", "or", "but", "because"] }
          ],
          type: "mixed"
        },
        {
          passage: "He got up late, ___ he missed the bus ___ arrived at school late.",
          blanks: [
            { answer: "so", options: ["so", "but", "however", "although"] },
            { answer: "and", options: ["and", "but", "because", "or"] }
          ],
          type: "mixed"
        },
        {
          passage: "She studied hard ___ she wanted better marks ___ a scholarship.",
          blanks: [
            { answer: "because", options: ["because", "however", "but", "although"] },
            { answer: "for", options: ["for", "under", "during", "between"] }
          ],
          type: "mixed"
        }
      ],

      threeBlanks: [
        {
          passage: "Although Peter felt ___, he continued to practise every day ___ he wanted to win the competition ___ the end of the month.",
          blanks: [
            { answer: "nervous", options: ["nervous", "window", "traffic", "colourful"] },
            { answer: "because", options: ["because", "but", "although", "however"] },
            { answer: "before", options: ["before", "under", "through", "beside"] }
          ],
          type: "mixed"
        },
        {
          passage: "The manager gave her more ___, and she accepted it ___ she believed it would help her grow ___ the future.",
          blanks: [
            { answer: "responsibility", options: ["responsibility", "platform", "backpack", "festival"] },
            { answer: "because", options: ["because", "although", "however", "but"] },
            { answer: "in", options: ["in", "under", "between", "across"] }
          ],
          type: "mixed"
        },
        {
          passage: "He missed the train, ___ he took a taxi. ___ the extra cost, he arrived ___ time.",
          blanks: [
            { answer: "so", options: ["so", "although", "however", "because"] },
            { answer: "Despite", options: ["Despite", "Because", "Although", "Since"] },
            { answer: "on", options: ["on", "under", "during", "through"] }
          ],
          type: "mixed"
        },
        {
          passage: "She worked quietly ___ order to finish the report, ___ she knew the deadline was close, and submitted it ___ midnight.",
          blanks: [
            { answer: "in", options: ["in", "on", "under", "before"] },
            { answer: "because", options: ["because", "however", "although", "but"] },
            { answer: "before", options: ["before", "during", "through", "under"] }
          ],
          type: "mixed"
        },
        {
          passage: "Nevertheless, the team remained ___, worked together ___ solve the problem, and completed the task ___ the client arrived.",
          blanks: [
            { answer: "calm", options: ["calm", "market", "window", "purple"] },
            { answer: "to", options: ["to", "for", "during", "under"] },
            { answer: "before", options: ["before", "under", "across", "between"] }
          ],
          type: "mixed"
        }
      ]
    }
  }
};
