import "./HomeLanding.scss";
import { images } from "../../../utils/images/images";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import { useNavigate } from "react-router-dom";

const HomeLanding = () => {

const navigate = useNavigate();

  return (
    <section className="home1landing p_bottom">

<ParticlesBg />
       
      <div
        className="purple_blur a wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
       <div
        className="purple_blur b wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div className="content_wrap">
        <h1 className="wow fadeInUp">
        True Cyber Security Is Preparing For What's Next, Not What Was Last
        </h1>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
        Enter CyberGain Academy your gateway to the cutting-edge realm of cybersecurity training. Immerse in our diverse range of hands-on training labs and rich learning resources, designed to empower tech enthusiasts from all backgrounds to master the art of cybersecurity and stay one step ahead in this ever-evolving landscape.
        </p>

        <button
          type="button"
          className="primarybtn wow fadeInUp"
          data-wow-delay="0.4s"
          onClick={() => navigate("/auth/getStarted")}
        >
          Sign Up
        </button>       
      </div>
    </section>
  );
};
export default HomeLanding;
