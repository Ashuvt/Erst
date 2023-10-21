import { Fragment } from "react";
import "./NewTechnology.scss";
import NewTechLanding from "./newtechlanding/NewTechLanding";
import TechBlogs from "./techblogs/TechBlogs";

const NewTechnology = () => {
  return (
    <Fragment>
      <NewTechLanding />
      <TechBlogs />
      <div className="tech_blur a"></div>
      <div className="tech_blur b"></div>
      <div className="tech_blur c"></div>
      <div className="tech_blur d"></div>
      <div className="techb_blur"></div>
    </Fragment>
  );
};

export default NewTechnology;
