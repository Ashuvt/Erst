import { useEffect, Fragment } from "react";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";
import Home2Landing from "../home2/home2landing/Home2Landing";
import MarqueeText from "../home2/marqueetext/MarqueeText";
import AboutServices from "../home2/aboutservices/AboutServices";
import Partners from "../home1/plan/partners/Partners";
import GeniusTeam from "../aboutourservices/geniusteam/GeniusTeam";
import TipsBlog from "../home2/tipsblog/TipsBlog";
import Map from "../../components/map/Map";

const About = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);



    return(
        <Fragment>
            <Header />

            <Home2Landing />
            <MarqueeText />
            <AboutServices />
            <Partners />
            <GeniusTeam />
            <Map />
            <TipsBlog />

            <Footer />
        </Fragment>
    )
};

export default About;