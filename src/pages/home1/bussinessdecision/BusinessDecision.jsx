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
    <section className="business_decision p_top">
      <div className="content_wrap">
        <div className="text_wrap">
          <h2 className="wow fadeInUp">Lorem ipsum dolor sit amet.</h2>
          <p className="wow fadeInUp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam, esse officiis quibusdam rem ad id cumque, commodi odit molestiae suscipit sunt? Eligendi, iste enim! Id, reiciendis ullam temporibus necessitatibus voluptate unde esse magnam error recusandae.
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
