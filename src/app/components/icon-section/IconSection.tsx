import React from "react";
import Icon from "../UI/icon/Icon";
import Title from "../UI/title/Title";
import "./IconSection.scss";

function IconSection() {
  const icons: { url: string; label: string }[] = [
    { url: "/icons/spicy-icon.svg", label: "Spicy" },
    { url: "/icons/vegetarian-icon.svg", label: "Vegetarian" },
    { url: "/icons/vegan-icon.svg", label: "Vegan" },
  ];
  return (
    <div className="section icons-section center grey">
      <Title>THE MEANING OF OUR ICONS :</Title>
      <div className="icons-container">
        {icons.map((i) => (
          <div key={i.label} className="icon-item">
            <Icon url={i.url} size={60}></Icon>
            <span>{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconSection;
