import { Fragment, useEffect } from "react";
import MapLanding from "../../components/maplanding/MapLanding";
import JoinTeam from "./jointeam/JoinTeam";
// import IntelligentTeam from "./Intelligentteam/IntelligentTeam";
import SymmentricSlider from "../../components/symmentricslider/SymmentricSlider";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";
import CvForm from "./cvform/CvForm";

const Careers = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <Fragment>
      <Header />
      <MapLanding
        title="Join Our Team"
        text="The team at Cyber Gain Center — a group of passionate experts committed to excellence in the cybersecurity world. With diverse expertise and personalized support, we're here to empower every learner."
      />
      <SymmentricSlider />
      <JoinTeam />
      <CvForm />
      <Footer />
    </Fragment>
  );
};

export default Careers;
