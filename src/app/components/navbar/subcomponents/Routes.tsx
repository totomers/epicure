import React from "react";
import { IRoute } from "../../../../interfaces/route.interface";
import { routes } from "../../../../_mock-data.ts/routes.data";

function RouteItem(props: { route: IRoute }) {
  return <div className="route-item Text-Style-2"> {props.route.label}</div>;
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
