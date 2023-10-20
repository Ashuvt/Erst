import { Fragment, useEffect } from "react";
import { icons, images } from "../../../utils/images/images";
import "./FeedBack.scss";
import FeedBackCard from "./feedbackcard/FeedBackCard";
import WOW from "wow.js";
import FeedGrid from "./feedgrid/FeedGrid";

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
       <FeedGrid />
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
