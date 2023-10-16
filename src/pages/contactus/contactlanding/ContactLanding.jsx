import "./ContactLanding.scss";
import { useEffect } from "react";
import { icons } from "../../../utils/images/images";
import WOW from "wow.js";


const ContactLanding = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);  
  return (
    <section className="contact_landing">
      <div className="content_wrap">
        <h1 className="wow slideInLeft">We Will Be Glad To See You In Our Locations</h1>

        <div className="trial_wrap">
          <p className="wow slideInRight">
            We guarantee quality <br /> improvement and development!
          </p>
          <div className="btn_line wow slideInRight">
            <button type="button" className="round">
              <img src={icons.whiteArrow} alt="arrow" />
            </button>
            <button type="button" className="normal">
              watch video
              <img src={icons.whiteArrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="pink_blur first"></div>
      <div className="pink_blur second"></div>
      <div className="pink_blur third"></div>
      <div className="blue_blur"></div>
    </section>
  );
};

export default ContactLanding;
