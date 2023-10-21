import "./ContactLanding.scss";
import { useEffect } from "react";
import { icons } from "../../../utils/images/images";
import CircleArrowBtn from "../../../components/circlearrowbtn/CircleArrowBtn";
import TextArrowBtn from "../../../components/textarrowbtn/TextArrowBtn"; 
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
           <CircleArrowBtn />
           <TextArrowBtn text="start free trial" />
          </div>
        </div>
      </div>

      <div className="pink_blur first wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="pink_blur second wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="pink_blur third wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="blue_blur wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
    </section>
  );
};

export default ContactLanding;
