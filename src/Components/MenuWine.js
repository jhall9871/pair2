import React, { useState } from "react";
import { Link } from "react-router-dom";
import WineSelectRow from "./WineSelectRow"
import wineTypes from "../wineTypeData";


const MenuWine = ({
  handleWineSelect,
  handleShowMeClick,
}) => {
  return (
    <div className="menu-wine">
      <h2>Select a wine category:</h2>
      {Object.keys(wineTypes).map((type, index) => {
        return (
          <WineSelectRow
            handleWineSelect={handleWineSelect}
            key={index}
            name={wineTypes[type].name}
            bottle={wineTypes[type].bottletype}
            subtypes={wineTypes[type].subtypes.join(", ")}
            dataId={type}
          />
        )
      })}

      <Link to="/reciperec" onClick={handleShowMeClick}>
        <p>Show me a recipe!</p>
      </Link>
    </div>
  );
};

export default MenuWine;
