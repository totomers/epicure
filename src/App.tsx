import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.scss";
import Navbar from "./app/components/navbar/Navbar";
import ChefsPage from "./app/pages/ChefsPage";
import HomePage from "./app/pages/HomePage";
import RestaurantsPage from "./app/pages/RestaurantsPage";
import AnimatePage from "./app/utils/AnimatePage";

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
        <Route path="/chefs" element={<ChefsPage />} />
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
