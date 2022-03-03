import React from "react";
import Icon from "../icon/Icon";
import "./Button.scss";

interface IPropsButton {
  icon?: string;
  children?: any;
}

function Button(props: IPropsButton) {
  const { icon, children } = props;

  return (
    <button className="button">
      <span className="icon">
        <Icon url={icon}></Icon>
      </span>
      <span className="content">{children}</span>
    </button>
  );
}

export default Button;
