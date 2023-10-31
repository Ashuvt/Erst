import { Fragment, useEffect } from "react";
import "./InfoCard.scss";
import WOW from "wow.js";

const InfoCard = ({ count, title, text, index }) => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <Fragment>
      <div className="info_card wow fadeInUp">
        <div className="step_icon">
          <p>{count}</p>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div
          className={`card_arrow ${index === 0 ? "first" : ""} ${
            index === 3 ? "last" : ""
          }`}
        ></div>
        <div
          className={`dot ${index === 0 ? "first" : ""} ${
            index === 3 ? "last" : ""
          }`}
        >
          <div className="out_circle wow zoomIn" data-wow-delay="0.4s" >
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoCard;
