import { Fragment, useEffect, useContext } from "react";
import LoginHeader from "../components/loginHeader/LoginHeader";
import "./GetStarted.scss";
import GetStartedInfo from "./getstartedinfo/GetStartedInfo";
import GetStartedForm from "./getStartedForm/getStartedForm";
import WOW from "wow.js";
import { useDispatch } from "react-redux";
import { redirectContext } from "../../context/RoutingContext";

const GetStarted = () => {

  const {resetAllState} = useContext(redirectContext);
  
const dispatch = useDispatch();
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
      <section className="get_started" onClick={resetAllState} >
        <div className="auth_container">
          <GetStartedInfo />
          <GetStartedForm />
        </div>
      </section>
    </Fragment>
  );
};

export default GetStarted;
