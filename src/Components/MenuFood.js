import React, { useState } from "react";
import { Link } from "react-router-dom" 
import foodTypes from "../foodTypeData2";
import wineTypeData from "../wineTypeData";
// import cow from '../assets/cow.png'
// import bacon from '../assets/bacon.png'
// import pig from '../assets/pig.png'
// import chicken from '../assets/chicken.png'
// import clam from '../assets/clam.png'
// import fish from '../assets/fish.png'
// import lobster from '../assets/lobster.png'
// import grill from '../assets/grill.png'
// import spatula from '../assets/spatula.png'
// import smoker from '../assets/smoker.png'
// import oven from '../assets/oven.png'
// import steamer from '../assets/steamer.png'
// import cheese from '../assets/cheese.png'
// import smellycheese from '../assets/smellycheese.png'
// import cheese2 from '../assets/cheese2.png'
// import onion from '../assets/onion.png'
// import lettuce from '../assets/lettuce.png'
// import pumpkin from '../assets/pumpkin.png'
// import eggplant from '../assets/eggplant.png'
// import mushroom from '../assets/mushroom.png'
// import nut from '../assets/nut.png'
// import bean from '../assets/bean.png'
// import blackpepper from '../assets/blackpepper.png'
// import pepper1 from '../assets/pepper1.png'
// import pepper2 from '../assets/pepper2.png'
// import herbs from '../assets/herbs.png'
// import cinnamon from '../assets/cinnamon.png'
// import anise from '../assets/anise.png'
// import bread from '../assets/bread.png'
// import quinoa from '../assets/quinoa.png'
// import sweetpotato from '../assets/sweetpotato.png'
// import potato from '../assets/potato.png'
// import strawberry from '../assets/strawberry.png'
// import icecream from '../assets/icecream.png'
// import coffee from '../assets/coffee.png'

const MenuFood = ({ setWinner }) => {
  
  const [pairingFactors, setPairingFactors] = useState([]);
  const wineTypeArray = ['boldred', 'mediumred', 'lightred', 'rose', 'richwhite', 'lightwhite', 'sparkling', 'sweet', 'dessert']
    //check if one of the factors is a prep method. if so, modify that pairing factor to include "is" for grammatical reasons later.
    const preps = [
      "Grilled or Barbecued",
      "Sauteed or Fried",
      "Smoked",
      "Roasted",
      "Steamed or Poached"
    ];
  const handleSelect = (event) => {
    //value always returns a string, like "meat1"
    if (pairingFactors.length === 4) {
      alert("That's the max number of thingies")
    } else {
      let arr = event.target.value.split(" ");
      let type = arr[0];
      let subType = arr[1];
      // console.log("type " + type + " subType " + subType);//works
      // console.log(foodTypes[type][subType]);//works
      setPairingFactors([...pairingFactors, foodTypes[type][subType]]);
    }
  };

  const handlePairClick = () => {
      //create empty result array
    let result = [0,0,0,0,0,0,0,0,0];
    //loop through each pairing factor
    for (let i = 0; i < pairingFactors.length; i++) {
      //loop through pairing factor's pairingarray
      for (let j = 0; j < pairingFactors[i].pairingArray.length; j++) {
        result[j] += pairingFactors[i].pairingArray[j];
      }
    }
    let winningIndex = result.indexOf(Math.max(...result));
    setWinner(wineTypeData[wineTypeArray[winningIndex]]);
  }

  //change the layout depending on the number of factors
  let displayStyle = "";
  if (pairingFactors.length <= 1) {
    displayStyle = "factors-1";
  } else if (pairingFactors.length === 2) {
    displayStyle = "factors-2";
  } else if (pairingFactors.length === 3) {
    displayStyle = "factors-3";
  } else if (pairingFactors.length === 4) {
    displayStyle = "factors-4";
  }

  return (
    <div className="menu-food">
      <h1>Choose 1-3 ingredients</h1>
      <h1>and 0-1 prep method.</h1>
      <form>
        <select onChange={handleSelect}>
          <option value="" selected disabled hidden>Choose:</option>
          <optgroup label="Meat" id="meat">
            {Object.values(foodTypes.meat).map((item, index) => (
              <option key={index} value={`meat ${Object.keys(foodTypes.meat)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Dairy" id="dairy">
            {Object.values(foodTypes.dairy).map((item, index) => (
              <option key={index} value={`dairy ${Object.keys(foodTypes.dairy)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Vegetable" id="vegetable">
            {Object.values(foodTypes.vegetable).map((item, index) => (
              <option key={index} value={`vegetable ${Object.keys(foodTypes.vegetable)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Herb & Spice" id="herbandspice">
            {Object.values(foodTypes.herbandspice).map((item, index) => (
              <option key={index} value={`herbandspice ${Object.keys(foodTypes.herbandspice)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Starch" id="starch">
            {Object.values(foodTypes.starch).map((item, index) => (
              <option key={index} value={`starch ${Object.keys(foodTypes.starch)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Sweet" id="sweet">
            {Object.values(foodTypes.sweet).map((item, index) => (
              <option key={index} value={`sweet ${Object.keys(foodTypes.sweet)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Preparation Method" id="preparation">
            {Object.values(foodTypes.preparation).map((item, index) => (
              <option key={index} value={`preparation ${Object.keys(foodTypes.preparation)[index]}`}>
                {item.name}
              </option>
            ))}
          </optgroup>
        </select>
      </form>
      <h2>Selected factors:</h2>
      <div className={displayStyle}>
        {pairingFactors[0] ? pairingFactors.map((object, index) => <div className="factor" key={index}>
          <div className="factor-image-container"></div>
          <h3>{object.name}</h3>
          <ul>
            {preps.indexOf(object.name) < 0 ? object.subtypes.map(item => <li>{item}</li>) : ""}
          </ul>
        </div>) : <p className="no-selection">Please select something.</p>}
      </div>
      <Link to="/winerec" onClick={handlePairClick}>
        <div className="button pairbutton"><h1>Pair!</h1></div>
      </Link>
    </div>
  );
};

export default MenuFood;
