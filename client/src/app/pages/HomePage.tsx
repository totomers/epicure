import React from "react";
import AboutUs from "../components/about-us/AboutUs";
import ChefSection from "../components/chef-section/ChefSection";
import DishesSection from "../components/dishes-section/DishesSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import IconSection from "../components/icon-section/IconSection";
import Navbar from "../components/navbar/Navbar";
import RestaurantsSection from "../components/restaurants-section/RestaurantsSection";
import PageAnimator from "../utils/PageAnimator";

function HomePage() {
  return (
    <PageAnimator>
      <Hero />
      <RestaurantsSection />
      <DishesSection />
      <IconSection />
      <ChefSection />
      <AboutUs />
      <Footer />
    </PageAnimator>
  );
}

export default HomePage;
