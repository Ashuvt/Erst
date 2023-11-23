import { Fragment, useEffect, useState } from "react";
import {images } from "../../../utils/images/images";
import "./FeedBack.scss";
import FeedBackCard from "./feedbackcard/FeedBackCard";
import FeedGrid from "./feedgrid/FeedGrid";

const FeedBack = () => {
  const testimonialsData = [
    {
      id: 0,
      name: "Alaa",
      text: "SOC Analyst at Kan11",
      profile: images.avtar,
      testimonial:"My experience with them was truly incredible. Over the course of a year with the company, I had the opportunity to immerse myself in the world of real-life cybersecurity attacks. Despite the complexity of the field, they skillfully guided us through the learning process, breaking it down into manageable steps as we progressed to an advanced level."
    },
    {
      id: 1,
      name: " Anonymous",
      text: "Works with the Military",
      profile: images.avtar,
      testimonial:"My experience with the company was like being part of a close-knit family. I started out as a gamer, but my interest in cybersecurity grew over time. Thanks to the Cyber Gain Center, I received all the support and resources I needed to enter the field and eventually work with the police forces."
    },
    {
      id: 2,
      name: "Mr.H.j.Shanksra",
      text: "Freelancer",
      profile: images.avtar,
      testimonial:"This company is special. They gave me a chance to learn and gain practical experience in the field, even though I didn't have a formal academic background. I was a self-learner, and Cyber Gain Center believed in me, so they gave me an opportunity. I worked hard to excel in my studies with them."
    },
    {
      id: 3,
      name: " Salman",
      text: "Cybersecurity Labs Devoleper at Cyber Gain Center - Israel Branch",
      profile: images.avtar,
      testimonial:"I began learning cybersecurity at the age of 14, primarily through self-study. Given my age, I didn't believe anyone would be willing to teach me until I discovered this company. At 17, I was eager to start a more professional path and obtain relevant certifications. While this is not the final step in my journey to gain knowledge and experience in the field, joining Cyber Gain Center was undoubtedly the right first step."
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
