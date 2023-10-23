import { Fragment } from "react";
import "./Header.scss";
import { icons, logoImage } from "../../utils/images/images";
import MenuBtn from "./menu/MenuBtn";
import { menuList } from "../../utils/data/data";
import HembergerMenu from "../../components/hembergerIcon/HembergerMenu";
import { cartPopupToggler } from "../../store/actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const openCartPopup = () => {
    dispatch({ type: cartPopupToggler(), payload: true });
  };

  return (
    <section className="header">
      <div className="content_wrap">
        <header>
          <div className="logo_wrap">
            <a href="/">
              <h5>CyberGain</h5>
            </a>
          </div>
          <nav>
            {menuList.map((ele) => {
              return (
                <Fragment key={ele.id}>
                  <MenuBtn title={ele.title} linkdata={ele.submenu} />
                </Fragment>
              );
            })}
          </nav>
          <div className="btns">
            <button type="button" className="cartbtn" onClick={openCartPopup}>
              <div className="notification">2</div>
              <img src={icons.addCart} alt="cart" />
            </button>
            <button type="button" className="signin">
              Sign in
            </button>
            <button type="button" className="signup">
              Sign up
            </button>

            <HembergerMenu />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
