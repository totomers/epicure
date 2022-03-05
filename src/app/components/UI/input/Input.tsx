import React, { CSSProperties } from "react";
import Icon from "../icon/Icon";
import "./Input.scss";
interface IPropsInput {
  iconUrl?: string;
  iconSize?: number;
  iconDirection?: "right" | "left";
  type?: string;
  className?: string;
  placeHolder?: string;
}

function Input(props: IPropsInput) {
  const {
    iconUrl,
    iconSize = 0,
    type = "text",
    iconDirection = "left",
    className,
    placeHolder,
  } = props;

  const padding = 20;
  const leftPadding =
    iconDirection == "left" ? `${padding + iconSize}` : `${padding}`;
  const rightPadding =
    iconDirection == "right" ? `${padding + iconSize}` : `${padding}`;

  return (
    <div className={`input-container ${className}`}>
      <input
        className={`input `}
        type={type}
        placeholder={placeHolder}
        style={{
          padding: `${padding}px ${rightPadding}px ${padding}px ${leftPadding}px `,
        }}
      ></input>
      {iconUrl && (
        <div className={`input-icon ${iconDirection}`}>
          <Icon
            url={iconUrl}
            size={iconSize}
            style={{
              marginRight: `15px`,
              marginLeft: `15px`,
            }}
          ></Icon>
        </div>
      )}
    </div>
  );
}

export default Input;
