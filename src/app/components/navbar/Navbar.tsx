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

      <div className="navbar">
        <div className="left-navbar">
          <Logo></Logo>
          <Routes></Routes>
        </div>
        <div className="right-navbar">
          <Input
            iconUrl="/icons/search-icon.svg"
            iconSize={22}
            iconDirection={"right"}
            className="navbar-input"
            placeHolder="Search for restaurant cuisine, chef"
          ></Input>
          <Icon url="/icons/user-icon.svg" size={22}></Icon>
          <Icon url="/icons/bag-icon.svg" size={22}></Icon>
        </div>
      </div>
      <Marginer height={14}></Marginer>
    </>
  );
}

export default Navbar;
