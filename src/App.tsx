import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./app/components/navbar/Navbar";
import Hero from "./app/components/hero/Hero";
import RestaurantsSection from "./app/components/restaurants-section/RestaurantsSection";
import DishesSection from "./app/components/dishes-section/DishesSection";
import IconSection from "./app/components/icon-section/IconSection";
import ChefSection from "./app/components/chef-section/ChefSection";
import AboutUs from "./app/components/about-us/AboutUs";
import Footer from "./app/components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RestaurantsSection />
      {/* <DishesSection />
      <IconSection />
      <ChefSection />
      <AboutUs />
      <Footer /> */}
    </div>
  );
}

export default App;
