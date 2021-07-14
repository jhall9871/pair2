import React from "react";
import { Link } from "react-router-dom";
import WineSelectRow from "./WineSelectRow"
// import wineTypes from "../wineTypeData";

const MenuWine = ({
  wineTypes,
  handleWineSelect,
  handleShowMeClick,
  selectionInfo
}) => {
  const bottleImages = {
    bordeaux: "bottle-bordeaux-silhouette-white.png",
    burgundy: "bottle-burgundy-silhouette-white.png",
    sparkling1: "bottle-sparkling-silhouette-white.png",
    port: "bottle-port-silhouette-white.png"
  }
  return (
    <div className="menu-wine">
      <h2>Select a wine category:</h2>
      {wineTypes.map((type, index) => {
        return (
          <WineSelectRow
            handleWineSelect={handleWineSelect}
            key={index}
            index={index}
            name={type.name}
            selected={selectionInfo.name === type.name}
            bottle={bottleImages[type.bottletype]}
            subtypes={type.subtypes.join(", ")}
          />
        )
      })}
      <Link to="/reciperec" onClick={handleShowMeClick}>
        <div className="show-me-recipe"><h3>Show me a recipe!</h3></div>
      </Link>
    </div>
  );
};

export default MenuWine;
