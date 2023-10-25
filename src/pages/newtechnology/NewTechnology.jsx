import { Fragment } from "react";
import "./NewTechnology.scss";
import NewTechLanding from "./newtechlanding/NewTechLanding";
import TechBlogs from "./techblogs/TechBlogs";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";

const NewTechnology = () => {
  return (
    <Fragment>
      <Header />
      <NewTechLanding />
      <TechBlogs />
      <div className="tech_blur a"></div>
      <div className="tech_blur b"></div>
      <div className="tech_blur c"></div>
      <div className="tech_blur d"></div>
      <div className="techb_blur"></div>
      <Footer />
    </Fragment>
  );
};

export default NewTechnology;
