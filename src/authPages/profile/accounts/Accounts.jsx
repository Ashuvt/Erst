import { images } from "../../../utils/images/images";
import "./Accounts.scss";

const Accounts = () => {
  return (
    <div className="profile_accounts">
      <div className="profile_info wow fadeInUp">
        <div className="profile_wraper">
          <img src={images.profileb} alt="profile" />
        </div>
        <div className="text_info">
          <h5 className="small_title">Account</h5>
          <p>Manage your account and related information</p>
        </div>
      </div>
      <form>
        <div className="bi_grid">
          <div className="profile_field wow fadeInUp">
            <label>Name</label>
            <input type="text" placeholder="name" name="name" />
          </div>

          <div className="profile_field wow fadeInUp">
            <label>Email</label>
            <input type="email" placeholder="email" name="email" />
          </div>
        </div>

        <div className="profile_field wow fadeInUp">
            <label>Location</label>
            <input type="text" placeholder="location" name="location" />
        </div>
        <div className="profile_field wow fadeInUp">
            <label>Bio</label>
            <input type="text" placeholder="Add Bio..." name="bio" />
        </div>
        <div className="btn_line">
        <button type="button" className="authbtn auth_primary wow fadeInUp">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Accounts;
