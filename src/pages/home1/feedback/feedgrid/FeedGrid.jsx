import { Fragment } from "react";
import "./FeedGrid.scss";
import { icons, images } from "../../../../utils/images/images";

const FeedGrid = ({ data }) => {
  return (
    <Fragment>
      <div className="feed_greed">
        <div className="feed">
          <h5 className="wow fadeInUp">{data.name}</h5>
          <p className="wow fadeInUp">{data.text}</p>
          <div className="ratings wow fadeInUp">
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
          </div>
          <p className="feed_text wow fadeInUp">"{data.testimonial}"</p>
        </div>
        <div className="feed_video wow fadeInUp">
          <div className="img_wraper">
            <div className="overlay"></div>
            <img src={data.profile} alt="feed" />
          </div>
        </div>
        <div className="primary_blur"></div>
      </div>
    </Fragment>
  );
};

export default FeedGrid;
