import React from "react";
import { IRoute } from "../../../../interfaces/route.interface";
import { routes } from "../../../../_mock-data.ts/routes.data";
import "./Routes.scss";
import { Link } from "react-router-dom";
function RouteItem(props: { route: IRoute }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={props.route.path}
      className="route-item Text-Style-2"
    >
      {props.route.label}
    </Link>
  );
}

function Routes() {
  return (
    <div className="routes">
      {routes.map((r: IRoute) => (
        <RouteItem key={r.label} route={r} />
      ))}
    </div>
  );
}

export default Routes;
