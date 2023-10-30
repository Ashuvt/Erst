import "./ProfileMenu.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ menuStatus }) => {
  const menuData = [
    {
      id: 0,
      icon: icon.user,
      text: "My Profile",
      clickHandler:() => {
        navigate("/profile");
      }
    },
    {
      id: 1,
      icon: icon.courses,
      text: "My Courses",
      clickHandler:() => {}
    },
    {
      id: 2,
      icon: icon.calender,
      text: "Manage Subscription",
      clickHandler:() => {}
    },
    {
      id: 3,
      icon: icon.help,
      text: "Help",
      clickHandler:() => {}
    },
    {
      id: 4,
      icon: icon.logout,
      text:"Logout",
      clickHandler:() => {}
    },
  ];

  const navigate = useNavigate();
  return (
    <div className={`profile_menu_card ${menuStatus ? "open" : "close"}`}>
      <h1>Rajat</h1>

      {menuData.map((data) => {
        return (
          <Fragment key={data.id}>
            <button type="button" onClick={data.clickHandler}>
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
