const wineTypes = {
  boldred: {
    name: "Bold Red",
    bottletype: "bordeaux",
    subtypes: ['Malbec', 'Syrah', 'Mourvèdre', 'Pinotage', 'Petite Sirah', 'Touriga Nacional', 'Cabernet Sauvignon', 'Bordeaux Blend', 'Meritage'],
    pairingArray: [2,1,1,0,0,0,0,2,0,1,2,0,0,1,2,1,0,0,1,1,0,0,2,1,0,0,0,0,1,0,0,1,0,0,0]
  },
  mediumred: {
    name: "Medium Red",
    bottletype: "burgundy",
    subtypes: ['Merlot', 'Sangiovese', 'Zinfandel', 'Cabernet Franc', 'Tempranillo', 'Nebbiolo', 'Barbera', 'Côtes du Rhône Blend'],
    pairingArray: [1,1,2,1,0,0,0,1,0,2,1,0,1,2,1,2,0,0,2,2,0,1,1,2,0,1,1,2,1,0,0,1,0,0,0]
   },
  lightred: {
    name: "Light Red",
    bottletype: "burgundy",
    subtypes: ['Pinot Noir', 'Grenache', 'Gamay', 'St. Laurent', 'Carignan', 'Counoise'],
    pairingArray: [0,2,0,2,0,0,0,1,2,1,1,0,2,0,0,1,0,0,0,2,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0]
  },
  rose: {
    name: "Rosé",
    bottletype: "bordeaux",
    subtypes: ['Provençal Rosé', 'White Zinfandel', 'Loire Valley Rosé', 'Syrah Rosé', 'Garnacha Rosado', 'Bandol Rosé', 'Tempranillo Rosé', 'Saignée Method Rosé'],
    pairingArray: [0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,2,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0]
  },
  richwhite: {
    name: "Rich White",
    bottletype: "burgundy",
    subtypes: ['Chardonnay', 'Sémillon', 'Viognier', 'Marsanne', 'Roussanne'],
    pairingArray: [0,0,0,2,0,1,2,0,1,0,0,1,2,0,1,1,0,1,0,2,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0]
  },
  lightwhite: {
    name: "Light White",
    bottletype: "bordeaux",
    subtypes: ['Sauvignon Blanc', 'Albariño', 'Pinot Blanc', 'Vermentino', 'Melon de Bourgogne', 'Gargenega', 'Trebbiano', 'Pinot Gris / Pinot Grigio'],
    pairingArray: [0,0,0,1,1,2,1,0,1,0,0,2,1,1,0,1,2,0,0,0,1,2,0,1,1,2,0,0,1,0,0,1,0,0,0]
  },
  sparkling: {
    name: "Sparkling",
    bottletype: "sparkling1",
    subtypes: ['Champagne', 'Prosecco', 'Crémant', 'Cava', 'Metodo Classico', 'Sparkling Wine', 'Sparkling Rosé'],
    pairingArray: [0,1,1,1,2,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0]
  },
  sweetwhite: {
    name: "Sweet White",
    bottletype: "bordeaux",
    subtypes: ['Moscato', 'Riesling', 'Chenin Blanc', 'Gewürztraminer', 'Late Harvest Whites', 'Alsacian Pinot Gris'],
    pairingArray: [0,2,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,2,0,0,1,2,0,1,2,1,2,2,1,2,1,0]
  },
  dessert: {
    name: "Dessert",
    bottletype: "port",
    subtypes: ['Port', 'Sherry', 'Madeira', 'Vin Santo', 'Muscat', 'PX (Pedro Ximénez)'],
    pairingArray: [0,1,0,0,0,0,0,0,0,1,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,1,1,2]
  }
};
  
export default wineTypes;
  