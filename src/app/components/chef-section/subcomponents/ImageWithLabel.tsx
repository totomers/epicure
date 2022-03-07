import React from "react";
import "../ChefSection.scss";

interface IPropsImageWithLabel {
  url: string;
  label: string;
}

function ImageWithLabel(props: IPropsImageWithLabel) {
  const { url, label } = props;
  return (
    <div className="image-container">
      <img src={url}></img>
      <div>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default ImageWithLabel;
