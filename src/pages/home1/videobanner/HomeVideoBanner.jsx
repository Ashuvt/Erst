import { useEffect } from "react";
import "./HomeVideoBanner.scss";
import { icons, images } from "../../../utils/images/images";
import WOW from "wow.js";

const HomeVideoBanner = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <section className="home_video_banner">
      <div className="video_wrap">
        <img src={images.homeVideoBanner} alt="banner" />
      </div>
      <div className="overlay">
        <div className="text_content">
          <div className="content">
            <h2 className="wow slideInUp">The Future Of SaaS:<br /> Trends To Watch Out For</h2>
            <p className="wow slideInUp">
              Additionally, the Intelligent Analytics Suite can be integrated
              with other SaaS products, such as CRM and marketing automation
              tools, to provide a comprehensive view of business performance.
              This can help businesses identify new opportunities, optimize
              their marketing campaigns, and improve customer engagement.
            </p>
            <button className="primarybtn wow slideInUp">
              watch video
              <img src={icons.whiteplay} alt="play" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoBanner;
