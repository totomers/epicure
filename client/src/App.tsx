import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./app/components/navbar/Navbar";
import ChefPage from "./app/pages/ChefPage";
import ChefsPage from "./app/pages/ChefsPage";
import DishPage from "./app/pages/DishPage";
import HomePage from "./app/pages/HomePage";
import RestaurantPage from "./app/pages/RestaurantPage";
import RestaurantsPage from "./app/pages/RestaurantsPage";
import SearchPage from "./app/pages/SearchPage";

export const routes = [
  { path: "/", label: "Home", Component: HomePage },
  { path: "/chefs", label: "Chef", Component: ChefsPage },
  { path: "/restaurants", label: "Restaurant", Component: RestaurantsPage },
];

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:_id" element={<RestaurantPage />} />
        <Route path="/chefs" element={<ChefsPage />} />
        <Route path="/chefs/:_id" element={<ChefPage />} />
        <Route path="/dishes/:_id" element={<DishPage />} />
        <Route path="/search/:name" element={<SearchPage />}></Route>
      </Routes>
      {/* <div className="container"> */}
      {/* <Routes>
          {routes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              children={({ match, ...rest }: any) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  {match && (
                    <div className="page">
                      <Component />
                    </div>
                  )}
                </CSSTransition>
              )}
            />
          ))}
        </Routes> */}
    </div>
  );
}

export default App;
