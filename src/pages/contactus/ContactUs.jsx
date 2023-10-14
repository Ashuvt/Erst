import { Fragment } from "react";
import "./ContactUs";
import ContactLanding from "./contactlanding/ContactLanding";
import Locations from "./locations/Location";
import Services from "./contactservices/ContactServices";
import VideoBlock from "./videoblock/VideoBlock";
import Help from "./help/Help";


const ContactUs = () => {
    return(
        <Fragment>
            <ContactLanding />
            {/* <Locations />
            <Services />
            <VideoBlock />
            <Help /> */}
        </Fragment>
    )
};

export default ContactUs;