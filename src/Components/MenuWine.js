import React, { useState } from "react";
import { Link } from "react-router-dom";
import WineSelectRow from "./WineSelectRow"
import wineTypes from "../wineTypeData";


const MenuWine = ({
  handleWineSelect,
  selectionInfo,
  pairingFactor1,
  pairingFactor2,
  handleShowMeClick,
}) => {
  return (
    <div className="menu-wine">
      <h2>Select a wine category:</h2>
      {Object.keys(wineTypes).map((type, index) => {
        // console.log(wineTypes[type])
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

      {/* <ul className="wine-menu-varietal-list">
        {selectionInfo
          ? selectionInfo.subtypes.map((subtype, index) => (
              <li key={index}>{subtype}</li>
            ))
          : ""}
      </ul> */}
      {/* {pairingFactor1 ? (
        <p>
          Will search for recipes containing {pairingFactor1} and {pairingFactor2}
        </p>
      ) : (
        ""
      )} */}

      <Link to="/reciperec" onClick={handleShowMeClick}>
        <p>Show me a recipe!</p>
      </Link>
    </div>
  );
};

export default MenuWine;
