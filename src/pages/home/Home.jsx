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

import { useTranslation } from 'react-i18next';
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";

// import Services from "./home1services/Services";
// import BusinessDecision from "./bussinessdecision/BusinessDecision";
// import Features from "./features/Features";
// import HomeVideoBanner from "./videobanner/HomeVideoBanner";
// import Plan from "./plan/Plan";
// import Opportunities from "./opportunities/Opportunities";
// import ImproveBusiness from "./improvebusiness/ImproveBusiness";
 
const Home = () => {

  const { t } = useTranslation();
  

  
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);




  return (
    <Fragment>      
      <PreLoginLayout>
      <HomeLanding t={t} />
      <RoadMap t={t} />
      <BenefitsOfSuite t={t} />
      <Partners />
      <FeedBack t={t} />
      <Offer
        title={t('homeOfferTitle')}
        text={t('homeOfferPara')}
      />
      <HomeBlogs t={t} />




      {/* <Services /> */}
      {/* <BusinessDecision /> */}
      {/* <Features /> */}
      {/* <HomeVideoBanner /> */}
      {/* <Plan /> */}
      {/* <Opportunities /> */}
      {/* <ImproveBusiness /> */}




      </PreLoginLayout>
    </Fragment>
  );
};

export default Home;
