import React from "react";
import { IRoute } from "../../../../interfaces/route.interface";
import { routes } from "../../../../_mock-data.ts/routes.data";
import Marginer from "../../UI/marginer/Marginer";
import "./HeroRoutes.scss";

function RouteItem(props: { route: IRoute }) {
  return <div className="hero-route-item"> {props.route.label}</div>;
}

function HeroRoutes() {
  return (
    <div className="routes-mobile-block">
      <Marginer height={40}></Marginer>
      <div className="hero-routes">
        {routes.map((r: IRoute) => (
          <RouteItem key={r.label} route={r} />
        ))}
      </div>
      <Marginer height={42}></Marginer>
    </div>
  );
}

export default HeroRoutes;
