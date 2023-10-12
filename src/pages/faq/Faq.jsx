import "./Faq.scss";
import { Fragment } from "react";
import FaqLanding from "./faqlanding/FaqLanding";
import Questions from "./questions/Questions";


const Faq = () => {
    return(
        <Fragment>
            <FaqLanding />
            <Questions />
           
        </Fragment>
    )
};

export default Faq;
