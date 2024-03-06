import { Fragment, useContext } from "react";
import "./Header.scss";
import { icons, logoImage } from "../../utils/images/images";
import HembergerMenu from "../../components/hembergerIcon/HembergerMenu";
import { cartPopupToggler } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { sidebarToggler } from "../../store/actions";
import { useNavigate, NavLink } from "react-router-dom";
import LanguageDd from "../../components/languagedd/LanguageDd";
import { redirectContext } from "../../context/RoutingContext";

import "react-toastify/dist/ReactToastify.css";

const Header = ({ t }) => {
  const dispatch = useDispatch();
  const { signInHandler, signUpHandler, domainName } =
    useContext(redirectContext);

  const l = useSelector((state) => state.langReducer.lang);

  const sidebarStatus = useSelector(
    (state) => state.toggleReducer.sidebarStatus
  );

  const menuToggler = () => {
    if (sidebarStatus) {
      dispatch({ type: sidebarToggler(), payload: false });
    } else {
      dispatch({ type: sidebarToggler(), payload: true });
    }
  };

  return (
    <section className="header">
      <div className="content_wrap">
        <header className={["ar", "he"].includes(l) ? "flip" : ""}>
          <div className="logo_wrap">
            <a href="/">
              <img src={logoImage.logo} alt="logo" />
            </a>
          </div>
          <nav className={["ar", "he"].includes(l) ? "flip" : ""}>
            <NavLink to="/">{t("Home")}</NavLink>
            <NavLink to="/about">{t("About")}</NavLink>
            <NavLink to="/careers">{t("Careers")}</NavLink>
            <NavLink to="/blogs">{t("Blogs")}</NavLink>
            <NavLink to="/contact">{t("Contact")}</NavLink>
          </nav>
          <div className="btns">
            {/* <button type="button" className="signup" onClick={signInHandler}>
              {t("signIn")}
            </button> 
            <button type="button" className="signin" onClick={signUpHandler}>
              {t("signUp")}
            </button>*/}
            <HembergerMenu clickHandler={menuToggler} status={sidebarStatus} />

            {/* <LanguageDd /> */}
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
