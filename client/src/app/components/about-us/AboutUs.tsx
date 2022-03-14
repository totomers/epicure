import React from "react";
import Logo from "../logo/Logo";
import Button from "../UI/button/Button";
import Icon from "../UI/icon/Icon";
import Marginer from "../UI/marginer/Marginer";
import Title from "../UI/title/Title";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="section ">
      <div className="about-us-section start grey">
        {/* <Marginer height={65}></Marginer> */}
        <div className="hide-for-mobile">
          <Title align="start" customClass="about-us-section-title">
            ABOUT US :
          </Title>
        </div>
        <div className="hide-for-non-mobile">
          <Title align="center" customClass="about-us-section-title">
            ABOUT US :
          </Title>
        </div>
        <div className="text-logo-container">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum no eu ipsum. Cras porta
              malesuada eros.
            </p>
          </div>
          <div className="logo">
            <img src="/images/logos/about-logo.png"></img>
          </div>
        </div>
        <div className="buttons-container">
          <Button
            icon="/icons/apple-icon.svg"
            iconCustomClass={"about-apple-icon"}
            customClass={"about-button"}
          >
            <span className="Download-on-the-App">
              Download on the<span className="bigger">App Store</span>
            </span>
          </Button>
          <Button
            icon="/icons/play-icon.svg"
            iconCustomClass={"about-play-icon"}
            customClass={"about-button"}
          >
            <span className="Get-it-on-Google-Pla">
              <span className="bigger">Get it on</span>Google Play
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
