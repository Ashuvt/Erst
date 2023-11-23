import { Fragment, useEffect } from "react";
import Home2Landing from "./home2landing/Home2Landing";
import MarqueeText from "./marqueetext/MarqueeText";
import AboutServices from "./aboutservices/AboutServices";
import Plan from "../home/plan/Plan";
import HomeBlogs from "../home/homeblogs/HomeBlogs";
import FeedBack from "../home/feedback/FeedBack";
import Offer from "./offer/Offer";
import TipsBlog from "./tipsblog/TipsBlog";
import SuccessfulAnalytics from "./successanalytics/SuccessfulAnalytics";
// import BenefitsOfSuite from "./benefitsofsuite/BenefitsOfSuite";
import BusinessAnalytics from "./businessanalytics/BusinessAnalytics";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";

const Home2 = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Fragment>
      <Header />
      <Home2Landing />
      <MarqueeText />
      <AboutServices />
      <SuccessfulAnalytics />
      {/* <BenefitsOfSuite /> */}
      <BusinessAnalytics />
      <Plan />
      <Offer
        title="Get Started A 15-Days Free Trial"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis perferendis. Aperiam dolor facere sed? Labore, id quod delectus modi amet sequi ratione veritatis sint sed, voluptatum, architecto aperiam saepe."
      />
      <FeedBack />
      <TipsBlog />
      <Footer />
    </Fragment>
  );
};

export default Home2;
