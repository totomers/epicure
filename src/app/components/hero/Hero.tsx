import React from "react";
import Routes from "../navbar/subcomponents/Routes";
import Input from "../UI/input/Input";
import "./Hero.scss";
import HeroRoutes from "./subcomponents/HeroRoutes";
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
            iconCustomClass={"hero-search-icon"}
            className="hero-input"
            placeHolder="Search for restaurant cuisine, chef"
          ></Input>
        </div>
      </div>

      <div className="hide-for-non-mobile">
        <HeroRoutes></HeroRoutes>
      </div>
    </>
  );
}

export default Hero;
