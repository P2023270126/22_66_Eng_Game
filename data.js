// ======================================
// English Practice Game - Database V2
// 題庫資料檔
// ======================================

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
        { word: "went", answer: "去了" },
        { word: "ate", answer: "吃了" }
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
          ["o", "a", "u", "i", "y"],
          ["e", "a", "i", "o", "u"]
        ]
      },
      {
        word: "Adventure",
        display: "Ad_enture",
        missingLetters: ["v"],
        options: [
          ["v", "b", "d", "g", "p"]
        ]
      }
    ],

    listening: [
      { word: "Adventure" },
      { word: "Healthy" },
      { word: "Festival" }
    ],

    readingCloze: [
      {
        passage: "Tom was late for school ___ it was raining heavily.",
        blanks: [
          {
            answer: "because",
            options: ["because", "but", "although", "since", "however"]
          }
        ],
        type: "conjunction"
      },
      {
        passage: "Tom was late for school ___ it was raining heavily. He decided to take a ___ instead of walking.",
        blanks: [
          {
            answer: "because",
            options: ["because", "but", "although", "since", "however"]
          },
          {
            answer: "bus",
            options: ["bus", "river", "window", "teacher", "garden"]
          }
        ],
        type: "mixed"
      }
    ]
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
        { word: "forgot", answer: "忘記了" },
        { word: "brought", answer: "帶來了" }
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
          ["n", "m", "r", "l", "t"]
        ]
      },
      {
        word: "Opportunity",
        display: "Oppo_tunity",
        missingLetters: ["r"],
        options: [
          ["r", "n", "l", "m", "p"]
        ]
      }
    ],

    listening: [
      { word: "Responsible" },
      { word: "Opportunity" },
      { word: "Nevertheless" }
    ],

    readingCloze: [
      {
        passage: "He was tired, ___ he still finished the project on time.",
        blanks: [
          {
            answer: "but",
            options: ["because", "but", "since", "although", "in order to"]
          }
        ],
        type: "conjunction"
      },
      {
        passage: "He wanted to improve his English, ___ he read an article every day after school. This habit helped him make steady ___.",
        blanks: [
          {
            answer: "so",
            options: ["so", "but", "although", "because", "since"]
          },
          {
            answer: "progress",
            options: ["progress", "window", "teacher", "traffic", "garden"]
          }
        ],
        type: "mixed"
      }
    ]
  }
};
