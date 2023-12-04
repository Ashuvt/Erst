
import { Fragment, useEffect } from "react";
import FaqLanding from "./faqlanding/FaqLanding";
import Questions from "./questions/Questions";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";

const Faq = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);

    return(
        <Fragment>
            <Header />
            <FaqLanding />
            <Questions />           
            <Footer />
        </Fragment>
    )
};

export default Faq;
