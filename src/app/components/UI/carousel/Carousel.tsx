import React, { ReactChild } from "react";
import Slider, { Settings } from "react-slick";
import { screenMdMin } from "../../../../styles/breakpoints";
import "./Carousel.scss";
interface IPropsCarousel {
  children: any;
  customClass?: string;
  slidesToShow?: number;
  slidesToShowMobiles?: number;
}

function Carousel(props: IPropsCarousel) {
  const { customClass, slidesToShow, slidesToShowMobiles } = props;
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: 1,
    centerPadding: "50px",
    className: `carousel ${customClass}`,

    responsive: [
      {
        breakpoint: screenMdMin,
        settings: {
          slidesToShow: slidesToShowMobiles || 1.5,
          slidesToScroll: 1,
          infinite: false,
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
