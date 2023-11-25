import { useState, useEffect } from "react";
import "./Home2Landing.scss";
import WOW from "wow.js";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import { useNavigate } from "react-router-dom";

const Home2Landing = ({t}) => {
const navigate = useNavigate();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const wow = new WOW();
    wow.init();

    const values = [0, 50, 0];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCount(values[currentIndex]);
      currentIndex = (currentIndex + 1) % values.length;
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="home2_landing p_bottom p_top">
    <ParticlesBg />
      <div className="content_wrap">
        <div className="text_content">
          <div className="dynamic wow fadeInUp">
            <h1>{t('aboutLandingTitle')}</h1>
            <div className="text_box">
              <div
                className="gradient_wrap"
                style={{ transform: `translateY(${-count}%)` }}
              >
                <h1>{t('aboutmovingTitle1')}</h1>
                <h1>{t('aboutmovingTitle2')}</h1>
              </div>             
            </div>


            <div
                className="mobile_gradient"                
              >
                      <h1>{t('aboutmovingTitle1')}</h1>
                <h1>{t('aboutmovingTitle2')}</h1>
              </div>
          </div>
          <p className="wow fadeInUp">{t('aboutLandingText')}</p>
        </div>
        <div className="btn_line wow fadeInUp">
          <div className="left">
            <div className="left_beam"></div>
            <h6>
            {t('aboutLandingOfferText1')} <br />  {t('aboutLandingOfferText2')}
            </h6>
          </div>
          <button
           className="primarybtn"
           onClick={() => navigate("/auth/getstarted")}
           >{t('aboutLandingBtn')}</button>
        </div>
      </div>
      <div className="primary_glass first"></div>
      <div className="primary_glass second"></div>
    </section>
  );
};

export default Home2Landing;
