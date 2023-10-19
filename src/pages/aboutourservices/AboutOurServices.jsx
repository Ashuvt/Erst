import { Fragment } from "react";
import AboutServicesLanding from "./aboutserviceslanding/AboutServicesLanding";
import AboutServices from "../home2/aboutservices/AboutServices";
import ScrollBtn from "./scrollbtn/ScrollBtn";
import SuccessfulAnalytics from "../home2/successanalytics/SuccessfulAnalytics";
import ChoosePlan from "./chooseplan/ChoosePlan";
import GetStartedForm from "./getstartedform/GetStartedForm";


const AboutOurServices = () => {
  return (
    <Fragment>
      <AboutServicesLanding />
      <ScrollBtn />
      <AboutServices />
      <SuccessfulAnalytics />
      {/* slider */}
      <ChoosePlan />
      <GetStartedForm />
    </Fragment>
  );
};

export default AboutOurServices;
