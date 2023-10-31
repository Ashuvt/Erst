import "./ProfileHelp.scss";

const Help = () => {
  return (
    <div className="profile_help">
      <div className="title">
        <h5 className="small_title  wow fadeInUp">Need help</h5>
        <p className=" wow fadeInUp">
          Please share your problem or any feedback, we’ll reach out to you.
        </p>

        <textarea placeholder="Start Typing Here..." className=" wow fadeInUp" ></textarea>
        <p className="t-i-12 wow fadeInUp">Our team will reach out to in 24 hours.</p>
        <button type="button" className="authbtn auth_primary wow fadeInUp">Send</button>
      </div>
    </div>
  );
};

export default Help;
