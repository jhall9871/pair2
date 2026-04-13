import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pair-logo-white-2.png"
import forwardArrow from "../assets/forwardarrowwhite.png"

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={logo} width="270" alt="Pair wine bottle logo"/>
      <Link to="/modeselect">
        <div className="button continuebutton"><h1>Start</h1><img src={forwardArrow} alt="start button" /></div>
      </Link>
    </div>
  );
};

export default Welcome;
