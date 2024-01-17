import { useEffect, useState } from "react";
import "./Fail.scss";
import { NavLink } from "react-router-dom";
import { logoImage } from "../../utils/images/images";
import WOW from "wow.js";
import { useTranslation } from 'react-i18next';

const Fail = () => {

    useEffect(() => {
      const wow = new WOW();
      wow.init();
    }, []);

  return (
    <section className="fail">
        <div className="blur blue left wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        <div className="blur blue right wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        <div className="blur pink wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="content_wrap">
        <NavLink to="/">
         <img src={logoImage.logo} alt="logo" />
        </NavLink>
        <div className="content">
          <h1 className="wow fadeInUp">Payment Failed!</h1>
          <h2 className="wow fadeInUp" data-wow-delay="0.25s">
          Lorem, ipsum <span>Lorem, ipsum</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.50s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit tenetur soluta error explicabo ratione consequatur!</p>
          {/* <NavLink to="/contact">
          <button className="primarybtn wow fadeInUp" data-wow-delay="0.75s">Know More</button>
          </NavLink> */}
         
          <button className="primarybtn wow fadeInUp" data-wow-delay="0.75s">Know More</button>
         
        </div>
      </div>
    </section>
  );
};

export default Fail;
