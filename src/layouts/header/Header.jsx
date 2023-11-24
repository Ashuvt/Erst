import { Fragment } from "react";
import "./Header.scss";
import { icons, logoImage } from "../../utils/images/images";
import MenuBtn from "./menu/MenuBtn";
import { menuList } from "../../utils/data/data";
import HembergerMenu from "../../components/hembergerIcon/HembergerMenu";
import { cartPopupToggler } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { sidebarToggler } from "../../store/actions";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const openCartPopup = () => {
    dispatch({ type: cartPopupToggler(), payload: true });
  };

  const sidebarStatus = useSelector(
    (state) => state.toggleReducer.sidebarStatus
  );

  const menuToggler = () => {
    if (sidebarStatus) {
      dispatch({ type: sidebarToggler(), payload: false });
    } else {
      dispatch({ type: sidebarToggler(), payload: true });
    }
  };

  const navigate = useNavigate();
  return (
    <section className="header">
      <div className="content_wrap">
        <header>
          <div className="logo_wrap">
            <a href="/">
              <img src={logoImage.logo} alt="logo" />
            </a>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/careers">Careers</NavLink>               
            <NavLink to="/blogs">Blogs</NavLink>     
            {/* <NavLink to="/faq">FAQ</NavLink> */}
            <NavLink to="/contact">Contact</NavLink> 
          
            {/* {menuList.map((ele) => {
              return (
                <Fragment key={ele.id}>
                  <MenuBtn title={ele.title} linkdata={ele.submenu} />
                </Fragment>
              );
            })} */}
          </nav>
          <div className="btns">
          <button 
            type="button" 
            className="signup"
            onClick={() => navigate("/auth/getStarted")}  
          >
              Sign up
            </button>
            <button
              type="button"
              className="signin"
              onClick={() => navigate("/auth/login")}
            >
              Sign in
            </button>
           

            {/* <button type="button" className="cartbtn" onClick={openCartPopup}>
              <div className="notification">2</div>
              <img src={icons.addCart} alt="cart" />
            </button> */}

            
            <HembergerMenu clickHandler={menuToggler} status={sidebarStatus} />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
