import { useEffect, useState } from "react";
import "./ErrorPage.scss";
import { NavLink } from "react-router-dom";
import { logoImage } from "../../utils/images/images";
import WOW from "wow.js";

const ErrorPage = () => {
    const [flash, setFlash] = useState(false);

    useEffect(() => {
      const wow = new WOW();
      wow.init();

        // setTimeout(() => {
        //     setFlash(true);
        // },500);
    }, []);

  return (
    <section className="error_page">
        <div className="blur blue left wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        <div className="blur blue right wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        <div className="blur pink wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="content_wrap">
        <NavLink to="/">
          <img src={logoImage.logo} alt="logo" />
        </NavLink>
        <div className="content">
          <h1 className="wow slideInUp">404</h1>
          <h2 className="wow slideInUp" data-wow-delay="0.25s">
            Something’s <span>Not Right.</span>
          </h2>
          <p className="wow slideInUp" data-wow-delay="0.50s">We can’t find the page your are looking for.</p>
          <NavLink to="/">
          <button className="primarybtn wow slideInUp" data-wow-delay="0.75s">back to homepage</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
