import { Fragment } from "react";
import Home2Landing from "./home2landing/Home2Landing";
import MarqueeText from "./marqueetext/MarqueeText";
import AboutServices from "./aboutservices/AboutServices";
import Plan from "../home1/plan/Plan";
import HomeBlogs from "../home1/homeblogs/HomeBlogs";
import FeedBack from "../home1/feedback/FeedBack";
import Offer from "./offer/Offer";
import TipsBlog from "./tipsblog/TipsBlog";
import SuccessfulAnalytics from "./successanalytics/SuccessfulAnalytics";
import BenefitsOfSuite from "./benefitsofsuite/BenefitsOfSuite";
import BusinessAnalytics from "./businessanalytics/BusinessAnalytics";

const Home2 = () => {
  return (
    <Fragment>
      <Home2Landing />
      <MarqueeText />
      <AboutServices />
      <SuccessfulAnalytics />
      <BenefitsOfSuite />
      <BusinessAnalytics />
      <Plan />
      <Offer
        title="Get Started A 15-Days Free Trial"
        text="The SaaS model is the absence of costs for the purchase and
      maintenance of computer equipment on which you need to install
      “stationary” software. The stability of the system is maintained by
      the developer."
      />
      <FeedBack />
      <TipsBlog />
    </Fragment>
  );
};

export default Home2;
