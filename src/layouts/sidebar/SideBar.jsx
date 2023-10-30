import "./SideBar.scss";
import { Fragment, useEffect, useState } from "react";
import { menuList } from "../../utils/data/data";
import { icons, logoImage} from "../../utils/images/images";
import { useDispatch, useSelector } from "react-redux";
import { resetAllToggler, sidebarToggler } from "../../store/actions";
import { NavLink } from "react-router-dom";

const SideBar = () => {

  const dispatch = useDispatch();
  
  const sidebarStatus = useSelector(state => state.toggleReducer.sidebarStatus);
  const [num, setNum] = useState(0);
  
  const openSubmenu = (count) => {
    if(count === num){
        setNum(999999);
    }else{
        setNum(count);
    }
  };
  


  return (
    <div className={`side_bar ${sidebarStatus ? "open" : "close"}`}>
      <div className="logo_line">
        <img src={logoImage.logo} alt="logo" className="logo" />
        <button className="button" onClick={() => dispatch({type:sidebarToggler(), payload:false})}>
          <img src={icons.whiteClose} alt="close" />
        </button>
      </div>
      {menuList &&
        menuList.map((data) => {
          return (
            <Fragment key={data.id}>
              <div className="main_menu" onClick={() => openSubmenu(data.id)}>
                <p>{data.title}</p>
                <img
                  src={icons.whiteAngle}
                  className={num === data.id ? "open" : "close"}
                  alt="arrow"
                />
              </div>
              <div
                className={`sub_menus ${num === data.id ? "open" : "close"}`}
              >
                {data.submenu.map((ele) => {
                  return (
                    
                    <NavLink to={ele.link} key={ele.id}>
                      {ele.text}
                    </NavLink>
                  );
                })}
              </div>
            </Fragment>
          );
        })}

<div className="btn_line">
      <button type="button" className="primarybtn">
        sign in
      </button>
      <button type="button" className="secondarybtn">
        sign up
      </button>
      </div>
    </div>
  );
};

export default SideBar;
