import { Fragment, useState } from "react";
import "./OfferCard.scss";

const OfferCard = ({ setCouponModel, title, description, code, offer }) => {
  return (
    <Fragment>
      <div className="home_offer_card wow fadeInRight">
        <div className="top_box"></div>
        <div className="text_box">
          <h5 className="small_title">{title}</h5>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <p>Offer : {offer}</p>
          <p className="small_text">code : {code}</p>
          <button type="button" onClick={() => setCouponModel(true)}>
            Explore
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default OfferCard;
