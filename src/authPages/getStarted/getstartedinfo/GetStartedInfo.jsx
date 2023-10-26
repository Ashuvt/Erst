import { useEffect } from "react";
import "./GetStartedInfo.scss";
import { images } from "../../../utils/images/images";
import TestimonialCard from "../../components/testimonialcard/TestimonialCard";
import WOW from "wow.js";

const GetStartedInfo = () => {
  const data = [
    {
      id: 0,
      img: images.getstartedA,
      text: "50+ Lessons",
    },
    {
      id: 1,
      img: images.getstartedB,
      text: "Live Classes",
    },
    {
      id: 2,
      img: images.getstartedC,
      text: "Student Groups",
    },
    {
      id: 3,
      img: images.getstartedD,
      text: "Certificate",
    },
    {
      id: 4,
      img: images.getstartedE,
      text: "Doubt Sessions",
    },
    {
      id: 5,
      img: images.getstartedF,
      text: "Assignments",
    },
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <div className="getstarted_info">
      <img src={images.bgPatter} alt="bg" className="bg" />
      <h1 className="small_title wow slideInUp">
        Become a cybersecurity hero with Cybergain
      </h1>
      <p className="wow slideInUp">
        Explain how Cybergain can help students and professionals to learn and
        develop cybersecurity skills.{" "}
      </p>

      <div className="info_grid">
        {data.map((data) => {
          return (
            <div className="features_card wow slideInUp" key={data.id}>
              <div className="img_wraper">
                <img src={data.img} alt="poster" />
              </div>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>

      <TestimonialCard
        profile={images.profileb}
        name="rohan singh"
        text="“This is a testimonial. How cybergain helped me learn and develop my cybersecurity skills.”"
      />
    </div>
  );
};

export default GetStartedInfo;
