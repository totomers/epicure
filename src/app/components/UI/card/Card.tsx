import React from "react";
import Icon from "../icon/Icon";
import "./Card.scss";
interface IPropsCard {
  className?: string;
  hoverTitle?: string;
  url?: string;
  title: string;
  subtitle?: string;
  logo?: string;
  price?: string;
}

function Card(props: IPropsCard) {
  const { className, hoverTitle, url, title, subtitle, logo, price } = props;
  return (
    <div className="card-container">
      {hoverTitle && <div className="hover-title">{hoverTitle}</div>}

      <div className="card">
        <img src={url} className="card-image"></img>
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{subtitle}</div>
        {logo && (
          <div className="logo-bar">
            <Icon size={30} url={logo}></Icon>
          </div>
        )}
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
