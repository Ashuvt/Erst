import { Fragment, useEffect } from "react";
import LoginHeader from "../components/loginHeader/LoginHeader";
import "./GetStarted.scss";
import GetStartedInfo from "./getstartedinfo/GetStartedInfo";
import GetStartedForm from "./getStartedForm/getStartedForm";
import WOW from "wow.js";

const GetStarted = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <Fragment>
      <LoginHeader
        left={false}
        right={false}
        progress={false}
        progressCount={0}
      />
      <section className="get_started">
        <div className="auth_container">
          <GetStartedInfo />
          <GetStartedForm />
        </div>
      </section>
    </Fragment>
  );
};

export default GetStarted;
