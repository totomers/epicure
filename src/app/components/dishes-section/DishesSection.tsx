import React from "react";
import { dishes } from "../../../_mock-data.ts/dishes";
import Card from "../UI/card/Card";
import Carousel from "../UI/carousel/Carousel";
import Marginer from "../UI/marginer/Marginer";
import Title from "../UI/title/Title";
import "./DishesSection.scss";

function DishesSection() {
  return (
    <div className="section dishes-section">
      <Marginer height={87}></Marginer>
      <Title>SIGNATURE DISH OF :</Title>
      <Marginer height={42}></Marginer>
      <Carousel>
        {dishes.map((d) => (
          <Card
            key={d.name}
            title={d.name}
            hoverTitle={d.restaurant}
            url={d.url}
            price={d.price}
            subtitle={d.descr}
            logo={d.logo}
            long={true}
            logoSize={39}
          ></Card>
        ))}
      </Carousel>
    </div>
  );
}

export default DishesSection;
