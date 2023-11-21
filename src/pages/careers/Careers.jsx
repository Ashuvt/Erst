import { Fragment, useEffect } from "react";
import MapLanding from "../../components/maplanding/MapLanding";
import JoinTeam from "./jointeam/JoinTeam";
import IntelligentTeam from "./Intelligentteam/IntelligentTeam";
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
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus officiis cupiditate, consectetur eos praesentium similique nulla est illo quos?"
      />
      <SymmentricSlider />
      <JoinTeam />
      <CvForm />
      {/* <IntelligentTeam /> */}
      <Footer />
    </Fragment>
  );
};

export default Careers;
