import "./Footer.scss";
import { icons, images } from "../../utils/images/images";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = ({t}) => {

const navigate = useNavigate();

const l = useSelector(state => state.langReducer.lang);

  return (
    <section className="footer">
      <img src={images.bgPattern} alt="bg" className="pattern" />
      <img src={images.bgPattern} alt="bg" className="pattern right" />
      <div className="content_wrap">
        <footer>
          <h2 className={`wow fadeInUp ${['ar', 'he'].includes(l) ? 'flip' : ''}`} >
          {t('footerTitle')}
          </h2>
          <div className={`link_social wow fadeInUp ${['ar', 'he'].includes(l) ? 'flip' : ''}`}>
            <div className="links_container">
              <NavLink to="/">{t('Home')}</NavLink>
              <NavLink to="/about">{t('About')}</NavLink>
              <NavLink to="/careers">{t('Careers')}</NavLink>
              <NavLink to="/blogs">{t('Blogs')}</NavLink>
              {/* <NavLink to="/faq">FAQ</NavLink> */}
              <NavLink to="/contactus">{t('Contact')}</NavLink>
            </div>
            <div className="social_networks">
              <a href="https://www.instagram.com/cyber_gain_center/" target="_blank">
                <img src={icons.instagram} alt="instagram" />
              </a>

              <a href="https://www.facebook.com/CyberGainCenter" target="_blank">
                <img src={icons.fb} alt="facevbook" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img src={icons.twitter} alt="twitter" />
              </a>
            </div>
          </div>
          {/* center Sec */}
          <div className="footer_center">
            <div
              className="anim_border top wow zoomIn"
              data-wow-delay="0.5s"
              data-wow-duration="1.5s"
            ></div>
            <div
              className="anim_border bottom wow zoomIn"
              data-wow-delay="0.5s"
              data-wow-duration="1.5s"
            ></div>

            <div className={`footer_grid ${['ar', 'he'].includes(l) ? 'flip' : ''}`}>
              <div className="grid_box footer_form wow fadeInUp">
                <h5>{t('title1')}</h5>
                <p>{t('text1')}</p>
                <form>
                  <input type="email" placeholder={t('email')} />
                  <button type="submit" className="submit">
                    <img src={icons.rightArrow} alt="arrow" />
                  </button>
                </form>
              </div>

              <div className="grid_box footer_connect wow fadeInUp">
                <h5>{t('title2')}</h5>
                <p>{t('text2')}</p>
                <div className="stay_connect">
                  <a href="tel:04-876-6326">04-876-6326</a>
                </div>
              </div>

              <div className="grid_box footer_download wow fadeInUp">
                <h5>{t('title3')}</h5>
                <p>{t('text3')}</p>

                <div className="app_wrap">
                  <button type="button" onClick={() => navigate("/auth/getStarted")}>
                  {t('signUp')}
                  </button>

                  <button type="button" onClick={() => navigate("/auth/login")}>
                  {t('signIn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`footer_bottom wow fadeInUp ${['ar', 'he'].includes(l) ? 'flip' : ''}`}>
            <div className="left">
              <p>{t('copyRight1')}</p>
            </div>
            <div className="right">
              <p>
              <p>{t('copyRight2')}</p>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
