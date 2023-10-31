import { useEffect } from "react";
import "./NewTechLanding.scss";
import WOW from "wow.js";

const NewTechLanding = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <section className="tech_landing">
      <div className="content_wrap p_bottom">
      <div className="top_border"></div>
        <div className="title_wrap">
          <h1 className="wow fadeInUp">New Technology</h1>
          <p className="wow fadeInUp">
            Welcome to our SaaS blog, where we make complex concepts simple and
            easy to understand. Our blog is dedicated to providing insights and
            updates f SaaS.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default NewTechLanding;
