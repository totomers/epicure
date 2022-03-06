import React, { CSSProperties } from "react";
import "./Icon.scss";

interface IPropsIcon {
  url?: string;
  size?: number;
  customClass?: string;
  style?: CSSProperties;
}

function Icon(props: IPropsIcon) {
  const { url = "", size = 30, style, customClass } = props;
  return (
    <img
      src={url}
      className={customClass}
      style={{ height: size, width: "auto", ...style }}
    ></img>
  );
}

export default Icon;
