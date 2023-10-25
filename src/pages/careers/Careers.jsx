import { Fragment } from "react";
import MapLanding from "../../components/maplanding/MapLanding";
import JoinTeam from "./jointeam/JoinTeam";
import IntelligentTeam from "./Intelligentteam/IntelligentTeam";
import SymmentricSlider from "../../components/symmentricslider/SymmentricSlider";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";

const Careers = () => {
  return (
    <Fragment>
      <Header />
      <MapLanding
        title="Join Our Team"
        text="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
      />
      <SymmentricSlider />
      <JoinTeam />
      <IntelligentTeam />
      <Footer />
    </Fragment>
  );
};

export default Careers;
