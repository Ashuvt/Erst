import { Fragment } from "react";
import { images } from "../../../utils/images/images";
import "./TipsBlog.scss";
import TipsBlogCard from "./tipsblogcard/TipsBlogCard";

const TipsBlog = () => {
  const blogData = [
    {
      id: 0,
      title: "Cybersecurity youth program",
      text: "During the previous year, Cyber Gain Center conducted a youth program for the Arab middle schools. The center received offers from 10 different schools to teach cybersecurity. In total, Cyber Gain Center reached out to 20 different classes, with an average of 25 students per class",
      img: images.eventA,
      date: "april 18, 2023",
      url:"https://lnkd.in/dwqNidss"
    },
    {
      id: 1,
      title: "event at a Dubai University",
      text: "Mr.Ali(founder) paid a visit to the Birla Institute of Technology and Science, Pilani Dubai Campus! University where he hosted a Cybersecurity.",
      img: images.eventB,
      date: "april 18, 2023",
      url:"https://www.linkedin.com/feed/update/urn:li:activity:7066764071139778560"
    },
    {
      id: 2,
      title: "Upcomming Event",
      text: "GISEC In Dubai",
      img: images.eventC,
      date: "april 18, 2023",
      url:"#"
    },
  ];

  return (
    <section className="tips_blog p_bottom p_top">
      <div className="content_wrap">
        <div className="left">
          <h2 className="wow fadeInUp">Events</h2>
          <p className="wow fadeInUp">
            Discover our latest and upcoming webinars, diverse cybersecurity
            programs, and our active participation in notable events. Stay
            informed, learn, and engage as we contribute to and collaborate
            within the dynamic field of cybersecurity.
          </p>
          {/* <button type="button" className="primarybtn wow fadeInUp">
            view all Events
          </button> */}
        </div>
        <div className="blog_column">
          {blogData.map((data) => {
            return (
              <Fragment key={data.id}>
                <TipsBlogCard {...data} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TipsBlog;
