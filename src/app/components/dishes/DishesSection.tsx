import React from "react";
import { dishes } from "../../../_mock-data.ts/dishes";
import Card from "../UI/card/Card";
import Carousel from "../UI/carousel/Carousel";
import Title from "../UI/title/Title";

function DishesSection() {
  return (
    <div className="section">
      <Title>SIGNATURE DISH OF :</Title>
      <Carousel>
        {dishes.map((d) => (
          <Card
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
