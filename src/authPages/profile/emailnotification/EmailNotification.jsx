import "./EmailNotification.scss";
import { icon } from "../../../utils/images/icons";
import { Fragment, useState } from "react";

const EmailNotification = () => {
  const optionData = [
    {
      id: 0,
      text: "Course reminders",
    },

    {
      id: 1,
      text: "Weekly personalized course recommendations",
    },

    {
      id: 2,
      text: "Weekly notifications about promotions, new courses, and live events",
    },

    {
      id: 3,
      text: "Surveys and invitations to help us improve Cybergain and your experience",
    },
  ];

  const [selectOption, setSelectOptpion] = useState([]);

  const addToSelected = (selectedId) => {
    setSelectOptpion((prev) => {
      if (selectOption.includes(selectedId)) {
        return selectOption.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });
  };


  return (
    <div className="email_notification">
      <div className="title">
        <h5 className="small_title wow fadeInUp">Email Notifications</h5>
        <p className="wow fadeInUp">Manage your communication from Cybergain</p>

        <form>
          {optionData.map((data) => {
            return (
              <Fragment key={data.id}>
                <div className="check_wrap wow fadeInUp">
                  <button type="button" className={`checkbtn ${selectOption.includes(data.id) ? 'active' : ''}`}  onClick={() => addToSelected(data.id)}>
                    <img src={icon.checked} alt="checked" className={selectOption.includes(data.id) ? 'active' : ''} />
                  </button>
                  <p>{data.text}</p>
                </div>
              </Fragment>
            );
          })}

          <button type="button" className="authbtn auth_primary wow fadeInUp">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailNotification;
