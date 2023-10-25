import { Fragment } from "react";
import ContactLanding from "./contactlanding/ContactLanding";
import Locations from "./locations/Location";
import Services from "./contactservices/ContactServices";
import VideoBlock from "./videoblock/VideoBlock";
import Help from "./help/Help";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";


const ContactUs = () => {
    return(
        <Fragment>
            <Header />
            <ContactLanding />
            <Locations />
            <Services />
            <VideoBlock />
            <Help />
            <Footer />
        </Fragment>
    )
};

export default ContactUs;