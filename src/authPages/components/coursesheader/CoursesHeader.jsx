import { NavLink } from "react-router-dom";
import "./CoursesHeader.scss";
import { images, logoImage } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";
import { icons } from "../../../utils/images/images";
import NavBtn from "./navbtn/NavBtn";
import { Fragment, useEffect, useState, useContext } from "react";
import NotificationCard from "./notificationcard/NotificationCard";
import ProfileMenu from "./profilemenu/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { redirectContext } from "../../../context/RoutingContext";

import {
  cartPopupToggler,
  courseSidebarToggler,
  notificationToggler,
  profileToggler,
  resetAllToggler,
} from "../../../store/actions";
import { baseUrl, getNotification, getProfile } from "../../../utils/apidata";
import HembergerMenu from "../../../components/hembergerIcon/HembergerMenu";
import axios from "axios";

const CoursesHeader = () => {
  const [notification, setNotification] = useState([]);
  const { profile, name, isresume } = useSelector((data) => data.getProfileDataReducer);

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
    // {
    //   id: 2,
    //   img: icon.skillpath,
    //   text: "skill paths",
    //   path: "/auth/skill_paths",
    // },
    // {
    //   id: 3,
    //   img: icon.live,
    //   text: "live",
    //   path: "/auth/live",
    // },
    // {
    //   id: 4,
    //   img: icon.group,
    //   text: "groups",
    //   path: "/auth/groups",
    // },
    {
      id: 5,
      img: icon.save,
      text: "saved",
      path: "/auth/saved",
    },
    {
      id: 6,
      img: icon.courses,
      text: "Resume Builder",
      path: isresume ? "/auth/resume" : "/auth/resumebuilder",
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

  const { cartData } = useSelector((state) => state.getCartReducer);

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
  };

  //Notifivation
  const notificationApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${getNotification}`);
      if (response.data.success) {
        setNotification(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getCartApi();
    notificationApi();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      notificationApi();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="courses_header" onClick={resetToggle}>
      <div className="screen_container">
        <header>
          <NavLink to="/auth/home" className="brand">
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
            <button
              type="button"
              className="cartbtn"
              onClick={notificationHandler}
            >      
            <div className="alert_view"></div>     
              <img src={icon.notification} alt="notification" />
            </button>

            <button type="button" className="cartbtn" onClick={openCartPopup}>
              <div className="cart_count">
                <p>{cartData?.cart?.length || 0}</p>
              </div>
              <img src={icons.addCart} alt="cart" />
            </button>

            <button
              type="button"
              className="profile_btn"
              onClick={profileMenuHandler}
            >
              <div className="img_wrap">
                {profile ? (
                  <img src={`${baseUrl}/${profile}`} alt="profile" />
                ) : (
                  <img src={images.avtar} alt="profile" />
                )}
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
        <NotificationCard
          status={notificationStatus}
          notification={notification}
        />
        <ProfileMenu menuStatus={profileStatus} name={name} isresume={isresume} />
      </div>
    </section>
  );
};

export default CoursesHeader;
