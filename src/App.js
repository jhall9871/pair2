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
import foodTypes from "./foodTypeData2";
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
  const API_KEY = process.env.REACT_APP_SPOONACULAR_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

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
      //create array of food item objects (with name, subtypes, pairingArray)
      let foodItemArray = [];
      foodTypeArray.forEach((type) => {
        foodItemArray.push(...Object.values(foodTypes[type]));
      });
      //create an array with only foods with a value of "2" from pairing array (great pairs).
      let masterArray = [];
      //sparkling and rose wines only have one 2 in their array, so in their case, we'll allow 1s.
      const threshold = (selectionInfo.name === "Sparkling" || selectionInfo.name === "Rosé") ? 1 : 2;
      for (let i = 0; i < foodItemArray.length; i++) {
        if (pairingArray[i] >= threshold) {
          masterArray.push(foodItemArray[i]);
        }
      }
      // select two random indices from the master array. One from each half of the array. This way you don't get two kinds of meat, or two prep methods.
      let num1 = Math.floor(Math.random() * (masterArray.length / 2));
      let num2 = Math.floor(
        Math.random() * (masterArray.length / 2) + masterArray.length / 2
      );

      // make our selections based on these indices
      let factor1 = masterArray[num1];
      let factor2 = masterArray[num2];

      // build API URL: use one factor as query, and if the other has subtypes, pick a random subtype as includeIngredients
      let query = factor1.name;
      let ingredient = "";
      if (factor2.subtypes) {
        ingredient = factor2.subtypes[Math.floor(Math.random() * factor2.subtypes.length)];
      }

      let url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&addRecipeInformation=true&number=10&apiKey=${API_KEY}`;
      if (ingredient) {
        url += `&includeIngredients=${encodeURIComponent(ingredient)}`;
      }
      setRecipeUrl(url);

      //set pairing factors with the human-readable names.
      setPairingFactor1(factor1.name);
      setPairingFactor2(factor2.name);
  
    }
  }, [selectionInfo]);

  //When the user clicks "Show me a a recipe!" (in MenuWine),
  const handleShowMeClick = () => {
    setIsLoading(true);
    setApiError("");
    const makeApiCall = async () => {
      try {
        const response = await fetch(recipeUrl);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const json = await response.json();
        if (!json.results || json.results.length === 0) {
          throw new Error("No recipes found. Try a different wine!");
        }
        setRecipeRec(json);
      } catch (err) {
        setApiError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    makeApiCall();
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
                isLoading={isLoading}
                apiError={apiError}
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
                <li>Spoonacular Recipe API</li>
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
