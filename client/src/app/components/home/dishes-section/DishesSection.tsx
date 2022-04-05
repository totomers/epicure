import React from "react";
import {
  useGetAllDishesQuery,
  useGetSignatureDishesOfRestaurantsQuery,
} from "../../../../services/epicure";
// import { dishes } from "../../../../_mock-data.ts/dishes";
import Card from "../../UI/card/Card";
import Carousel from "../../UI/carousel/Carousel";
import Marginer from "../../UI/marginer/Marginer";
import Title from "../../UI/title/Title";
import "./DishesSection.scss";

function DishesSection() {
  const { data, isLoading, isSuccess } =
    useGetSignatureDishesOfRestaurantsQuery(null);
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
  console.log("signature dishessss:", data?.signatureDishes);

  return (
    <div className="section dishes-section">
      {/* <Title customClass="dishes-title">SIGNATURE DISH OF :</Title>
      {isSuccess && (
        <Carousel slidesToShowMobiles={1.2} slidesToShow={3}>
          {data?.signatureDishes?.map((d) => (
            <Card
              key={d.signatureDish.name}
              title={d.signatureDish.name}
              hoverTitle={d.restaurantName}
              url={d.signatureDish.url}
              price={d.signatureDish.price}
              subtitle={d.signatureDish.ingredients}
              logo={getIconUrl(d.signatureDish.tags && d.signatureDish.tags[0])}
              long={true}
              logoSize={39}
              margin={5}
            ></Card>
          ))}
        </Carousel>
      )} */}
    </div>
  );
}

export default DishesSection;
