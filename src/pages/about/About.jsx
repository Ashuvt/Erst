import { useEffect, Fragment } from "react";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";
import Home2Landing from "../home2/home2landing/Home2Landing";
import MarqueeText from "../home2/marqueetext/MarqueeText";
import AboutServices from "../home2/aboutservices/AboutServices";
import Partners from "../home/plan/partners/Partners";
import GeniusTeam from "../aboutourservices/geniusteam/GeniusTeam";
import TipsBlog from "../home2/tipsblog/TipsBlog";
import Map from "../../components/map/Map";

import { useTranslation } from 'react-i18next';
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";

const About = () => {

    const { t } = useTranslation();

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);

    return(
        <Fragment>
            <PreLoginLayout>
            <Home2Landing t={t} />
            <MarqueeText t={t} />
            <AboutServices t={t} />
            <Partners />
            <GeniusTeam t={t} />
            <Map />
            <TipsBlog t={t} />            
            </PreLoginLayout>
        </Fragment>
    )
};

export default About;