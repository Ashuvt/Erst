import { useEffect } from "react";
import "./Home1Landing.scss";
import { images } from "../../../utils/images/images";
import WOW from "wow.js";


const Home1Landing = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="home1landing p_bottom">
      <div className="purple_blur">

      </div>
      <div className="content_wrap">
        <h1 className="wow slideInUp">
          Improve Your Business With <br /> Intelligent Analytics Suite
        </h1>
        <p className="wow slideInUp">
          This AI-powered tool can help businesses make data-driven decisions by
          providing deep insights into their operations, customers, and market
          trends. The Intelligent Analytics Suite can analyze large volumes of
          data in real-time and provide actionable recommendations that can help
          businesses optimize their processes and increase their revenue.
        </p>

        <button type="button" className="primarybtn wow slideInUp">
          Request your trial today
        </button>

        <div className="dahsboard">
        <img src={images.home1landing} alt="dashboard" />
          <div className="primary_glass left"></div>
          <div className="primary_glass right"></div>          
          <div className="secondary_glass right"></div>
        </div>
      </div>
    </section>
  );
};
export default Home1Landing;
