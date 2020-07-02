import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <video width="300" height="300" autoPlay="autoplay">
        <source
          src={require("../assets/pair-logo-animation.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Link to="/modeselect">
        <div className="button continuebutton"><h1>Start</h1><img src={require("../assets/forwardarrowwhite.png")} alt="start button" /></div>
      </Link>
    </div>
  );
};

export default Welcome;
