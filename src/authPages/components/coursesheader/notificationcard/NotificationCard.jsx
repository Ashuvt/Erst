import "./NotificationCard.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment } from "react";

const NotificationCard = ({status}) => {
  const notificationData = [
    {
      id: 0,
      icon: icon.certificate,
      title: "Your certificate is ready!",
      date: "Sep 25, 01:07 pm",
      text: "Congratulations you’ve just completed a course, get your certificate and you can share it on your LinkedIn.",
      btn: "View certification",
    },
    {
      id: 1,
      icon: icon.courses,
      title: "Hey Rajat, Time to start your first course",
      date: "Sep 25, 01:07 pm",
      text: "You've just enrolled in your first course. We're excited and ready to help you develop the skills",
      btn: "Start",
    },
    {
      id: 2,
      icon: icon.reviewed,
      title: "Recommended for you",
      date: "Sep 25, 01:07 pm",
      text: "Explore best in class cybersecurity courses from Cybergain.",
      btn: "Explore",
    },
  ];
  return (
    <div className={`notification_card ${status ? 'open' : 'close'}`}>
       <div className="bg_card_overlay"></div>
      <h1>Notifications</h1>
      {notificationData.map((data) => {
        return (
          <Fragment key={data.id}>
            <div className="notification_data">
              <img src={data.icon} alt="icon" />
              <div className="text_content">
                <p className="title">
                  {data.title} <span>{data.date}</span>{" "}
                </p>
                <p>{data.text} </p>
                <button type="button" className="secondarybtn">
                  {data.btn}
                </button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default NotificationCard;
