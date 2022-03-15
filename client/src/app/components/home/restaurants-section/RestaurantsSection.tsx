import React from "react";
import { restaurants } from "../../../../_mock-data.ts/restaurants";
import Card from "../../UI/card/Card";
import Carousel from "../../UI/carousel/Carousel";
import Marginer from "../../UI/marginer/Marginer";
import Title from "../../UI/title/Title";
import "./RestaurantsSection.scss";
import ClipLoader from "react-spinners/ClipLoader";
const footer = (
  <div className="hide-for-mobile">
    <div className="restaurant-footer ">
      <button className="show-restaurants-button">
        <span>All Restaurants</span>
        <img src="/icons/right-arrow-icon.svg"></img>
      </button>
    </div>
  </div>
);

function RestaurantsSection() {
  // const slidesToShowScreenMap = [
  //   { screen: 375, amount: 1.5 },
  //   { screen: 475, amount: 1.5 },
  //   { screen: 375, amount: 1.5 },
  // ];

  return (
    <div className="section restaurant-section center">
      <div className="restaurants-inner-container">
        <Title customClass="restaurant-title-mobile">
          THE POPULAR RESTAURANTS IN EPICURE :
        </Title>
        <ClipLoader color={"red"} loading={true} size={150} />
        <div className="carousel-container">
          <Carousel
            footer={footer}
            // slidesToShowScreenMap={slidesToShowScreenMap}
          >
            {restaurants.map((r) => (
              <Card
                key={r.name}
                title={r.name}
                subtitle={r.chef}
                url={r.url}
                margin={5}
              ></Card>
            ))}
          </Carousel>
        </div>
        <Marginer height={31}></Marginer>
      </div>
    </div>
  );
}

export default RestaurantsSection;
