import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./app/components/navbar/Navbar";
import Hero from "./app/components/hero/Hero";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;
