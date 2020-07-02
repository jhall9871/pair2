import React from "react";
import { Link } from "react-router-dom";
import WineSelectRow from "./WineSelectRow"
import wineTypes from "../wineTypeData";

const MenuWine = ({
  handleWineSelect,
  handleShowMeClick,
  selectionInfo
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
      <p className="current-selection">Current selection: {selectionInfo.name ? selectionInfo.name : "none."}</p>
      <Link to="/reciperec" onClick={handleShowMeClick}>
        <div className="show-me-recipe"><h3>Show me a recipe!</h3></div>
      </Link>
    </div>
  );
};

export default MenuWine;
