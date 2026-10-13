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
{"id":154,"level":"A2","t":"Common mistakes","q":"The furniture ___ new.","a":["is","are","were"],"c":0,"e":"Furniture is an uncountable singular noun."}
];
