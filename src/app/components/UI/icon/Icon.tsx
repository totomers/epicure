import React, { CSSProperties } from "react";
import "./Icon.scss";

interface IPropsIcon {
  url?: string;
  size?: number;
  style?: CSSProperties;
}

function Icon(props: IPropsIcon) {
  const { url = "", size = 30, style } = props;
  return <img src={url} style={{ width: size, height: size, ...style }}></img>;
}

export default Icon;
