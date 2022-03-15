import React from "react";
import AboutUs from "../components/home/about-us/AboutUs";
import ChefSection from "../components/home/chef-section/ChefSection";
import DishesSection from "../components/home/dishes-section/DishesSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/home/hero/Hero";
import IconSection from "../components/home/icon-section/IconSection";
import Navbar from "../components/navbar/Navbar";
import RestaurantsSection from "../components/home/restaurants-section/RestaurantsSection";
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
