import React, { ReactChild } from "react";
import "./Carousel.scss";
interface IPropsCarousel {
  children: any;
}

function Carousel(props: IPropsCarousel) {
  return <div className="carousel">{props.children}</div>;
}

export default Carousel;
