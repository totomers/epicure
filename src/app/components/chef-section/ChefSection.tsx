import React from "react";
import Title from "../UI/title/Title";
import "./ChefSection.scss";
import { c1 } from "../../../_mock-data.ts/chefs";
import ImageWithLabel from "./subcomponents/ImageWithLabel";
import Carousel from "../UI/carousel/Carousel";
import Card from "../UI/card/Card";
import Marginer from "../UI/marginer/Marginer";
function ChefSection() {
  const firstName = c1.name.split(" ")[0];

  return (
    <div className="section  chef-section">
      <Marginer height={100}></Marginer>
      <Title letterSpacing={2}>CHEF OF THE WEEK:</Title>
      <Marginer height={42}></Marginer>
      <div className="about-chef-section">
        <ImageWithLabel url={c1.url} label={c1.name}></ImageWithLabel>
        <div className="chef-description">{c1.descr}</div>
      </div>
      <Marginer height={59}></Marginer>
      <div className="chef-restaurants-section">
        <Title align="start">{firstName + "'s restaurants: "}</Title>
        <Marginer height={23}></Marginer>
        <Carousel>
          {c1.restaurants.map((r) => (
            <Card key={r.name} url={r.url} title={r.name} size={"small"}></Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ChefSection;
