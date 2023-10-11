import { Fragment } from "react";
import "./InfoCard.scss";

const InfoCard = ({ count, title, text, index }) => {
  return (
    <Fragment>
      <div className="info_card">
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
        ></div>
      </div>
    </Fragment>
  );
};

export default InfoCard;
