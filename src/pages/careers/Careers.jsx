import { Fragment, useEffect } from "react";
import WOW from "wow.js";
import { useTranslation } from "react-i18next";
// Components
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";
import MapLanding from "../../components/maplanding/MapLanding";
import SymmentricSlider from "./symmentricslider/SymmentricSlider";
import JoinTeam from "./jointeam/JoinTeam";
import CvForm from "./cvform/CvForm";

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
          title={t("careerLandingTitle")}
          text={t("careerLandingPara")}
        />
        <SymmentricSlider />
        <JoinTeam t={t} />
        <CvForm t={t} />
      </PreLoginLayout>
    </Fragment>
  );
};

export default Careers;
