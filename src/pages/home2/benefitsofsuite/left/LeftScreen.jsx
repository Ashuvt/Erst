import { useEffect } from "react";
import { icons, images } from "../../../../utils/images/images";
import "./LeftScreen.scss";

const LeftScreen = ({ side, setSide }) => {

  return (
    <section className="benefit_suite_left p_top p_bottom">
      <div className="content_wrap">
        <div className={`text_content ${side ? 'goleft' : 'original'}`}>
          <h2 className="wow fadeInUp">About Cyber Gain Center.</h2>
          <p className="wow fadeInUp">
          Established in 2022, our cybersecurity training company, headquartered in Israel with additional branches in Dubai and India, stands as a beacon of comprehensive learning in the ever-evolving digital landscape. With over six generations of trainers, our center offers a dynamic fusion of expertise and innovation. We empower learners through hands-on labs and simulations, immersing them in real-life scenarios drawn from past incidents. This immersive approach fosters a deep understanding of cybersecurity, equipping our trainees with the skills and foresight needed to navigate and safeguard against modern threats.
          </p>
          <button type="button" className="primarybtn wow fadeInUp" onClick={() => setSide(true)}>
            know More
          </button>
        </div>
        <div className="box_card_side">
          <div className="box_card">
            <div className="btn_block">
              <button type="button" onClick={() => setSide(true)}>
                <img src={icons.whiteArrow} alt="arrow" />
              </button>
              <h6>For Universities</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.benefitSuite} className="bg" alt="bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftScreen;
