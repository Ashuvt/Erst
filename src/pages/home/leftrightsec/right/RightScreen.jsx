import { useNavigate } from "react-router-dom";
import { icons, images } from "../../../../utils/images/images";
import "./RightScreen.scss";

const RightScreen = ({side, setSide, t}) => {

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
                <h6>{t('goRightBtn')}</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.right} className="bg" alt="bg" />
          </div>
        </div>
        <div className={`text_content ${!side ? 'goright' : 'original'}`}>
          <h2 className="wow fadeInUp">{t('homeRightTitle')}</h2>
          <p className="wow fadeInUp">
          {t('homeRightPara')}
          </p>
          
          <a href="https://calendly.com/cybergain/meeting-with-ali-zinaty-ceo-of-cyber-gain-center" target="_blank" className="wow fadeInUp">
          {t('homeRightBtn')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default RightScreen;
