import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "./NavBtn.scss";

const NavBtn = ({img, text, path}) => {
    return(
        <Fragment>
            <NavLink to={path} className="navbtns">
            <img src={img} alt="menuicon" />
                {text}
            </NavLink>
        </Fragment>
    )
};

export default NavBtn;