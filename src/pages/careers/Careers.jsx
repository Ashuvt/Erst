import { Fragment, useEffect } from "react";
import MapLanding from "../../components/maplanding/MapLanding";
import JoinTeam from "./jointeam/JoinTeam";
// import IntelligentTeam from "./Intelligentteam/IntelligentTeam";
import SymmentricSlider from "../../components/symmentricslider/SymmentricSlider";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";
import CvForm from "./cvform/CvForm";
import { useTranslation } from 'react-i18next';
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";

const Careers = () => {

  const { t } = useTranslation();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <Fragment>
      <PreLoginLayout>
      <MapLanding
        title={t('careerLandingTitle')}
        text={t('careerLandingPara')}
      />
      <SymmentricSlider />
      <JoinTeam t={t} />
      <CvForm t={t} />
      </PreLoginLayout>
    </Fragment>
  );
};

export default Careers;
