import CoursesHeader from "../components/coursesheader/CoursesHeader";
import WelComeStrip from "../components/welcomestrip/WelComeStrip";
import "./Home.scss";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
        <div className="header_filler"></div>
      <CoursesHeader />
      <WelComeStrip
        title="Welcome Rajat"
        text="This is a short copy nudging user to explore app and courses"
      />
    </Fragment>
  );
};

export default Home;
