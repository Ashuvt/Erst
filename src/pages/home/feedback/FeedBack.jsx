import { Fragment, useEffect, useState } from "react";
import {images } from "../../../utils/images/images";
import "./FeedBack.scss";
import FeedBackCard from "./feedbackcard/FeedBackCard";
import FeedGrid from "./feedgrid/FeedGrid";

const FeedBack = ({t}) => {
  const testimonialsData = [
    {
      id: 0,
      name:t('feedName1'),
      text:t('feedText1'),
      profile: images.avtar,
      testimonial:t('feedPara1')
    },
    {
      id: 1,
      name:t('feedName2'),
      text:t('feedText2'),
      profile: images.avtar,
      testimonial:t('feedPara2')
    },
    {
      id: 2,
      name:t('feedName3'),
      text:t('feedText3'),
      profile: images.avtar,
      testimonial:t('feedPara3')
    },
    {
      id: 3,
      name:t('feedName4'),
      text:t('feedText4'),
      profile: images.avtar,
      testimonial:t('feedPara4')
    },
  ];

  const [view, setView] = useState(testimonialsData[0]);


  return (
    <section className="feed_back p_bottom">
      <div className="content_wrap p_top">
       <FeedGrid data={view} />
        <div className="feedback_list">
        {testimonialsData.map((data, j) => {
          return (
            <Fragment key={data.id}>
              <FeedBackCard data={data} index={j} setView={setView} />
            </Fragment>
          );
        })}
      </div>
      </div>      
    </section>
  );
};

export default FeedBack;
