const foodTypes = {
    meat: {
      redmeat: {
        subtypes: ["beef", "lamb", "venison"],
        pairingArray: [2, 1, 0, 0, 0, 0, 0, 0, 0],
      },
      curedmeat: {
        icon: "fas fa-bacon",
        subtypes: ["salami", "proscuitto", "bresaola", "bacon"],
        pairingArray: [1, 1, 2, 1, 0, 0, 1, 2, 1],
      },
      pork: {
        subtypes: ["roast", "tenderloin", "pork chop"],
        pairingArray: [1, 2, 0, 1, 0, 0, 1, 0, 0],
      },
      poultry: {
        icon: "fas fa-drumstick-bite",
        subtypes: ["chicken", "duck", "turkey"],
        pairingArray: [0, 1, 2, 1, 2, 1, 1, 0, 0],
      },
      mollusk: {
        subtypes: ["oyster", "mussel", "clam"],
        pairingArray: [0, 0, 0, 0, 0, 1, 2, 0, 0],
      },
      fish: {
        icon: "fas fa-fish",
        subtypes: ["tuna", "cod", "trout", "bass"],
        pairingArray: [0, 0, 0, 0, 1, 2, 1, 0, 0],
      },
      lobsterandshellfish: {
        subtypes: ["prawn", "crab", "langoustine"],
        pairingArray: [0, 0, 0, 1, 2, 1, 0, 1, 0],
      },
    },
    preparation: {
      grilledorbarbecued: [2, 1, 1, 0, 0, 0, 1, 1, 0],
      sauteedorfried: [0, 0, 2, 1, 1, 1, 1, 0, 0],
      smoked: [1, 2, 1, 1, 0, 0, 1, 0, 1],
      roasted: [2, 1, 1, 1, 0, 0, 0, 1, 0],
      poachedorsteamed: [0, 0, 0, 0, 1, 2, 1, 1, 0],
    },
  
    dairy: {
      softcheesecream: {
        subtypes: ["brie", "mascarpone", "creme fraiche"],
        pairingArray: [0, 1, 2, 1, 2, 1, 1, 1, 1],
      },
      pungentcheese: {
        subtypes: ["bleu", "gorgonzola", "stilton", "roquefort"],
        pairingArray: [1, 2, 0, 1, 0, 1, 1, 1, 2],
      },
      hardcheese: {
        subtypes: ["cheddar", "pecorino", "manchego", "asiago", "parmesan"],
        pairingArray: [2, 1, 0, 1, 1, 0, 1, 0, 0],
      },
    },
    vegetable: {
      alliums: {
        subtypes: ['onion', 'shallot', 'garlic', 'scallion'],
        pairingArray: [1,2,1,1,1,1,1,1,0]
      },
      greenvegetables: {
        subtypes: ['green bean', 'kale', 'lettuce'],
        pairingArray: [0,0,0,0,0,2,1,0,0]
      },
      rootvegandsquash: {
        subtypes: ['turnip', 'butternut', 'pumpkin', 'delicata', 'carrot'],
        pairingArray: [0,0,0,2,1,0,0,1,0]
      },
      nightshades: {
        subtypes: ['tomato', 'eggplant', 'bell pepper'],
        pairingArray: [1,2,0,1,0,0,0,1,0]
      },
      funghi: {
        subtypes: ['crimini', 'maitake', 'chanterelle'],
        pairingArray: [1,2,2,0,2,0,0,0,0]
      },
      nutsandseeds: {
        subtypes: ['peanut', 'almond', 'pecan', 'sesame'],
        pairingArray: [0,0,1,1,1,1,1,2,0]
      },
      beansandpeas: {
        subtypes: ['lentil', 'navy', 'pinto', 'chickpea'],
        pairingArray: [0,1,0,1,0,2,1,0,0]
      }
    },
    herbandspice: {
      blackpepper: {
        pairingArray: [2,1,0,0,0,0,0,0,0]
      },
      redpepper: {
        subtypes: ['ancho', 'aleppo', 'chipotle', 'chili'],
        pairingArray: [1,2,0,1,0,1,1,1,0]
      },
      hotandspicy: {
        subtypes: ['hot sauce', 'habanero', 'sichuan'],
        pairingArray: [0,0,0,0,0,1,1,2,0]
      },
      herbs: {
        subtypes: ['thyme', 'oregano', 'basil', 'tarragon'],
        pairingArray: [0,1,1,1,1,2,0,0,0]
      },
      bakingspices: {
        subtypes: ['cinnamon', 'clove', 'allspice', 'mace'],
        pairingArray: [0,1,0,1,0,0,0,1,2]
      },
      exoticaromaticspices: {
        subtypes: ['anise', 'turmeric', 'saffron', 'fennel', 'ginger'],
        pairingArray: [0,2,1,1,0,0,1,2,0]
      }
    },
    starch: {
      whitestarches: {
        subtypes: ['flour', 'white rice', 'pasta', 'bread', 'tortillas'],
        pairingArray: [1,1,1,1,1,1,1,1,1]
      },
      wholewheatgrains: {
        subtypes: ['quinoa', 'farro', 'brown rice'],
        pairingArray: [0,0,1,1,1,0,0,2,0]
      },
      sweetstarchyveg: {
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
      vanillaandcaramel: {
        subtypes: ['creme brulee', 'ice cream'],
        pairingArray: [0,0,0,0,0,0,0,1,1]
      },
      chocolateandcoffee: {
        pairingArray: [0,0,0,0,0,0,0,0,2]
      }
    }
  };
  
 
  
  
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