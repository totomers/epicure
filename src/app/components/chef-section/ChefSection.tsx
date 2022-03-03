import React from "react";
import Title from "../UI/title/Title";
import "./ChefSection.scss";
import { c1 } from "../../../_mock-data.ts/chefs";
import ImageWithLabel from "./subcomponents/ImageWithLabel";
import Carousel from "../UI/carousel/Carousel";
import Card from "../UI/card/Card";
function ChefSection() {
  const firstName = c1.name.split(" ")[0];

  return (
    <div className="section chef-section">
      <Title>CHEF OF THE WEEK:</Title>
      <div className="about-chef-section">
        <ImageWithLabel url={c1.url} label={c1.name}></ImageWithLabel>
        <div className="chef-description">{c1.descr}</div>
      </div>
      <div className="chef-restaurants-section">
        <Title align="start">{firstName + "'s restaurants: "}</Title>
        <Carousel>
          {c1.restaurants.map((r) => (
            <Card url={r.url} title={r.name} size={"small"}></Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ChefSection;
