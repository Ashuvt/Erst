import { useEffect, useState } from "react";
import "./ComingSoon.scss";
import { NavLink } from "react-router-dom";
import { logoImage } from "../../utils/images/images";
import WOW from "wow.js";
import { useTranslation } from 'react-i18next';

const ComingSoon = () => {

  const { t } = useTranslation();

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
          <h1 className="wow fadeInUp">{t('soonMainTitle')}</h1>
          <h2 className="wow fadeInUp" data-wow-delay="0.25s">
          {t('soonSubTitle1')} <span>{t('soonSubTitle2')}</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.50s">{t('soonPara')}</p>
          <NavLink to="/contact">
          <button className="primarybtn wow fadeInUp" data-wow-delay="0.75s">{t('KnowMore')}</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
