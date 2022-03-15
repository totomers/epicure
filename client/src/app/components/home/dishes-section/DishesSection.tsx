import React from "react";
import { useGetAllDishesQuery } from "../../../../services/epicure";
// import { dishes } from "../../../../_mock-data.ts/dishes";
import Card from "../../UI/card/Card";
import Carousel from "../../UI/carousel/Carousel";
import Marginer from "../../UI/marginer/Marginer";
import Title from "../../UI/title/Title";
import "./DishesSection.scss";

function DishesSection() {
  const { data, isLoading, isSuccess } = useGetAllDishesQuery(null);
  const getIconUrl = (tag: string | undefined) => {
    switch (tag) {
      case "spicy":
        return "/icons/spicy-icon.svg";

      case "vegetarian":
        return "/icons/vegetarian-icon.svg";
      case "vegan":
        return "/icons/vegan-icon.svg";

      default:
        return "";
    }
  };
  return (
    <div className="section dishes-section">
      <Title customClass="dishes-title">SIGNATURE DISH OF :</Title>
      {isSuccess && (
        <Carousel slidesToShowMobiles={1.2}>
          {data?.dishes?.map((d) => (
            <Card
              key={d.name}
              title={d.name}
              hoverTitle={d.restaurant.name}
              url={d.url}
              price={d.price}
              subtitle={d.ingredients}
              logo={getIconUrl(d.tags && d.tags[0])}
              long={true}
              logoSize={39}
              margin={5}
            ></Card>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default DishesSection;
