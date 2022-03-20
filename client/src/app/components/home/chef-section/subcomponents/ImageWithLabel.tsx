import React from "react";
import { SERVER_DEVELOPMENT_URL } from "../../../../../CONFIG";
import "../ChefSection.scss";

interface IPropsImageWithLabel {
  url: string;
  label: string;
}

function ImageWithLabel(props: IPropsImageWithLabel) {
  const { url, label } = props;
  console.log("url", url);

  return (
    <div className="image-container">
      <img src={SERVER_DEVELOPMENT_URL + url}></img>
      <div>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default ImageWithLabel;
