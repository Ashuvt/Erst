import CoursesHeader from "../components/coursesheader/CoursesHeader";
import WelComeStrip from "../components/welcomestrip/WelComeStrip";
import "./Home.scss";
import { Fragment } from "react";
import RecommendedModules from "./recommendedmodules/RecommendedModules";
import LiveSec from "./livesec/LiveSec";

const Home = () => {
  return (
    <Fragment>
      <div className="header_filler"></div>
      <CoursesHeader />
      <WelComeStrip
        title="Welcome Rajat"
        text="This is a short copy nudging user to explore app and courses"
      />
      <section className="home_content_screen">
        <div className="screen_container">
          <div className="left">
            <RecommendedModules />
            <LiveSec />
            
          </div>
          <div className="right"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
