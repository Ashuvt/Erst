import "./Footer.scss";
import { Fragment, useContext, useState } from "react";
import { icons, images } from "../../utils/images/images";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { redirectContext } from "../../context/RoutingContext";

const Footer = ({ t }) => {
  const { emailSubscribeApi } = useContext(redirectContext);

  const l = useSelector((state) => state.langReducer.lang);
  const { signInHandler, signUpHandler, domainName } =
    useContext(redirectContext);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailSubscription = (e) => {
    e.preventDefault();
    emailSubscribeApi(email);
    setEmail("");
  };

  const emailBlurHandler = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim().length === 0) {
      setError("Field is required!");
    } else if (!emailRegex.test(email)) {
      setError("Please Enter Valid Emial!");
    } else {
      setError("");
    }
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim().length === 0) {
      setError("Field is required!");
    } else if (!emailRegex.test(email)) {
      setError("Please Enter Valid Emial!");
    } else {
      setError("");
    }
  };
  return (
    <section className="footer">
      <img src={images.bgPattern} alt="bg" className="pattern" />
      <img src={images.bgPattern} alt="bg" className="pattern right" />
      <div className="content_wrap">
        <footer>
          <div
            className={`footer_title ${["ar", "he"].includes(l) ? "flip" : ""}`}
          >
            <h2 className="wow fadeInUp">{t("footerTitle")}</h2>
          </div>
          <div className="link_social wow fadeInUp">
            <div className="links_container">
              <NavLink to="/">{t("Home")}</NavLink>
              <NavLink to="/about">{t("About")}</NavLink>
              <NavLink to="/careers">{t("Careers")}</NavLink>
              <NavLink to="/blogs">{t("Blogs")}</NavLink>
              {/* <NavLink to="/faq">FAQ</NavLink> */}
              <NavLink to="/contactus">{t("Contact")}</NavLink>
            </div>
            <div
              className="social_networks"
              style={["ar", "he"].includes(l) ? { order: "-1" } : {}}
            >
              <a
                href="https://www.instagram.com/cyber_gain_center/"
                target="_blank"
              >
                <img src={icons.instagram} alt="instagram" />
              </a>

              <a
                href="https://www.facebook.com/CyberGainCenter"
                target="_blank"
              >
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

            <div
              className={`footer_grid ${
                ["ar", "he"].includes(l) ? "flip" : ""
              }`}
            >
              <div className="grid_box footer_form wow fadeInUp">
                <h5>{t("title1")}</h5>
                <p>{t("text1")}</p>
                <form>
                  <input
                    type="email"
                    placeholder={t("email")}
                    onChange={emailInputHandler}
                    value={email}
                    onBlur={emailBlurHandler}
                  />
                  {error ? (
                    <button type="button" className="submit" disabled>
                      <img src={icons.rightArrow} alt="arrow" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="submit"
                      onClick={emailSubscription}
                    >
                      <img src={icons.rightArrow} alt="arrow" />
                    </button>
                  )}
                </form>
                {error && <p>{error}</p>}
              </div>

              <div className="grid_box footer_connect wow fadeInUp">
                <h5>{t("title2")}</h5>
                <p>{t("text2")}</p>
                <div className="stay_connect">
                  <a href="tel:+972 52-209-3578">+972 52-209-3578</a>
                </div>
              </div>

              <div className="grid_box footer_download wow fadeInUp">
                {domainName() === "ae" ? (
                  <Fragment>
                    <h5>{t("title3")}</h5>
                    <p>{t("text3")}</p>
                  </Fragment>
                ) : (
                  <p>
                    React out to us at{" "}
                    <a href="mailto:info@cybergain.co.il">
                      info@cybergain.co.il
                    </a>{" "}
                    for more information.
                  </p>
                )}

                {domainName() === "ae" && (
                  <div className="app_wrap">
                    <button type="button" onClick={signUpHandler}>
                      {t("signUp")}
                    </button>

                    <button type="button" onClick={signInHandler}>
                      {t("signIn")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="footer_bottom wow fadeInUp">
            <div className="left">
              <p>{t("copyRight1")}</p>
            </div>
            <div className={`right ${["ar", "he"].includes(l) ? "flip" : ""}`}>
              <p>{t("copyRight2")}</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
