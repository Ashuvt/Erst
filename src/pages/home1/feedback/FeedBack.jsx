import { Fragment, useEffect } from "react";
import { icons, images } from "../../../utils/images/images";
import "./FeedBack.scss";
import FeedBackCard from "./feedbackcard/FeedBackCard";
import WOW from "wow.js";

const FeedBack = () => {
  const feedbackData = [
    {
      id: 0,
      name: "Sofia",
      text: "Independent Visual Designer & Art Director",
      profile: images.profilea,
    },
    {
      id: 1,
      name: "Fabio",
      text: "creative developer, studioLinkoin Gusto",
      profile: images.profileb,
    },
    {
      id: 2,
      name: "Angela",
      text: "Sr. Security Analist Alliafe Security Expert",
      profile: images.profilec,
    },
    {
      id: 3,
      name: "Louis",
      text: "Creative Director TUXOO Creative Co",
      profile: images.profiled,
    },
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <section className="feed_back p_bottom">
      <div className="content_wrap">
        <div className="feed_greed">
          <div className="feed">
            <h5 className="wow slideInUp">Sofia</h5>
            <p className="wow slideInUp">Independent Visual Designer & Art Director</p>
            <div className="ratings wow slideInUp">
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
            </div>
            <p className="feed_text wow slideInUp">
              "One of the best things about the Intelligent Analytics Suite is
              its user-friendly interface. Even team members with limited
              technical expertise can easily navigate and use the suite to
              analyze data and generate reports. It has made data analytics
              accessible to our entire team, leading to more informed
              decision-making at all levels of our organization."
            </p>
          </div>
          <div className="feed_video wow slideInUp">
            <div className="overlay"></div>
            <img src={images.feedPerson} alt="feed" className="person" />
          </div>
        </div>
        <div className="feedback_list wow slideInUp">
        {feedbackData.map((data) => {
          return (
            <Fragment key={data.id}>
              <FeedBackCard {...data} />
            </Fragment>
          );
        })}
      </div>
      </div>      
    </section>
  );
};

export default FeedBack;
