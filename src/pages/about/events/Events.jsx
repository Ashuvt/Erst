import { Fragment } from "react";
import { images } from "../../../utils/images/images";
import "./Events.scss";
import EventCard from "./eventcard/EventCard"
import { useSelector } from "react-redux";

const Events = ({t}) => {
  const eventData = [
    {
      id: 0,
      title:t('event1Title'),
      text:t('event1Des'),
      img: images.eventA,
      date: "april 18, 2023",
      url:"https://lnkd.in/dwqNidss"
    },
    {
      id: 1,
      title:t('event2Title'),
      text:t('event2Des'),
      img: images.eventB,
      date: "april 18, 2023",
      url:"https://www.linkedin.com/feed/update/urn:li:activity:7066764071139778560"
    },
    {
      id: 2,
      title:t('event3Title'),
      text:t('event3Des'),
      img: images.eventC,
      date: "april 18, 2023",
      url:"#"
    },
  ];

  const l = useSelector(state => state.langReducer.lang);

  return (
    <section className="tips_blog p_bottom p_top">
      <div className={`content_wrap  ${['ar', 'he'].includes(l) ? 'flip' : ''}`}>
        <div className="left">
          <h2 className="wow fadeInUp">{t('eventHeader')}</h2>
          <p className="wow fadeInUp">{t('eventDes')}</p>
          {/* <button type="button" className="primarybtn wow fadeInUp">
            view all Events
          </button> */}
        </div>
        <div className="blog_column">
          {eventData.map((data) => {
            return (
              <Fragment key={data.id}>
                <EventCard {...data} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
