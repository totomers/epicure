import React from "react";
import Input from "../UI/input/Input";
import Logo from "../logo/Logo";
import Routes from "./subcomponents/Routes";
import "./Navbar.scss";
import Icon from "../UI/icon/Icon";
import Marginer from "../UI/marginer/Marginer";
function Navbar() {
  return (
    <>
      <Marginer height={14}></Marginer>

      <div className="navbar relative-parent">
        <div className="left-navbar">
          <div className="hide-for-non-mobile center-row">
            <Icon size={19} url={"/icons/hamburger-icon.svg"}></Icon>
          </div>
          <div className="hide-for-mobile ">
            <div className="center-row">
              <Logo></Logo>
              <Routes></Routes>
            </div>
          </div>
        </div>
        <div className="absolute-layer center-row hide-for-non-mobile ">
          <div className="hide-for-non-mobile">
            <Icon url="/icons/epicure-icon.png" size={31}></Icon>
          </div>
        </div>
        <div className="right-navbar">
          <Input
            iconUrl="/icons/search-icon.svg"
            iconSize={22}
            iconDirection={"right"}
            className="navbar-input hide-for-mobile"
            placeHolder="Search for restaurant cuisine, chef"
          ></Input>
          <Icon
            url="/icons/search-icon.svg"
            size={22}
            customClass={"hide-for-non-mobile"}
          ></Icon>

          <Icon url="/icons/user-icon.svg" size={22}></Icon>
          <Icon url="/icons/bag-icon.svg" size={22}></Icon>
        </div>
      </div>
      <Marginer height={14}></Marginer>
    </>
  );
}

export default Navbar;
