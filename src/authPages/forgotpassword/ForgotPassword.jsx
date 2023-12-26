import { useState, useEffect, useContext } from "react";
import { redirectContext } from "../../context/RoutingContext";
import "../signin/SignIn.scss";
import { Fragment } from "react";
import LoginHeader from "../components/loginHeader/LoginHeader";
import { icon } from "../../utils/images/icons";
import FieldErrorMessage from "../components/errorMessage/FieldErrorMessage";
import WOW from "wow.js";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { baseUrl, forgotPassword } from "../../utils/apidata";
import axios from "axios";

const ForgotPassword = () => {
  const { signInHandler, signUpHandler, toastError, toastSuccess} = useContext(redirectContext);

  const [loader, setLoader] = useState(false);

  const initialValues = {
    email: "",  
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email formate!")
      .required("email is required!"),  
  });

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [eye, setEye] = useState(false);

  const onSubmit = async (values) => {
    setLoader(true);
    try {
      const response = await axios.post(`${baseUrl}/${forgotPassword}`, values);   
      if(response.data.success){         
        setLoader(false);
        toastSuccess("We have send New password, please check Mail.")
        signInHandler();
      }else{
        toastError(response.data.message);
        setLoader(false);
      }
    } catch (error) {
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
                <h1 className="small_title wow fadeInUp">Forgot Password</h1>
                <div className="suggetion wow fadeInUp">
                  <p>Already Have An Account?</p>
                  <button type="button" onClick={signInHandler}>
                    <p>Sign In</p>
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
                  Next
                </button>}       
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </Fragment>
  );
};

export default ForgotPassword;
