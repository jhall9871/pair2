const foodTypes = {
  meat: {
    beef: {
      name: "Red Meat",
      iconUrl: "./assets/bacon.png",
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
      icon: "fas fa-drumstick-bite",
      subtypes: ["chicken", "duck", "turkey"],
      pairingArray: [0, 1, 2, 1, 2, 1, 1, 0, 0],
    },
    oyster: {
      subtypes: ["oyster", "mussel", "clam"],
      pairingArray: [0, 0, 0, 0, 0, 1, 2, 0, 0],
    },
    fish: {
      icon: "fas fa-fish",
      subtypes: ["tuna", "cod", "trout", "bass"],
      pairingArray: [0, 0, 0, 0, 1, 2, 1, 0, 0],
    },
    prawn: {
      subtypes: ["prawn", "crab", "langoustine"],
      pairingArray: [0, 0, 0, 1, 2, 1, 0, 1, 0],
    },
  },
  preparation: {
    grilled: [2, 1, 1, 0, 0, 0, 1, 1, 0],
    // barbecued: [2, 1, 1, 0, 0, 0, 1, 1, 0], //grilled & barbecued are one and the same on the chart
    sauteed: [0, 0, 2, 1, 1, 1, 1, 0, 0],
    // fried: [0, 0, 2, 1, 1, 1, 1, 0, 0], //same with sauteed and fried
    smoked: [1, 2, 1, 1, 0, 0, 1, 0, 1],
    roasted: [2, 1, 1, 1, 0, 0, 0, 1, 0],
    steamed: [0, 0, 0, 0, 1, 2, 1, 1, 0],
  },

  dairy: {
    brie: {
      subtypes: ["brie", "mascarpone", "creme fraiche"],
      pairingArray: [0, 1, 2, 1, 2, 1, 1, 1, 1],
    },
    gorgonzola: {
      subtypes: ["bleu", "gorgonzola", "stilton", "roquefort"],
      pairingArray: [1, 2, 0, 1, 0, 1, 1, 1, 2],
    },
    parmesan: {
      subtypes: ["cheddar", "pecorino", "manchego", "asiago", "parmesan"],
      pairingArray: [2, 1, 0, 1, 1, 0, 1, 0, 0],
    },
  },
  vegetable: {
    onion: {
      subtypes: ['onion', 'shallot', 'garlic', 'scallion'],
      pairingArray: [1,2,1,1,1,1,1,1,0]
    },
    "green bean": {
      subtypes: ['green bean', 'kale', 'lettuce'],
      pairingArray: [0,0,0,0,0,2,1,0,0]
    },
    squash: {
      subtypes: ['turnip', 'butternut', 'pumpkin', 'delicata', 'carrot'],
      pairingArray: [0,0,0,2,1,0,0,1,0]
    },
    eggplant: {
      subtypes: ['tomato', 'eggplant', 'bell pepper'],
      pairingArray: [1,2,0,1,0,0,0,1,0]
    },
    mushroom: {
      subtypes: ['crimini', 'maitake', 'chanterelle'],
      pairingArray: [1,2,2,0,2,0,0,0,0]
    },
    nuts: {
      subtypes: ['peanut', 'almond', 'pecan', 'sesame'],
      pairingArray: [0,0,1,1,1,1,1,2,0]
    },
    beans: {
      subtypes: ['lentil', 'navy', 'pinto', 'chickpea'],
      pairingArray: [0,1,0,1,0,2,1,0,0]
    }
  },
  herbandspice: {
    "black pepper": {
      pairingArray: [2,1,0,0,0,0,0,0,0]
    },
    "red pepper": {
      subtypes: ['ancho', 'aleppo', 'chipotle', 'chili'],
      pairingArray: [1,2,0,1,0,1,1,1,0]
    },
    spicy: {
      subtypes: ['hot sauce', 'habanero', 'sichuan'],
      pairingArray: [0,0,0,0,0,1,1,2,0]
    },
    herbs: {
      subtypes: ['thyme', 'oregano', 'basil', 'tarragon'],
      pairingArray: [0,1,1,1,1,2,0,0,0]
    },
    cinnamon: {
      subtypes: ['cinnamon', 'clove', 'allspice', 'mace'],
      pairingArray: [0,1,0,1,0,0,0,1,2]
    },
    ginger: {
      subtypes: ['anise', 'turmeric', 'saffron', 'fennel', 'ginger'],
      pairingArray: [0,2,1,1,0,0,1,2,0]
    }
  },
  starch: {
    bread: {
      subtypes: ['flour', 'white rice', 'pasta', 'bread', 'tortillas'],
      pairingArray: [1,1,1,1,1,1,1,1,1]
    },
    quinoa: {
      subtypes: ['quinoa', 'farro', 'brown rice'],
      pairingArray: [0,0,1,1,1,0,0,2,0]
    },
    "sweet potato": {
      subtypes: ['sweet potato', 'yucca', 'taro'],
      pairingArray: [0,0,0,1,0,0,0,2,0]
    },
    potato: {
      pairingArray: [1,1,1,1,1,1,1,1,0]
    }
  },
  sweet: {
    fruit: {
      subtypes: ['strawberry', 'orange', 'apple', 'peach'],
      pairingArray: [0,0,0,0,0,0,1,2,1]
    },
    cream: {
      subtypes: ['creme brulee', 'ice cream'],
      pairingArray: [0,0,0,0,0,0,0,1,1]
    },
    chocolate: {
      pairingArray: [0,0,0,0,0,0,0,0,2]
    },
    coffee: {
      pairingArray: [0,0,0,0,0,0,0,0,2]
    }
  }
};

export default foodTypes;


// //black pepper steak
// let ingredient1array = foodTypes.meat.redmeat.pairingArray;
// let prep = foodTypes.preparation.grilledorbarbecued;
// let ingredient2array = foodTypes.herbandspice.blackpepper.pairingArray;
// let result = []

// function calcPairing() {
//   prep.forEach((item, index) => {
//     result.push(item);
//   });
//   ingredient1array.forEach((item, index) => {
//     result[index] += item;
//   });
//   ingredient2array.forEach((item, index) => {
//     result[index] += item;
//   });
//   let winner = result.indexOf(Math.max(...result));

//   return wineTypes[wineIndexes[winner]];
// }

// //foodTypes
// ////meat
// //////redmeat
// ////////subTypes

// for (const type in foodTypes) {
//   console.log(`<li>\n<a href="">${type}</a>`)

// }