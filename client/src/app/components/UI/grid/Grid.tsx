import React from "react";
import "./Grid.scss";

interface IPropsGrid {
  children: any;
}
export default function Grid(props: IPropsGrid) {
  const { children } = props;
  return <div className="card-grid">{children}</div>;
}
