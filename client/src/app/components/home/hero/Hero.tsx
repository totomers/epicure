import React from "react";
import { SlideAnimator } from "../../../utils/SlideAnimator";
import Routes from "../../navbar/subcomponents/Routes";
import SearchInput from "../../search-input/SearchInput";
import Input from "../../UI/input/Input";
import "./Hero.scss";
import HeroRoutes from "./subcomponents/HeroRoutes";
function Hero() {
  return (
    <>
      <div className="hero">
        <img src="/images/hero-picture.png" className="background" />
        {/* <img
          src="https://www.fao.org/images/devforestslibraries/default-album/forests.jpg?sfvrsn=2dd96b96_11"
          className="background"
        /> */}
        <SlideAnimator direction="down">
          <div className="hero-card">
            <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>

            <SearchInput
              iconUrl="/icons/search-icon.svg"
              iconSize={31}
              iconDirection={"left"}
              iconCustomClass={"hero-search-icon"}
              className="hero-input"
              placeHolder="Search for restaurant cuisine, chef"
            ></SearchInput>
          </div>
        </SlideAnimator>
      </div>

      <div className="hide-for-non-mobile">
        <HeroRoutes></HeroRoutes>
      </div>
    </>
  );
}

export default Hero;
