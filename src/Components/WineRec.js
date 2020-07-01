import React from "react";
import { Link } from "react-router-dom";

const WineRec = ({ winner }) => {
    console.log(winner)
  return (
    <div className="wine-rec">
          {winner.name ? <p className="rec-description">Try a <span className="emphasis">{winner.name.toLowerCase()} wine</span> such as a <br />{winner.subtypes.slice(0, -1).join(", ") + ", or " + winner.subtypes.slice(-1)}</p> : <p>No result yet.</p>}
      <Link to="/"><div className="rec-link">Back to Home.</div></Link>
    </div>
  );
};

export default WineRec;
