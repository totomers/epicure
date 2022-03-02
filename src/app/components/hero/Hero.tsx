import React from "react";
import Input from "../UI/input/Input";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <img src="/images/hero/hero-picture.png" className="background"></img>
      <div className="hero-card">
        <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
        <Input
          iconUrl="/icons/search-icon.svg"
          iconSize={30}
          iconDirection={"left"}
          className="navbar-input"
          placeHolder="Search for restaurant cuisine, chef"
          style={{ width: "513px", height: "50px" }}
        ></Input>
      </div>
    </div>
  );
}

export default Hero;
