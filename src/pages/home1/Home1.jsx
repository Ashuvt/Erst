import { Fragment } from "react";
import "./Home1.scss";
import Home1Landing from "./home1landing/HomeLanding";
import Services from "./home1services/Services";
import BusinessDecision from "./bussinessdecision/BusinessDecision";
import Features from "./features/Features";
import HomeVideoBanner from "./videobanner/HomeVideoBanner";
import Plan from "./plan/Plan";
import Opportunities from "./opportunities/Opportunities";

const Home1 = () => {
  return (
    <Fragment>
      <Home1Landing />
      <Services />
      <BusinessDecision />
      <Features />
      <HomeVideoBanner />
      <Plan />
      <Opportunities />
    </Fragment>
  );
};

export default Home1;
