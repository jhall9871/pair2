import React from "react";

const WineSelectRow = (props) => {
  return (
    <div
      data-id={props.dataId}
      className={`bottle-select ${props.bottle}`}
      onClick={props.handleWineSelect}
    >
      <h3 data-id={props.dataId}>{props.name}</h3>
      <p className="subtype-list" data-id={props.dataId}>
        {props.subtypes}
      </p>
    </div>
  );
};

export default WineSelectRow;
