import "./Footer.scss";
import { icons, images } from "../../utils/images/images";

const Footer = () => {

  return (
    <section className="footer">
      <img src={images.bgPattern} alt="bg" className="pattern" />
      <img src={images.bgPattern} alt="bg" className="pattern right" />
      <div className="content_wrap">
        <footer>
          <h2 className="wow fadeInUp">
            Supercharge Your Business With Intelligent Analytics Suite!
          </h2>
          <div className="link_social wow fadeInUp">
            <div className="links_container">
              <a href="/">home</a>
              <a href="/">our pricing</a>
              <a href="/">blog</a>
              <a href="/">shop</a>
              <a href="/">support</a>
            </div>
            <div className="social_networks">
              <a href="https://www.instagram.com/" target="_blank">
                <img src={icons.instagram} alt="instagram" />
              </a>

              <a href="https://www.facebook.com/" target="_blank">
                <img src={icons.fb} alt="facevbook" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img src={icons.twitter} alt="twitter" />
              </a>
            </div>
          </div>
          {/* center Sec */}
          <div className="footer_center">

            <div className="anim_border top wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
            <div className="anim_border bottom wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>

            <div className="footer_grid">
              <div className="grid_box footer_form wow fadeInUp">
                <h5>Get In Touch</h5>
                <p>
                  Contact us today to see the power of Intelligent Analytics
                  Suite in action!
                </p>
                <form>
                  <input type="email" placeholder="Your e-mail" />
                  <button type="submit" className="submit">
                    <img src={icons.rightArrow} alt="arrow" />
                  </button>
                </form>
              </div>

              <div className="grid_box footer_connect wow fadeInUp">
                <h5>Stay Connect</h5>
                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                <div className="stay_connect">
                  <a href="tel:(239)555-0108">(239) 555-0108</a>
                  <a href="tel:(406)555-0120">(406) 555-0120</a>
                </div>
              </div>

              <div className="grid_box footer_download wow fadeInUp">
                <h5>Login And Signup</h5>
                <p>We suggest login to our portal</p>

                <div className="app_wrap">
                  <a href="#" target="_blank">
                    Login
                  </a>

                  <a href="#" target="_blank">
                    SignUp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom wow fadeInUp">
            <div className="left">
              <p>© All Rights Reserved 2023. Licensing</p>
            </div>
            <div className="right">
              <p>
                Powered by <span className="white">Supagrow</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
