import React from "react";
import Icon from "../UI/icon/Icon";
import Marginer from "../UI/marginer/Marginer";
import Title from "../UI/title/Title";
import "./IconSection.scss";

function IconSection() {
  const icons: { url: string; label: string }[] = [
    { url: "/icons/spicy-icon.svg", label: "Spicy" },
    { url: "/icons/vegetarian-icon.svg", label: "Vegetarian" },
    { url: "/icons/vegan-icon.svg", label: "Vegan" },
  ];
  return (
    <div className="section icon-section grey">
      <Title letterSpacing={2.14} customClass={"icons-title"}>
        THE MEANING OF OUR ICONS :
      </Title>

      <div className="icons-container center">
        {icons.map((i) => (
          <div key={i.label} className="icon-item">
            <Icon url={i.url} customClass={"icon-icon"}></Icon>
            <Marginer height={27}></Marginer>
            <span>{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconSection;
