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
      <ImproveBusiness />
      <HomeBlogs />
      <FeedBack />
    </Fragment>
  );
};

export default Home1;
