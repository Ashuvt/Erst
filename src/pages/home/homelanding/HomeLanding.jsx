import "./HomeLanding.scss";
import { images } from "../../../utils/images/images";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const HomeLanding = ({t}) => {

 



const navigate = useNavigate();

  return (
    <section className="home1landing p_bottom">
 
 
   
<ParticlesBg />
       
      <div
        className="purple_blur a wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
       <div
        className="purple_blur b wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div className="content_wrap">
        <h1 className="wow fadeInUp">
        {t('homeLandingTitle')}
        </h1>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
        {t('homeLandingPara')}
        </p>
        <br />
     

        <button
          type="button"
          className="primarybtn wow fadeInUp"
          data-wow-delay="0.4s"
          onClick={() => navigate("/auth/getStarted")}
        >
            {t('homeLandingBtn')}
        </button>      
   
      </div>
    </section>
  );
};
export default HomeLanding;
