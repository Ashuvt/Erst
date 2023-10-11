import { Fragment } from "react";
import "./Home1.scss";
import Home1Landing from "./home1landing/HomeLanding";
import Services from "./home1services/Services";
import BusinessDecision from "./bussinessdecision/BusinessDecision";
import Features from "./features/Features";

const Home1 = () => {
  return (
    <Fragment>
      <Home1Landing />
      <Services />
      <BusinessDecision />
      <Features />
    </Fragment>
  );
};

export default Home1;
