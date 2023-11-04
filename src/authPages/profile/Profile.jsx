import { Fragment, useState, useEffect } from "react";
import "./Profile.scss";
import ProfileBanner from "./profilebanner/ProfileBanner";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import { icon } from "../../utils/images/icons";
import MyProfile from "./myprofile/MyProfile";
import Accounts from "./accounts/Accounts";
import Subscription from "./subscription/Subscription";
import EmailNotification from "./emailnotification/EmailNotification";
import Help from "./help/ProfileHelp";
import WOW from "wow.js";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";

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

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [tab, setTab] = useState(0);

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <Fragment>
      <CoursesHeader />
      <div className="header_filler"></div>
      <ProfileBanner />
      <section className="profile_screens" onClick={resetToggler}>
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
            {tab === 3 && <EmailNotification />}
            {tab === 4 && <Help />}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
