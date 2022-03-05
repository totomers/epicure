import React from "react";
import Routes from "../navbar/subcomponents/Routes";
import Input from "../UI/input/Input";
import "./Hero.scss";
function Hero() {
  return (
    <>
      <div className="hero">
        <img src="/images/hero/hero-picture.png" className="background"></img>
        <div className="hero-card">
          <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
          <Input
            iconUrl="/icons/search-icon.svg"
            iconSize={31}
            iconDirection={"left"}
            className="hero-input"
            placeHolder="Search for restaurant cuisine, chef"
          ></Input>
        </div>
      </div>

      <div className="routes-mobile-block">
        <Routes />
      </div>
    </>
  );
}

export default Hero;
