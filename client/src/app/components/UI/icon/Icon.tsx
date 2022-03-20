import React, { CSSProperties } from "react";
import "./Icon.scss";

interface IPropsIcon {
  url?: string;
  customClass?: string;
  style?: CSSProperties;
  onIconClick?: any;
}

function Icon(props: IPropsIcon) {
  const { url = "", style, customClass, onIconClick } = props;
  return (
    <a className="icon-container">
      <img
        src={url}
        style={{ ...style }}
        className={`default ${customClass}`}
        onClick={onIconClick}
      ></img>
    </a>
  );
}

export default Icon;
