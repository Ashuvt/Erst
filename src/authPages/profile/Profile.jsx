import { Fragment, useState } from "react";
import "./Profile.scss";
import ProfileBanner from "./profilebanner/ProfileBanner";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import { icon } from "../../utils/images/icons";
import MyProfile from "./myprofile/MyProfile";
import Accounts from "./accounts/Accounts";
import Subscription from "./subscription/Subscription";

const Profile = () => {
  const optionData = [
    {
      id: 0,
      icon: icon.user,
      text: "My profile",
    },
    {
      id: 1,
      icon: icon.email,
      text: "Accounts",
    },
    {
      id: 2,
      icon: icon.calender,
      text: "Subscription",
    },
    {
      id: 3,
      icon: icon.email,
      text: "Email Notification",
    },
    {
      id: 4,
      icon: icon.help,
      text: "Help",
    },
  ];

  const [tab, setTab] = useState(0);

  return (
    <Fragment>
      <CoursesHeader />
      <div className="header_filler"></div>
      <ProfileBanner />
      <section className="profile_screens">
        <div className="screen_container">
          <div className="side_menu">
            {optionData.map((data) => {
              return (
                <Fragment key={data.id}>
                  <button
                    type="button"
                    className={data.id === tab ? "active" : ""}
                    onClick={() => setTab(data.id)}
                  >
                    <img src={data.icon} alt="icon" />
                    {data.text}
                  </button>
                </Fragment>
              );
            })}
          </div>
          <div className="menu_screens">
            {tab === 0 && <MyProfile />}
            {tab === 1 && <Accounts />}
            {tab === 2 && <Subscription />}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
