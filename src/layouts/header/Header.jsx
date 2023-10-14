import { Fragment } from "react";
import "./Header.scss";
import { logoImage } from "../../utils/images/images";
import MenuBtn from "./menu/MenuBtn";
import { menuList } from "../../utils/data/data";
import HembergerMenu from "../../components/hembergerIcon/HembergerMenu";

const Header = () => {
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
            {menuList.map((ele) => {
              return (
                <Fragment key={ele.id}>
                  <MenuBtn title={ele.title} linkdata={ele.submenu} />
                </Fragment>
              );
            })}  
          </nav>
          <div className="btns">
            <button type="button" className="signin">
              Sign in
            </button>
            <button type="button" className="signup">
              Sign up
            </button>
          </div>
          <HembergerMenu />
        </header>
      </div>
    </section>
  );
};

export default Header;
