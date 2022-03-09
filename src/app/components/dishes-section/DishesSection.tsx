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
      <Title customClass="dishes-title">SIGNATURE DISH OF :</Title>
      <Carousel slidesToShowMobiles={1.2}>
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
            margin={5}
          ></Card>
        ))}
      </Carousel>
    </div>
  );
}

export default DishesSection;
