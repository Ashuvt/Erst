import { Fragment } from "react";
import NewTechLanding from "./newtechlanding/NewTechLanding";
import TechBlogs from "./techblogs/TechBlogs";

const NewTechnology = () => {
  return (
    <Fragment>
      <NewTechLanding />
      <TechBlogs />
    </Fragment>
  );
};

export default NewTechnology;
