import "./ContactLanding.scss";
import { useContext } from "react";
import { redirectContext  } from "../../../context/RoutingContext";
import CircleArrowBtn from "../../../components/circlearrowbtn/CircleArrowBtn";
import TextArrowBtn from "../../../components/textarrowbtn/TextArrowBtn"; 
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import { useSelector } from "react-redux";

const ContactLanding = ({t}) => {
const {signInHandler} = useContext(redirectContext);
  
  const l = useSelector(state => state.langReducer.lang);

  return (
    <section className="contact_landing">
      <ParticlesBg />
      <div className={`content_wrap ${['ar', 'he'].includes(l) ? 'flip' : ''}`}>
        <h1 className="wow fadeInLeft">{t('constactLandingTitle')}</h1>

        <div className="trial_wrap">
          <p className="wow fadeInRight">
          {t('constactLandingPara')}
          </p>
          <div className="btn_line wow fadeInRight">
           <CircleArrowBtn />
           <TextArrowBtn text={t('constactLandingBtn')} clickHandler={signInHandler} />
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
