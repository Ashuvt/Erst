import { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";




const PreLoginLayout = (props) => {
    const dispatch = useDispatch();

const resetAll = () => {
    dispatch({type:resetAllToggler()});
}
    return(
        <Fragment>
        <div className="prelogin_layout" onClick={resetAll}>
            <Header />
                {props.children}
            <Footer />    
        </div>
    </Fragment>
    );
}

export default PreLoginLayout;