import { useNavigate } from "react-router-dom";
import { icons, images } from "../../../../utils/images/images";
import "./RightScreen.scss";

const RightScreen = ({side, setSide}) => {

  const navigate = useNavigate();

  return (
    <section className="benefit_suite_right p_top p_bottom">
      <div className="content_wrap">
       
        <div className="box_card_side">
          <div className="box_card">
            <div className="btn_block">
                <button type="button" onClick={() => setSide(false)}>
                    <img src={icons.whiteArrow} alt="arrow" />
                </button>
                <h6>For Universities</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.right} className="bg" alt="bg" />
          </div>
        </div>
        <div className={`text_content ${!side ? 'goright' : 'original'}`}>
          <h2 className="wow fadeInUp">Universities</h2>
          <p className="wow fadeInUp">
          Our enterprise program is meticulously crafted to meet each business's unique requirements. Tailoring a customized plan, we provide a range of options—online or in-person training, lab access, video resources, CyberGain Certification, and international certifications—to align with their specific preferences. Clients have the flexibility to select from our diverse course catalog or request a bespoke curriculum. Simply reach out, and we'll collaboratively build a plan that perfectly fits your needs. We offer complete flexibility—everything is up for discussion.
          </p>
          
          <a href="https://calendly.com/cybergain/meeting-with-ali-zinaty-ceo-of-cyber-gain-center" target="_blank" className="wow fadeInUp">
            By Package Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default RightScreen;
