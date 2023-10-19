import { useEffect } from "react";
import "./AboutServicesLanding.scss";
import WOW from "wow.js";

const AboutServicesLanding = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);


  return (
    <section className="about_services_landing">
      <div className="content_wrap">
        <div className="title_content">
          <h1 className="wow slideInUp">Learn More About Us And Our Business Product</h1>
          <p className="wow slideInUp">
            This AI-powered tool can help businesses make data-driven decisions
            by providing deep insights into their operations, customers, and
            market trends. The Intelligent Analytics Suite can analyze large
            volumes of data in real-time and provide actionable recommendations
            that can help businesses optimize their processes and increase their
            revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutServicesLanding;
