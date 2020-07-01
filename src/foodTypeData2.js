const foodTypes = {
  meat: {
    beef: {
      name: "Red Meat",
      iconUrl: "./assets/cow.png",
      subtypes: ["beef", "lamb", "venison"],
      pairingArray: [2, 1, 0, 0, 0, 0, 0, 0, 0],
    },
    bacon: {
      name: "Cured Meat",
      iconUrl: "./assets/bacon.png",
      subtypes: ["salami", "proscuitto", "bresaola", "bacon"],
      pairingArray: [1, 1, 2, 1, 0, 0, 1, 2, 1],
    },
    pork: {
      name: "Pork",
      iconUrl: "./assets/pig.png",
      subtypes: ["roast", "tenderloin", "pork chop"],
      pairingArray: [1, 2, 0, 1, 0, 0, 1, 0, 0],
    },
    chicken: {
      name: "Poultry",
      iconUrl: "./assets/chicken.png",
      subtypes: ["chicken", "duck", "turkey"],
      pairingArray: [0, 1, 2, 1, 2, 1, 1, 0, 0],
    },
    oyster: {
      name: "Mollusk",
      iconUrl: "./assets/clam.png",
      subtypes: ["oyster", "mussel", "clam"],
      pairingArray: [0, 0, 0, 0, 0, 1, 2, 0, 0],
    },
    fish: {
      name: "Fish",
      iconUrl: "./assets/fish.png",
      subtypes: ["tuna", "cod", "trout", "bass"],
      pairingArray: [0, 0, 0, 0, 1, 2, 1, 0, 0],
    },
    prawn: {
      name: "Lobster & Shellfish",
      iconUrl: "./assets/lobster.png",
      subtypes: ["prawn", "crab", "langoustine"],
      pairingArray: [0, 0, 0, 1, 2, 1, 0, 1, 0],
    },
  },
  preparation: {
    grilled: {
      name: "Grilled or Barbecued",
      iconUrl: "./assets/grill.png",
      pairingArray: [2, 1, 1, 0, 0, 0, 1, 1, 0],
    },
    sauteed: {
      name: "Sauteed or Fried",
      iconUrl: "./assets/spatula.png",
      pairingArray: [0, 0, 2, 1, 1, 1, 1, 0, 0],
    },
    smoked: {
      name: "Smoked",
      iconUrl: "./assets/smoker.png",
      pairingArray: [1, 2, 1, 1, 0, 0, 1, 0, 1],
    },
    roasted: {
      name: "Roasted",
      iconUrl: "./assets/oven.png",
      pairingArray: [2, 1, 1, 1, 0, 0, 0, 1, 0],
    },
    steamed: {
      name: "Steamed or Poached",
      iconUrl: "../assets/steamer.png",
      pairingArray: [0, 0, 0, 0, 1, 2, 1, 1, 0],
    },
  },

  dairy: {
    softcheesecream: {
      name: "Soft Cheese & Cream",
      iconUrl: "./assets/cheese.png",
      subtypes: ["brie", "mascarpone", "creme fraiche"],
      pairingArray: [0, 1, 2, 1, 2, 1, 1, 1, 1],
    },
    pungentcheese: {
      name: "Pungent Cheese",
      iconUrl: "./assets/smellycheese.png",
      subtypes: ["bleu", "gorgonzola", "stilton", "roquefort"],
      pairingArray: [1, 2, 0, 1, 0, 1, 1, 1, 2],
    },
    hardcheese: {
      name: "Hard Cheese",
      iconUrl: "./assets/cheese2.png",
      subtypes: ["cheddar", "pecorino", "manchego", "asiago", "parmesan"],
      pairingArray: [2, 1, 0, 1, 1, 0, 1, 0, 0],
    },
  },
  vegetable: {
    alliums: {
      name: "Alliums",
      iconUrl: "./assets/onion.png",
      subtypes: ["onion", "shallot", "garlic", "scallion"],
      pairingArray: [1, 2, 1, 1, 1, 1, 1, 1, 0],
    },
    greenvegetables: {
      name: "Green Vegetables",
      iconUrl: "./assets/lettuce.png",
      subtypes: ["green bean", "kale", "lettuce"],
      pairingArray: [0, 0, 0, 0, 0, 2, 1, 0, 0],
    },
    rootvegandsquash: {
      name: "Root Vegetables & Squash",
      iconUrl: "./assets/pumpkin.png",
      subtypes: ["turnip", "butternut", "pumpkin", "delicata", "carrot"],
      pairingArray: [0, 0, 0, 2, 1, 0, 0, 1, 0],
    },
    nightshades: {
      name: "Nightshades",
      iconUrl: "./assets/eggplant.png",
      subtypes: ["tomato", "eggplant", "bell pepper"],
      pairingArray: [1, 2, 0, 1, 0, 0, 0, 1, 0],
    },
    funghi: {
      name: "Funghi",
      iconUrl: "./assets/mushroom.png",
      subtypes: ["crimini", "maitake", "chanterelle"],
      pairingArray: [1, 2, 2, 0, 2, 0, 0, 0, 0],
    },
    nutsandseeds: {
      name: "Nuts & Seeds",
      iconUrl: "./assets/nut.png",
      subtypes: ["peanut", "almond", "pecan", "sesame"],
      pairingArray: [0, 0, 1, 1, 1, 1, 1, 2, 0],
    },
    beansandpeas: {
      name: "Beans & Peas",
      iconUrl: "./assets/bean.png",
      subtypes: ["lentil", "navy", "pinto", "chickpea"],
      pairingArray: [0, 1, 0, 1, 0, 2, 1, 0, 0],
    },
  },
  herbandspice: {
    blackpepper: {
      name: "Black Pepper",
      iconUrl: "./assets/blackpepper.png",
      pairingArray: [2, 1, 0, 0, 0, 0, 0, 0, 0],
    },
    redpepper: {
      name: "Red Pepper",
      iconUrl: "./assets/pepper1.png",
      subtypes: ["ancho", "aleppo", "chipotle", "chili"],
      pairingArray: [1, 2, 0, 1, 0, 1, 1, 1, 0],
    },
    spicy: {
      name: "Hot & Spicy",
      iconUrl: "./assets/pepper2.png",
      subtypes: ["hot sauce", "habanero", "sichuan"],
      pairingArray: [0, 0, 0, 0, 0, 1, 1, 2, 0],
    },
    herbs: {
      name: "Herbs",
      iconUrl: "./assets/herbs.png",
      subtypes: ["thyme", "oregano", "basil", "tarragon"],
      pairingArray: [0, 1, 1, 1, 1, 2, 0, 0, 0],
    },
    bakingspices: {
      name: "Baking Spices",
      iconUrl: "./assets/cinnamon.png",
      subtypes: ["cinnamon", "clove", "allspice", "mace"],
      pairingArray: [0, 1, 0, 1, 0, 0, 0, 1, 2],
    },
    exoticspices: {
      name: "Exotic & Aromatic Spices",
      iconUrl: "./assets/anise.png",
      subtypes: ["anise", "turmeric", "saffron", "fennel", "ginger"],
      pairingArray: [0, 2, 1, 1, 0, 0, 1, 2, 0],
    },
  },
  starch: {
    whitestarches: {
      name: "White Starches",
      iconUrl: "./assets/bread.png",
      subtypes: ["flour", "white rice", "pasta", "bread", "tortillas"],
      pairingArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    brownrice: {
      name: "Whole Wheat & Grains",
      iconUrl: "./assets/quinoa.png",
      subtypes: ["quinoa", "farro", "brown rice"],
      pairingArray: [0, 0, 1, 1, 1, 0, 0, 2, 0],
    },
    sweetstarchyveg: {
      name: "Sweet, Starchy Vegetables",
      iconUrl: "./assets/sweetpotato.png",
      subtypes: ["sweet potato", "yucca", "taro"],
      pairingArray: [0, 0, 0, 1, 0, 0, 0, 2, 0],
    },
    potato: {
      name: "Potato",
      iconUrl: "./assets/potato.png",
      pairingArray: [1, 1, 1, 1, 1, 1, 1, 1, 0],
    },
  },
  sweet: {
    fruit: {
      name: "Fruit",
      iconUrl: "./assets/strawberry.png",
      subtypes: ["strawberry", "orange", "apple", "peach"],
      pairingArray: [0, 0, 0, 0, 0, 0, 1, 2, 1],
    },
    vanillaandcaramel: {
      name: "Vanilla & Caramel",
      iconUrl: "./assets/icecream.png",
      subtypes: ["creme brulee", "ice cream"],
      pairingArray: [0, 0, 0, 0, 0, 0, 0, 1, 1],
    },
    chocolateandcoffee: {
      name: "Chocolate & Coffee",
      iconUrl: "./assets/coffee.png",
      pairingArray: [0, 0, 0, 0, 0, 0, 0, 0, 2],
    },
  },
};

export default foodTypes;
