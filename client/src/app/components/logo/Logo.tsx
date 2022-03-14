import React from "react";
import "./Logo.scss";
interface ILogo {
  size?: "default" | "large";
}

function Logo(props: ILogo) {
  const { size } = props;
  return (
    <div className={`logo ${size}`}>
      <img src="/icons/epicure-icon.png" className="logo-img"></img>
      <span className="EPICURE Text-Style-6">EPICURE</span>
    </div>
  );
}

export default Logo;
