import "./CourseSidebar.scss";
import { Fragment, useEffect, useState } from "react";
import { menuList } from "../../utils/data/data";
import { icons, logoImage } from "../../utils/images/images";
import { useDispatch, useSelector } from "react-redux";
import {
  courseSidebarToggler,
  resetAllToggler,
  sidebarToggler,
} from "../../store/actions";
import { icon } from "../../utils/images/icons";
import { NavLink } from "react-router-dom";

const CourseSidebar = () => {
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
  ];

  const dispatch = useDispatch();

  const courseSidebarStatus = useSelector(
    (state) => state.toggleReducer.courseSidebarStatus
  );

  return (
    <Fragment>
      <div
        className={`course_side_bar ${courseSidebarStatus ? "open" : "close"}`}
      >
        <div className="logo_line">
          <img src={logoImage.logo} alt="logo" className="logo" />
          <button
            className="button"
            onClick={() =>
              dispatch({ type: courseSidebarToggler(), payload: false })
            }
          >
            <img src={icons.whiteClose} alt="close" />
          </button>
        </div>
        <div className="course_screen_links">
          {menuData &&
            menuData.map((data) => {
              return (
                <Fragment key={data.id}>
                  <NavLink to={data.path}>
                    <button type="button" className="navbtn">
                      <img src={data.img} alt="icon" />
                      {data.text}
                    </button>
                  </NavLink>
                </Fragment>
              );
            })}
        </div>
      </div>
     
    </Fragment>
  );
};

export default CourseSidebar;
