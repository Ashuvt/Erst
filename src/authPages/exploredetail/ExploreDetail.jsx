import { Fragment } from "react";
import ExploreDetailLanding from "./ExploreDetailLanding/ExploreDetailLanding";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import ExploreTabs from "./ExploreTabs/ExploreTabs";

const ExploreDetail = () => {
  const landingData = {
    students: 800,
    courses: 10,
    duration: "20h 15m",
    rating: 4.5,
    rateCount: 1331,
    saved: true,
    title: "This is a RedTeam Course",
    text: "This is a short description about course. This is a short description about course. This is a short description about course. This is a short description about course.This is a short description about course. ",
    options: ["Medium", "Penetration", "CEH"],
  };
  return (
    <Fragment>
      <CoursesHeader />
      <div className="header_filler"></div>
      <ExploreDetailLanding {...landingData} />
      <ExploreTabs />
    </Fragment>
  );
};

export default ExploreDetail;
