import { NavLink } from "react-router-dom";
import "./CoursesHeader.scss";
import { images, logoImage } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";
import { icons } from "../../../utils/images/images";
import NavBtn from "./navbtn/NavBtn";
import { Fragment } from "react";
import NotificationCard from "./notificationcard/NotificationCard";
import ProfileMenu from "./profilemenu/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  cartPopupToggler,
  courseSidebarToggler,
  notificationToggler,
  profileToggler,
  resetAllToggler,
} from "../../../store/actions";
import HembergerMenu from "../../../components/hembergerIcon/HembergerMenu";

const CoursesHeader = () => {
  const menuData = [
    {
      id: 0,
      img: icon.home,
      text: "home",
      path: "/auth/home",
    },
    {
      id: 1,
      img: icon.explore,
      text: "explore",
      path: "/auth/explore",
    },
    {
      id: 2,
      img: icon.skillpath,
      text: "skill paths",
      path: "/auth/skill_paths",
    },
    {
      id: 3,
      img: icon.live,
      text: "live",
      path: "/auth/live",
    },
    {
      id: 4,
      img: icon.group,
      text: "groups",
      path: "/auth/groups",
    },
    {
      id: 5,
      img: icon.save,
      text: "saved",
      path: "/auth/saved",
    },
  ];

  const dispatch = useDispatch();
  const notificationStatus = useSelector(
    (data) => data.toggleReducer.notificationStatus
  );

  const profileStatus = useSelector((data) => data.toggleReducer.profileStatus);

  const courseSidebarStatus = useSelector(
    (state) => state.toggleReducer.courseSidebarStatus
  );

  const courseMenuToggler = (e) => {
    if (courseSidebarStatus) {
      dispatch({ type: courseSidebarToggler(), payload: false });
    } else {
      dispatch({ type: courseSidebarToggler(), payload: true });
    }
  };

  const notificationHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: notificationToggler(), payload: !notificationStatus });
  };

  const profileMenuHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: profileToggler(), payload: !profileStatus });
  };

  const resetToggle = () => {
    dispatch({ type: resetAllToggler() });
  };

  const openCartPopup = (e) => {
    e.stopPropagation();
    dispatch({ type: cartPopupToggler(), payload: true });
  }
  return (
    <section className="courses_header" onClick={resetToggle}>
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

            <button type="button" className="cartbtn" onClick={openCartPopup}>
              <div className="notification">
                <p>2</p>
              </div>
              <img src={icons.addCart} alt="cart" />
            </button>

            <button
              type="button"
              className="profile_btn"
              onClick={profileMenuHandler}
            >
              <div className="img_wrap">
                <img src={images.profilef} alt="profile" />
              </div>
              <img
                src={icon.angleDown}
                alt="arrow"
                className={profileStatus ? "close" : "open"}
              />
            </button>
            <HembergerMenu
              clickHandler={courseMenuToggler}
              status={courseSidebarStatus}
            />
          </div>
        </header>
        <NotificationCard status={notificationStatus} />
        <ProfileMenu menuStatus={profileStatus} />
      </div>
    </section>
  );
};

export default CoursesHeader;
