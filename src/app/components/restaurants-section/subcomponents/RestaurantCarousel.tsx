import React from "react";
import { restaurants } from "../../../../_mock-data.ts/restaurants";
import "../RestaurantsSection.scss";
import Card from "../../UI/card/Card";

function RestaurantCarousel() {
  return (
    <div className="restaurant-Carousel">
      {restaurants.map((r) => (
        <Card title={r.name} subtitle={r.chef} url={r.url}></Card>
      ))}
    </div>
  );
}

export default RestaurantCarousel;
