import { Fragment, useEffect, useState } from "react";
import "./Home.scss";
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
import CourseViewPopup from "./courseViewPopup/CourseViewPopup";

const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [popupStatus, setPopStatus] = useState(false);
  const [viewData, setViewData] = useState({})

  useState(() => {
    console.log("viewData:::", viewData);
  }, [viewData]);

  return (
    <Fragment>
      <PreLoginLayout>
        <HomeLanding t={t} />
        <RoadMap t={t} 
        setPopStatus={setPopStatus} 
        setViewData={setViewData}        
        />
        <LeftRightSec t={t} />
        <Partners />
        <Testimonials t={t} />
        <Offer title={t("homeOfferTitle")} text={t("homeOfferPara")} />
        <HomeBlogs t={t} />
      </PreLoginLayout>
      {popupStatus && <CourseViewPopup viewData={viewData} setPopStatus={setPopStatus}  />}
    </Fragment>
  );
};

export default Home;
