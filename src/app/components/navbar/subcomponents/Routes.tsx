import React from "react";
import { IRoute } from "../../../../interfaces/route.interface";
import { routes } from "../../../../_mock-data.ts/routes.data";
import "./Routes.scss";
import { Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ListAnimator from "../../../utils/ListAnimator";

function RouteItem(props: { route: IRoute }) {
  const { path, label } = props.route;
  return (
    <NavLink
      style={{ textDecoration: "none" }}
      key={path}
      to={path}
      className={({ isActive }) =>
        isActive
          ? "route-item Text-Style-2 active"
          : " route-item Text-Style-2 inactive"
      }
      // exact={true}
    >
      {props.route.label}
    </NavLink>
  );
}

function Routes() {
  return (
    <div className="routes">
      <ListAnimator className="routes">
        {routes.map((r: IRoute) => (
          <RouteItem key={r.label} route={r} />
        ))}
      </ListAnimator>
    </div>
  );
}

export default Routes;
