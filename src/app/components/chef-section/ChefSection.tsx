import React from "react";
import Title from "../UI/title/Title";
import "./ChefSection.scss";
import { c1 } from "../../../_mock-data.ts/chefs";
import ImageWithLabel from "./subcomponents/ImageWithLabel";
function ChefSection() {
  return (
    <div className="section chef-section">
      <Title>CHEF OF THE WEEK:</Title>
      <div className="about-chef-section">
        <ImageWithLabel url={c1.url} label={c1.name}></ImageWithLabel>
        <div className="chef-description">{c1.descr}</div>
      </div>
    </div>
  );
}

export default ChefSection;
