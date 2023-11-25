import "./AboutServices.scss";
import { images } from "../../../utils/images/images";

const AboutServices = ({t}) => {
  return (
    <section className="about_services" id="aboutService">
      <div className="content_wrap p_bottom p_top">
        <div className="bottom_line wow zoomIn"></div>
        <div className="bisec_title">
          <h2 className="wow fadeInUp">{t('aboutMissionHeading')}</h2>
          <p className="wow fadeInUp">{t('aboutMissionPara')}</p>
        </div>
        <div className="bi_grid">
          <div className="img_wrap wow fadeInUp">
            <img src={images.about} alt="mobile" />
          </div>
          <div className="cards_wrap">
            <div className="content_card wow fadeInUp">             
              <h5>{t('aboutMission')}</h5>
              <p>{t('aboutMissionDes')}</p>
            </div>
            <div className="content_card wow fadeInUp">
            <h5>{t('aboutVision')}</h5>
              <p>{t('aboutVisionDes')}</p>
            </div>
            <div className="content_card wow fadeInUp">
            <h5>{t('aboutPurpose')}</h5>
              <p>{t('aboutPurposeDes')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="primary_light_glass wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
      <div className="primary_class first wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
      <div className="primary_class second wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
    </section>
  );
};

export default AboutServices;
