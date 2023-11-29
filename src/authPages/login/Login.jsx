import { useState, useEffect, useContext } from "react";
import { redirectContext } from "../../context/RoutingContext"; 
import "./Login.scss";
import { Fragment } from "react";
import LoginHeader from "../components/loginHeader/LoginHeader";
import { icon } from "../../utils/images/icons";
import WOW from "wow.js";

const Login = () => {

 const {signUpHandler} = useContext(redirectContext);

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [eye, setEye] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((values) => ({ ...values, [name]: value }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };



  return (
    <Fragment>
      <LoginHeader
        left={false}
        right={false}
        progress={true}
        progressCount={0}
      />
      <section className="login_form">
        <div className="auth_container">
          <form>
            <div className="title">
              <h1 className="small_title wow fadeInUp">Sign In</h1>
              <div className="suggetion wow fadeInUp">
                <p>New user?</p>
                <button type="button" onClick={signUpHandler}>
                  <p>Get started for free</p>
                </button>
              </div>
            </div>

            <div className="auth_field wow fadeInUp">
              <label>email</label>
              <div className="input_wrap">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={loginForm.email}
                  onChange={inputHandler}
                />
                <img className="field_icon" src={icon.email} alt="email" />
              </div>
            </div>

            <div className="auth_field mt wow fadeInUp">
              <label>password</label>
              <div className="input_wrap">
                <input
                  type={`${eye ? "text" : "password"}`}
                  placeholder="password"
                  name="password"
                  value={loginForm.password}
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

            <div className="btns">
              <button
                type="button"
                className="authbtn auth_primary wow fadeInUp"
                onClick={loginHandler}
              >
               Sign In
              </button>
              <button
                type="button"
                className="authbtn auth_secondary wow fadeInUp"
                onClick={signUpHandler}
              >
                Get started for free
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
