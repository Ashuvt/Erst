import "./ProfileMenu.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment } from "react";

const ProfileMenu = ({ menuStatus }) => {
  const menuData = [
    {
      id: 0,
      icon: icon.user,
      text: "My Profile",
    },
    {
      id: 1,
      icon: icon.courses,
      text: "My Courses",
    },
    {
      id: 2,
      icon: icon.calender,
      text: "Manage Subscription",
    },
    {
      id: 3,
      icon: icon.help,
      text: "Help",
    },
    {
      id: 4,
      icon: icon.logout,
      text: "Logout",
    },
  ];
  return (
    <div className={`profile_menu_card ${menuStatus ? "open" : "close"}`}>
      <h1>Rajat</h1>

      {menuData.map((data) => {
        return (
          <Fragment key={data.id}>
            <button type="button">
              <img src={data.icon} alt="icon" />
              <p>{data.text}</p>
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProfileMenu;
