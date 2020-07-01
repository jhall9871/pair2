import React from "react";

const WineSelectRow = (props) => {
  return (
    <div
      className={`bottle-select ${props.bottle}`}
      onClick={props.handleWineSelect}
      data-id={props.dataId}
    >
      <h3>{props.name}</h3>
      <p className="subtype-list">{props.subtypes}</p>
    </div>
  );
};

export default WineSelectRow;