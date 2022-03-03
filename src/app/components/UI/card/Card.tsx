import React from "react";
import Icon from "../icon/Icon";
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
  } = props;
  return (
    <div className={`card-container ${className}`}>
      {hoverTitle && <div className="hover-title">{hoverTitle}</div>}

      <div className={`card ${size}`}>
        <img src={url} className={`card-image  `}></img>
        <div className={`card-title ${size}`}>{title}</div>
        <div className={`card-subtitle ${long ? "long" : ""}`}>{subtitle}</div>
        <div className={`logo-bar ${long ? "long" : ""}`}>
          {logo && <Icon size={logoSize} url={logo}></Icon>}
        </div>

        {price && (
          <div className="card-price-bar">
            <div className="bar"></div>
            <span className="price">₪{price}</span>
            <div className="bar"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
