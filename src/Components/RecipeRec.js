import React from "react";
import { Link } from "react-router-dom";

const RecipeRec = ({ recipeRec, factor1, factor2, selectionInfo, isLoading, apiError }) => {
  if (isLoading) {
    return (
      <div className="recipe-rec">
        <p>Finding a recipe...</p>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="recipe-rec">
        <p>{apiError}</p>
        <Link to="/" className="back-home">Start Over</Link>
      </div>
    );
  }

  let factor1withGrammar = "";
  let factor2withGrammar = "";
  if (recipeRec.results && recipeRec.results.length > 0) {
    //check if one of the factors is a prep method. if so, modify that pairing factor to include "is" for grammatical reasons later.
    const preps = [
      "grilled",
      "barbecued",
      "sauteed",
      "fried",
      "smoked",
      "roasted",
      "steamed",
    ];
    //first case: if they're both prep methods (bad)
    if (preps.includes(factor1) && preps.includes(factor2)) {
      alert("you can't choose 2 prep methods.");
      //second case: one is a prep method, the other is an ingredient
    } else if (!preps.includes(factor1) && preps.includes(factor2)) {
      factor1withGrammar = "has " + factor1;
      factor2withGrammar = " and is " + factor2 + ",";
      //third case: same as second, but reversed.
    } else if (!preps.includes(factor2) && preps.includes(factor1)) {
      factor2withGrammar = " and has " + factor2 + ",";
      factor1withGrammar = "is " + factor1;
      //fourth case: both are ingredients.
    } else {
      factor1withGrammar = "has " + factor1;
      factor2withGrammar = " and has " + factor2;
    }
    const recipe = recipeRec.results[0];
    return (
      <div className="recipe-rec">
        
        <div className="recipe-image-container">
          <img
            src={recipe.image}
            alt="first recipe"
            key="0"
          />
        </div>
        
        <div className="recipe-info-container">
        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer"><h3>{recipe.title}</h3></a>
          <p>
            This recipe {factor1withGrammar} {factor2withGrammar}<br />which
            pair well with your {selectionInfo.name.toLowerCase()} wine.
          </p>
          <Link to="/" className="back-home">Start Over</Link>
          <p className="attribution">
            <a href="https://spoonacular.com" target="_blank" rel="noopener noreferrer">Powered by Spoonacular</a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="recipe-rec">
        <p>Nothing yet.</p>
        <Link to="/" className="back-home">Start Over</Link>
      </div>
    );
  }
};

export default RecipeRec;
