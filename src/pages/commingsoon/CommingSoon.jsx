import { useEffect, useState } from "react";
import "./CommingSoon.scss";
import { NavLink } from "react-router-dom";
import { logoImage } from "../../utils/images/images";
import WOW from "wow.js";

const CommingSoon = () => {

    useEffect(() => {
      const wow = new WOW();
      wow.init();
    }, []);

  return (
    <section className="comming_soon">
        <div className="blur blue left wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        <div className="blur blue right wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        <div className="blur pink wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="content_wrap">
        <NavLink to="/">
         <img src={logoImage.logo} alt="logo" />
        </NavLink>
        <div className="content">
          <h1 className="wow slideInUp">Coming Soon...</h1>
          <h2 className="wow slideInUp" data-wow-delay="0.25s">
            Get Ready For  <span>Knowledge.</span>
          </h2>
          <p className="wow slideInUp" data-wow-delay="0.50s">Get Ready To Pushing Boundaries And Innovating In The Field Of Cyber Security.</p>
          <NavLink to="/">
          <button className="primarybtn wow slideInUp" data-wow-delay="0.75s">back to home</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
