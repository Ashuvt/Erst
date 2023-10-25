import { NavLink } from "react-bootstrap";
import { useState } from "react";
import "./Login.scss";
import { Fragment } from "react";
import LoginHeader from "../components/loginHeader/LoginHeader";
import { icons } from "../../utils/images/icons";

const Login = () => {
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
              <h1 className="small_title">Login</h1>
              <div className="suggetion">
                <p>New user?</p>
                <button type="button">
                  <p>Get started for free</p>
                </button>
              </div>
            </div>

            <div className="auth_field">
              <label>email</label>
              <div className="input_wrap">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={loginForm.email}
                  onChange={inputHandler}
                />
                <img className="field_icon" src={icons.email} alt="email" />
              </div>
            </div>

            <div className="auth_field mt">
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
                    <img src={icons.eyeSlash} alt="email" />
                  ) : (
                    <img src={icons.eye} alt="email" />
                  )}
                </button>
              </div>
            </div>

            <div className="btns">
              <button
                type="button"
                className="authbtn auth_primary"
                onClick={loginHandler}
              >
                Login
              </button>
              <button type="button" className="authbtn auth_secondary">
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
