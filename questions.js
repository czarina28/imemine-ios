/* Curated I Me Mine question bank. Keep answers/explanations aligned. */
const QUESTIONS = [
  {
    "id": 1,
    "level": "A1",
    "t": "Pronouns",
    "q": "___ am ready.",
    "a": [
      "I",
      "Me",
      "Mine"
    ],
    "c": 0,
    "e": "I is the subject pronoun."
  },
  {
    "id": 2,
    "level": "A1",
    "t": "Pronouns",
    "q": "Can you see ___?",
    "a": [
      "me",
      "my",
      "mine"
    ],
    "c": 0,
    "e": "Use me as an object pronoun."
  },
  {
    "id": 3,
    "level": "A1",
    "t": "Pronouns",
    "q": "This book is ___.",
    "a": [
      "mine",
      "my",
      "me"
    ],
    "c": 0,
    "e": "Mine is a possessive pronoun."
  },
  {
    "id": 4,
    "level": "A1",
    "t": "Pronouns",
    "q": "___ is my sister.",
    "a": [
      "She",
      "Her",
      "Hers"
    ],
    "c": 0,
    "e": "She is a subject pronoun."
  },
  {
    "id": 5,
    "level": "A1",
    "t": "Pronouns",
    "q": "I called ___ yesterday.",
    "a": [
      "him",
      "he",
      "his"
    ],
    "c": 0,
    "e": "Him is an object pronoun."
  },
  {
    "id": 6,
    "level": "A1",
    "t": "Pronouns",
    "q": "This is ___ bag.",
    "a": [
      "my",
      "mine",
      "me"
    ],
    "c": 0,
    "e": "My goes before a noun."
  },
  {
    "id": 7,
    "level": "A1",
    "t": "Pronouns",
    "q": "___ are my friends.",
    "a": [
      "They",
      "Them",
      "Their"
    ],
    "c": 0,
    "e": "They is the subject pronoun."
  },
  {
    "id": 8,
    "level": "A1",
    "t": "Pronouns",
    "q": "Please give it to ___.",
    "a": [
      "us",
      "we",
      "our"
    ],
    "c": 0,
    "e": "Us is an object pronoun."
  },
  {
    "id": 9,
    "level": "A1",
    "t": "Articles",
    "q": "She has ___ dog.",
    "a": [
      "a",
      "an",
      "some"
    ],
    "c": 0,
    "e": "Use a before a consonant sound."
  },
  {
    "id": 10,
    "level": "A1",
    "t": "Articles",
    "q": "I ate ___ apple.",
    "a": [
      "an",
      "a",
      "some"
    ],
    "c": 0,
    "e": "Use an before a vowel sound."
  },
  {
    "id": 11,
    "level": "A1",
    "t": "Articles",
    "q": "He is ___ teacher.",
    "a": [
      "a",
      "an",
      "some"
    ],
    "c": 0,
    "e": "Use a with a singular countable job."
  },
  {
    "id": 12,
    "level": "A1",
    "t": "Articles",
    "q": "She bought ___ umbrella.",
    "a": [
      "an",
      "a",
      "some"
    ],
    "c": 0,
    "e": "Umbrella begins with a vowel sound."
  },
  {
    "id": 13,
    "level": "A1",
    "t": "Articles",
    "q": "There is ___ egg in the fridge.",
    "a": [
      "an",
      "a",
      "some"
    ],
    "c": 0,
    "e": "Egg starts with a vowel sound."
  },
  {
    "id": 14,
    "level": "A1",
    "t": "Verbs",
    "q": "He ___ football on Sundays.",
    "a": [
      "plays",
      "play",
      "playing"
    ],
    "c": 0,
    "e": "He takes -s in the present simple."
  },
  {
    "id": 15,
    "level": "A1",
    "t": "Verbs",
    "q": "They ___ in London.",
    "a": [
      "live",
      "lives",
      "living"
    ],
    "c": 0,
    "e": "Use the base form with they."
  },
  {
    "id": 16,
    "level": "A1",
    "t": "Verbs",
    "q": "I ___ happy today.",
    "a": [
      "am",
      "is",
      "are"
    ],
    "c": 0,
    "e": "Use am with I."
  },
  {
    "id": 17,
    "level": "A1",
    "t": "Verbs",
    "q": "We ___ students.",
    "a": [
      "are",
      "is",
      "am"
    ],
    "c": 0,
    "e": "Use are with we."
  },
  {
    "id": 18,
    "level": "A1",
    "t": "Verbs",
    "q": "She ___ a blue bike.",
    "a": [
      "has",
      "have",
      "having"
    ],
    "c": 0,
    "e": "Use has with she."
  },
  {
    "id": 19,
    "level": "A1",
    "t": "Verbs",
    "q": "Yesterday I ___ home.",
    "a": [
      "walked",
      "walk",
      "walking"
    ],
    "c": 0,
    "e": "Regular past tense adds -ed."
  },
  {
    "id": 20,
    "level": "A1",
    "t": "Verbs",
    "q": "I ___ coffee every morning.",
    "a": [
      "drink",
      "drinks",
      "drinking"
    ],
    "c": 0,
    "e": "Use the base form with I."
  },
  {
    "id": 21,
    "level": "A1",
    "t": "Questions",
    "q": "___ you speak English?",
    "a": [
      "Do",
      "Does",
      "Are"
    ],
    "c": 0,
    "e": "Use do with you in present-simple questions."
  },
  {
    "id": 22,
    "level": "A1",
    "t": "Questions",
    "q": "___ she like tea?",
    "a": [
      "Does",
      "Do",
      "Is"
    ],
    "c": 0,
    "e": "Use does with she."
  },
  {
    "id": 23,
    "level": "A1",
    "t": "Questions",
    "q": "Where ___ you from?",
    "a": [
      "are",
      "is",
      "am"
    ],
    "c": 0,
    "e": "Use are with you."
  },
  {
    "id": 24,
    "level": "A1",
    "t": "Prepositions",
    "q": "See you ___ Monday.",
    "a": [
      "on",
      "in",
      "at"
    ],
    "c": 0,
    "e": "Use on with days."
  },
  {
    "id": 25,
    "level": "A1",
    "t": "Prepositions",
    "q": "The train leaves ___ six.",
    "a": [
      "at",
      "in",
      "on"
    ],
    "c": 0,
    "e": "Use at with clock times."
  },
  {
    "id": 26,
    "level": "A1",
    "t": "Prepositions",
    "q": "My birthday is ___ June.",
    "a": [
      "in",
      "on",
      "at"
    ],
    "c": 0,
    "e": "Use in with months."
  },
  {
    "id": 27,
    "level": "A1",
    "t": "Prepositions",
    "q": "The keys are ___ the table.",
    "a": [
      "on",
      "at",
      "to"
    ],
    "c": 0,
    "e": "On describes a surface."
  },
  {
    "id": 28,
    "level": "A1",
    "t": "Quantifiers",
    "q": "How ___ books do you have?",
    "a": [
      "many",
      "much",
      "little"
    ],
    "c": 0,
    "e": "Many is for countable plural nouns."
  },
  {
    "id": 29,
    "level": "A1",
    "t": "Quantifiers",
    "q": "How ___ water do you need?",
    "a": [
      "much",
      "many",
      "few"
    ],
    "c": 0,
    "e": "Much is for uncountable nouns."
  },
  {
    "id": 30,
    "level": "A1",
    "t": "Sentence structure",
    "q": "Choose the natural sentence.",
    "a": [
      "I like music.",
      "Like I music.",
      "Music I like do."
    ],
    "c": 0,
    "e": "English statements normally place the subject before the verb."
  },
  {
    "id": 31,
    "level": "A2",
    "t": "Verbs",
    "q": "I ___ to Paris last year.",
    "a": [
      "went",
      "go",
      "gone"
    ],
    "c": 0,
    "e": "Went is the simple past of go."
  },
  {
    "id": 32,
    "level": "A2",
    "t": "Verbs",
    "q": "She has ___ breakfast already.",
    "a": [
      "eaten",
      "ate",
      "eat"
    ],
    "c": 0,
    "e": "Use the past participle after has."
  },
  {
    "id": 33,
    "level": "A2",
    "t": "Verbs",
    "q": "They ___ watching a film now.",
    "a": [
      "are",
      "is",
      "do"
    ],
    "c": 0,
    "e": "Use are with they in the present continuous."
  },
  {
    "id": 34,
    "level": "A2",
    "t": "Verbs",
    "q": "I ___ never been to Canada.",
    "a": [
      "have",
      "has",
      "am"
    ],
    "c": 0,
    "e": "Use have with I in the present perfect."
  },
  {
    "id": 35,
    "level": "A2",
    "t": "Verbs",
    "q": "When I arrived, he ___ cooking.",
    "a": [
      "was",
      "were",
      "is"
    ],
    "c": 0,
    "e": "Was is the past continuous auxiliary for he."
  },
  {
    "id": 36,
    "level": "A2",
    "t": "Verbs",
    "q": "She ___ working at nine yesterday.",
    "a": [
      "was",
      "is",
      "were"
    ],
    "c": 0,
    "e": "Use was for an ongoing past action with she."
  },
  {
    "id": 37,
    "level": "A2",
    "t": "Verbs",
    "q": "I ___ call you tomorrow.",
    "a": [
      "will",
      "did",
      "was"
    ],
    "c": 0,
    "e": "Will can express a future decision or promise."
  },
  {
    "id": 38,
    "level": "A2",
    "t": "Verbs",
    "q": "If it rains, we ___ stay home.",
    "a": [
      "will",
      "would",
      "had"
    ],
    "c": 0,
    "e": "First conditional: if + present, will + base verb."
  },
  {
    "id": 39,
    "level": "A2",
    "t": "Verbs",
    "q": "You ___ wear a seat belt.",
    "a": [
      "must",
      "might",
      "could"
    ],
    "c": 0,
    "e": "Must expresses a strong obligation."
  },
  {
    "id": 40,
    "level": "A2",
    "t": "Verbs",
    "q": "He ___ swim when he was five.",
    "a": [
      "could",
      "can",
      "will"
    ],
    "c": 0,
    "e": "Could can describe past ability."
  },
  {
    "id": 41,
    "level": "A2",
    "t": "Pronouns",
    "q": "This is the woman ___ helped me.",
    "a": [
      "who",
      "which",
      "where"
    ],
    "c": 0,
    "e": "Who refers to a person."
  },
  {
    "id": 42,
    "level": "A2",
    "t": "Pronouns",
    "q": "Is that coat ___?",
    "a": [
      "yours",
      "your",
      "you"
    ],
    "c": 0,
    "e": "Yours stands alone without a noun."
  },
  {
    "id": 43,
    "level": "A2",
    "t": "Pronouns",
    "q": "We enjoyed ___ at the party.",
    "a": [
      "ourselves",
      "us",
      "our"
    ],
    "c": 0,
    "e": "Ourselves is a reflexive pronoun."
  },
  {
    "id": 44,
    "level": "A2",
    "t": "Articles",
    "q": "She is ___ honest person.",
    "a": [
      "an",
      "a",
      "some"
    ],
    "c": 0,
    "e": "The h in honest is silent, so use an."
  },
  {
    "id": 45,
    "level": "A2",
    "t": "Articles",
    "q": "We visited ___ Eiffel Tower.",
    "a": [
      "the",
      "a",
      "an"
    ],
    "c": 0,
    "e": "Use the with this unique named landmark."
  },
  {
    "id": 46,
    "level": "A2",
    "t": "Prepositions",
    "q": "I'm interested ___ history.",
    "a": [
      "in",
      "on",
      "at"
    ],
    "c": 0,
    "e": "The phrase is interested in."
  },
  {
    "id": 47,
    "level": "A2",
    "t": "Prepositions",
    "q": "She's good ___ chess.",
    "a": [
      "at",
      "on",
      "in"
    ],
    "c": 0,
    "e": "The phrase is good at."
  },
  {
    "id": 48,
    "level": "A2",
    "t": "Prepositions",
    "q": "We've lived here ___ 2020.",
    "a": [
      "since",
      "for",
      "during"
    ],
    "c": 0,
    "e": "Since introduces a starting point."
  },
  {
    "id": 49,
    "level": "A2",
    "t": "Prepositions",
    "q": "I've worked here ___ three years.",
    "a": [
      "for",
      "since",
      "by"
    ],
    "c": 0,
    "e": "For introduces a duration."
  },
  {
    "id": 50,
    "level": "A2",
    "t": "Prepositions",
    "q": "He arrived ___ the airport early.",
    "a": [
      "at",
      "to",
      "in"
    ],
    "c": 0,
    "e": "Arrive at is used with specific places."
  },
  {
    "id": 51,
    "level": "A2",
    "t": "Questions",
    "q": "How long ___ you lived here?",
    "a": [
      "have",
      "do",
      "are"
    ],
    "c": 0,
    "e": "Present perfect asks about a period continuing to now."
  },
  {
    "id": 52,
    "level": "A2",
    "t": "Questions",
    "q": "What ___ you doing yesterday at six?",
    "a": [
      "were",
      "did",
      "are"
    ],
    "c": 0,
    "e": "Use were with you in the past continuous."
  },
  {
    "id": 53,
    "level": "A2",
    "t": "Quantifiers",
    "q": "There isn't ___ milk left.",
    "a": [
      "much",
      "many",
      "few"
    ],
    "c": 0,
    "e": "Milk is uncountable."
  },
  {
    "id": 54,
    "level": "A2",
    "t": "Quantifiers",
    "q": "We have ___ friends in Berlin.",
    "a": [
      "a few",
      "a little",
      "much"
    ],
    "c": 0,
    "e": "A few goes with countable plural nouns."
  },
  {
    "id": 55,
    "level": "A2",
    "t": "Sentence structure",
    "q": "Choose the correct sentence.",
    "a": [
      "I have already eaten.",
      "I already have ate.",
      "I have ate already."
    ],
    "c": 0,
    "e": "Present perfect uses have + past participle."
  },
  {
    "id": 56,
    "level": "A2",
    "t": "Sentence structure",
    "q": "Choose the correct sentence.",
    "a": [
      "She doesn't like coffee.",
      "She don't like coffee.",
      "She doesn't likes coffee."
    ],
    "c": 0,
    "e": "After doesn't, use the base verb."
  },
  {
    "id": 57,
    "level": "A2",
    "t": "Common mistakes",
    "q": "I can't find ___ keys.",
    "a": [
      "my",
      "mine",
      "me"
    ],
    "c": 0,
    "e": "Use my before a noun."
  },
  {
    "id": 58,
    "level": "A2",
    "t": "Common mistakes",
    "q": "___ going to be late.",
    "a": [
      "We're",
      "Were",
      "Where"
    ],
    "c": 0,
    "e": "We're means we are."
  },
  {
    "id": 59,
    "level": "A2",
    "t": "Common mistakes",
    "q": "The dog wagged ___ tail.",
    "a": [
      "its",
      "it's",
      "its'"
    ],
    "c": 0,
    "e": "Its is possessive; it's means it is."
  },
  {
    "id": 60,
    "level": "A2",
    "t": "Common mistakes",
    "q": "I have ___ time today.",
    "a": [
      "less",
      "fewer",
      "many"
    ],
    "c": 0,
    "e": "Less is used with uncountable time."
  },
  {
    "id": 61,
    "level": "B1",
    "t": "Verbs",
    "q": "If I ___ more time, I'd learn Italian.",
    "a": [
      "had",
      "have",
      "will have"
    ],
    "c": 0,
    "e": "Second conditional: if + past, would + base verb."
  },
  {
    "id": 62,
    "level": "B1",
    "t": "Verbs",
    "q": "By the time we arrived, the film ___ started.",
    "a": [
      "had",
      "has",
      "was"
    ],
    "c": 0,
    "e": "Past perfect shows an earlier past action."
  },
  {
    "id": 63,
    "level": "B1",
    "t": "Verbs",
    "q": "I wish I ___ speak French fluently.",
    "a": [
      "could",
      "can",
      "will"
    ],
    "c": 0,
    "e": "Wish + could expresses an unreal present ability."
  },
  {
    "id": 64,
    "level": "B1",
    "t": "Verbs",
    "q": "She suggested ___ earlier.",
    "a": [
      "leaving",
      "to leave",
      "leave"
    ],
    "c": 0,
    "e": "Suggest is commonly followed by an -ing form."
  },
  {
    "id": 65,
    "level": "B1",
    "t": "Verbs",
    "q": "I'm used to ___ early.",
    "a": [
      "getting up",
      "get up",
      "got up"
    ],
    "c": 0,
    "e": "Be used to is followed by a noun or -ing form."
  },
  {
    "id": 66,
    "level": "B1",
    "t": "Verbs",
    "q": "The report ___ yesterday.",
    "a": [
      "was finished",
      "finished",
      "has finish"
    ],
    "c": 0,
    "e": "Passive past: was + past participle."
  },
  {
    "id": 67,
    "level": "B1",
    "t": "Verbs",
    "q": "He said he ___ tired.",
    "a": [
      "was",
      "is",
      "has"
    ],
    "c": 0,
    "e": "Reported speech often shifts am/is to was."
  },
  {
    "id": 68,
    "level": "B1",
    "t": "Verbs",
    "q": "You ___ have told me sooner!",
    "a": [
      "should",
      "must to",
      "can to"
    ],
    "c": 0,
    "e": "Should have + past participle expresses past criticism."
  },
  {
    "id": 69,
    "level": "B1",
    "t": "Verbs",
    "q": "If she had called, I ___ have answered.",
    "a": [
      "would",
      "will",
      "did"
    ],
    "c": 0,
    "e": "Third conditional uses would have + past participle."
  },
  {
    "id": 70,
    "level": "B1",
    "t": "Verbs",
    "q": "I'd rather ___ at home tonight.",
    "a": [
      "stay",
      "to stay",
      "staying"
    ],
    "c": 0,
    "e": "Would rather takes the base verb."
  },
  {
    "id": 71,
    "level": "B1",
    "t": "Pronouns",
    "q": "The colleague ___ laptop broke called IT.",
    "a": [
      "whose",
      "who",
      "which"
    ],
    "c": 0,
    "e": "Whose expresses possession."
  },
  {
    "id": 72,
    "level": "B1",
    "t": "Pronouns",
    "q": "The book, ___ I borrowed, was excellent.",
    "a": [
      "which",
      "who",
      "where"
    ],
    "c": 0,
    "e": "Which introduces a non-defining clause about a thing."
  },
  {
    "id": 73,
    "level": "B1",
    "t": "Pronouns",
    "q": "Neither of the answers ___ correct.",
    "a": [
      "is",
      "are being",
      "have"
    ],
    "c": 0,
    "e": "Neither is typically singular in formal English."
  },
  {
    "id": 74,
    "level": "B1",
    "t": "Articles",
    "q": "___ information you gave me was useful.",
    "a": [
      "The",
      "An",
      "A"
    ],
    "c": 0,
    "e": "Information is uncountable; the specifies particular information."
  },
  {
    "id": 75,
    "level": "B1",
    "t": "Articles",
    "q": "He plays ___ piano.",
    "a": [
      "the",
      "a",
      "an"
    ],
    "c": 0,
    "e": "The is commonly used with musical instruments."
  },
  {
    "id": 76,
    "level": "B1",
    "t": "Prepositions",
    "q": "She insisted ___ paying.",
    "a": [
      "on",
      "for",
      "to"
    ],
    "c": 0,
    "e": "Insist on is followed by a noun or -ing form."
  },
  {
    "id": 77,
    "level": "B1",
    "t": "Prepositions",
    "q": "I'm looking forward to ___ you.",
    "a": [
      "seeing",
      "see",
      "saw"
    ],
    "c": 0,
    "e": "To in look forward to is a preposition, so use -ing."
  },
  {
    "id": 78,
    "level": "B1",
    "t": "Prepositions",
    "q": "He apologized ___ being late.",
    "a": [
      "for",
      "of",
      "to"
    ],
    "c": 0,
    "e": "Apologize for introduces the reason."
  },
  {
    "id": 79,
    "level": "B1",
    "t": "Prepositions",
    "q": "The decision depends ___ the weather.",
    "a": [
      "on",
      "of",
      "from"
    ],
    "c": 0,
    "e": "Depend on is the usual collocation."
  },
  {
    "id": 80,
    "level": "B1",
    "t": "Questions",
    "q": "Do you know where ___?",
    "a": [
      "she lives",
      "does she live",
      "lives she"
    ],
    "c": 0,
    "e": "Indirect questions use statement word order."
  },
  {
    "id": 81,
    "level": "B1",
    "t": "Questions",
    "q": "I wonder whether he ___ coming.",
    "a": [
      "is",
      "does",
      "has"
    ],
    "c": 0,
    "e": "Whether introduces an indirect yes/no question."
  },
  {
    "id": 82,
    "level": "B1",
    "t": "Sentence structure",
    "q": "Choose the correct sentence.",
    "a": [
      "Not only did she sing, but she also danced.",
      "Not only she sang, but she danced.",
      "Not only did she sang, but she danced."
    ],
    "c": 0,
    "e": "Fronted not only triggers inversion with did + base verb."
  },
  {
    "id": 83,
    "level": "B1",
    "t": "Sentence structure",
    "q": "Choose the correct sentence.",
    "a": [
      "Despite the rain, we went out.",
      "Despite it rained, we went out.",
      "Despite of the rain, we went out."
    ],
    "c": 0,
    "e": "Despite is followed by a noun phrase or -ing form."
  },
  {
    "id": 84,
    "level": "B1",
    "t": "Sentence structure",
    "q": "Choose the correct sentence.",
    "a": [
      "Hardly had I arrived when it started raining.",
      "Hardly I had arrived when it started raining.",
      "Hardly did I arrived when it started raining."
    ],
    "c": 0,
    "e": "Fronted hardly triggers auxiliary inversion."
  },
  {
    "id": 85,
    "level": "B1",
    "t": "Common mistakes",
    "q": "There were ___ people than expected.",
    "a": [
      "fewer",
      "less",
      "little"
    ],
    "c": 0,
    "e": "Fewer is preferred for countable people."
  },
  {
    "id": 86,
    "level": "B1",
    "t": "Common mistakes",
    "q": "It's ___ cold to swim.",
    "a": [
      "too",
      "enough",
      "so much"
    ],
    "c": 0,
    "e": "Too + adjective means excessively."
  },
  {
    "id": 87,
    "level": "B1",
    "t": "Common mistakes",
    "q": "She has lived here ___ ten years.",
    "a": [
      "for",
      "since",
      "from"
    ],
    "c": 0,
    "e": "For introduces duration."
  },
  {
    "id": 88,
    "level": "B1",
    "t": "Common mistakes",
    "q": "He ___ to smoke, but he quit.",
    "a": [
      "used",
      "was used",
      "use"
    ],
    "c": 0,
    "e": "Used to describes a past habit."
  },
  {
    "id": 89,
    "level": "B1",
    "t": "Common mistakes",
    "q": "The news ___ surprising.",
    "a": [
      "is",
      "are",
      "were"
    ],
    "c": 0,
    "e": "News is grammatically singular."
  },
  {
    "id": 90,
    "level": "B1",
    "t": "Common mistakes",
    "q": "Neither Anna nor her friends ___ coming.",
    "a": [
      "are",
      "is",
      "was"
    ],
    "c": 0,
    "e": "With neither...nor, the plural nearer subject favors are."
  },
{"id":91,"level":"B1","t":"Pronouns","q":"Between you and ___, this is difficult.","a":["me","I","my"],"c":0,"e":"After a preposition, use the object pronoun me."},
{"id":92,"level":"A2","t":"Pronouns","q":"The decision is ___.","a":["hers","her","she"],"c":0,"e":"Hers stands alone as a possessive pronoun."},
{"id":93,"level":"A2","t":"Pronouns","q":"They prepared the meal ___.","a":["themselves","theirselves","themself"],"c":0,"e":"The plural reflexive pronoun is themselves."},
{"id":94,"level":"A2","t":"Pronouns","q":"___ of these jackets is yours?","a":["Which","Who","Whose"],"c":0,"e":"Which asks you to choose from a known set."},
{"id":95,"level":"A2","t":"Pronouns","q":"This is the friend ___ helped me.","a":["who","whom","whose"],"c":0,"e":"Who is the subject of helped."},
{"id":96,"level":"B1","t":"Pronouns","q":"The students handed in ___ homework.","a":["their","there","they're"],"c":0,"e":"Their shows possession."},
{"id":97,"level":"A2","t":"Pronouns","q":"She and ___ are leaving.","a":["I","me","mine"],"c":0,"e":"Use subject pronouns in a compound subject."},
{"id":98,"level":"A2","t":"Pronouns","q":"The dog hurt ___ jumping down.","a":["itself","himself","themselves"],"c":0,"e":"Itself refers back to a singular animal referred to as it."},
{"id":99,"level":"A2","t":"Articles","q":"She works as ___ engineer.","a":["an","a","the"],"c":0,"e":"Use an before the vowel sound in engineer."},
{"id":100,"level":"A2","t":"Articles","q":"We visited ___ United Kingdom.","a":["the","a","an"],"c":0,"e":"The United Kingdom takes the definite article."},
{"id":101,"level":"B1","t":"Articles","q":"I had ___ breakfast at seven.","a":["— (no article)","a","the"],"c":0,"e":"Meals usually take no article in general statements."},
{"id":102,"level":"A2","t":"Articles","q":"He bought ___ umbrella.","a":["an","a","— (no article)"],"c":0,"e":"Umbrella begins with a vowel sound."},
{"id":103,"level":"A2","t":"Articles","q":"___ honesty matters.","a":["— (no article)","An","The"],"c":0,"e":"Abstract qualities in general usually take no article."},
{"id":104,"level":"A2","t":"Articles","q":"She plays ___ piano.","a":["the","a","— (no article)"],"c":0,"e":"We commonly use the with musical instruments."},
{"id":105,"level":"A2","t":"Articles","q":"They live near ___ airport.","a":["an","a","— (no article)"],"c":0,"e":"Airport begins with a vowel sound."},
{"id":106,"level":"B1","t":"Articles","q":"I need ___ advice.","a":["some","an","a"],"c":0,"e":"Advice is uncountable, so not an advice."},
{"id":107,"level":"A2","t":"Verbs","q":"He ___ to work every day.","a":["goes","go","going"],"c":0,"e":"He takes goes in the present simple."},
{"id":108,"level":"A2","t":"Verbs","q":"I ___ dinner when you called.","a":["was cooking","cooked","am cooking"],"c":0,"e":"Past continuous describes an ongoing action interrupted by a call."},
{"id":109,"level":"A2","t":"Verbs","q":"By noon, she ___ the report.","a":["had finished","has finish","finish"],"c":0,"e":"Past perfect shows an action completed before a past reference time."},
{"id":110,"level":"A2","t":"Verbs","q":"If it rains, we ___ inside.","a":["will stay","would stayed","staying"],"c":0,"e":"First conditional: if + present, will + base verb."},
{"id":111,"level":"B1","t":"Verbs","q":"They ___ here since 2020.","a":["have lived","lived","are live"],"c":0,"e":"Present perfect connects a situation beginning in the past to now."},
{"id":112,"level":"A2","t":"Verbs","q":"He suggested ___ earlier.","a":["leaving","to leave","leave"],"c":0,"e":"Suggest can be followed by an -ing form."},
{"id":113,"level":"A2","t":"Verbs","q":"She made me ___ again.","a":["try","to try","trying"],"c":0,"e":"Make + object takes a bare infinitive."},
{"id":114,"level":"A2","t":"Verbs","q":"The window ___ yesterday.","a":["was broken","is break","broke by"],"c":0,"e":"Passive past: was + past participle."},
{"id":115,"level":"A2","t":"Questions","q":"___ you ever been to Dublin?","a":["Have","Did","Are"],"c":0,"e":"Present perfect questions use have before the subject."},
{"id":116,"level":"B1","t":"Questions","q":"Where ___ she live?","a":["does","do","is"],"c":0,"e":"Use does for present-simple questions with she."},
{"id":117,"level":"A2","t":"Questions","q":"How long ___ you been waiting?","a":["have","are","did"],"c":0,"e":"Present perfect continuous uses have been + -ing."},
{"id":118,"level":"A2","t":"Questions","q":"___ is your birthday?","a":["When","Where","Who"],"c":0,"e":"When asks about time."},
{"id":119,"level":"A2","t":"Questions","q":"Do you know where he ___?","a":["lives","does live","live"],"c":0,"e":"Embedded questions use statement word order."},
{"id":120,"level":"A2","t":"Questions","q":"You haven't met her, ___?","a":["have you","haven't you","did you"],"c":0,"e":"A negative statement usually takes a positive question tag."},
{"id":121,"level":"B1","t":"Questions","q":"___ bag is this?","a":["Whose","Who's","Who"],"c":0,"e":"Whose asks about possession."},
{"id":122,"level":"A2","t":"Questions","q":"Why ___ they late yesterday?","a":["were","was","did"],"c":0,"e":"Were is the past form of be for they."},
{"id":123,"level":"A2","t":"Prepositions","q":"She's good ___ mathematics.","a":["at","in","on"],"c":0,"e":"Good at is the usual collocation for skills."},
{"id":124,"level":"A2","t":"Prepositions","q":"We'll meet ___ Monday.","a":["on","at","in"],"c":0,"e":"Use on for days of the week."},
{"id":125,"level":"A2","t":"Prepositions","q":"He arrived ___ the station.","a":["at","to","on"],"c":0,"e":"Arrive at is used for a specific place such as a station."},
{"id":126,"level":"B1","t":"Prepositions","q":"I'm interested ___ history.","a":["in","on","at"],"c":0,"e":"Interested in is the standard expression."},
{"id":127,"level":"A2","t":"Prepositions","q":"The keys are ___ the table.","a":["on","at","to"],"c":0,"e":"On indicates contact with a surface."},
{"id":128,"level":"A2","t":"Prepositions","q":"She apologized ___ being late.","a":["for","of","to"],"c":0,"e":"Apologize for introduces the reason."},
{"id":129,"level":"A2","t":"Prepositions","q":"They depend ___ each other.","a":["on","of","at"],"c":0,"e":"Depend on is the correct verb-preposition combination."},
{"id":130,"level":"A2","t":"Prepositions","q":"We've been waiting ___ an hour.","a":["for","since","during"],"c":0,"e":"For indicates a duration."},
{"id":131,"level":"B1","t":"Quantifiers","q":"There isn't ___ milk left.","a":["much","many","a few"],"c":0,"e":"Much is used with uncountable nouns in negatives."},
{"id":132,"level":"A2","t":"Quantifiers","q":"Only ___ people attended.","a":["a few","a little","much"],"c":0,"e":"A few is used with countable plural nouns."},
{"id":133,"level":"A2","t":"Quantifiers","q":"I have ___ patience today.","a":["little","few","many"],"c":0,"e":"Little is used with uncountable nouns."},
{"id":134,"level":"A2","t":"Quantifiers","q":"There are ___ chairs for everyone.","a":["enough","much","little"],"c":0,"e":"Enough means a sufficient number."},
{"id":135,"level":"A2","t":"Quantifiers","q":"___ of the two answers is correct.","a":["Neither","None","All"],"c":0,"e":"Neither refers to two alternatives."},
{"id":136,"level":"B1","t":"Quantifiers","q":"Would you like ___ tea?","a":["some","many","few"],"c":0,"e":"Some is common in offers with uncountable nouns."},
{"id":137,"level":"A2","t":"Quantifiers","q":"She has ___ friends in the city.","a":["several","much","a little"],"c":0,"e":"Several modifies countable plural nouns."},
{"id":138,"level":"A2","t":"Quantifiers","q":"There are too ___ cars here.","a":["many","much","little"],"c":0,"e":"Many is used with countable plurals."},
{"id":139,"level":"A2","t":"Sentence structure","q":"Although it was raining, ___ went out.","a":["we","but we","because we"],"c":0,"e":"Although already introduces contrast; don't add but."},
{"id":140,"level":"A2","t":"Sentence structure","q":"I don't know ___ he left.","a":["why","that why","why did"],"c":0,"e":"Indirect questions use statement order."},
{"id":141,"level":"B1","t":"Sentence structure","q":"The book ___ I borrowed was excellent.","a":["that","what","who"],"c":0,"e":"That can introduce a relative clause referring to a thing."},
{"id":142,"level":"A2","t":"Sentence structure","q":"She is taller ___ her brother.","a":["than","then","as"],"c":0,"e":"Comparatives use than."},
{"id":143,"level":"A2","t":"Sentence structure","q":"He was tired, ___ he kept working.","a":["but","because","so that"],"c":0,"e":"But joins contrasting clauses."},
{"id":144,"level":"A2","t":"Sentence structure","q":"Not only did she sing, ___ she danced.","a":["but also","and also did","also but"],"c":0,"e":"Not only pairs naturally with but also."},
{"id":145,"level":"A2","t":"Sentence structure","q":"If I ___ you, I'd call first.","a":["were","am","will be"],"c":0,"e":"The hypothetical conditional commonly uses were."},
{"id":146,"level":"B1","t":"Sentence structure","q":"I wish I ___ more time.","a":["had","have","will have"],"c":0,"e":"Wish about the present uses a past-form verb."},
{"id":147,"level":"A2","t":"Common mistakes","q":"I'm looking forward to ___ you.","a":["seeing","see","saw"],"c":0,"e":"Look forward to takes an -ing form."},
{"id":148,"level":"A2","t":"Common mistakes","q":"She gave me ___ information.","a":["some","an","many"],"c":0,"e":"Information is uncountable."},
{"id":149,"level":"A2","t":"Common mistakes","q":"He explained the problem ___ me.","a":["to","for","at"],"c":0,"e":"Explain something to someone."},
{"id":150,"level":"A2","t":"Common mistakes","q":"I have lived here ___ five years.","a":["for","since","during"],"c":0,"e":"For expresses length of time."},
{"id":151,"level":"B1","t":"Common mistakes","q":"There are ___ fewer mistakes now.","a":["far","much","very"],"c":0,"e":"Far can intensify the comparative fewer."},
{"id":152,"level":"A2","t":"Common mistakes","q":"She is married ___ a doctor.","a":["to","with","at"],"c":0,"e":"Married to is the standard expression."},
{"id":153,"level":"A2","t":"Common mistakes","q":"I didn't ___ anything.","a":["see","saw","seen"],"c":0,"e":"Did already marks past tense; use the base verb."},
{"id":154,"level":"A2","t":"Common mistakes","q":"The furniture ___ new.","a":["is","are","were"],"c":0,"e":"Furniture is an uncountable singular noun."},
{"id":155,"level":"B1","t":"Pronouns","q":"___ love reading.","a":["I","Me","Mine"],"c":0,"e":"Use I as the subject of a sentence."},
{"id":156,"level":"A2","t":"Pronouns","q":"___ need a break.","a":["Me","Mine","I"],"c":2,"e":"Use I as the subject of a sentence."},
{"id":157,"level":"A2","t":"Pronouns","q":"___ usually walk home.","a":["Mine","I","Me"],"c":1,"e":"Use I as the subject of a sentence."},
{"id":158,"level":"A1","t":"Pronouns","q":"___ remember that day.","a":["I","Me","Mine"],"c":0,"e":"Use I as the subject of a sentence."},
{"id":159,"level":"A2","t":"Pronouns","q":"___ feel much better now.","a":["Me","Mine","I"],"c":2,"e":"Use I as the subject of a sentence."},
{"id":160,"level":"A2","t":"Pronouns","q":"Please call ___ tomorrow.","a":["I","mine","me"],"c":2,"e":"Use me as the object of a verb or preposition."},
{"id":161,"level":"A2","t":"Pronouns","q":"Could you help ___?","a":["mine","me","I"],"c":1,"e":"Use me as the object of a verb or preposition."},
{"id":162,"level":"A1","t":"Pronouns","q":"She invited ___ to dinner.","a":["me","I","mine"],"c":0,"e":"Use me as the object of a verb or preposition."},
{"id":163,"level":"A2","t":"Pronouns","q":"Wait for ___ outside.","a":["I","mine","me"],"c":2,"e":"Use me as the object of a verb or preposition."},
{"id":164,"level":"B1","t":"Pronouns","q":"They recognized ___ immediately.","a":["mine","me","I"],"c":1,"e":"Use me as the object of a verb or preposition."},
{"id":165,"level":"A2","t":"Pronouns","q":"Where is ___ coat?","a":["me","my","mine"],"c":1,"e":"Use my before a noun to show possession."},
{"id":166,"level":"A1","t":"Pronouns","q":"I forgot ___ keys.","a":["my","mine","me"],"c":0,"e":"Use my before a noun to show possession."},
{"id":167,"level":"A2","t":"Pronouns","q":"This is ___ desk.","a":["mine","me","my"],"c":2,"e":"Use my before a noun to show possession."},
{"id":168,"level":"B1","t":"Pronouns","q":"Have you seen ___ phone?","a":["me","my","mine"],"c":1,"e":"Use my before a noun to show possession."},
{"id":169,"level":"A1","t":"Pronouns","q":"___ sister lives nearby.","a":["my","mine","me"],"c":0,"e":"Use my before a noun to show possession."},
{"id":170,"level":"A1","t":"Pronouns","q":"That blue suitcase is ___.","a":["mine","my","me"],"c":0,"e":"Mine replaces a possessive noun phrase."},
{"id":171,"level":"A2","t":"Pronouns","q":"The final decision is ___.","a":["my","me","mine"],"c":2,"e":"Mine replaces a possessive noun phrase."},
{"id":172,"level":"B1","t":"Pronouns","q":"This seat is ___.","a":["me","mine","my"],"c":1,"e":"Mine replaces a possessive noun phrase."},
{"id":173,"level":"A1","t":"Pronouns","q":"The smaller apartment is ___.","a":["mine","my","me"],"c":0,"e":"Mine replaces a possessive noun phrase."},
{"id":174,"level":"A2","t":"Pronouns","q":"Those gloves are ___.","a":["my","me","mine"],"c":2,"e":"Mine replaces a possessive noun phrase."},
{"id":175,"level":"A2","t":"Pronouns","q":"The red bicycle is ___.","a":["her","she","hers"],"c":2,"e":"Hers is a possessive pronoun used without a following noun."},
{"id":176,"level":"B1","t":"Pronouns","q":"That idea was ___.","a":["she","hers","her"],"c":1,"e":"Hers is a possessive pronoun used without a following noun."},
{"id":177,"level":"A1","t":"Pronouns","q":"The choice is ___.","a":["hers","her","she"],"c":0,"e":"Hers is a possessive pronoun used without a following noun."},
{"id":178,"level":"A2","t":"Pronouns","q":"The last ticket is ___.","a":["her","she","hers"],"c":2,"e":"Hers is a possessive pronoun used without a following noun."},
{"id":179,"level":"A2","t":"Pronouns","q":"The larger suitcase is ___.","a":["she","hers","her"],"c":1,"e":"Hers is a possessive pronoun used without a following noun."},
{"id":180,"level":"B1","t":"Pronouns","q":"They forgot ___ passports.","a":["they're","their","there"],"c":1,"e":"Their shows possession; there indicates place and they're means they are."},
{"id":181,"level":"A1","t":"Pronouns","q":"The children packed ___ lunches.","a":["their","there","they're"],"c":0,"e":"Their shows possession; there indicates place and they're means they are."},
{"id":182,"level":"A2","t":"Pronouns","q":"The team celebrated ___ victory.","a":["there","they're","their"],"c":2,"e":"Their shows possession; there indicates place and they're means they are."},
{"id":183,"level":"A2","t":"Pronouns","q":"The neighbors painted ___ door.","a":["they're","their","there"],"c":1,"e":"Their shows possession; there indicates place and they're means they are."},
{"id":184,"level":"A1","t":"Pronouns","q":"The students opened ___ books.","a":["their","there","they're"],"c":0,"e":"Their shows possession; there indicates place and they're means they are."},
{"id":185,"level":"A1","t":"Pronouns","q":"The chef ___ cooked this is famous.","a":["who","whom","whose"],"c":0,"e":"Who is the subject of the relative clause."},
{"id":186,"level":"A2","t":"Pronouns","q":"The woman ___ called was polite.","a":["whom","whose","who"],"c":2,"e":"Who is the subject of the relative clause."},
{"id":187,"level":"A2","t":"Pronouns","q":"The boy ___ won is my cousin.","a":["whose","who","whom"],"c":1,"e":"Who is the subject of the relative clause."},
{"id":188,"level":"A1","t":"Pronouns","q":"The teacher ___ helped us retired.","a":["who","whom","whose"],"c":0,"e":"Who is the subject of the relative clause."},
{"id":189,"level":"B1","t":"Pronouns","q":"The driver ___ stopped was helpful.","a":["whom","whose","who"],"c":2,"e":"Who is the subject of the relative clause."},
{"id":190,"level":"A2","t":"Pronouns","q":"To ___ did you send the letter?","a":["who","whose","whom"],"c":2,"e":"Whom is the object of the preposition in formal English."},
{"id":191,"level":"A2","t":"Pronouns","q":"With ___ are you traveling?","a":["whose","whom","who"],"c":1,"e":"Whom is the object of the preposition in formal English."},
{"id":192,"level":"A1","t":"Pronouns","q":"For ___ was the gift intended?","a":["whom","who","whose"],"c":0,"e":"Whom is the object of the preposition in formal English."},
{"id":193,"level":"B1","t":"Pronouns","q":"From ___ did you hear that?","a":["who","whose","whom"],"c":2,"e":"Whom is the object of the preposition in formal English."},
{"id":194,"level":"A2","t":"Pronouns","q":"About ___ were they speaking?","a":["whose","whom","who"],"c":1,"e":"Whom is the object of the preposition in formal English."},
{"id":195,"level":"A2","t":"Pronouns","q":"We introduced ___ to the group.","a":["us","ourselves","ourself"],"c":1,"e":"Ourselves is the reflexive pronoun for we."},
{"id":196,"level":"A1","t":"Pronouns","q":"We prepared ___ for the exam.","a":["ourselves","ourself","us"],"c":0,"e":"Ourselves is the reflexive pronoun for we."},
{"id":197,"level":"B1","t":"Pronouns","q":"We treated ___ to lunch.","a":["ourself","us","ourselves"],"c":2,"e":"Ourselves is the reflexive pronoun for we."},
{"id":198,"level":"A2","t":"Pronouns","q":"We reminded ___ of the deadline.","a":["us","ourselves","ourself"],"c":1,"e":"Ourselves is the reflexive pronoun for we."},
{"id":199,"level":"A1","t":"Pronouns","q":"We challenged ___ to improve.","a":["ourselves","ourself","us"],"c":0,"e":"Ourselves is the reflexive pronoun for we."},
{"id":200,"level":"A1","t":"Pronouns","q":"The cat washed ___ paws.","a":["its","it's","it"],"c":0,"e":"Its is possessive; it's means it is or it has."},
{"id":201,"level":"B1","t":"Pronouns","q":"The company changed ___ policy.","a":["it's","it","its"],"c":2,"e":"Its is possessive; it's means it is or it has."},
{"id":202,"level":"A2","t":"Pronouns","q":"The tree lost ___ leaves.","a":["it","its","it's"],"c":1,"e":"Its is possessive; it's means it is or it has."},
{"id":203,"level":"A1","t":"Pronouns","q":"The car needs ___ tires checked.","a":["its","it's","it"],"c":0,"e":"Its is possessive; it's means it is or it has."},
{"id":204,"level":"A2","t":"Pronouns","q":"The museum updated ___ website.","a":["it's","it","its"],"c":2,"e":"Its is possessive; it's means it is or it has."},
{"id":205,"level":"B1","t":"Articles","q":"She is ___ architect.","a":["an","a","the"],"c":0,"e":"Use an before a vowel sound."},
{"id":206,"level":"A2","t":"Articles","q":"He bought ___ orange.","a":["a","the","an"],"c":2,"e":"Use an before a vowel sound."},
{"id":207,"level":"A2","t":"Articles","q":"I need ___ answer.","a":["the","an","a"],"c":1,"e":"Use an before a vowel sound."},
{"id":208,"level":"A1","t":"Articles","q":"They found ___ old photograph.","a":["an","a","the"],"c":0,"e":"Use an before a vowel sound."},
{"id":209,"level":"A2","t":"Articles","q":"It was ___ unusual day.","a":["a","the","an"],"c":2,"e":"Use an before a vowel sound."},
{"id":210,"level":"A2","t":"Articles","q":"She adopted ___ puppy.","a":["an","the","a"],"c":2,"e":"Use a before a consonant sound."},
{"id":211,"level":"A2","t":"Articles","q":"I bought ___ bicycle.","a":["the","a","an"],"c":1,"e":"Use a before a consonant sound."},
{"id":212,"level":"A1","t":"Articles","q":"He works in ___ factory.","a":["a","an","the"],"c":0,"e":"Use a before a consonant sound."},
{"id":213,"level":"A2","t":"Articles","q":"They rented ___ cabin.","a":["an","the","a"],"c":2,"e":"Use a before a consonant sound."},
{"id":214,"level":"B1","t":"Articles","q":"We saw ___ rainbow.","a":["the","a","an"],"c":1,"e":"Use a before a consonant sound."},
{"id":215,"level":"A2","t":"Articles","q":"We waited for ___ hour.","a":["the","an","a"],"c":1,"e":"An is used before a silent h when the word starts with a vowel sound."},
{"id":216,"level":"A1","t":"Articles","q":"She made ___ honest mistake.","a":["an","a","the"],"c":0,"e":"An is used before a silent h when the word starts with a vowel sound."},
{"id":217,"level":"A2","t":"Articles","q":"He is ___ honorary member.","a":["a","the","an"],"c":2,"e":"An is used before a silent h when the word starts with a vowel sound."},
{"id":218,"level":"B1","t":"Articles","q":"It was ___ honorable decision.","a":["the","an","a"],"c":1,"e":"An is used before a silent h when the word starts with a vowel sound."},
{"id":219,"level":"A1","t":"Articles","q":"Give me ___ hour to finish.","a":["an","a","the"],"c":0,"e":"An is used before a silent h when the word starts with a vowel sound."},
{"id":220,"level":"A1","t":"Articles","q":"She attends ___ university.","a":["a","an","the"],"c":0,"e":"University and European begin with a consonant /y/ sound."},
{"id":221,"level":"A2","t":"Articles","q":"He bought ___ used car.","a":["an","the","a"],"c":2,"e":"University and European begin with a consonant /y/ sound."},
{"id":222,"level":"B1","t":"Articles","q":"They visited ___ European city.","a":["the","a","an"],"c":1,"e":"University and European begin with a consonant /y/ sound."},
{"id":223,"level":"A1","t":"Articles","q":"It was ___ unique opportunity.","a":["a","an","the"],"c":0,"e":"University and European begin with a consonant /y/ sound."},
{"id":224,"level":"A2","t":"Articles","q":"I received ___ useful tip.","a":["an","the","a"],"c":2,"e":"University and European begin with a consonant /y/ sound."},
{"id":225,"level":"A2","t":"Articles","q":"Please close ___ door behind you.","a":["a","an","the"],"c":2,"e":"Use the for something uniquely identified in the context."},
{"id":226,"level":"B1","t":"Articles","q":"Turn off ___ light in this room.","a":["an","the","a"],"c":1,"e":"Use the for something uniquely identified in the context."},
{"id":227,"level":"A1","t":"Articles","q":"Can you open ___ window beside you?","a":["the","a","an"],"c":0,"e":"Use the for something uniquely identified in the context."},
{"id":228,"level":"A2","t":"Articles","q":"I left my coat on ___ chair by the door.","a":["a","an","the"],"c":2,"e":"Use the for something uniquely identified in the context."},
{"id":229,"level":"A2","t":"Articles","q":"Look at ___ painting above the sofa.","a":["an","the","a"],"c":1,"e":"Use the for something uniquely identified in the context."},
{"id":230,"level":"B1","t":"Articles","q":"___ Cats are independent animals.","a":["the","— (no article)","a"],"c":1,"e":"General plural nouns usually take no article."},
{"id":231,"level":"A1","t":"Articles","q":"___ Books can change lives.","a":["— (no article)","a","the"],"c":0,"e":"General plural nouns usually take no article."},
{"id":232,"level":"A2","t":"Articles","q":"___ Birds build nests.","a":["a","the","— (no article)"],"c":2,"e":"General plural nouns usually take no article."},
{"id":233,"level":"A2","t":"Articles","q":"___ Children need sleep.","a":["the","— (no article)","a"],"c":1,"e":"General plural nouns usually take no article."},
{"id":234,"level":"A1","t":"Articles","q":"___ Trees absorb carbon dioxide.","a":["— (no article)","a","the"],"c":0,"e":"General plural nouns usually take no article."},
{"id":235,"level":"A1","t":"Articles","q":"___ Water is essential for life.","a":["— (no article)","a","an"],"c":0,"e":"Uncountable nouns in general often take no article."},
{"id":236,"level":"A2","t":"Articles","q":"___ Music helps me relax.","a":["a","an","— (no article)"],"c":2,"e":"Uncountable nouns in general often take no article."},
{"id":237,"level":"A2","t":"Articles","q":"___ Information travels quickly.","a":["an","— (no article)","a"],"c":1,"e":"Uncountable nouns in general often take no article."},
{"id":238,"level":"A1","t":"Articles","q":"___ Patience takes practice.","a":["— (no article)","a","an"],"c":0,"e":"Uncountable nouns in general often take no article."},
{"id":239,"level":"B1","t":"Articles","q":"___ Research takes time.","a":["a","an","— (no article)"],"c":2,"e":"Uncountable nouns in general often take no article."},
{"id":240,"level":"A2","t":"Articles","q":"This is ___ best answer.","a":["a","— (no article)","the"],"c":2,"e":"Use the with superlative adjectives."},
{"id":241,"level":"A2","t":"Articles","q":"She chose ___ cheapest ticket.","a":["— (no article)","the","a"],"c":1,"e":"Use the with superlative adjectives."},
{"id":242,"level":"A1","t":"Articles","q":"That was ___ longest meeting.","a":["the","a","— (no article)"],"c":0,"e":"Use the with superlative adjectives."},
{"id":243,"level":"B1","t":"Articles","q":"He is ___ tallest player.","a":["a","— (no article)","the"],"c":2,"e":"Use the with superlative adjectives."},
{"id":244,"level":"A2","t":"Articles","q":"It was ___ most interesting talk.","a":["— (no article)","the","a"],"c":1,"e":"Use the with superlative adjectives."},
{"id":245,"level":"A2","t":"Articles","q":"Take ___ second exit.","a":["— (no article)","the","a"],"c":1,"e":"Use the with ordinal numbers identifying a specific item."},
{"id":246,"level":"A1","t":"Articles","q":"This is ___ first chapter.","a":["the","a","— (no article)"],"c":0,"e":"Use the with ordinal numbers identifying a specific item."},
{"id":247,"level":"B1","t":"Articles","q":"She finished in ___ third place.","a":["a","— (no article)","the"],"c":2,"e":"Use the with ordinal numbers identifying a specific item."},
{"id":248,"level":"A2","t":"Articles","q":"Turn to ___ fifth page.","a":["— (no article)","the","a"],"c":1,"e":"Use the with ordinal numbers identifying a specific item."},
{"id":249,"level":"A1","t":"Articles","q":"We live on ___ fourth floor.","a":["the","a","— (no article)"],"c":0,"e":"Use the with ordinal numbers identifying a specific item."},
{"id":250,"level":"A1","t":"Articles","q":"She earned ___ MBA.","a":["an","a","— (no article)"],"c":0,"e":"Use an before an initialism pronounced with a vowel sound."},
{"id":251,"level":"B1","t":"Articles","q":"He sent ___ SOS signal.","a":["a","— (no article)","an"],"c":2,"e":"Use an before an initialism pronounced with a vowel sound."},
{"id":252,"level":"A2","t":"Articles","q":"They hired ___ HR manager.","a":["— (no article)","an","a"],"c":1,"e":"Use an before an initialism pronounced with a vowel sound."},
{"id":253,"level":"A1","t":"Articles","q":"We need ___ MRI scan.","a":["an","a","— (no article)"],"c":0,"e":"Use an before an initialism pronounced with a vowel sound."},
{"id":254,"level":"A2","t":"Articles","q":"She gave ___ FAQ overview.","a":["a","— (no article)","an"],"c":2,"e":"Use an before an initialism pronounced with a vowel sound."},
{"id":255,"level":"B1","t":"Verbs","q":"He ___ to the office early.","a":["goes","go","going"],"c":0,"e":"The third-person singular present simple adds -s or -es."},
{"id":256,"level":"A2","t":"Verbs","q":"She ___ running on Sundays.","a":["go","going","goes"],"c":2,"e":"The third-person singular present simple adds -s or -es."},
{"id":257,"level":"A2","t":"Verbs","q":"My brother ___ to bed late.","a":["going","goes","go"],"c":1,"e":"The third-person singular present simple adds -s or -es."},
{"id":258,"level":"A1","t":"Verbs","q":"The bus ___ past our house.","a":["goes","go","going"],"c":0,"e":"The third-person singular present simple adds -s or -es."},
{"id":259,"level":"A2","t":"Verbs","q":"This train ___ to the airport.","a":["go","going","goes"],"c":2,"e":"The third-person singular present simple adds -s or -es."},
{"id":260,"level":"A2","t":"Verbs","q":"I ___ like olives.","a":["doesn't","isn't","don't"],"c":2,"e":"Use don't with I, you, we and they in the present simple."},
{"id":261,"level":"A2","t":"Verbs","q":"They ___ work on Fridays.","a":["isn't","don't","doesn't"],"c":1,"e":"Use don't with I, you, we and they in the present simple."},
{"id":262,"level":"A1","t":"Verbs","q":"We ___ need another copy.","a":["don't","doesn't","isn't"],"c":0,"e":"Use don't with I, you, we and they in the present simple."},
{"id":263,"level":"A2","t":"Verbs","q":"You ___ have to wait.","a":["doesn't","isn't","don't"],"c":2,"e":"Use don't with I, you, we and they in the present simple."},
{"id":264,"level":"B1","t":"Verbs","q":"My parents ___ live nearby.","a":["isn't","don't","doesn't"],"c":1,"e":"Use don't with I, you, we and they in the present simple."},
{"id":265,"level":"A2","t":"Verbs","q":"She ___ eat meat.","a":["isn't","doesn't","don't"],"c":1,"e":"Use doesn't with a singular third-person subject and a base verb."},
{"id":266,"level":"A1","t":"Verbs","q":"He ___ speak Italian.","a":["doesn't","don't","isn't"],"c":0,"e":"Use doesn't with a singular third-person subject and a base verb."},
{"id":267,"level":"A2","t":"Verbs","q":"The printer ___ work.","a":["don't","isn't","doesn't"],"c":2,"e":"Use doesn't with a singular third-person subject and a base verb."},
{"id":268,"level":"B1","t":"Verbs","q":"My dog ___ like thunder.","a":["isn't","doesn't","don't"],"c":1,"e":"Use doesn't with a singular third-person subject and a base verb."},
{"id":269,"level":"A1","t":"Verbs","q":"This shop ___ open on Mondays.","a":["doesn't","don't","isn't"],"c":0,"e":"Use doesn't with a singular third-person subject and a base verb."},
{"id":270,"level":"A1","t":"Verbs","q":"I ___ tired yesterday.","a":["was","were","is"],"c":0,"e":"Use was with I, he, she and it in the past."},
{"id":271,"level":"A2","t":"Verbs","q":"She ___ at home last night.","a":["were","is","was"],"c":2,"e":"Use was with I, he, she and it in the past."},
{"id":272,"level":"B1","t":"Verbs","q":"He ___ late for the train.","a":["is","was","were"],"c":1,"e":"Use was with I, he, she and it in the past."},
{"id":273,"level":"A1","t":"Verbs","q":"It ___ cold this morning.","a":["was","were","is"],"c":0,"e":"Use was with I, he, she and it in the past."},
{"id":274,"level":"A2","t":"Verbs","q":"The film ___ excellent.","a":["were","is","was"],"c":2,"e":"Use was with I, he, she and it in the past."},
{"id":275,"level":"A2","t":"Verbs","q":"They ___ excited yesterday.","a":["was","are","were"],"c":2,"e":"Use were with you, we and they in the past."},
{"id":276,"level":"B1","t":"Verbs","q":"We ___ in London last year.","a":["are","were","was"],"c":1,"e":"Use were with you, we and they in the past."},
{"id":277,"level":"A1","t":"Verbs","q":"You ___ right about that.","a":["were","was","are"],"c":0,"e":"Use were with you, we and they in the past."},
{"id":278,"level":"A2","t":"Verbs","q":"The guests ___ early.","a":["was","are","were"],"c":2,"e":"Use were with you, we and they in the past."},
{"id":279,"level":"A2","t":"Verbs","q":"The tickets ___ expensive.","a":["are","were","was"],"c":1,"e":"Use were with you, we and they in the past."},
{"id":280,"level":"B1","t":"Verbs","q":"I ___ finished my homework.","a":["had","have","has"],"c":1,"e":"Use have with I, you, we and they in the present perfect."},
{"id":281,"level":"A1","t":"Verbs","q":"They ___ already left.","a":["have","has","had"],"c":0,"e":"Use have with I, you, we and they in the present perfect."},
{"id":282,"level":"A2","t":"Verbs","q":"We ___ seen that film.","a":["has","had","have"],"c":2,"e":"Use have with I, you, we and they in the present perfect."},
{"id":283,"level":"A2","t":"Verbs","q":"You ___ made good progress.","a":["had","have","has"],"c":1,"e":"Use have with I, you, we and they in the present perfect."},
{"id":284,"level":"A1","t":"Verbs","q":"My friends ___ arrived.","a":["have","has","had"],"c":0,"e":"Use have with I, you, we and they in the present perfect."},
{"id":285,"level":"A1","t":"Verbs","q":"She ___ lost her keys.","a":["has","have","had"],"c":0,"e":"Use has with he, she and it in the present perfect."},
{"id":286,"level":"A2","t":"Verbs","q":"He ___ already eaten.","a":["have","had","has"],"c":2,"e":"Use has with he, she and it in the present perfect."},
{"id":287,"level":"A2","t":"Verbs","q":"The train ___ just arrived.","a":["had","has","have"],"c":1,"e":"Use has with he, she and it in the present perfect."},
{"id":288,"level":"A1","t":"Verbs","q":"My sister ___ moved house.","a":["has","have","had"],"c":0,"e":"Use has with he, she and it in the present perfect."},
{"id":289,"level":"B1","t":"Verbs","q":"The weather ___ improved.","a":["have","had","has"],"c":2,"e":"Use has with he, she and it in the present perfect."},
{"id":290,"level":"A2","t":"Verbs","q":"I ___ reading when she called.","a":["is","were","was"],"c":2,"e":"Past continuous with I, he, she or it uses was + -ing."},
{"id":291,"level":"A2","t":"Verbs","q":"He ___ sleeping at midnight.","a":["were","was","is"],"c":1,"e":"Past continuous with I, he, she or it uses was + -ing."},
{"id":292,"level":"A1","t":"Verbs","q":"She ___ driving when it rained.","a":["was","is","were"],"c":0,"e":"Past continuous with I, he, she or it uses was + -ing."},
{"id":293,"level":"B1","t":"Verbs","q":"The baby ___ crying earlier.","a":["is","were","was"],"c":2,"e":"Past continuous with I, he, she or it uses was + -ing."},
{"id":294,"level":"A2","t":"Verbs","q":"It ___ snowing all evening.","a":["were","was","is"],"c":1,"e":"Past continuous with I, he, she or it uses was + -ing."},
{"id":295,"level":"A2","t":"Verbs","q":"She ___ left before I arrived.","a":["have","had","has"],"c":1,"e":"Past perfect uses had + past participle for every subject."},
{"id":296,"level":"A1","t":"Verbs","q":"They ___ eaten by eight.","a":["had","has","have"],"c":0,"e":"Past perfect uses had + past participle for every subject."},
{"id":297,"level":"B1","t":"Verbs","q":"We ___ finished before noon.","a":["has","have","had"],"c":2,"e":"Past perfect uses had + past participle for every subject."},
{"id":298,"level":"A2","t":"Verbs","q":"He ___ forgotten the password.","a":["have","had","has"],"c":1,"e":"Past perfect uses had + past participle for every subject."},
{"id":299,"level":"A1","t":"Verbs","q":"I ___ already seen the play.","a":["had","has","have"],"c":0,"e":"Past perfect uses had + past participle for every subject."},
{"id":300,"level":"A1","t":"Verbs","q":"If I had more time, I ___ travel.","a":["would","will","can"],"c":0,"e":"Use would in the main clause of a hypothetical second conditional."},
{"id":301,"level":"B1","t":"Verbs","q":"If she knew, she ___ tell us.","a":["will","can","would"],"c":2,"e":"Use would in the main clause of a hypothetical second conditional."},
{"id":302,"level":"A2","t":"Verbs","q":"If we won, we ___ celebrate.","a":["can","would","will"],"c":1,"e":"Use would in the main clause of a hypothetical second conditional."},
{"id":303,"level":"A1","t":"Verbs","q":"If it were warmer, I ___ swim.","a":["would","will","can"],"c":0,"e":"Use would in the main clause of a hypothetical second conditional."},
{"id":304,"level":"A2","t":"Verbs","q":"If he studied, he ___ improve.","a":["will","can","would"],"c":2,"e":"Use would in the main clause of a hypothetical second conditional."},
{"id":305,"level":"B1","t":"Questions","q":"___ you like jazz?","a":["Do","Does","Are"],"c":0,"e":"Present simple questions with you, we or they use do."},
{"id":306,"level":"A2","t":"Questions","q":"___ they live here?","a":["Does","Are","Do"],"c":2,"e":"Present simple questions with you, we or they use do."},
{"id":307,"level":"A2","t":"Questions","q":"___ we need tickets?","a":["Are","Do","Does"],"c":1,"e":"Present simple questions with you, we or they use do."},
{"id":308,"level":"A1","t":"Questions","q":"___ you speak German?","a":["Do","Does","Are"],"c":0,"e":"Present simple questions with you, we or they use do."},
{"id":309,"level":"A2","t":"Questions","q":"___ your friends play tennis?","a":["Does","Are","Do"],"c":2,"e":"Present simple questions with you, we or they use do."},
{"id":310,"level":"A2","t":"Questions","q":"___ she work nearby?","a":["Do","Is","Does"],"c":2,"e":"Present simple questions with he, she or it use does."},
{"id":311,"level":"A2","t":"Questions","q":"___ he drive to work?","a":["Is","Does","Do"],"c":1,"e":"Present simple questions with he, she or it use does."},
{"id":312,"level":"A1","t":"Questions","q":"___ this machine operate quietly?","a":["Does","Do","Is"],"c":0,"e":"Present simple questions with he, she or it use does."},
{"id":313,"level":"A2","t":"Questions","q":"___ your sister sing?","a":["Do","Is","Does"],"c":2,"e":"Present simple questions with he, she or it use does."},
{"id":314,"level":"B1","t":"Questions","q":"___ the bus stop here?","a":["Is","Does","Do"],"c":1,"e":"Present simple questions with he, she or it use does."},
{"id":315,"level":"A2","t":"Questions","q":"___ you call yesterday?","a":["Were","Did","Do"],"c":1,"e":"Use did to form past simple questions with ordinary verbs."},
{"id":316,"level":"A1","t":"Questions","q":"___ she arrive on time?","a":["Did","Do","Were"],"c":0,"e":"Use did to form past simple questions with ordinary verbs."},
{"id":317,"level":"A2","t":"Questions","q":"___ they enjoy the concert?","a":["Do","Were","Did"],"c":2,"e":"Use did to form past simple questions with ordinary verbs."},
{"id":318,"level":"B1","t":"Questions","q":"___ he finish the report?","a":["Were","Did","Do"],"c":1,"e":"Use did to form past simple questions with ordinary verbs."},
{"id":319,"level":"A1","t":"Questions","q":"___ we miss the train?","a":["Did","Do","Were"],"c":0,"e":"Use did to form past simple questions with ordinary verbs."},
{"id":320,"level":"A1","t":"Questions","q":"___ you ever visited Paris?","a":["Have","Has","Did"],"c":0,"e":"Present perfect questions with you, we or they use have."},
{"id":321,"level":"A2","t":"Questions","q":"___ they finished yet?","a":["Has","Did","Have"],"c":2,"e":"Present perfect questions with you, we or they use have."},
{"id":322,"level":"B1","t":"Questions","q":"___ we met before?","a":["Did","Have","Has"],"c":1,"e":"Present perfect questions with you, we or they use have."},
{"id":323,"level":"A1","t":"Questions","q":"___ you seen my glasses?","a":["Have","Has","Did"],"c":0,"e":"Present perfect questions with you, we or they use have."},
{"id":324,"level":"A2","t":"Questions","q":"___ your parents arrived?","a":["Has","Did","Have"],"c":2,"e":"Present perfect questions with you, we or they use have."},
{"id":325,"level":"A2","t":"Questions","q":"___ she called you?","a":["Have","Did","Has"],"c":2,"e":"Present perfect questions with he, she or it use has."},
{"id":326,"level":"B1","t":"Questions","q":"___ he finished lunch?","a":["Did","Has","Have"],"c":1,"e":"Present perfect questions with he, she or it use has."},
{"id":327,"level":"A1","t":"Questions","q":"___ the package arrived?","a":["Has","Have","Did"],"c":0,"e":"Present perfect questions with he, she or it use has."},
{"id":328,"level":"A2","t":"Questions","q":"___ your brother left?","a":["Have","Did","Has"],"c":2,"e":"Present perfect questions with he, she or it use has."},
{"id":329,"level":"A2","t":"Questions","q":"___ the weather improved?","a":["Did","Has","Have"],"c":1,"e":"Present perfect questions with he, she or it use has."},
{"id":330,"level":"B1","t":"Questions","q":"___ is the nearest station?","a":["Why","Where","When"],"c":1,"e":"Where asks about place."},
{"id":331,"level":"A1","t":"Questions","q":"___ did you park?","a":["Where","When","Why"],"c":0,"e":"Where asks about place."},
{"id":332,"level":"A2","t":"Questions","q":"___ are my shoes?","a":["When","Why","Where"],"c":2,"e":"Where asks about place."},
{"id":333,"level":"A2","t":"Questions","q":"___ does she work?","a":["Why","Where","When"],"c":1,"e":"Where asks about place."},
{"id":334,"level":"A1","t":"Questions","q":"___ should we meet?","a":["Where","When","Why"],"c":0,"e":"Where asks about place."},
{"id":335,"level":"A1","t":"Questions","q":"___ does the film start?","a":["When","Where","Who"],"c":0,"e":"When asks about time."},
{"id":336,"level":"A2","t":"Questions","q":"___ is your appointment?","a":["Where","Who","When"],"c":2,"e":"When asks about time."},
{"id":337,"level":"A2","t":"Questions","q":"___ did they leave?","a":["Who","When","Where"],"c":1,"e":"When asks about time."},
{"id":338,"level":"A1","t":"Questions","q":"___ will you return?","a":["When","Where","Who"],"c":0,"e":"When asks about time."},
{"id":339,"level":"B1","t":"Questions","q":"___ is the deadline?","a":["Where","Who","When"],"c":2,"e":"When asks about time."},
{"id":340,"level":"A2","t":"Questions","q":"___ umbrella is this?","a":["Who's","Who","Whose"],"c":2,"e":"Whose asks who owns something."},
{"id":341,"level":"A2","t":"Questions","q":"___ shoes are by the door?","a":["Who","Whose","Who's"],"c":1,"e":"Whose asks who owns something."},
{"id":342,"level":"A1","t":"Questions","q":"___ turn is it?","a":["Whose","Who's","Who"],"c":0,"e":"Whose asks who owns something."},
{"id":343,"level":"B1","t":"Questions","q":"___ phone is ringing?","a":["Who's","Who","Whose"],"c":2,"e":"Whose asks who owns something."},
{"id":344,"level":"A2","t":"Questions","q":"___ idea was that?","a":["Who","Whose","Who's"],"c":1,"e":"Whose asks who owns something."},
{"id":345,"level":"A2","t":"Questions","q":"Do you know where she ___?","a":["did","is","does"],"c":1,"e":"Indirect questions use statement word order."},
{"id":346,"level":"A1","t":"Questions","q":"Can you tell me where the bank ___?","a":["is","does","did"],"c":0,"e":"Indirect questions use statement word order."},
{"id":347,"level":"B1","t":"Questions","q":"I wonder where the exit ___?","a":["does","did","is"],"c":2,"e":"Indirect questions use statement word order."},
{"id":348,"level":"A2","t":"Questions","q":"Do you know what time it ___?","a":["did","is","does"],"c":1,"e":"Indirect questions use statement word order."},
{"id":349,"level":"A1","t":"Questions","q":"Can you tell me where the library ___?","a":["is","does","did"],"c":0,"e":"Indirect questions use statement word order."},
{"id":350,"level":"A1","t":"Questions","q":"You haven't called yet, ___?","a":["have you","haven't you","did you"],"c":0,"e":"A negative present-perfect statement takes a positive question tag."},
{"id":351,"level":"B1","t":"Questions","q":"You haven't met her, ___?","a":["haven't you","did you","have you"],"c":2,"e":"A negative present-perfect statement takes a positive question tag."},
{"id":352,"level":"A2","t":"Questions","q":"You haven't finished, ___?","a":["did you","have you","haven't you"],"c":1,"e":"A negative present-perfect statement takes a positive question tag."},
{"id":353,"level":"A1","t":"Questions","q":"You haven't seen it, ___?","a":["have you","haven't you","did you"],"c":0,"e":"A negative present-perfect statement takes a positive question tag."},
{"id":354,"level":"A2","t":"Questions","q":"You haven't forgotten, ___?","a":["haven't you","did you","have you"],"c":2,"e":"A negative present-perfect statement takes a positive question tag."},
{"id":355,"level":"B1","t":"Prepositions","q":"The train leaves ___ six.","a":["at","in","on"],"c":0,"e":"Use at for specific clock times."},
{"id":356,"level":"A2","t":"Prepositions","q":"Meet me ___ noon.","a":["in","on","at"],"c":2,"e":"Use at for specific clock times."},
{"id":357,"level":"A2","t":"Prepositions","q":"The show starts ___ nine.","a":["on","at","in"],"c":1,"e":"Use at for specific clock times."},
{"id":358,"level":"A1","t":"Prepositions","q":"The shop closes ___ five.","a":["at","in","on"],"c":0,"e":"Use at for specific clock times."},
{"id":359,"level":"A2","t":"Prepositions","q":"The meeting begins ___ eleven.","a":["in","on","at"],"c":2,"e":"Use at for specific clock times."},
{"id":360,"level":"A2","t":"Prepositions","q":"We leave ___ Tuesday.","a":["in","at","on"],"c":2,"e":"Use on with days and dates."},
{"id":361,"level":"A2","t":"Prepositions","q":"Her birthday is ___ Friday.","a":["at","on","in"],"c":1,"e":"Use on with days and dates."},
{"id":362,"level":"A1","t":"Prepositions","q":"The event is ___ 12 June.","a":["on","in","at"],"c":0,"e":"Use on with days and dates."},
{"id":363,"level":"A2","t":"Prepositions","q":"I'll call ___ Sunday.","a":["in","at","on"],"c":2,"e":"Use on with days and dates."},
{"id":364,"level":"B1","t":"Prepositions","q":"The class starts ___ Monday.","a":["at","on","in"],"c":1,"e":"Use on with days and dates."},
{"id":365,"level":"A2","t":"Prepositions","q":"They married ___ 2019.","a":["at","in","on"],"c":1,"e":"Use in for months, years and seasons."},
{"id":366,"level":"A1","t":"Prepositions","q":"The festival is ___ August.","a":["in","on","at"],"c":0,"e":"Use in for months, years and seasons."},
{"id":367,"level":"A2","t":"Prepositions","q":"We moved ___ spring.","a":["on","at","in"],"c":2,"e":"Use in for months, years and seasons."},
{"id":368,"level":"B1","t":"Prepositions","q":"She graduated ___ 2022.","a":["at","in","on"],"c":1,"e":"Use in for months, years and seasons."},
{"id":369,"level":"A1","t":"Prepositions","q":"It usually snows ___ January.","a":["in","on","at"],"c":0,"e":"Use in for months, years and seasons."},
{"id":370,"level":"A1","t":"Prepositions","q":"I've waited ___ two hours.","a":["for","since","during"],"c":0,"e":"Use for with a length of time."},
{"id":371,"level":"A2","t":"Prepositions","q":"They stayed ___ a week.","a":["since","during","for"],"c":2,"e":"Use for with a length of time."},
{"id":372,"level":"B1","t":"Prepositions","q":"We've known her ___ years.","a":["during","for","since"],"c":1,"e":"Use for with a length of time."},
{"id":373,"level":"A1","t":"Prepositions","q":"He studied ___ three months.","a":["for","since","during"],"c":0,"e":"Use for with a length of time."},
{"id":374,"level":"A2","t":"Prepositions","q":"She slept ___ ten hours.","a":["since","during","for"],"c":2,"e":"Use for with a length of time."},
{"id":375,"level":"A2","t":"Prepositions","q":"I've lived here ___ 2020.","a":["for","during","since"],"c":2,"e":"Use since with a starting point in time."},
{"id":376,"level":"B1","t":"Prepositions","q":"She's worked there ___ May.","a":["during","since","for"],"c":1,"e":"Use since with a starting point in time."},
{"id":377,"level":"A1","t":"Prepositions","q":"We haven't met ___ Monday.","a":["since","for","during"],"c":0,"e":"Use since with a starting point in time."},
{"id":378,"level":"A2","t":"Prepositions","q":"He's been awake ___ dawn.","a":["for","during","since"],"c":2,"e":"Use since with a starting point in time."},
{"id":379,"level":"A2","t":"Prepositions","q":"They've known each other ___ childhood.","a":["during","since","for"],"c":1,"e":"Use since with a starting point in time."},
{"id":380,"level":"B1","t":"Prepositions","q":"We're going ___ Berlin.","a":["in","to","at"],"c":1,"e":"Use to to indicate movement toward a destination."},
{"id":381,"level":"A1","t":"Prepositions","q":"She walked ___ the station.","a":["to","at","in"],"c":0,"e":"Use to to indicate movement toward a destination."},
{"id":382,"level":"A2","t":"Prepositions","q":"He drove ___ work.","a":["at","in","to"],"c":2,"e":"Use to to indicate movement toward a destination."},
{"id":383,"level":"A2","t":"Prepositions","q":"They flew ___ Rome.","a":["in","to","at"],"c":1,"e":"Use to to indicate movement toward a destination."},
{"id":384,"level":"A1","t":"Prepositions","q":"I ran ___ the bus stop.","a":["to","at","in"],"c":0,"e":"Use to to indicate movement toward a destination."},
{"id":385,"level":"A1","t":"Prepositions","q":"We arrived ___ the airport.","a":["at","to","on"],"c":0,"e":"Arrive at is used for a specific place."},
{"id":386,"level":"A2","t":"Prepositions","q":"She arrived ___ the hotel.","a":["to","on","at"],"c":2,"e":"Arrive at is used for a specific place."},
{"id":387,"level":"A2","t":"Prepositions","q":"They arrived ___ the station.","a":["on","at","to"],"c":1,"e":"Arrive at is used for a specific place."},
{"id":388,"level":"A1","t":"Prepositions","q":"He arrived ___ the office.","a":["at","to","on"],"c":0,"e":"Arrive at is used for a specific place."},
{"id":389,"level":"B1","t":"Prepositions","q":"I arrived ___ the venue.","a":["to","on","at"],"c":2,"e":"Arrive at is used for a specific place."},
{"id":390,"level":"A2","t":"Prepositions","q":"I'm interested ___ science.","a":["at","on","in"],"c":2,"e":"Interested in is the correct expression."},
{"id":391,"level":"A2","t":"Prepositions","q":"She's interested ___ painting.","a":["on","in","at"],"c":1,"e":"Interested in is the correct expression."},
{"id":392,"level":"A1","t":"Prepositions","q":"They're interested ___ politics.","a":["in","at","on"],"c":0,"e":"Interested in is the correct expression."},
{"id":393,"level":"B1","t":"Prepositions","q":"He's interested ___ history.","a":["at","on","in"],"c":2,"e":"Interested in is the correct expression."},
{"id":394,"level":"A2","t":"Prepositions","q":"We're interested ___ photography.","a":["on","in","at"],"c":1,"e":"Interested in is the correct expression."},
{"id":395,"level":"A2","t":"Prepositions","q":"She's afraid ___ spiders.","a":["with","of","from"],"c":1,"e":"Afraid of is the standard expression."},
{"id":396,"level":"A1","t":"Prepositions","q":"He's afraid ___ heights.","a":["of","from","with"],"c":0,"e":"Afraid of is the standard expression."},
{"id":397,"level":"B1","t":"Prepositions","q":"They're afraid ___ flying.","a":["from","with","of"],"c":2,"e":"Afraid of is the standard expression."},
{"id":398,"level":"A2","t":"Prepositions","q":"I'm afraid ___ snakes.","a":["with","of","from"],"c":1,"e":"Afraid of is the standard expression."},
{"id":399,"level":"A1","t":"Prepositions","q":"The child is afraid ___ the dark.","a":["of","from","with"],"c":0,"e":"Afraid of is the standard expression."},
{"id":400,"level":"A1","t":"Prepositions","q":"It depends ___ the weather.","a":["on","at","of"],"c":0,"e":"Depend on means rely on."},
{"id":401,"level":"B1","t":"Prepositions","q":"She depends ___ her family.","a":["at","of","on"],"c":2,"e":"Depend on means rely on."},
{"id":402,"level":"A2","t":"Prepositions","q":"We depend ___ public transport.","a":["of","on","at"],"c":1,"e":"Depend on means rely on."},
{"id":403,"level":"A1","t":"Prepositions","q":"The result depends ___ timing.","a":["on","at","of"],"c":0,"e":"Depend on means rely on."},
{"id":404,"level":"A2","t":"Prepositions","q":"The team depends ___ volunteers.","a":["at","of","on"],"c":2,"e":"Depend on means rely on."},
{"id":405,"level":"B1","t":"Quantifiers","q":"How ___ books are there?","a":["many","much","little"],"c":0,"e":"Use many with countable plural nouns."},
{"id":406,"level":"A2","t":"Quantifiers","q":"How ___ tickets remain?","a":["much","little","many"],"c":2,"e":"Use many with countable plural nouns."},
{"id":407,"level":"A2","t":"Quantifiers","q":"How ___ people came?","a":["little","many","much"],"c":1,"e":"Use many with countable plural nouns."},
{"id":408,"level":"A1","t":"Quantifiers","q":"How ___ chairs do we need?","a":["many","much","little"],"c":0,"e":"Use many with countable plural nouns."},
{"id":409,"level":"A2","t":"Quantifiers","q":"How ___ languages do you speak?","a":["much","little","many"],"c":2,"e":"Use many with countable plural nouns."},
{"id":410,"level":"A2","t":"Quantifiers","q":"How ___ water is left?","a":["many","few","much"],"c":2,"e":"Use much with uncountable nouns."},
{"id":411,"level":"A2","t":"Quantifiers","q":"How ___ time do we have?","a":["few","much","many"],"c":1,"e":"Use much with uncountable nouns."},
{"id":412,"level":"A1","t":"Quantifiers","q":"How ___ sugar is needed?","a":["much","many","few"],"c":0,"e":"Use much with uncountable nouns."},
{"id":413,"level":"A2","t":"Quantifiers","q":"How ___ money was spent?","a":["many","few","much"],"c":2,"e":"Use much with uncountable nouns."},
{"id":414,"level":"B1","t":"Quantifiers","q":"How ___ advice did she give?","a":["few","much","many"],"c":1,"e":"Use much with uncountable nouns."},
{"id":415,"level":"A2","t":"Quantifiers","q":"I bought ___ apples.","a":["much","a few","a little"],"c":1,"e":"A few means a small number of countable items."},
{"id":416,"level":"A1","t":"Quantifiers","q":"She invited ___ friends.","a":["a few","a little","much"],"c":0,"e":"A few means a small number of countable items."},
{"id":417,"level":"A2","t":"Quantifiers","q":"We have ___ spare chairs.","a":["a little","much","a few"],"c":2,"e":"A few means a small number of countable items."},
{"id":418,"level":"B1","t":"Quantifiers","q":"He made ___ changes.","a":["much","a few","a little"],"c":1,"e":"A few means a small number of countable items."},
{"id":419,"level":"A1","t":"Quantifiers","q":"They planted ___ trees.","a":["a few","a little","much"],"c":0,"e":"A few means a small number of countable items."},
{"id":420,"level":"A1","t":"Quantifiers","q":"Add ___ salt.","a":["a little","a few","many"],"c":0,"e":"A little means a small amount of something uncountable."},
{"id":421,"level":"A2","t":"Quantifiers","q":"I need ___ help.","a":["a few","many","a little"],"c":2,"e":"A little means a small amount of something uncountable."},
{"id":422,"level":"B1","t":"Quantifiers","q":"She drank ___ water.","a":["many","a little","a few"],"c":1,"e":"A little means a small amount of something uncountable."},
{"id":423,"level":"A1","t":"Quantifiers","q":"There's ___ time left.","a":["a little","a few","many"],"c":0,"e":"A little means a small amount of something uncountable."},
{"id":424,"level":"A2","t":"Quantifiers","q":"He showed ___ patience.","a":["a few","many","a little"],"c":2,"e":"A little means a small amount of something uncountable."},
{"id":425,"level":"A2","t":"Quantifiers","q":"We made ___ mistakes today.","a":["less","little","fewer"],"c":2,"e":"Use fewer with countable plural nouns."},
{"id":426,"level":"B1","t":"Quantifiers","q":"There are ___ buses now.","a":["little","fewer","less"],"c":1,"e":"Use fewer with countable plural nouns."},
{"id":427,"level":"A1","t":"Quantifiers","q":"She received ___ emails.","a":["fewer","less","little"],"c":0,"e":"Use fewer with countable plural nouns."},
{"id":428,"level":"A2","t":"Quantifiers","q":"They sold ___ tickets.","a":["less","little","fewer"],"c":2,"e":"Use fewer with countable plural nouns."},
{"id":429,"level":"A2","t":"Quantifiers","q":"The team has ___ members.","a":["little","fewer","less"],"c":1,"e":"Use fewer with countable plural nouns."},
{"id":430,"level":"B1","t":"Quantifiers","q":"We need ___ noise.","a":["many","less","fewer"],"c":1,"e":"Use less with uncountable nouns."},
{"id":431,"level":"A1","t":"Quantifiers","q":"She uses ___ sugar.","a":["less","fewer","many"],"c":0,"e":"Use less with uncountable nouns."},
{"id":432,"level":"A2","t":"Quantifiers","q":"He has ___ free time.","a":["fewer","many","less"],"c":2,"e":"Use less with uncountable nouns."},
{"id":433,"level":"A2","t":"Quantifiers","q":"This requires ___ effort.","a":["many","less","fewer"],"c":1,"e":"Use less with uncountable nouns."},
{"id":434,"level":"A1","t":"Quantifiers","q":"The recipe needs ___ oil.","a":["less","fewer","many"],"c":0,"e":"Use less with uncountable nouns."},
{"id":435,"level":"A1","t":"Quantifiers","q":"I bought ___ bread.","a":["some","any","many"],"c":0,"e":"Some is usual in affirmative statements."},
{"id":436,"level":"A2","t":"Quantifiers","q":"She has ___ good news.","a":["any","many","some"],"c":2,"e":"Some is usual in affirmative statements."},
{"id":437,"level":"A2","t":"Quantifiers","q":"We found ___ evidence.","a":["many","some","any"],"c":1,"e":"Some is usual in affirmative statements."},
{"id":438,"level":"A1","t":"Quantifiers","q":"He brought ___ coffee.","a":["some","any","many"],"c":0,"e":"Some is usual in affirmative statements."},
{"id":439,"level":"B1","t":"Quantifiers","q":"They offered ___ help.","a":["any","many","some"],"c":2,"e":"Some is usual in affirmative statements."},
{"id":440,"level":"A2","t":"Quantifiers","q":"I don't have ___ cash.","a":["some","few","any"],"c":2,"e":"Any is common in negative statements."},
{"id":441,"level":"A2","t":"Quantifiers","q":"She didn't bring ___ luggage.","a":["few","any","some"],"c":1,"e":"Any is common in negative statements."},
{"id":442,"level":"A1","t":"Quantifiers","q":"We haven't received ___ news.","a":["any","some","few"],"c":0,"e":"Any is common in negative statements."},
{"id":443,"level":"B1","t":"Quantifiers","q":"He doesn't need ___ help.","a":["some","few","any"],"c":2,"e":"Any is common in negative statements."},
{"id":444,"level":"A2","t":"Quantifiers","q":"There isn't ___ milk.","a":["few","any","some"],"c":1,"e":"Any is common in negative statements."},
{"id":445,"level":"A2","t":"Quantifiers","q":"___ student received a certificate.","a":["much","each","many"],"c":1,"e":"Each refers to members individually."},
{"id":446,"level":"A1","t":"Quantifiers","q":"___ room has a window.","a":["each","many","much"],"c":0,"e":"Each refers to members individually."},
{"id":447,"level":"B1","t":"Quantifiers","q":"___ ticket has a number.","a":["many","much","each"],"c":2,"e":"Each refers to members individually."},
{"id":448,"level":"A2","t":"Quantifiers","q":"___ child got a gift.","a":["much","each","many"],"c":1,"e":"Each refers to members individually."},
{"id":449,"level":"A1","t":"Quantifiers","q":"___ answer deserves attention.","a":["each","many","much"],"c":0,"e":"Each refers to members individually."},
{"id":450,"level":"A1","t":"Quantifiers","q":"___ sisters are doctors.","a":["both","either","neither"],"c":0,"e":"Both means the two together."},
{"id":451,"level":"B1","t":"Quantifiers","q":"___ doors were open.","a":["either","neither","both"],"c":2,"e":"Both means the two together."},
{"id":452,"level":"A2","t":"Quantifiers","q":"___ answers are correct.","a":["neither","both","either"],"c":1,"e":"Both means the two together."},
{"id":453,"level":"A1","t":"Quantifiers","q":"___ teams played well.","a":["both","either","neither"],"c":0,"e":"Both means the two together."},
{"id":454,"level":"A2","t":"Quantifiers","q":"___ children were asleep.","a":["either","neither","both"],"c":2,"e":"Both means the two together."},
{"id":455,"level":"B1","t":"Sentence structure","q":"This route is shorter ___ that one.","a":["than","then","that"],"c":0,"e":"Use than after a comparative adjective."},
{"id":456,"level":"A2","t":"Sentence structure","q":"She's older ___ me.","a":["then","that","than"],"c":2,"e":"Use than after a comparative adjective."},
{"id":457,"level":"A2","t":"Sentence structure","q":"The blue bag is heavier ___ the red one.","a":["that","than","then"],"c":1,"e":"Use than after a comparative adjective."},
{"id":458,"level":"A1","t":"Sentence structure","q":"Today is warmer ___ yesterday.","a":["than","then","that"],"c":0,"e":"Use than after a comparative adjective."},
{"id":459,"level":"A2","t":"Sentence structure","q":"This film is better ___ the sequel.","a":["then","that","than"],"c":2,"e":"Use than after a comparative adjective."},
{"id":460,"level":"A2","t":"Sentence structure","q":"We stayed home ___ it was raining.","a":["although","but","because"],"c":2,"e":"Because introduces a reason."},
{"id":461,"level":"A2","t":"Sentence structure","q":"She smiled ___ she was happy.","a":["but","because","although"],"c":1,"e":"Because introduces a reason."},
{"id":462,"level":"A1","t":"Sentence structure","q":"He left early ___ he felt ill.","a":["because","although","but"],"c":0,"e":"Because introduces a reason."},
{"id":463,"level":"A2","t":"Sentence structure","q":"They celebrated ___ they won.","a":["although","but","because"],"c":2,"e":"Because introduces a reason."},
{"id":464,"level":"B1","t":"Sentence structure","q":"I called ___ I needed help.","a":["but","because","although"],"c":1,"e":"Because introduces a reason."},
{"id":465,"level":"A2","t":"Sentence structure","q":"___ it was cold, we went swimming.","a":["so","although","because"],"c":1,"e":"Although introduces a contrast."},
{"id":466,"level":"A1","t":"Sentence structure","q":"___ she was tired, she continued.","a":["although","because","so"],"c":0,"e":"Although introduces a contrast."},
{"id":467,"level":"A2","t":"Sentence structure","q":"___ it rained, they played.","a":["because","so","although"],"c":2,"e":"Although introduces a contrast."},
{"id":468,"level":"B1","t":"Sentence structure","q":"___ he was nervous, he spoke clearly.","a":["so","although","because"],"c":1,"e":"Although introduces a contrast."},
{"id":469,"level":"A1","t":"Sentence structure","q":"___ the road was long, we enjoyed it.","a":["although","because","so"],"c":0,"e":"Although introduces a contrast."},
{"id":470,"level":"A1","t":"Sentence structure","q":"It was late, ___ we went home.","a":["so","because","although"],"c":0,"e":"So introduces a result."},
{"id":471,"level":"A2","t":"Sentence structure","q":"She was hungry, ___ she ate.","a":["because","although","so"],"c":2,"e":"So introduces a result."},
{"id":472,"level":"B1","t":"Sentence structure","q":"The train was canceled, ___ we walked.","a":["although","so","because"],"c":1,"e":"So introduces a result."},
{"id":473,"level":"A1","t":"Sentence structure","q":"He studied hard, ___ he passed.","a":["so","because","although"],"c":0,"e":"So introduces a result."},
{"id":474,"level":"A2","t":"Sentence structure","q":"The shop was closed, ___ we returned.","a":["because","although","so"],"c":2,"e":"So introduces a result."},
{"id":475,"level":"A2","t":"Sentence structure","q":"She sings ___ dances.","a":["but","because","and"],"c":2,"e":"And joins compatible ideas."},
{"id":476,"level":"B1","t":"Sentence structure","q":"We bought bread ___ milk.","a":["because","and","but"],"c":1,"e":"And joins compatible ideas."},
{"id":477,"level":"A1","t":"Sentence structure","q":"He smiled ___ waved.","a":["and","but","because"],"c":0,"e":"And joins compatible ideas."},
{"id":478,"level":"A2","t":"Sentence structure","q":"They laughed ___ talked.","a":["but","because","and"],"c":2,"e":"And joins compatible ideas."},
{"id":479,"level":"A2","t":"Sentence structure","q":"I washed ___ dried the dishes.","a":["because","and","but"],"c":1,"e":"And joins compatible ideas."},
{"id":480,"level":"B1","t":"Sentence structure","q":"I called, ___ nobody answered.","a":["so","but","and"],"c":1,"e":"But joins contrasting ideas."},
{"id":481,"level":"A1","t":"Sentence structure","q":"He is young, ___ very experienced.","a":["but","and","so"],"c":0,"e":"But joins contrasting ideas."},
{"id":482,"level":"A2","t":"Sentence structure","q":"The task is difficult, ___ possible.","a":["and","so","but"],"c":2,"e":"But joins contrasting ideas."},
{"id":483,"level":"A2","t":"Sentence structure","q":"She tried, ___ didn't succeed.","a":["so","but","and"],"c":1,"e":"But joins contrasting ideas."},
{"id":484,"level":"A1","t":"Sentence structure","q":"It's expensive, ___ worth it.","a":["but","and","so"],"c":0,"e":"But joins contrasting ideas."},
{"id":485,"level":"A1","t":"Sentence structure","q":"The phone ___ I bought is broken.","a":["that","who","whose"],"c":0,"e":"That can introduce a relative clause about a thing."},
{"id":486,"level":"A2","t":"Sentence structure","q":"The film ___ we saw was funny.","a":["who","whose","that"],"c":2,"e":"That can introduce a relative clause about a thing."},
{"id":487,"level":"A2","t":"Sentence structure","q":"The cake ___ she baked was delicious.","a":["whose","that","who"],"c":1,"e":"That can introduce a relative clause about a thing."},
{"id":488,"level":"A1","t":"Sentence structure","q":"The book ___ he recommended is excellent.","a":["that","who","whose"],"c":0,"e":"That can introduce a relative clause about a thing."},
{"id":489,"level":"B1","t":"Sentence structure","q":"The car ___ they rented was small.","a":["who","whose","that"],"c":2,"e":"That can introduce a relative clause about a thing."},
{"id":490,"level":"A2","t":"Sentence structure","q":"The singer ___ performed was brilliant.","a":["which","where","who"],"c":2,"e":"Who introduces a relative clause about a person."},
{"id":491,"level":"A2","t":"Sentence structure","q":"The man ___ called is my uncle.","a":["where","who","which"],"c":1,"e":"Who introduces a relative clause about a person."},
{"id":492,"level":"A1","t":"Sentence structure","q":"The woman ___ lives next door is kind.","a":["who","which","where"],"c":0,"e":"Who introduces a relative clause about a person."},
{"id":493,"level":"B1","t":"Sentence structure","q":"The teacher ___ helped me retired.","a":["which","where","who"],"c":2,"e":"Who introduces a relative clause about a person."},
{"id":494,"level":"A2","t":"Sentence structure","q":"The chef ___ cooked dinner was friendly.","a":["where","who","which"],"c":1,"e":"Who introduces a relative clause about a person."},
{"id":495,"level":"A2","t":"Sentence structure","q":"If I ___ rich, I'd travel.","a":["are","were","was"],"c":1,"e":"Use were in the conventional hypothetical 'if I were' construction."},
{"id":496,"level":"A1","t":"Sentence structure","q":"If I ___ taller, I'd reach it.","a":["were","was","are"],"c":0,"e":"Use were in the conventional hypothetical 'if I were' construction."},
{"id":497,"level":"B1","t":"Sentence structure","q":"If I ___ you, I'd apologize.","a":["was","are","were"],"c":2,"e":"Use were in the conventional hypothetical 'if I were' construction."},
{"id":498,"level":"A2","t":"Sentence structure","q":"If I ___ younger, I'd join.","a":["are","were","was"],"c":1,"e":"Use were in the conventional hypothetical 'if I were' construction."},
{"id":499,"level":"A1","t":"Sentence structure","q":"If I ___ free, I'd come.","a":["were","was","are"],"c":0,"e":"Use were in the conventional hypothetical 'if I were' construction."},
{"id":500,"level":"A1","t":"Sentence structure","q":"I wish I ___ more time.","a":["had","have","will have"],"c":0,"e":"Use a past form after wish to describe an unreal present situation."},
{"id":501,"level":"B1","t":"Sentence structure","q":"She wishes she ___ a car.","a":["have","will have","had"],"c":2,"e":"Use a past form after wish to describe an unreal present situation."},
{"id":502,"level":"A2","t":"Sentence structure","q":"We wish we ___ a garden.","a":["will have","had","have"],"c":1,"e":"Use a past form after wish to describe an unreal present situation."},
{"id":503,"level":"A1","t":"Sentence structure","q":"He wishes he ___ better eyesight.","a":["had","have","will have"],"c":0,"e":"Use a past form after wish to describe an unreal present situation."},
{"id":504,"level":"A2","t":"Sentence structure","q":"They wish they ___ more space.","a":["have","will have","had"],"c":2,"e":"Use a past form after wish to describe an unreal present situation."},
{"id":505,"level":"B1","t":"Common mistakes","q":"I need some ___.","a":["advice","advices","an advice"],"c":0,"e":"Advice is an uncountable noun."},
{"id":506,"level":"A2","t":"Common mistakes","q":"She gave useful ___.","a":["advices","an advice","advice"],"c":2,"e":"Advice is an uncountable noun."},
{"id":507,"level":"A2","t":"Common mistakes","q":"His ___ was helpful.","a":["an advice","advice","advices"],"c":1,"e":"Advice is an uncountable noun."},
{"id":508,"level":"A1","t":"Common mistakes","q":"Can I ask for ___?","a":["advice","advices","an advice"],"c":0,"e":"Advice is an uncountable noun."},
{"id":509,"level":"A2","t":"Common mistakes","q":"We appreciated their ___.","a":["advices","an advice","advice"],"c":2,"e":"Advice is an uncountable noun."},
{"id":510,"level":"A2","t":"Common mistakes","q":"I need more ___.","a":["informations","an information","information"],"c":2,"e":"Information is uncountable in English."},
{"id":511,"level":"A2","t":"Common mistakes","q":"She shared useful ___.","a":["an information","information","informations"],"c":1,"e":"Information is uncountable in English."},
{"id":512,"level":"A1","t":"Common mistakes","q":"The website provides ___.","a":["information","informations","an information"],"c":0,"e":"Information is uncountable in English."},
{"id":513,"level":"A2","t":"Common mistakes","q":"We gathered new ___.","a":["informations","an information","information"],"c":2,"e":"Information is uncountable in English."},
{"id":514,"level":"B1","t":"Common mistakes","q":"He requested additional ___.","a":["an information","information","informations"],"c":1,"e":"Information is uncountable in English."},
{"id":515,"level":"A2","t":"Common mistakes","q":"They bought new ___.","a":["a furnitures","furniture","furnitures"],"c":1,"e":"Furniture is uncountable in English."},
{"id":516,"level":"A1","t":"Common mistakes","q":"The shop sells ___.","a":["furniture","furnitures","a furnitures"],"c":0,"e":"Furniture is uncountable in English."},
{"id":517,"level":"A2","t":"Common mistakes","q":"Our ___ arrived.","a":["furnitures","a furnitures","furniture"],"c":2,"e":"Furniture is uncountable in English."},
{"id":518,"level":"B1","t":"Common mistakes","q":"We moved the ___ upstairs.","a":["a furnitures","furniture","furnitures"],"c":1,"e":"Furniture is uncountable in English."},
{"id":519,"level":"A1","t":"Common mistakes","q":"The apartment has little ___.","a":["furniture","furnitures","a furnitures"],"c":0,"e":"Furniture is uncountable in English."},
{"id":520,"level":"A1","t":"Common mistakes","q":"I finished my ___.","a":["homework","homeworks","a homeworks"],"c":0,"e":"Homework is uncountable in English."},
{"id":521,"level":"A2","t":"Common mistakes","q":"She has too much ___.","a":["homeworks","a homeworks","homework"],"c":2,"e":"Homework is uncountable in English."},
{"id":522,"level":"B1","t":"Common mistakes","q":"We forgot our ___.","a":["a homeworks","homework","homeworks"],"c":1,"e":"Homework is uncountable in English."},
{"id":523,"level":"A1","t":"Common mistakes","q":"He submitted his ___.","a":["homework","homeworks","a homeworks"],"c":0,"e":"Homework is uncountable in English."},
{"id":524,"level":"A2","t":"Common mistakes","q":"The teacher assigned ___.","a":["homeworks","a homeworks","homework"],"c":2,"e":"Homework is uncountable in English."},
{"id":525,"level":"A2","t":"Common mistakes","q":"We need to ___ a decision.","a":["do","take","make"],"c":2,"e":"Make a decision is the standard collocation."},
{"id":526,"level":"B1","t":"Common mistakes","q":"She must ___ a decision.","a":["take","make","do"],"c":1,"e":"Make a decision is the standard collocation."},
{"id":527,"level":"A1","t":"Common mistakes","q":"It's hard to ___ a decision.","a":["make","do","take"],"c":0,"e":"Make a decision is the standard collocation."},
{"id":528,"level":"A2","t":"Common mistakes","q":"They will ___ a decision today.","a":["do","take","make"],"c":2,"e":"Make a decision is the standard collocation."},
{"id":529,"level":"A2","t":"Common mistakes","q":"He refused to ___ a decision.","a":["take","make","do"],"c":1,"e":"Make a decision is the standard collocation."},
{"id":530,"level":"B1","t":"Common mistakes","q":"I need to ___ my homework.","a":["take","do","make"],"c":1,"e":"Do homework is the standard collocation."},
{"id":531,"level":"A1","t":"Common mistakes","q":"She will ___ her homework.","a":["do","make","take"],"c":0,"e":"Do homework is the standard collocation."},
{"id":532,"level":"A2","t":"Common mistakes","q":"They always ___ their homework.","a":["make","take","do"],"c":2,"e":"Do homework is the standard collocation."},
{"id":533,"level":"A2","t":"Common mistakes","q":"He forgot to ___ his homework.","a":["take","do","make"],"c":1,"e":"Do homework is the standard collocation."},
{"id":534,"level":"A1","t":"Common mistakes","q":"We should ___ our homework.","a":["do","make","take"],"c":0,"e":"Do homework is the standard collocation."},
{"id":535,"level":"A1","t":"Common mistakes","q":"She is married ___ a musician.","a":["to","with","at"],"c":0,"e":"Married to is the correct expression."},
{"id":536,"level":"A2","t":"Common mistakes","q":"He got married ___ his colleague.","a":["with","at","to"],"c":2,"e":"Married to is the correct expression."},
{"id":537,"level":"A2","t":"Common mistakes","q":"They've been married ___ each other for years.","a":["at","to","with"],"c":1,"e":"Married to is the correct expression."},
{"id":538,"level":"A1","t":"Common mistakes","q":"My aunt is married ___ a doctor.","a":["to","with","at"],"c":0,"e":"Married to is the correct expression."},
{"id":539,"level":"B1","t":"Common mistakes","q":"She was once married ___ an actor.","a":["with","at","to"],"c":2,"e":"Married to is the correct expression."},
{"id":540,"level":"A2","t":"Common mistakes","q":"I look forward to ___ you.","a":["see","saw","seeing"],"c":2,"e":"Look forward to takes the -ing form."},
{"id":541,"level":"A2","t":"Common mistakes","q":"We're looking forward to ___ the results.","a":["saw","seeing","see"],"c":1,"e":"Look forward to takes the -ing form."},
{"id":542,"level":"A1","t":"Common mistakes","q":"She looks forward to ___ her friends.","a":["seeing","see","saw"],"c":0,"e":"Look forward to takes the -ing form."},
{"id":543,"level":"B1","t":"Common mistakes","q":"He is looking forward to ___ the film.","a":["see","saw","seeing"],"c":2,"e":"Look forward to takes the -ing form."},
{"id":544,"level":"A2","t":"Common mistakes","q":"They're looking forward to ___ the city.","a":["saw","seeing","see"],"c":1,"e":"Look forward to takes the -ing form."},
{"id":545,"level":"A2","t":"Common mistakes","q":"I'm ___ in history.","a":["interest","interested","interesting"],"c":1,"e":"Use interested for how a person feels."},
{"id":546,"level":"A1","t":"Common mistakes","q":"She's ___ in photography.","a":["interested","interesting","interest"],"c":0,"e":"Use interested for how a person feels."},
{"id":547,"level":"B1","t":"Common mistakes","q":"We're ___ in learning.","a":["interesting","interest","interested"],"c":2,"e":"Use interested for how a person feels."},
{"id":548,"level":"A2","t":"Common mistakes","q":"He's ___ in politics.","a":["interest","interested","interesting"],"c":1,"e":"Use interested for how a person feels."},
{"id":549,"level":"A1","t":"Common mistakes","q":"They're ___ in art.","a":["interested","interesting","interest"],"c":0,"e":"Use interested for how a person feels."},
{"id":550,"level":"A1","t":"Common mistakes","q":"Can I ___ your pen?","a":["borrow","lend","loaned"],"c":0,"e":"Borrow means take temporarily from someone else."},
{"id":551,"level":"B1","t":"Common mistakes","q":"May I ___ this book?","a":["lend","loaned","borrow"],"c":2,"e":"Borrow means take temporarily from someone else."},
{"id":552,"level":"A2","t":"Common mistakes","q":"Could we ___ your car?","a":["loaned","borrow","lend"],"c":1,"e":"Borrow means take temporarily from someone else."},
{"id":553,"level":"A1","t":"Common mistakes","q":"Can she ___ my notes?","a":["borrow","lend","loaned"],"c":0,"e":"Borrow means take temporarily from someone else."},
{"id":554,"level":"A2","t":"Common mistakes","q":"I'd like to ___ a charger.","a":["lend","loaned","borrow"],"c":2,"e":"Borrow means take temporarily from someone else."}
];
