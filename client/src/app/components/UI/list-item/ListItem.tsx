import React from "react";
import "./ListItem.scss";

interface IPropsListItem {
  title: string;
  subtitle?: string;
  url?: string;
}

export default function ListItem(props: IPropsListItem) {
  const { title, subtitle, url } = props;
  return (
    <div className="list-item">
      <img src={url}></img>
      <div className="title">{title}</div>
    </div>
  );
}
