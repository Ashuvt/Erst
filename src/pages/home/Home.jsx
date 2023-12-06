import { Fragment, useEffect } from "react";
import WOW from "wow.js";
import { useTranslation } from "react-i18next";

// Components
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";
import HomeLanding from "./homelanding/HomeLanding";
import RoadMap from "./roadmap/RoadMap";
import LeftRightSec from "./leftrightsec/LeftRightSec";
import Partners from "../../components/partners/Partners";
import Testimonials from "./testimonials/Testimonials";
import Offer from "./offer/Offer";
import HomeBlogs from "./homeblogs/HomeBlogs";



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
        <LeftRightSec t={t} />
        <Partners />
        <Testimonials t={t} />
        <Offer title={t("homeOfferTitle")} text={t("homeOfferPara")} />
        <HomeBlogs t={t} />
      </PreLoginLayout>
    </Fragment>
  );
};

export default Home;
