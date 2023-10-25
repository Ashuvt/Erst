import { NavLink } from "react-router-dom";
import "./LoginHeader.scss";
import { logoImage } from "../../../utils/images/images";
import { icons } from "../../../utils/images/icons";

export const LoginHeader = ({ left, right, progress, progressCount }) => {
  return (
    <section className="login_header">
      <div className="auth_container">
        <header>
          <div className="left">
            {left && (
              <button type="button">
                <img src={icons.arrowLeft} alt="leftArrow" />
              </button>
            )}
          </div>

          <NavLink to="/">
            <img src={logoImage.logo} alt="logo" />
          </NavLink>

          <div className="right">
            {right && <button type="button">skip</button>}
          </div>
        </header>
      </div>
      {progress && (
        <div className="onboarding_stepper">
          <div className="filler" style={{ width: `${progressCount}%` }}></div>
        </div>
      )}
    </section>
  );
};

export default LoginHeader;
