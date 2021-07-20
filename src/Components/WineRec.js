import React from "react";
import { Link } from "react-router-dom";

const WineRec = ({ winner, photoContainerClass }) => {
    console.log(winner)
  return (
    <div className="wine-rec">
      <div className="result-container">
        {winner.name ?
          <div className="positive-result-container">
          <div className={photoContainerClass} ></div>
            <p className="rec-description">Try a <span className="emphasis">{winner.name.toLowerCase()} wine</span> such as a <br />{winner.subtypes.slice(0, -1).join(", ") + ", or " + winner.subtypes.slice(-1) + "."}</p></div> : <p>No result yet.</p>
          }
        <Link to="/" className="back-home">Start Over</Link>
        </div>
    </div>
  );
};

export default WineRec;
