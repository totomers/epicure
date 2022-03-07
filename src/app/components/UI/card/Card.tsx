import React from "react";
import Icon from "../icon/Icon";
import Marginer from "../marginer/Marginer";
import "./Card.scss";
interface IPropsCard {
  className?: string;
  hoverTitle?: string;
  url?: string;
  title: string;
  subtitle?: string;
  long?: boolean;
  logo?: string;
  logoSize?: number;
  price?: number;
  margin?: number;
  size?: "default" | "small";
}

function Card(props: IPropsCard) {
  const {
    className,
    hoverTitle,
    url,
    title,
    subtitle,
    logo,
    price,
    logoSize,
    long = false,
    size = "default",
    margin,
  } = props;
  return (
    <div
      className={`card-container ${className}`}
      style={{ marginLeft: `${margin}px`, marginRight: `${margin}px` }}
    >
      {hoverTitle && (
        <>
          <div className="hover-title">{hoverTitle}</div>
          <Marginer height={23}></Marginer>
        </>
      )}

      <div className={`card ${size}`}>
        <img src={url} className={`card-image ${size} `}></img>
        <Marginer height={15}></Marginer>
        <div className={`card-title ${size}`}>{title}</div>
        <Marginer height={9.8}></Marginer>
        <div className={`card-subtitle ${long ? "long" : ""}`}>{subtitle}</div>
        <Marginer height={25}></Marginer>
        <div className={`logo-bar ${long ? "long" : ""}`}>
          {logo && <Icon size={logoSize} url={logo}></Icon>}
        </div>

        {price && (
          <>
            <Marginer height={15}></Marginer>
            <div className="card-price-bar">
              <div className="bar"></div>
              <span className="price">
                <span className="sheckel">&#8362;</span>
                {price}
              </span>
              <div className="bar"></div>
            </div>
            <Marginer height={11}></Marginer>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
