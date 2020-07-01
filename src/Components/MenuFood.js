import React, { useState } from "react";
import foodTypes from "../foodTypeData2";
import wineTypeData from "../wineTypeData";

const MenuFood = () => {
  const [pairingFactors, setPairingFactors] = useState([]);
  const [winner, setWinner] = useState({});
  const wineTypeArray = ['boldred', 'mediumred', 'lightred', 'rose', 'richwhite', 'lightwhite', 'sparkling', 'sweet', 'dessert']

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

  // {
  //   Object.values(foodTypes.meat).map((item, index) => console.log(item));
  // }

console.log(pairingFactors)

  return (
    <div className="menu-food">
      <h3>Choose up to 4 ingredients / prep methods.</h3>
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
      <h3>Selected factors:</h3>
      <ul className="food-factors">
        {pairingFactors[0] ? pairingFactors.map((object, index) => <li key={index}>{object.name}</li>) : "Please select something."}
      </ul>
      <button onClick={handlePairClick}>Pair!</button>
      {winner.name ? <p>Try a <span className="emphasis">{winner.name.toLowerCase()} wine</span> such as a <br />{winner.subtypes.slice(0, -1).join(", ") + ", or " + winner.subtypes.slice(-1)}</p> : <p>No result yet.</p>}
    </div>
  );
};

export default MenuFood;
