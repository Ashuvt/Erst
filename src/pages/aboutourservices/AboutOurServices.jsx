import "./AboutOurServices.scss";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import AboutServicesLanding from "./aboutserviceslanding/AboutServicesLanding";
import AboutServices from "../home2/aboutservices/AboutServices";
import ScrollBtn from "./scrollbtn/ScrollBtn";
import SuccessfulAnalytics from "../home2/successanalytics/SuccessfulAnalytics";
import ChoosePlan from "./chooseplan/ChoosePlan";
import GetStartedForm from "./getstartedform/GetStartedForm";
import WOW from "wow.js";
import GeniusTeam from "./geniusteam/GeniusTeam";
import Parallexsquares from "./parallexsquares/parallexsquares";

const AboutOurServices = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Fragment>
      <div
        className="top_blur a wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="top_blur b wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="top_blur c wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <AboutServicesLanding />
      <ScrollBtn />
      <AboutServices />
      <SuccessfulAnalytics />
      <div className="pralex_effect">
      <GeniusTeam />
      <Parallexsquares />
      </div>
      <ChoosePlan />
      <GetStartedForm />
    </Fragment>
  );
};

export default AboutOurServices;