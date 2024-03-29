import { Fragment, useState, useEffect } from "react";
import "./Profile.scss";
import ProfileBanner from "./profilebanner/ProfileBanner";
import AuthLayout from "../AuthLayout";
import { icon } from "../../utils/images/icons";
import Subscription from "./subscription/Subscription";
import EmailNotification from "./emailnotification/EmailNotification";
import Help from "./help/ProfileHelp";
import Account from "./account/Account";
import MyProfile from "./myprofile/MyProfile";
import WOW from "wow.js";
import { useDispatch, useSelector } from "react-redux";
import { profileTabChanger, resetAllToggler } from "../../store/actions";
import ParticlesBg from "../../components/particlesbg/ParticlesBg";

const Profile = () => {
  const token = localStorage.getItem("token");
  const optionData = [
    
    {
      id: 1,      
      icon: icon.user,
      text: "My Profile",
    },
    {
      id: 2,
      icon: icon.email,
      text: "Certificates",
    },
    {
      id: 3,
      icon: icon.calender,
      text: "Subscription",
    },
    {
      id: 4,
      icon: icon.email,
      text: "Email Notification",
    },
    {
      id: 5,
      icon: icon.help,
      text: "Help",
    },
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  const tab = useSelector((state) => state.profileTabReducer);

  return (
    <AuthLayout>
       <ParticlesBg />
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
                    onClick={() =>
                      dispatch({ type: profileTabChanger(), payload: data.id })
                    }
                  >
                    <img src={data.icon} alt="icon" />
                    {data.text}
                  </button>
                </Fragment>
              );
            })}
          </div>
          <div className="menu_screens">
          {tab === 1 && <MyProfile />}  
            {tab === 2 &&  <Account />}
            {tab === 3 && <Subscription />}
            {tab === 4 && <EmailNotification />}
            {tab === 5 && <Help />}
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Profile;
