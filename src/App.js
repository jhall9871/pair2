import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ModeSelect from "./Components/ModeSelect";
import MenuWine from "./Components/MenuWine";
import MenuFood from "./Components/MenuFood";
import RecipeRec from "./Components/RecipeRec";
import WineRec from "./Components/WineRec";
import FooterNav from "./Components/FooterNav";

import wineTypes from "./wineTypeData";
import foodTypes from "./foodTypeData";
import "./App.css";

function App() {
  const [selectionInfo, setSelectionInfo] = useState({}); //the whole object corresponding to that wine
  const [recipeUrl, setRecipeUrl] = useState("");
  const [recipeRec, setRecipeRec] = useState(""); //the recipe(s) we'll recommend
  const [pairingFactor1, setPairingFactor1] = useState("");
  const [pairingFactor2, setPairingFactor2] = useState("");
  const [winner, setWinner] = useState({});
  const [photoContainerClass, setPhotoContainerClass] = useState("");
  const [displayInfo, setDisplayInfo] = useState(false)
  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

  //Display the info modal on click
  const handleInfoClick = () => {
    setDisplayInfo(!displayInfo);
  }

  //When the user selects a wine (in MenuWine), update SelectionInfo (an object with all the wine's info).
  const handleWineSelect = (event) => {
    setSelectionInfo(wineTypes[event.target.value]);
  };

  //listen for a change in selectionInfo (in MenuWine), set the search url.
  useEffect(() => {
    //if a wine has been selected,
    if (selectionInfo.name) {
      //get wine pairing array
      let pairingArray = selectionInfo.pairingArray;
      //get array of food categories
      let foodTypeArray = Object.keys(foodTypes);
      //create array of arrays of food subcategories
      let foodSubtypeArray = [];
      foodTypeArray.forEach((type) => {
        foodSubtypeArray.push(Object.keys(foodTypes[type]));
      });
      //flatten the array of arrays into one big array
      let flatArray = foodSubtypeArray.flat();
      console.log('flat array =', flatArray)
      //create an array with only foods with a value of "2" from pairing array (great pairs). for now, we're being more general, so "pork" rather than "roast, tenderloin" etc.
      let masterArray = [];
      //sparkling and rose wines only have one 2 in their array, so in their case, we'll allow 1s.
      if (selectionInfo.name === "Sparkling" || selectionInfo.name === "Rosé") {
        for (let i = 0; i < flatArray.length; i++) {
          if (pairingArray[i] >= 1) {
            masterArray.push(flatArray[i]);
          }
        }
        //otherwise it's gotta be 2s.
      } else {
        for (let i = 0; i < flatArray.length; i++) {
          if (pairingArray[i] === 2) {
            masterArray.push(flatArray[i]);
          }
        }
      }
      console.log('master array = ', masterArray);
      // select two random indices from the master array. One from each half of the array. This way you don't get two kinds of meat, or two prep methods.
      let num1 = Math.floor(Math.random() * (masterArray.length / 2));
      let num2 = Math.floor(
        Math.random() * (masterArray.length / 2) + masterArray.length / 2
      );

      // make our selections based on these indices
      let localPairFactor1 = masterArray[num1];
      let localPairFactor2 = masterArray[num2];

      //look out for spaces! Can't have those in a url. Change them to "%20"
      let localPairFactor1NoSpace = localPairFactor1;
      let localPairFactor2NoSpace = localPairFactor2;

      if (localPairFactor1NoSpace.includes(" ")) {
        let index = localPairFactor1NoSpace.indexOf(" ");
        localPairFactor1NoSpace =
          localPairFactor1NoSpace.slice(0, index) +
          "%20" +
          localPairFactor1NoSpace.slice(index + 1);
      }

      if (localPairFactor2NoSpace.includes(" ")) {
        let index = localPairFactor2NoSpace.indexOf(" ");
        localPairFactor2NoSpace =
          localPairFactor2NoSpace.slice(0, index) +
          "%20" +
          localPairFactor2NoSpace.slice(index + 1);
      }

      setRecipeUrl(
        `https://api.edamam.com/search?q=${localPairFactor1NoSpace}%20AND%20${localPairFactor2NoSpace}&app_id=d9740b8f&app_key=${API_KEY}`
      );
        console.log('recipe url is ', recipeUrl);
      //set pairing factor with the vanilla (including spaces) names.
      setPairingFactor1(localPairFactor1);
      setPairingFactor2(localPairFactor2);
  
    }
  }, [selectionInfo]);

  //When the user clicks "Show me a a recipe!" (in MenuWine),
  const handleShowMeClick = () => {
    //actually make the api call
    const makeApiCall = async () => {
      const response = await fetch(recipeUrl);
      const json = await response.json();
      setRecipeRec(json);
      console.log(recipeRec);
    };
    makeApiCall(); //no more than 5x per minute!
  };

  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/modeselect" component={ModeSelect} />
          <Route
            path="/menuwine"
            render={(routerProps) => (
              <MenuWine
                wineTypes={wineTypes}
                handleWineSelect={handleWineSelect}
                handleShowMeClick={handleShowMeClick}
                selectionInfo={selectionInfo}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/reciperec"
            render={(routerProps) => (
              <RecipeRec
                recipeRec={recipeRec}
                factor1={pairingFactor1}
                factor2={pairingFactor2}
                selectionInfo={selectionInfo}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/winerec"
            render={(routerProps) => (
              <WineRec winner={winner} photoContainerClass={photoContainerClass} {...routerProps} />
            )}
          />
          <Route
            path="/menufood"
            render={(routerProps) => (
              <MenuFood
                wineTypes={wineTypes}
                setWinner={setWinner}
                setPhotoContainerClass={setPhotoContainerClass}
                {...routerProps} />
            )}
          />
        </Switch>
        <div className="info-modal" style={displayInfo ? {display: 'block'} : {display: 'none'}}>
          <h2>Pair: a Food and Wine Pairing App</h2>
          <ul style={{textAlign: 'left'}}>
            <li>Logic based on <a href="https://media.winefolly.com/AF-Poster.png" target="_blank">this very useful poster</a> from Madeline Puckette and Justin Hammack's "Wine Folly"</li>
            <li>Bottle logo based on image by <a href="https://creativecommons.org/licenses/by-sa/3.0">Nevit Dilmen, CC BY-SA 3.0</a>, via Wikimedia Commons</li>
            <li>Built with:
              <ul>
                <li>Create-react-app</li>
                <li>Edamam Recipe API</li>
                <li>Font-Awesome</li>
                <li>Love</li>
              </ul>
            </li>
          </ul>
          <button className="remove-ingredient" onClick={handleInfoClick}>X</button>
        </div>
      </main>
      <FooterNav handleInfoClick={handleInfoClick}/>
    </div>
  );
}

export default App;
