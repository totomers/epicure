import React, { ReactChild } from "react";
import Slider, { Settings } from "react-slick";
import {
  screenLgMin,
  screenMdMin,
  screenSmMin,
  screenXlMin,
} from "../../../../styles/breakpoints";
import "./Carousel.scss";
interface IPropsCarousel {
  children: any;
  footer?: any;
  customClass?: string;
  slidesToShow?: number;
  slidesToShowMobiles?: number;
  slidesToShowScreenMap?: { screen: number; amount: number }[];
}

function Carousel(props: IPropsCarousel) {
  const { customClass, footer, slidesToShow, slidesToShowMobiles } = props;
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
        breakpoint: 375,
        settings: {
          slidesToShow: slidesToShowMobiles || 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: slidesToShowMobiles ? 1 : 1.8,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: slidesToShowMobiles ? 1.8 : 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: slidesToShowMobiles ? 1.8 : 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShowMobiles ? 1.8 : 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: screenXlMin + 100,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          // centerMode: true,
          variableWidth: false,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: screenXlMin + 200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <Slider className="carousel" {...settings}>
        {props.children}
      </Slider>
      <div className="right">{footer}</div>
    </div>
  );
}

export default Carousel;
