import "./getStartedForm.scss";
import { useState, useContext } from "react";
import { icon } from "../../../utils/images/icons";
import { redirectContext } from "../../../context/RoutingContext";
import FieldErrorMessage from "../../components/errorMessage/FieldErrorMessage";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const GetStartedForm = () => {
  const { signInHandler, goToOnBoarding } = useContext(redirectContext);

  const [eye, setEye] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .email("invalid email formate!")
      .required("email is required!"),
    password: Yup.string().required("password is required!"),
  });

  const onSubmit = (values) => {
    console.log("Form data : ", values);
  };

  // const [getStartedForm, setGetStartedForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const inputHandler = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setGetStartedForm((values) => ({ ...values, [name]: value }));
  // };

  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   console.log(getStartedForm);
  // };

  return (
    <div className="get_started_form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="title">
            <h1 className="small_title wow fadeInUp">Get started</h1>
            <div className="suggetion wow fadeInUp">
              <p>Already have an account?</p>
              <button type="button" onClick={signInHandler}>
                <p>Sign In</p>
              </button>
            </div>
          </div>

          <div className="auth_field wow fadeInUp">
            <label htmlFor="Name">name</label>
            <div className="input_wrap">
              <Field type="text" placeholder="name" name="name" id="Name" />
            </div>
            <ErrorMessage name="name" component={FieldErrorMessage} />
          </div>

          <div className="auth_field mt wow fadeInUp">
            <label htmlFor="Email">email</label>
            <div className="input_wrap">
              <Field type="email" placeholder="email" name="email" id="Email" />
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
                name="password"
                id="Password"
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
          <p className="notice wow fadeInUp">
            At least 8 characters, 1 number, 1 lowercase letter, 1 uppercase
            letter
          </p>

          <div className="btns">
            <button className="authbtn auth_primary wow fadeInUp" type="submit">
              Get started for free
            </button>
            <button
              type="button"
              className="authbtn auth_secondary wow fadeInUp"
              onClick={signInHandler}
            >
              Sign In
            </button>
          </div>
          <p className="notice wow fadeInUp">
            By creating an account, you agree to our{" "}
            <span>Terms of Service</span> and <span>Privacy Policy.</span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default GetStartedForm;
