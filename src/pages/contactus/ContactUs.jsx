import { Fragment, useEffect } from "react";
import ContactLanding from "./contactlanding/ContactLanding";
import Locations from "./locations/Location";
import Help from "./help/Help";
import WOW from "wow.js";
import { useTranslation } from "react-i18next";
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";

const ContactUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <Fragment>
      <PreLoginLayout>
        <ContactLanding t={t} />
        <Locations t={t} />
        <Help t={t} />
      </PreLoginLayout>
    </Fragment>
  );
};

export default ContactUs;
