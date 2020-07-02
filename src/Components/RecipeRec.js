import React from "react";
import { Link } from "react-router-dom";

const RecipeRec = ({ recipeRec, factor1, factor2, selectionInfo }) => {
  let factor1withGrammar = "";
  let factor2withGrammar = "";
  if (recipeRec.hits) {
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
      factor2withGrammar = " and has " + factor2 + ",";
      //third case: same as second, but reversed.
    } else if (!preps.includes(factor2) && preps.includes(factor1)) {
      factor2withGrammar = " and has " + factor2 + ",";
      factor1withGrammar = "is " + factor1;
      //fourth case: both are ingredients.
    } else {
      factor1withGrammar = "has " + factor1;
    }
    console.log(recipeRec.hits[0])
    console.log("fac 1 w/ grammar = " + factor1withGrammar)
    console.log("fac 2 w/ grammar = " + factor2withGrammar)
    return (
      <div className="recipe-rec">
        
        <div className="recipe-image-container">
          <img
            src={recipeRec.hits[0].recipe.image}
            alt="first recipe"
            key="0"
          />
        </div>
        
        <div className="recipe-info-container">
        <a href={recipeRec.hits[0].recipe.url} target="_blank" rel="noopener noreferrer"><h3>{recipeRec.hits[0].recipe.label}</h3></a>
          <p>
            This recipe {factor1withGrammar} {factor2withGrammar}<br />which
            pair well with your {selectionInfo.name.toLowerCase()} wine.
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="recipe-rec">
        <p>Nothing yet.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
};

export default RecipeRec;
