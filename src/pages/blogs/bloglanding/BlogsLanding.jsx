import { useEffect } from "react";
import "./BlogsLanding.scss";
import WOW from "wow.js";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";

const BlogsLanding = () => {

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
          <h1 className="wow fadeInUp">All Blogs</h1>
          <p className="wow fadeInUp">
          Explore our blog for the latest in cybersecurity—essential tips, training updates, and industry news. Get valuable insights on staying secure online, whether you're new to cybersecurity or a seasoned pro. Join us to stay informed and ready to face digital challenges.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default BlogsLanding;
