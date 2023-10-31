import { useEffect } from "react";
import "./BusinessDecision.scss";
import { images } from "../../../utils/images/images";
import WOW from "wow.js";

const BusinessDecision = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <section className="business_decision">
      <div className="content_wrap">
        <div className="text_wrap">
          <h2 className="wow fadeInUp">Always Analytical Business Decisions</h2>
          <p className="wow fadeInUp">
            Predictive analytics is the practice of using data, statistical
            algorithms, and machine learning techniques to identify the
            likelihood of future outcomes based on historical data. With
            predictive analytics, businesses can to improve performance.
          </p>
          <div className="btn_line wow fadeInUp">
            
            <button type="button" className="secondarybtn">testimonials</button>
            <button type="button" className="primarybtn">wo we are</button>
          </div>
        </div>
        <div className="img_wrap">
            <img src={images.pc} alt="pc" />
        </div>
      </div>
    </section>
  );
};

export default BusinessDecision;
