import { useEffect, Fragment } from "react";
import WOW from "wow.js";
import { useTranslation } from 'react-i18next';

// Components
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";
import AboutLanding from "./aboutlanding/AboutLanding";
import MarqueeText from "../../components/marqueetext/MarqueeText";
import AboutServices from "./aboutservices/AboutServices";
import Partners from "../../components/partners/Partners";
import GeniusTeam from "./geniusteam/GeniusTeam";
import Map from "../../components/map/Map";
import Events from "./events/Events";



const About = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);

    return(
        <Fragment>
            <PreLoginLayout>
            <AboutLanding t={t} />
            <MarqueeText t={t} />
            <AboutServices t={t} />
            <Partners />
            <GeniusTeam t={t} />
            <Map />
            <Events t={t} />            
            </PreLoginLayout>
        </Fragment>
    )
};

export default About;