import React, { useEffect } from "react";
import {
  useGetAllRestaurantsQuery,
  useGetPopularRestaurantsQuery,
} from "../../../../services/epicure";
// import { restaurants } from "../../../../_mock-data.ts/restaurants";
import Card from "../../UI/card/Card";
import Carousel from "../../UI/carousel/Carousel";
import Marginer from "../../UI/marginer/Marginer";
import Spinner from "../../UI/spinner/Spinner";
import Title from "../../UI/title/Title";
import "./RestaurantsSection.scss";
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
  const { data, error, isLoading, isSuccess } =
    useGetPopularRestaurantsQuery(null);
  const restaurants = data?.restaurants;
  console.log(restaurants);

  return (
    <div className="section restaurant-section center">
      <div className="restaurants-inner-container">
        <Title customClass="restaurant-title-mobile">
          THE POPULAR RESTAURANTS IN EPICURE :
        </Title>

        <div className="carousel-container">
          {isSuccess && (
            <Carousel
              footer={footer}
              // slidesToShowScreenMap={slidesToShowScreenMap}
            >
              {restaurants
                ? restaurants.map((r) => (
                    <Card
                      key={r.name}
                      title={r.name}
                      subtitle={r.chef.name}
                      url={r.url}
                      margin={5}
                    ></Card>
                  ))
                : []}
            </Carousel>
          )}
          {isLoading && <Spinner></Spinner>}
        </div>
        <Marginer height={31}></Marginer>
      </div>
    </div>
  );
}

export default RestaurantsSection;
