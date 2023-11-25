import { useEffect } from "react";
import { icons, images } from "../../../../utils/images/images";
import "./LeftScreen.scss";

const LeftScreen = ({ side, setSide, t }) => {

  return (
    <section className="benefit_suite_left p_top p_bottom">
      <div className="content_wrap">
        <div className={`text_content ${side ? 'goleft' : 'original'}`}>
          <h2 className="wow fadeInUp">{t('homeLeftTitle')}</h2>
          <p className="wow fadeInUp">
          {t('homeLeftPara')}
          </p>
          <button type="button" className="primarybtn wow fadeInUp" onClick={() => setSide(true)}>
          {t('homeLeftBtn')}
          </button>
        </div>
        <div className="box_card_side">
          <div className="box_card">
            <div className="btn_block">
              <button type="button" onClick={() => setSide(true)}>
                <img src={icons.whiteArrow} alt="arrow" />
              </button>
              <h6>{t('goRightBtn')}</h6>
            </div>
            <div className="overlay"></div>
            <img src={images.left} className="bg" alt="bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftScreen;
