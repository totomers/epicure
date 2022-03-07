import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./app/components/navbar/Navbar";
import ChefsPage from "./app/pages/ChefsPage";
import HomePage from "./app/pages/HomePage";
import RestaurantsPage from "./app/pages/RestaurantsPage";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="restaurants" element={<RestaurantsPage />} />
        <Route path="chefs" element={<ChefsPage />} />
      </Routes>
    </div>
  );
}

export default App;
