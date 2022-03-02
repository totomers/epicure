import React from "react";
import Input from "../UI/input/Input";
import Logo from "./sections/Logo";
import Routes from "./sections/Routes";
import "./Navbar.scss";
import Icon from "../UI/icon/Icon";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <Logo></Logo>
        <Routes></Routes>
      </div>
      <div className="right-navbar">
        <Input
          iconUrl="/icons/search-icon.svg"
          iconSize={30}
          iconDirection={"right"}
          className="navbar-input"
          placeHolder="Search for restaurant cuisine, chef"
        ></Input>
        <Icon url="/icons/user-icon.svg"></Icon>
        <Icon url="/icons/bag-icon.svg"></Icon>
      </div>
    </div>
  );
}

export default Navbar;
