import "./SideBar.scss";
import { Fragment, useEffect, useState } from "react";
import { menuList } from "../../utils/data/data";
import { icons, logoImage } from "../../utils/images/images";
import { useDispatch, useSelector } from "react-redux";
import { resetAllToggler, sidebarToggler } from "../../store/actions";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sidebarStatus = useSelector(
    (state) => state.toggleReducer.sidebarStatus
  );
  const [num, setNum] = useState(0);

  const openSubmenu = (count) => {
    if (count === num) {
      setNum(999999);
    } else {
      setNum(count);
    }
  };

  return (
    <Fragment>
      <div className={`side_bar ${sidebarStatus ? "open" : "close"}`}>
        <div className="logo_line">
          <img src={logoImage.logo} alt="logo" className="logo" />
          <button
            className="button"
            onClick={() => dispatch({ type: sidebarToggler(), payload: false })}
          >
            <img src={icons.whiteClose} alt="close" />
          </button>
        </div>

        <div className="side_links_wrap">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* <NavLink to="/faq">FAQ</NavLink> */}
          </nav>
        </div>

        <div className="btn_line">
          <button
            type="button"
            className="primarybtn"
            onClick={() => navigate("/auth/login")}
          >
            sign in
          </button>
          <button 
            type="button" 
            className="secondarybtn"
            onClick={() => navigate("/auth/getStarted")}
            >
            sign up
          </button>
        </div>
      </div>
      <div
        className={`blur_overlay ${sidebarStatus ? "open" : "close"}`}
        onClick={() => dispatch({ type: resetAllToggler() })}
      ></div>
    </Fragment>
  );
};

export default SideBar;
