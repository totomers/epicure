import React, { CSSProperties } from "react";
import "./Icon.scss";

interface IPropsIcon {
  url?: string;
  size?: number;
  customClass?: string;
  style?: CSSProperties;
}

function Icon(props: IPropsIcon) {
  const { url = "", style, customClass } = props;
  return (
    <img
      src={url}
      style={{ ...style }}
      className={`default ${customClass}`}
    ></img>
  );
}

export default Icon;
