import { Fragment } from "react";
import "./ContactUs";
import ContactLanding from "./contactlanding/ContactLanding";
import Locations from "./locations/Location";

const ContactUs = () => {
    return(
        <Fragment>
            <ContactLanding />
            <Locations />
        </Fragment>
    )
};

export default ContactUs;