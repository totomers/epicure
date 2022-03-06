import React, { CSSProperties } from "react";
import Icon from "../icon/Icon";
import "./Input.scss";
interface IPropsInput {
  iconUrl?: string;
  iconCustomClass?: string;
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
    iconCustomClass,
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
          padding: `0px ${rightPadding}px 0px ${leftPadding}px `,
        }}
      ></input>
      {iconUrl && (
        <div className={`input-icon ${iconDirection}`}>
          <Icon
            url={iconUrl}
            size={iconSize}
            customClass={iconCustomClass}
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
