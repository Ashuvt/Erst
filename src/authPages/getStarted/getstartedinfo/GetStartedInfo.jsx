import "./GetStartedInfo.scss";
import { images } from "../../../utils/images/images";
import TestimonialCard from "../../components/testimonialcard/TestimonialCard";

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


  return (
    <div className="getstarted_info">
      <img src={images.bgPattern} alt="bg" className="bg" />
      <h1 className="small_title wow fadeInUp">
        Become a cybersecurity hero with Cybergain
      </h1>
      <p className="wow fadeInUp">
        Explain how Cybergain can help students and professionals to learn and
        develop cybersecurity skills.{" "}
      </p>

      <div className="info_grid">
        {data.map((data) => {
          return (
            <div className="features_card wow fadeInUp" key={data.id}>
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
