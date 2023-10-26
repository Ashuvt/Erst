import CoursesHeader from "../components/coursesheader/CoursesHeader";
import WelComeStrip from "../components/welcomestrip/WelComeStrip";
import "./Home.scss";
import { Fragment } from "react";
import RecommendedModules from "./recommendedmodules/RecommendedModules";
import LiveSec from "./livesec/LiveSec";
import PopularSkillPath from "./popularskillpath/PopularSkillPath";
import BottomLive from "./bottomlive/BottomLive";
import SavedList from "./savedlist/SavedList";

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
          <div className="content_grid">
            <div className="left">
              <RecommendedModules />
              <LiveSec />
              <PopularSkillPath />
            </div>
            <div className="right">
              <div className="in_progress">
                <h5 className="title_class">In progress</h5>
                <p className="dark">Pick a course and start learning</p>
                <p>
                  You’ve got limited access Cybergain courses, Choose a course
                  and start your journey.
                </p>
                <button type="button" className="authbtn auth_primary">
                  Cources
                </button>
              </div>
              <SavedList />
            </div>
          </div>
          <BottomLive />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
