import "./ProfileMenu.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {profileTabChanger} from "../../../../store/actions";
import { redirectContext } from "../../../../context/RoutingContext";

const ProfileMenu = ({ menuStatus, name }) => {
  const dispatch = useDispatch();
const {logOutApi} = useContext(redirectContext);


  const menuData = [
    {
      id:0,
      icon: icon.user,
      text: "My Profile",
      clickHandler:() => {
        navigate("/auth/profile");
        dispatch({type:profileTabChanger(), payload:1});
      },
      
    },
    {
      id: 1,
      icon: icon.courses,
      text: "My Certificate",
      clickHandler:() => {
        navigate("/auth/profile");
        dispatch({type:profileTabChanger(), payload:2});
      },
    },
    {
      id: 22,
      icon: icon.courses,
      text: "My Resume",
      clickHandler:() => {
        navigate("/auth/resume")
      },
    },
    {
      id: 2,
      icon: icon.calender,
      text: "Manage Subscription",
      clickHandler:() => {
        navigate("/auth/profile");
        dispatch({type:profileTabChanger(), payload:3});
      }
    },
    {
      id: 4,
      icon: icon.help,
      text: "Help",
      clickHandler:() => {
        navigate("/auth/profile");
        dispatch({type:profileTabChanger(), payload:5});
      }
    },
    {
      id: 5,
      icon: icon.logout,
      text:"Logout",
      clickHandler:() => {
        logOutApi();
      }
    },
  ];

  const tab = useSelector(state => state.profileTabReducer);

  const navigate = useNavigate();
  return (
    <div className={`profile_menu_card ${menuStatus ? "open" : "close"}`}>
       <div className="bg_card_overlay"></div>
      <h1>{name}</h1>

      {menuData.map((data) => {
        return (
          <Fragment key={data.id}>
            <button type="button" onClick={data.clickHandler} className={tab === data.id ? 'active' : ''}>
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
