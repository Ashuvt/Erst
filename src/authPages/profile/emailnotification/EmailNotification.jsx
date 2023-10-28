import "./EmailNotification.scss";

const EmailNotification = () => {
  return (
    <div className="email_notification">
      <div className="title">
        <h5 className="small_title">Email Notifications</h5>
        <p>Manage your communication from Cybergain</p>

        <form>
            <div className="check_wrap">
                <input type="checkbox" />
                <p>Course reminders</p>
            </div>
            <div className="check_wrap">
                <input type="checkbox" />
                <p>Weekly personalized course recommendations</p>
            </div>
            <div className="check_wrap">
                <input type="checkbox" />
                <p>Weekly notifications about promotions, new courses, and live events</p>
            </div>
            <div className="check_wrap">
                <input type="checkbox" />
                <p>Surveys and invitations to help us improve Cybergain and your experience</p>
            </div>

            <button type="button" className="authbtn auth_primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EmailNotification;
