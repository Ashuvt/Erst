
import { Fragment } from "react";
import FaqLanding from "./faqlanding/FaqLanding";
import Questions from "./questions/Questions";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";


const Faq = () => {
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
