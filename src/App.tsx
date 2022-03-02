import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./app/components/navbar/Navbar";
import Hero from "./app/components/hero/Hero";
import RestaurantsSection from "./app/components/restaurants-section/RestaurantsSection";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <RestaurantsSection></RestaurantsSection>
    </div>
  );
}

export default App;
