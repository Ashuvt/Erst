import { Fragment, useEffect } from "react";
import WOW from "wow.js";
import { useTranslation } from "react-i18next";

// Components
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";
import ContactLanding from "./contactlanding/ContactLanding";
import Locations from "./locations/Location";
import Help from "./help/Help";

const Contact = () => {
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

export default Contact;
