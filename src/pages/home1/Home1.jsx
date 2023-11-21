import { Fragment, useEffect } from "react";
import Home1Landing from "./home1landing/HomeLanding";
import Services from "./home1services/Services";
import BusinessDecision from "./bussinessdecision/BusinessDecision";
import Features from "./features/Features";
import HomeVideoBanner from "./videobanner/HomeVideoBanner";
import Plan from "./plan/Plan";
import Opportunities from "./opportunities/Opportunities";
import ImproveBusiness from "./improvebusiness/ImproveBusiness";
import HomeBlogs from "./homeblogs/HomeBlogs";
import FeedBack from "./feedback/FeedBack";
import BenefitsOfSuite from "../home2/benefitsofsuite/BenefitsOfSuite";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";
import Partners from "./plan/partners/Partners";
import Offer from "../home2/offer/Offer";
import RoadMap from "../roadmap/RoadMap";
 
const Home1 = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Fragment>
      <Header />
      <Home1Landing />
      <RoadMap />
      <BenefitsOfSuite />
      <Partners />
      <FeedBack />
      <Offer
        title="Get Started A 15-Days Free Trial"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis perferendis. Aperiam dolor facere sed? Labore, id quod delectus modi amet sequi ratione veritatis sint sed, voluptatum, architecto aperiam saepe."
      />
      <HomeBlogs />

      {/* <Services /> */}
      {/* <BusinessDecision /> */}
      {/* <Features /> */}
      {/* <HomeVideoBanner /> */}
      {/* <Plan /> */}
      {/* <Opportunities /> */}
      {/* <ImproveBusiness /> */}

      <Footer />
    </Fragment>
  );
};

export default Home1;
