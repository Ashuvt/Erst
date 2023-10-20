import { Fragment } from "react";
import "./FeedGrid.scss";
import { icons, images } from "../../../../utils/images/images";

const FeedGrid = () => {
  return (
    <Fragment>
      <div className="feed_greed">
        <div className="feed">
          <h5 className="wow slideInUp">Sofia</h5>
          <p className="wow slideInUp">
            Independent Visual Designer & Art Director
          </p>
          <div className="ratings wow slideInUp">
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
            <img src={icons.star} alt="star" />
          </div>
          <p className="feed_text wow slideInUp">
            "One of the best things about the Intelligent Analytics Suite is its
            user-friendly interface. Even team members with limited technical
            expertise can easily navigate and use the suite to analyze data and
            generate reports. It has made data analytics accessible to our
            entire team, leading to more informed decision-making at all levels
            of our organization."
          </p>
        </div>
        <div className="feed_video wow slideInUp">
          <div className="overlay"></div>
          <img src={images.feedPerson} alt="feed" className="person" />
        </div>
      </div>
    </Fragment>
  );
};

export default FeedGrid;