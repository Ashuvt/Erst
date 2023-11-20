import { useEffect } from "react";
import "./NewTechLanding.scss";
import WOW from "wow.js";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";

const NewTechLanding = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <section className="tech_landing">
      <ParticlesBg />
      <div className="content_wrap p_bottom">
      <div className="top_border"></div>
        <div className="title_wrap">
          <h1 className="wow fadeInUp">New Technology</h1>
          <p className="wow fadeInUp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit, officiis aperiam perferendis soluta optio. Amet sapiente blanditiis repellendus voluptatum!
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default NewTechLanding;
