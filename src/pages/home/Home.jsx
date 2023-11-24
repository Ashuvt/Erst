import { Fragment, useEffect } from "react";
import Header from "../../layouts/header/Header";
import HomeLanding from "./homelanding/HomeLanding";
import RoadMap from "./roadmap/RoadMap";
import BenefitsOfSuite from "../home2/benefitsofsuite/BenefitsOfSuite";
import Partners from "./plan/partners/Partners";
import FeedBack from "./feedback/FeedBack";
import Offer from "../home2/offer/Offer";
import HomeBlogs from "./homeblogs/HomeBlogs";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";

// import Services from "./home1services/Services";
// import BusinessDecision from "./bussinessdecision/BusinessDecision";
// import Features from "./features/Features";
// import HomeVideoBanner from "./videobanner/HomeVideoBanner";
// import Plan from "./plan/Plan";
// import Opportunities from "./opportunities/Opportunities";
// import ImproveBusiness from "./improvebusiness/ImproveBusiness";
 
const Home = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Fragment>
      <Header />
      <HomeLanding />
      <RoadMap />
      <BenefitsOfSuite />
      <Partners />
      <FeedBack />
      <Offer
        title="Get started a 15 days free trial."
        text="Explore our blog for the latest in cybersecurity—essential tips, training updates, and industry news. Get valuable insights on staying secure online, whether you're new to cybersecurity or a seasoned pro. Join us to stay informed and ready to face digital challenges."
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

export default Home;
