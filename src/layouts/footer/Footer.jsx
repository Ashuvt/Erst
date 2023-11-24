import "./Footer.scss";
import { icons, images } from "../../utils/images/images";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

const navigate = useNavigate();

  return (
    <section className="footer">
      <img src={images.bgPattern} alt="bg" className="pattern" />
      <img src={images.bgPattern} alt="bg" className="pattern right" />
      <div className="content_wrap">
        <footer>
          <h2 className="wow fadeInUp">
          Discover more about cybersecurity with Cyber Gain Center!
          </h2>
          <div className="link_social wow fadeInUp">
            <div className="links_container">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/careers">Career</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              {/* <NavLink to="/faq">FAQ</NavLink> */}
              <NavLink to="/contactus">Contact</NavLink>
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

            <div className="footer_grid">
              <div className="grid_box footer_form wow fadeInUp">
                <h5>Get In Touch</h5>
                <p>
                Reach out now and level up your cybersecurity
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
                <p>Reach out to us at :</p>
                <div className="stay_connect">
                  <a href="tel:04-876-6326">04-876-6326</a>
                </div>
              </div>

              <div className="grid_box footer_download wow fadeInUp">
                <h5>Sign In And Sign Up</h5>
                <p>We suggest signing in our portal</p>

                <div className="app_wrap">
                  <button type="button" onClick={() => navigate("/auth/getStarted")}>
                    Sign Up
                  </button>

                  <button type="button" onClick={() => navigate("/auth/login")}>
                    Sign In
                  </button>
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
