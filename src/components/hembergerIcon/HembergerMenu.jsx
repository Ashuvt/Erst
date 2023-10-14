import { Fragment, useState } from "react";
import "./HembergerMenu.scss";

const HembergerMenu = () => {

const [status, setStatus] = useState(false);

const menuToggler = () => {
    setStatus(!status);
}

    return(
        <Fragment>
            <div className={`hemberger_menu ${status ? 'open' : ''}`} onClick={menuToggler} >
            <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
            </div>
        </Fragment>
    )
};

export default HembergerMenu;