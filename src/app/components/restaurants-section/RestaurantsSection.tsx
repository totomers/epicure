import React from "react";
import Title from "../UI/title/Title";
import "./RestaurantsSection.scss";
import RestaurantCarousel from "./subcomponents/RestaurantCarousel";
function RestaurantsSection() {
  return (
    <div className="restaurants-section">
      <div className="restaurants-inner-container">
        <Title> THE POPULAR RESTAURANTS IN EPICURE :</Title>
        <RestaurantCarousel></RestaurantCarousel>
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
