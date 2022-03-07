import React, { ReactChild } from "react";
import Slider, { Settings } from "react-slick";
import { screenMdMin } from "../../../../styles/breakpoints";
import "./Carousel.scss";
interface IPropsCarousel {
  children: any;
  customClass?: string;
}

function Carousel(props: IPropsCarousel) {
  const { customClass } = props;
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "50px",
    className: `carousel ${customClass}`,
    responsive: [
      {
        breakpoint: screenMdMin,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider className="carousel" {...settings}>
      {props.children}
    </Slider>
  );
}

export default Carousel;
