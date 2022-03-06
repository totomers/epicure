import React from "react";
import { restaurants } from "../../../_mock-data.ts/restaurants";
import Card from "../UI/card/Card";
import Carousel from "../UI/carousel/Carousel";
import Marginer from "../UI/marginer/Marginer";
import Title from "../UI/title/Title";
import "./RestaurantsSection.scss";
function RestaurantsSection() {
  return (
    <div className="section center">
      <Marginer height={140}></Marginer>
      <div className="restaurants-inner-container">
        <Title customClass="restaurant-title-mobile">
          THE POPULAR RESTAURANTS IN EPICURE :
        </Title>
        <Marginer height={42}></Marginer>
        <Carousel>
          {restaurants.map((r) => (
            <Card
              key={r.name}
              title={r.name}
              subtitle={r.chef}
              url={r.url}
            ></Card>
          ))}
        </Carousel>
        <Marginer height={31}></Marginer>
        <div className="restaurant-footer">
          <button className="show-restaurants-button">
            <span>All Restaurants</span>
            <img src="/icons/right-arrow-icon.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsSection;
