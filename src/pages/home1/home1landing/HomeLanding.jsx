import "./Home1Landing.scss";
import { images } from "../../../utils/images/images";

const Home1Landing = () => {
  return (
    <section className="home1landing p_bottom">
      <div
        className="purple_blur wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div className="content_wrap">
        <h1 className="wow fadeInUp">
          Improve Your Business With <br /> Intelligent Analytics Suite
        </h1>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          This AI-powered tool can help businesses make data-driven decisions by
          providing deep insights into their operations, customers, and market
          trends. The Intelligent Analytics Suite can analyze large volumes of
          data in real-time and provide actionable recommendations that can help
          businesses optimize their processes and increase their revenue.
        </p>

        <button
          type="button"
          className="primarybtn wow fadeInUp"
          data-wow-delay="0.4s"
        >
          Request your trial today
        </button>

        <div className="dahsboard">
          <img src={images.home1landing} alt="dashboard" />
          <div
            className="primary_glass left wow zoomIn"
            data-wow-delay="0.5s"
            data-wow-duration="1.5s"
          ></div>
          <div
            className="primary_glass right wow zoomIn"
            data-wow-delay="0.5s"
            data-wow-duration="1.5s"
          ></div>
          {/* <div
            className="secondary_glass right wow zoomIn"
            data-wow-delay="0.5s"
            data-wow-duration="1.5s"
          ></div> */}
        </div>
      </div>
    </section>
  );
};
export default Home1Landing;
