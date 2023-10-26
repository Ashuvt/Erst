import { NavLink } from "react-bootstrap";
import "./CoursesHeader.scss";
import { images, logoImage } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";
import NavBtn from "./navbtn/NavBtn";
import { Fragment } from "react";
import NotificationCard from "./notificationcard/NotificationCard";
import ProfileMenu from "./profilemenu/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import {notificationToggler, profileToggler} from "../../../store/actions";

const CoursesHeader = () => {

  const menuData = [
    {
      id: 0,
      img: icon.home,
      text: "home",
      path: "/home",
    },
    {
      id: 1,
      img: icon.explore,
      text: "explore",
      path: "/explore",
    },
    {
      id: 2,
      img: icon.skillpath,
      text: "skill paths",
      path: "/skill_paths",
    },
    {
      id: 3,
      img: icon.live,
      text: "live",
      path: "/live",
    },
    {
      id: 4,
      img: icon.group,
      text: "groups",
      path: "/groups",
    },
    {
      id: 5,
      img: icon.save,
      text: "saved",
      path: "/saved",
    },
  ];

  const dispatch = useDispatch();
  const notificationStatus = useSelector(data => data.toggleReducer.notificationStatus);
  const profileStatus = useSelector(data => data.toggleReducer.profileStatus);


const notificationHandler = () => {
  dispatch({type:notificationToggler(), payload:!notificationStatus});
}

const profileMenuHandler = () => {
  dispatch({type:profileToggler(), payload:!profileStatus});
}
  return (
    <section className="courses_header">
      <div className="screen_container">
        <header>
          <NavLink to="/" className="brand">
            <img src={logoImage.logo} alt="logo" />
          </NavLink>

          <nav>
            {menuData &&
              menuData.map((data) => {
                return (
                  <Fragment key={data.id}>
                    <NavBtn {...data} />
                  </Fragment>
                );
              })}
          </nav>

          <div className="profile">
            <button type="button" onClick={notificationHandler}>
              <img src={icon.notification} alt="notification" />
            </button>
            <button type="button" className="profile_btn" onClick={profileMenuHandler}>
              <div className="img_wrap">
                <img src={images.profilef} alt="profile" />
              </div>
              <img src={icon.angleDown} alt="arrow" className={profileStatus ? 'close' : 'open'} />
            </button>
          </div>
        </header>
        <NotificationCard status={notificationStatus}/>
        <ProfileMenu menuStatus={profileStatus} />
      </div>
    </section>
  );
};

export default CoursesHeader;
