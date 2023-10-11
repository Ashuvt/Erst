import { Fragment } from "react";
import "./Home1.scss";
import Home1Landing from "./home1landing/HomeLanding";
import Services from "./home1services/Services";

const Home1 = () => {
  return (
    <Fragment>
      <Home1Landing />
      <Services />
    </Fragment>
  );
};

export default Home1;
