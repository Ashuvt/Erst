import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";
import "./LoginHeader.scss";
import { logoImage } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";

export const LoginHeader = ({
  left,
  right,
  progress,
  progressCount,
  setStep,
}) => {

  const {signUpHandler} = useContext(redirectContext);

  const backBtnHandler = () => {
    setStep((prev) => {
      if (prev === 1) {
        return signUpHandler();
      }else{
        return prev - 1;
      }
    });
  };

  return (
    <section className="login_header">
      <div className="auth_container">
        <header>
          <div className="left">
            {left && (
              <button type="button" onClick={backBtnHandler}>
                <img src={icon.arrowLeft} alt="leftArrow" />
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
          <div
            className="filler"
            style={{ width: `${progressCount * 25}%` }}
          ></div>
        </div>
      )}
    </section>
  );
};

export default LoginHeader;
