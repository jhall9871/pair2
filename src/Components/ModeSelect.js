import React from "react";
import { Link } from "react-router-dom";

const ModeSelect = ({ handleWineSelect }) => {
  return (
    <div className="mode-select">
      <Link to="/menufood">
        <div className="mode-top">
          <h3>I have a recipe.</h3>
          <h3>Help me find a wine!</h3>
        </div>
      </Link>
      <Link to="/menuwine">
        <div className="mode-bottom">
          <h3>I have a wine.</h3>
          <h3>Help me find a recipe!</h3>
        </div>
      </Link>
    </div>
  );
};

export default ModeSelect;
