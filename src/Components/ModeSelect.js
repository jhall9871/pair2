import React from "react";
import { Link } from "react-router-dom";

const ModeSelect = ({ handleWineSelect }) => {
  return (
    <div className="mode-select">
      <Link to="/menufood">
        <div className="mode-top">
          <p>I have a recipe.</p>
          <p>Help me find a wine!</p>
        </div>
      </Link>
      <Link to="/menuwine">
        <div className="mode-bottom">
          <p>I have a wine.</p>
          <p>Help me find a recipe!</p>
        </div>
      </Link>
    </div>
  );
};

export default ModeSelect;
