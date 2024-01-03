import { Fragment, useEffect, useState } from "react";
import { images } from "../../../utils/images/images";
import "./Events.scss";
import EventCard from "./eventcard/EventCard";
import { useSelector } from "react-redux";
import { baseUrl, getEvents } from "../../../utils/apidata";
import axios from "axios";

const Events = ({ t }) => {
  const eventData = [
    {
      id: 0,
      title: t("event1Title"),
      text: t("event1Des"),
      img: images.eventA,
      date: "april 18, 2023",
      url: "https://lnkd.in/dwqNidss",
    },
    {
      id: 1,
      title: t("event2Title"),
      text: t("event2Des"),
      img: images.eventB,
      date: "april 18, 2023",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7066764071139778560",
    },
    {
      id: 2,
      title: t("event3Title"),
      text: t("event3Des"),
      img: images.eventC,
      date: "april 18, 2023",
      url: "#",
    },
  ];

  const l = useSelector((state) => state.langReducer.lang);

  const [loader, setLoader] = useState(false);
  const [events, setEvents] = useState([]);

  const getEventsApi = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${baseUrl}/${getEvents}`);
      console.log("Events:::", response);
      if (response?.data?.success) {
        setEvents(response?.data?.data);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(true);
    }
  };

  useEffect(() => {
    getEventsApi();
  }, []);

  return (
    <section className="tips_blog p_bottom p_top">
      <div
        className={`content_wrap  ${["ar", "he"].includes(l) ? "flip" : ""}`}
      >
        <div className="left">
          <h2 className="wow fadeInUp">{t("eventHeader")}</h2>
          <p className="wow fadeInUp">{t("eventDes")}</p>
        </div>
     {
      loader ? <div className="loader_sec">
        <p>Loading...</p>
      </div>:
         <div className="blog_column">
         {events.length > 0 &&
           events.map((data) => {
             return (
               <Fragment key={data._id}>
                 <EventCard {...data} />
               </Fragment>
             );
           })}
       </div>
     }
      </div>
    </section>
  );
};

export default Events;
