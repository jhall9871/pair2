const foodTypes = {
  meat: {
    beef: {
      name: "Red Meat",
      iconUrl: "cow",
      subtypes: ["beef", "lamb", "venison"],
      pairingArray: [2, 1, 0, 0, 0, 0, 0, 0, 0],
    },
    bacon: {
      name: "Cured Meat",
      iconUrl: "bacon",
      subtypes: ["salami", "proscuitto", "bresaola", "bacon"],
      pairingArray: [1, 1, 2, 1, 0, 0, 1, 2, 1],
    },
    pork: {
      name: "Pork",
      iconUrl: "pig",
      subtypes: ["roast", "tenderloin", "pork chop"],
      pairingArray: [1, 2, 0, 1, 0, 0, 1, 0, 0],
    },
    chicken: {
      name: "Poultry",
      iconUrl: "chicken",
      subtypes: ["chicken", "duck", "turkey"],
      pairingArray: [0, 1, 2, 1, 2, 1, 1, 0, 0],
    },
    oyster: {
      name: "Mollusk",
      iconUrl: "clam",
      subtypes: ["oyster", "mussel", "clam"],
      pairingArray: [0, 0, 0, 0, 0, 1, 2, 0, 0],
    },
    fish: {
      name: "Fish",
      iconUrl: "fish",
      subtypes: ["tuna", "cod", "trout", "bass"],
      pairingArray: [0, 0, 0, 0, 1, 2, 1, 0, 0],
    },
    prawn: {
      name: "Lobster & Shellfish",
      iconUrl: "lobster",
      subtypes: ["prawn", "crab", "langoustine"],
      pairingArray: [0, 0, 0, 1, 2, 1, 0, 1, 0],
    },
  },
  preparation: {
    grilled: {
      name: "Grilled or Barbecued",
      iconUrl: "grill",
      pairingArray: [2, 1, 1, 0, 0, 0, 1, 1, 0],
    },
    sauteed: {
      name: "Sauteed or Fried",
      iconUrl: "spatula",
      pairingArray: [0, 0, 2, 1, 1, 1, 1, 0, 0],
    },
    smoked: {
      name: "Smoked",
      iconUrl: "smoker",
      pairingArray: [1, 2, 1, 1, 0, 0, 1, 0, 1],
    },
    roasted: {
      name: "Roasted",
      iconUrl: "oven",
      pairingArray: [2, 1, 1, 1, 0, 0, 0, 1, 0],
    },
    steamed: {
      name: "Steamed or Poached",
      iconUrl: "steamer",
      pairingArray: [0, 0, 0, 0, 1, 2, 1, 1, 0],
    },
  },

  dairy: {
    softcheesecream: {
      name: "Soft Cheese & Cream",
      iconUrl: "cheese",
      subtypes: ["brie", "mascarpone", "creme fraiche"],
      pairingArray: [0, 1, 2, 1, 2, 1, 1, 1, 1],
    },
    pungentcheese: {
      name: "Pungent Cheese",
      iconUrl: "smellycheese",
      subtypes: ["bleu", "gorgonzola", "stilton", "roquefort"],
      pairingArray: [1, 2, 0, 1, 0, 1, 1, 1, 2],
    },
    hardcheese: {
      name: "Hard Cheese",
      iconUrl: "cheese2",
      subtypes: ["cheddar", "pecorino", "manchego", "asiago", "parmesan"],
      pairingArray: [2, 1, 0, 1, 1, 0, 1, 0, 0],
    },
  },
  vegetable: {
    alliums: {
      name: "Alliums",
      iconUrl: "onion",
      subtypes: ["onion", "shallot", "garlic", "scallion"],
      pairingArray: [1, 2, 1, 1, 1, 1, 1, 1, 0],
    },
    greenvegetables: {
      name: "Green Vegetables",
      iconUrl: "lettuce",
      subtypes: ["green bean", "kale", "lettuce"],
      pairingArray: [0, 0, 0, 0, 0, 2, 1, 0, 0],
    },
    rootvegandsquash: {
      name: "Root Vegetables & Squash",
      iconUrl: "pumpkin",
      subtypes: ["turnip", "butternut", "pumpkin", "delicata", "carrot"],
      pairingArray: [0, 0, 0, 2, 1, 0, 0, 1, 0],
    },
    nightshades: {
      name: "Nightshades",
      iconUrl: "eggplant",
      subtypes: ["tomato", "eggplant", "bell pepper"],
      pairingArray: [1, 2, 0, 1, 0, 0, 0, 1, 0],
    },
    funghi: {
      name: "Funghi",
      iconUrl: "mushroom",
      subtypes: ["crimini", "maitake", "chanterelle"],
      pairingArray: [1, 2, 2, 0, 2, 0, 0, 0, 0],
    },
    nutsandseeds: {
      name: "Nuts & Seeds",
      iconUrl: "nut",
      subtypes: ["peanut", "almond", "pecan", "sesame"],
      pairingArray: [0, 0, 1, 1, 1, 1, 1, 2, 0],
    },
    beansandpeas: {
      name: "Beans & Peas",
      iconUrl: "bean",
      subtypes: ["lentil", "navy", "pinto", "chickpea"],
      pairingArray: [0, 1, 0, 1, 0, 2, 1, 0, 0],
    },
  },
  herbandspice: {
    blackpepper: {
      name: "Black Pepper",
      iconUrl: "blackpepper",
      subtypes: ["It's black pepper, y'all."],
      pairingArray: [2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    redpepper: {
      name: "Red Pepper",
      iconUrl: "pepper1",
      subtypes: ["ancho", "aleppo", "chipotle", "chili"],
      pairingArray: [1, 2, 0, 1, 0, 1, 1, 1, 0],
    },
    spicy: {
      name: "Hot & Spicy",
      iconUrl: "pepper2",
      subtypes: ["hot sauce", "habanero", "sichuan"],
      pairingArray: [0, 0, 0, 0, 0, 1, 1, 2, 0],
    },
    herbs: {
      name: "Herbs",
      iconUrl: "herbs",
      subtypes: ["thyme", "oregano", "basil", "tarragon"],
      pairingArray: [0, 1, 1, 1, 1, 2, 0, 0, 0],
    },
    bakingspices: {
      name: "Baking Spices",
      iconUrl: "cinnamon",
      subtypes: ["cinnamon", "clove", "allspice", "mace"],
      pairingArray: [0, 1, 0, 1, 0, 0, 0, 1, 2],
    },
    exoticspices: {
      name: "Exotic & Aromatic Spices",
      iconUrl: "anise",
      subtypes: ["anise", "turmeric", "saffron", "fennel", "ginger"],
      pairingArray: [0, 2, 1, 1, 0, 0, 1, 2, 0],
    },
  },
  starch: {
    whitestarches: {
      name: "White Starches",
      iconUrl: "bread",
      subtypes: ["flour", "white rice", "pasta", "bread", "tortillas"],
      pairingArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    brownrice: {
      name: "Whole Wheat & Grains",
      iconUrl: "quinoa",
      subtypes: ["quinoa", "farro", "brown rice"],
      pairingArray: [0, 0, 1, 1, 1, 0, 0, 2, 0],
    },
    sweetstarchyveg: {
      name: "Sweet, Starchy Vegetables",
      iconUrl: "sweetpotato",
      subtypes: ["sweet potato", "yucca", "taro"],
      pairingArray: [0, 0, 0, 1, 0, 0, 0, 2, 0],
    },
    potato: {
      name: "Potato",
      iconUrl: "potato",
      subtypes: ["It's a potato, y'all."],
      pairingArray: [1, 1, 1, 1, 1, 1, 1, 1, 0],
    },
  },
  sweet: {
    fruit: {
      name: "Fruit",
      iconUrl: "strawberry",
      subtypes: ["strawberry", "orange", "apple", "peach"],
      pairingArray: [0, 0, 0, 0, 0, 0, 1, 2, 1],
    },
    vanillaandcaramel: {
      name: "Vanilla & Caramel",
      iconUrl: "icecream",
      subtypes: ["creme brulee", "ice cream"],
      pairingArray: [0, 0, 0, 0, 0, 0, 0, 1, 1],
    },
    chocolateandcoffee: {
      name: "Chocolate & Coffee",
      iconUrl: "coffee",
      subtypes: ["Come on, like you care about sub-types here..."],
      pairingArray: [0, 0, 0, 0, 0, 0, 0, 0, 2]
    },
  },
};

export default foodTypes;
