import "./ProfileBanner.scss";
import {icon} from "../../../utils/images/icons";
import {images} from "../../../utils/images/images";

const ProfileBanner = () => {
    return(
        <section className="profile_banner">
            <img src={images.bgPattern} alt="patter" className="pattern" />
            <div className="screen_container">
                    <div className="content">
                        <div className="icon_wrap">
                            <img src={icon.userFill} alt="user" />
                        </div>
                        <h3>Profile</h3>
                    </div>
            </div>
        </section>
    )
};

export default ProfileBanner;