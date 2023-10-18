import { useEffect } from "react";
import "./Opportunities.scss";
import { icons, images } from "../../../utils/images/images";
import WOW from "wow.js";

const Opportunities = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <section className="home_opportunities p_bottom">
      <div className="content_wrap">
        <div className="detail">
          <h2 className="wow slideInUp">Discover New Opportunities</h2>
          <p className="wow slideInUp">
            Intelligent Analytics Suite can be integrated with other SaaS
            products, such as CRM and marketing automation tools, to provide a
            comprehensive view of business performance.
          </p>

          <button type="button" className="wow slideInUp">
            Provide support or help
            <div className="icon_box">
              <img src={icons.whiteArrow} alt="arrow" />
            </div>
          </button>

          <button type="button" className="wow slideInUp">
            Install the demo version now
            <div className="icon_box">
              <img src={icons.whiteArrow} alt="arrow" />
            </div>
            </button>

          <button type="button" className="wow slideInUp">            
            Install the demo version now
            <div className="icon_box">
              <img src={icons.whiteArrow} alt="arrow" />
            </div>
          </button>
        </div>
        <div className="img_side wow slideInUp">
          <img src={images.codeScreen} alt="screen" />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
