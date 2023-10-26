import "./getStartedForm.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { icon } from "../../../utils/images/icons";
import WOW from "wow.js";

const GetStartedForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [eye, setEye] = useState(false);
  const [getStartedForm, setGetStartedForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGetStartedForm((values) => ({ ...values, [name]: value }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(getStartedForm);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="get_started_form">
      <form>
        <div className="title">
          <h1 className="small_title wow slideInUp">Get started</h1>
          <div className="suggetion wow slideInUp">
            <p>Already have an account?</p>
            <button type="button" onClick={goToLogin}>
              <p>login</p>
            </button>
          </div>
        </div>

        <div className="auth_field wow slideInUp">
          <label>name</label>
          <div className="input_wrap">
            <input
              type="text"
              placeholder="name"
              name="name"
              value={getStartedForm.name}
              onChange={inputHandler}
            />
          </div>
        </div>

        <div className="auth_field mt wow slideInUp">
          <label>email</label>
          <div className="input_wrap">
            <input
              type="email"
              placeholder="email"
              name="email"
              value={getStartedForm.email}
              onChange={inputHandler}
            />
            <img className="field_icon" src={icon.email} alt="email" />
          </div>
        </div>

        <div className="auth_field mt wow slideInUp">
          <label>password</label>
          <div className="input_wrap">
            <input
              type={`${eye ? "text" : "password"}`}
              placeholder="password"
              name="password"
              value={getStartedForm.password}
              onChange={inputHandler}
            />
            <button type="button" onClick={() => setEye(!eye)}>
              {eye ? (
                <img src={icon.eyeSlash} alt="email" />
              ) : (
                <img src={icon.eye} alt="email" />
              )}
            </button>
          </div>
        </div>
        <p className="notice wow slideInUp">
        At least 8 characters, 1 number, 1 lowercase letter, 1 uppercase letter
        </p>

        <div className="btns">
          <button
            type="button"
            className="authbtn auth_primary wow slideInUp"
            onClick={() => navigate("/onborading")}

          >
            Get started for free
          </button>
          <button
            type="button"
            className="authbtn auth_secondary wow slideInUp"
            onClick={goToLogin}
          >
            login
          </button>
        </div>
        <p className="notice wow slideInUp">
        By creating an account, you agree to our <span>Terms of Service</span> and <span>Privacy Policy.</span>
        </p>
      </form>
    </div>
  );
};

export default GetStartedForm;
