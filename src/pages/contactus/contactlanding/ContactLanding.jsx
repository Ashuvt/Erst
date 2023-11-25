import "./ContactLanding.scss";
import { icons } from "../../../utils/images/images";
import CircleArrowBtn from "../../../components/circlearrowbtn/CircleArrowBtn";
import TextArrowBtn from "../../../components/textarrowbtn/TextArrowBtn"; 
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import { useNavigate } from "react-router-dom";

const ContactLanding = ({t}) => {

  const navigate = useNavigate();

  return (
    <section className="contact_landing">
      <ParticlesBg />
      <div className="content_wrap">
        <h1 className="wow fadeInLeft">{t('constactLandingTitle')}</h1>

        <div className="trial_wrap">
          <p className="wow fadeInRight">
          {t('constactLandingPara')}
          </p>
          <div className="btn_line wow fadeInRight">
           <CircleArrowBtn />
           <TextArrowBtn text={t('constactLandingBtn')} clickHandler={() => navigate("/auth/getstarted")} />
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
