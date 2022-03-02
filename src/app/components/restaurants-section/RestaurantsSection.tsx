import React from "react";
import { restaurants } from "../../../_mock-data.ts/restaurants";
import Card from "../UI/card/Card";
import Carousel from "../UI/carousel/Carousel";
import Title from "../UI/title/Title";
import "./RestaurantsSection.scss";
function RestaurantsSection() {
  return (
    <div className="section">
      <div className="restaurants-inner-container">
        <Title> THE POPULAR RESTAURANTS IN EPICURE :</Title>
        <Carousel>
          {restaurants.map((r) => (
            <Card title={r.name} subtitle={r.chef} url={r.url}></Card>
          ))}
        </Carousel>
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
