import React from "react";
import { useGetRestaurantsOfChefQuery } from "../../../../../services/epicure";
import Card from "../../../UI/card/Card";
import Carousel from "../../../UI/carousel/Carousel";
import Spinner from "../../../UI/spinner/Spinner";
import "../ChefSection.scss";
interface IPropsChefRestaurants {
  chefId: string | undefined;
}

export const ChefRestaurants = (props: IPropsChefRestaurants) => {
  const { chefId } = props;
  const { data, isLoading, isSuccess } = useGetRestaurantsOfChefQuery(chefId!);
  console.log("restaurants of chef", data);
  return (
    <>
      {isSuccess && (
        <Carousel
          customClass="align-left"
          slidesToShow={3}
          slidesToShowMobiles={2}
        >
          {data?.restaurants.map((r) => (
            <Card
              key={r.name}
              url={r.url}
              title={r.name}
              size={"small"}
              margin={13.3}
            ></Card>
          ))}
        </Carousel>
      )}
      {isLoading && (
        <div style={{ height: "600px" }}>
          <Spinner></Spinner>
        </div>
      )}
    </>
  );
};
