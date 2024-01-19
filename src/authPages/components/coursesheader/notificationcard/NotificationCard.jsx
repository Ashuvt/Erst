import "./NotificationCard.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment} from "react";

const NotificationCard = ({status, notification}) => {

  

  return (
    <div className={`notification_card ${status ? 'open' : 'close'}`}>
       {/* <div className="bg_card_overlay"></div> */}
      <h1>Notifications</h1>
      {notification?.length > 0 ? notification.map((data) => {
        return (
          <Fragment key={data._id}>
            <div className="notification_data">
              <img src={icon.courses} alt="icon" />
              <div className="text_content">
                <p className="title">
                  Notification Title <span>Sep 25, 01:07 pm</span>
                </p>
                <p>{data.name} </p>
                {/* <button type="button" className="secondarybtn">
                  {data.btn}
                </button> */}
              </div>
            </div>
          </Fragment>
        );
      }) : <p>Notification not found</p>}
    </div>
  );
};

export default NotificationCard;
