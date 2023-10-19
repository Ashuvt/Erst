import { Fragment } from "react";
import AboutServicesLanding from "./aboutserviceslanding/AboutServicesLanding";
import AboutServices from "../home2/aboutservices/AboutServices";
import SuccessfulAnalytics from "../home2/successanalytics/SuccessfulAnalytics";
import ChoosePlan from "./chooseplan/ChoosePlan";
import GetStartedForm from "./getstartedform/GetStartedForm";

const AboutOurServices = () => {
    return(
        <Fragment>
            <AboutServicesLanding />
            {/* Scroll btn section */}
            <AboutServices />
            <SuccessfulAnalytics />
            {/* slider */}
            <ChoosePlan />
            <GetStartedForm />
        </Fragment>
    )
};

export default AboutOurServices;