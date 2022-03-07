import React from "react";
import Icon from "../icon/Icon";
import "./Button.scss";

interface IPropsButton {
  icon?: string;
  children?: any;
  customClass?: string;
  iconCustomClass?: string;
}

function Button(props: IPropsButton) {
  const { icon, children, customClass, iconCustomClass } = props;

  return (
    <button className={`button ${customClass}`}>
      <span className="icon">
        <Icon url={icon} customClass={iconCustomClass}></Icon>
      </span>
      <span className="content">{children}</span>
    </button>
  );
}

export default Button;
