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
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";

const Home1 = () => {
  return (
    <Fragment>
      <Header />
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
      <Footer />
    </Fragment>
  );
};

export default Home1;
