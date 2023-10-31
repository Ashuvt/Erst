import { Fragment } from "react";
import "./FeedGrid.scss";
import { icons, images } from "../../../../utils/images/images";

const FeedGrid = () => {
  return (
    <Fragment>
      <div className="feed_greed">
        <div className="feed">
          <h5 className="wow fadeInUp">Sofia</h5>
          <p className="wow fadeInUp">
            Independent Visual Designer & Art Director
          </p>
          <div className="ratings wow fadeInUp">
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
          </div>
          <p className="feed_text wow fadeInUp">
            "One of the best things about the Intelligent Analytics Suite is its
            user-friendly interface. Even team members with limited technical
            expertise can easily navigate and use the suite to analyze data and
            generate reports. It has made data analytics accessible to our
            entire team, leading to more informed decision-making at all levels
            of our organization."
          </p>
        </div>
        <div className="feed_video wow fadeInUp">
          <div className="overlay"></div>
          <img src={images.feedPerson} alt="feed" className="person" />
        </div>
        <div className="primary_blur first"></div>
        <div className="primary_blur second"></div>
      </div>
    </Fragment>
  );
};

export default FeedGrid;