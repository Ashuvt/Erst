import { useState, useEffect, useContext } from "react";
import { redirectContext } from "../../context/RoutingContext";
import "./SignIn.scss";
import { Fragment } from "react";
import LoginHeader from "../components/loginHeader/LoginHeader";
import { icon } from "../../utils/images/icons";
import FieldErrorMessage from "../components/errorMessage/FieldErrorMessage";
import WOW from "wow.js";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { baseUrl, signIn } from "../../utils/apidata";
import axios from "axios";

const SignIn = () => {
  const { signUpHandler, toastError, toastSuccess, goToAuthHome, goToForgotPassword } = useContext(redirectContext);

  const [loader, setLoader] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email formate!")
      .required("email is required!"),
    password: Yup.string().required("password is required!"),
  });

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [eye, setEye] = useState(false);

  const onSubmit = async (values) => {
    setLoader(true);
    try {
      const response = await axios.post(`${baseUrl}/${signIn}`, values);   
   
      if(response.data.success){   
        toastSuccess("Sign In Success!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("email", response.data.data.email);
        setLoader(false);
        goToAuthHome();
      }else{
        toastError(response.data.message);
        setLoader(false);
      }
    } catch (error) {
      console.log("ERROR:::", error);
      if (error.message) {
        toastError(error.message || "Something Went Wrong!");
      }
    }
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
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
                <label htmlFor="Email">email</label>
                <div className="input_wrap">
                  <Field
                    type="email"
                    placeholder="Email"
                    id="Email"
                    name="email"
                    autoComplete="off"
                  />
                  <img className="field_icon" src={icon.email} alt="email" />
                </div>
                <ErrorMessage name="email" component={FieldErrorMessage} />
              </div>

              <div className="auth_field mt wow fadeInUp">
                <label htmlFor="Password">password</label>

                <div className="input_wrap">
                  <Field
                    type={`${eye ? "text" : "password"}`}
                    placeholder="password"
                    id="Password"
                    name="password"
                    autoComplete="off"                  
                  />
                 
                  <button type="button" onClick={() => setEye(!eye)}>
                    {eye ? (
                      <img src={icon.eyeSlash} alt="email" />
                    ) : (
                      <img src={icon.eye} alt="email" />
                    )}
                  </button>
                </div>
                <ErrorMessage name="password" component={FieldErrorMessage} />
              </div>
              <button type="button" className="forgot_password wow fadeInUp" onClick={goToForgotPassword}>Forgot Password</button>
              <div className="btns">
                {loader ? 
                <button
                className="authbtn auth_primary wow fadeInUp"
                type="button"
                disabled
              >
                Loading...
              </button>
              :
              <button
                  className="authbtn auth_primary wow fadeInUp"
                  type="submit"
                >
                  Sign In
                </button>}
                <button
                  className="authbtn auth_secondary wow fadeInUp"
                  type="button"
                  onClick={signUpHandler}
                >
                  Get started for free
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </Fragment>
  );
};

export default SignIn;
