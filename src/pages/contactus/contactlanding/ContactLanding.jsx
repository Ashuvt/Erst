import "./ContactLanding.scss";
import { icons } from "../../../utils/images/images";
import CircleArrowBtn from "../../../components/circlearrowbtn/CircleArrowBtn";
import TextArrowBtn from "../../../components/textarrowbtn/TextArrowBtn"; 

const ContactLanding = () => {

  return (
    <section className="contact_landing">
      <div className="content_wrap">
        <h1 className="wow fadeInLeft">Lorem ipsum dolor sit amet consectetur.</h1>

        <div className="trial_wrap">
          <p className="wow fadeInRight">
            We guarantee quality <br /> improvement and development!
          </p>
          <div className="btn_line wow fadeInRight">
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
