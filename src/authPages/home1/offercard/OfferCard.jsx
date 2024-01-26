import { Fragment, useState } from "react";
import "./OfferCard.scss";

const OfferCard = ({setCouponModel}) => {
    
  return (
    <Fragment>
      <div className="home_offer_card wow fadeInRight">
        <div className="top_box"></div>
        <div className="text_box">
          <h5 className="small_title">Get 25% off on RedTeam</h5>
          <p className="small_text">
            Get access to 50+ modules covering topics from basic to advance.
          </p>
          <button type="button" onClick={() => setCouponModel(true)}>Explore</button>
        </div>
      </div>
     
    </Fragment>
  );
};

export default OfferCard;
