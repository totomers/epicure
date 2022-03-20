import React, { CSSProperties, useRef, useState } from "react";
import Icon from "../icon/Icon";
import "./Input.scss";
export interface IPropsInput {
  iconUrl?: string;
  iconCustomClass?: string;
  iconSize?: number;
  iconDirection?: "right" | "left";
  type?: string;
  className?: string;
  placeHolder?: string;
  onIconClick?: any;
}

function Input({ ...props }) {
  const {
    iconUrl,
    iconSize = 0,
    type = "text",
    iconDirection = "left",
    iconCustomClass,
    className,
    placeHolder,
    onChange,
    onIconClick,
    onDeleteIconClick,
  } = props;
  const inputRef = useRef(null);
  const [deleteIconHidden, setDeleteIconHidden] = useState(true);
  const padding = 20;
  const leftPadding =
    iconDirection == "left" ? `${padding + iconSize}` : `${padding}`;
  const rightPadding =
    iconDirection == "right" ? `${padding + iconSize}` : `${padding}`;

  return (
    <div className={`input-container ${className}`}>
      <input
        ref={inputRef}
        className={`input `}
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
        style={{
          padding: `0px ${rightPadding}px 0px ${leftPadding}px `,
        }}
      ></input>
      {iconUrl && (
        <div className={`input-icon ${iconDirection}`}>
          <Icon
            url={iconUrl}
            customClass={iconCustomClass}
            style={{
              marginRight: `15px`,
              marginLeft: `15px`,
            }}
            onIconClick={onIconClick}
          ></Icon>
        </div>
      )}

      {
        //@ts-ignore
        !(inputRef.current && inputRef.current!.value === "") && (
          <div className={`delete-icon right`}>
            <Icon
              url={"/icons/delete-icon.svg"}
              // customClass={iconCustomClass}
              style={{
                marginRight: `${iconDirection === "left" ? "15px" : "52px"} `,
                marginLeft: `15px`,
                height: "16px",
                width: "16px",
                userSelect: "none",
              }}
              onIconClick={() => {
                onDeleteIconClick();
                //@ts-ignore
                if (inputRef.current) inputRef.current.value = "";
                setDeleteIconHidden(true);
              }}
            ></Icon>
          </div>
        )
      }
    </div>
  );
}

export default Input;
