import "./getStartedForm.scss";
import { useState, useContext, Fragment } from "react";
import { icon } from "../../../utils/images/icons";
import { redirectContext } from "../../../context/RoutingContext";
import FieldErrorMessage from "../../components/errorMessage/FieldErrorMessage";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { contryDdToggler } from "../../../store/actions";
import { baseUrl } from "../../../utils/data/data";
import axios from "axios";

const GetStartedForm = () => {
  const countryList = [
    {
      id: 0,
      name: "Israel",
    },
    {
      id: 1,
      name: "UAE",
    },
    {
      id: 2,
      name: "India",
    },
    {
      id: 3,
      name: "Other",
    },
  ];

  const { signInHandler, goToOnBoarding, toastSuccess, toastError, toastInfo, toastClear } =
    useContext(redirectContext);
  const dispatch = useDispatch();
  const ddStatus = useSelector((state) => state.toggleReducer.countryDdStatus);
  const [eye, setEye] = useState(false);

  const initialValues = {
    name: "",
    country: "",
    email: "",
    password: "",
    role: 4,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .email("invalid email formate!")
      .required("email is required!"),
    password: Yup.string().required("password is required!"),
    country: Yup.string().required("Country is required!"),
  });

  const ddToggler = (event) => {
    event.stopPropagation();
    dispatch({ type: contryDdToggler(), payload: !ddStatus });
  };

  const registration = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/userregister`, { ...data });
      if (response.status === 200) {
        toastClear();
        toastSuccess("Registration Success!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.newUser.name);
        goToOnBoarding();
      } else {
        toastError("Email is already in use");
      }
   
    } catch (error) {
      if(error.response.status){
        toastClear();
        toastError(error.response.data.error);
      }
      console.log("ERror:::", error.response.data.error);
      // toastError(error);
    }
  };

  const onSubmit = (values, {resetForm}) => {
    registration(values);
    resetForm();
  };

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
              <Field type="text" placeholder="name" name="name" id="Name" autoComplete="off" />
            </div>
            <ErrorMessage name="name" component={FieldErrorMessage} />
          </div>

          <div className="auth_field mt wow fadeInUp">
            <label htmlFor="Country">country</label>
            <div className="input_wrap">
              <Field
                type="text"
                readOnly
                placeholder="Select"
                name="country"
                className="dd"
                onClick={ddToggler}
              />
              <div className={`option_wrap ${ddStatus ? "open" : "close"}`}>
                {countryList.map((data) => {
                  return (
                    <label className={`option`} key={data.id}>
                      {data.name}
                      <Field type="radio" name="country" value={data.name} />
                    </label>
                  );
                })}
              </div>
            </div>
            <ErrorMessage name="country" component={FieldErrorMessage} />
          </div>

          <div className="auth_field mt wow fadeInUp">
            <label htmlFor="Email">email</label>
            <div className="input_wrap">
              <Field type="email" placeholder="email" name="email" id="Email" autoComplete="off"/>
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
