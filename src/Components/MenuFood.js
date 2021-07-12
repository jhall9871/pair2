import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodTypes from "../foodTypeData2";
import wineTypeData from "../wineTypeData";
import WineRec from "./WineRec";

const MenuFood = ({ setWinner, setPhotoContainerClass }) => {
  const [pairingFactors, setPairingFactors] = useState([]);
  const wineTypeArray = [
    "boldred",
    "mediumred",
    "lightred",
    "rose",
    "richwhite",
    "lightwhite",
    "sparkling",
    "sweetwhite",
    "dessert",
  ];

  //check if one of the factors is a prep method. if so, modify that pairing factor to include "is" for grammatical reasons later.
  const preps = [
    "Grilled or Barbecued",
    "Sauteed or Fried",
    "Smoked",
    "Roasted",
    "Steamed or Poached",
  ];
  const handleSelect = (event) => {
    //value always returns a string, like "meat1"
    if (pairingFactors.length === 4) {
      alert("That's the maximum number of factors.");
    } else {
      let arr = event.target.value.split(" ");
      let type = arr[0];
      let subType = arr[1];
      // console.log("type " + type + " subType " + subType);//works
      // console.log(foodTypes[type][subType]);//works
      setPairingFactors([...pairingFactors, foodTypes[type][subType]]);
    }
    // Reset the dropdown menu after each selection
    let dropDown = document.getElementById("foodSelector");
    dropDown.selectedIndex = 0;
  };

  const handleRemove = (event) => {
    let newPairingFactors = [...pairingFactors];
    newPairingFactors.splice(event.target.name, 1);
    setPairingFactors(newPairingFactors);
  }

  //when Pair! is clicked, calculate the winning wine.
  const handlePairClick = () => {
    //create empty result array
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    //loop through each pairing factor
    // console.log("Here are the pairing factors:");
    // console.log(pairingFactors);
    for (let i = 0; i < pairingFactors.length; i++) {
      //loop through pairing factor's pairingarray
      for (let j = 0; j < pairingFactors[i].pairingArray.length; j++) {
        result[j] += pairingFactors[i].pairingArray[j];
      }
    }
    let winningIndex = result.indexOf(Math.max(...result));
    console.log("winningIndex = " + winningIndex);
    setWinner(wineTypeData[wineTypeArray[winningIndex]]);
    // console.log("winner = ");
    // console.log(wineTypeData[wineTypeArray[winningIndex]]);
    //also set an additional state which will be used to call the correct image later
    setPhotoContainerClass(wineTypeArray[winningIndex]);
  };

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
        <select id="foodSelector" onChange={handleSelect}>
          <option value="" selected disabled hidden>
            Choose:
          </option>
          <optgroup label="Meat" id="meat">
            {Object.values(foodTypes.meat).map((item, index) => (
              <option
                key={index}
                value={`meat ${Object.keys(foodTypes.meat)[index]}`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Dairy" id="dairy">
            {Object.values(foodTypes.dairy).map((item, index) => (
              <option
                key={index}
                value={`dairy ${Object.keys(foodTypes.dairy)[index]}`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Vegetable" id="vegetable">
            {Object.values(foodTypes.vegetable).map((item, index) => (
              <option
                key={index}
                value={`vegetable ${Object.keys(foodTypes.vegetable)[index]}`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Herb & Spice" id="herbandspice">
            {Object.values(foodTypes.herbandspice).map((item, index) => (
              <option
                key={index}
                value={`herbandspice ${
                  Object.keys(foodTypes.herbandspice)[index]
                }`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Starch" id="starch">
            {Object.values(foodTypes.starch).map((item, index) => (
              <option
                key={index}
                value={`starch ${Object.keys(foodTypes.starch)[index]}`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Sweet" id="sweet">
            {Object.values(foodTypes.sweet).map((item, index) => (
              <option
                key={index}
                value={`sweet ${Object.keys(foodTypes.sweet)[index]}`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Preparation Method" id="preparation">
            {Object.values(foodTypes.preparation).map((item, index) => (
              <option
                key={index}
                value={`preparation ${
                  Object.keys(foodTypes.preparation)[index]
                }`}
              >
                {item.name}
              </option>
            ))}
          </optgroup>
        </select>
      </form>
      <h2>Selected factors:</h2>
      <div className={displayStyle}>
        {pairingFactors[0] ? (
          pairingFactors.map((object, index) => (
            <div className="factor" key={index}>
              <div className="factor-image-container"></div>
              <h3>{object.name}</h3>
              <ul>
                {preps.indexOf(object.name) < 0
                  ? object.subtypes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : ""}
              </ul>
              <button className="remove-ingredient" name={index} onClick={handleRemove}>X</button>
            </div>
          ))
        ) : (
          <p className="no-selection">Please select something.</p>
        )}
      </div>
      <Link to="/winerec" onClick={handlePairClick}>
        <div className="button pairbutton">
          <h1>Pair!</h1>
        </div>
      </Link>
    </div>
  );
};

export default MenuFood;
