import "./ProfileBanner.scss";
import {icon} from "../../../utils/images/icons";
import {images} from "../../../utils/images/images";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../store/actions";

const ProfileBanner = () => {

    const dispatch = useDispatch();

    const resetToggler = () => {
      dispatch({ type: resetAllToggler() });
    };


    return(
        <section className="profile_banner" onClick={resetToggler}>
            <img src={images.bgPattern} alt="patter" className="pattern" />
            <div className="screen_container">
                    <div className="content">
                        <div className="icon_wrap wow fadeInUp">
                            <img src={icon.bgGlass} alt="glass" className="bg" />
                            <img src={icon.userFill} alt="user" className="user" />
                        </div>
                        <h3 className=" wow fadeInUp">Profile</h3>
                    </div>
            </div>
        </section>
    )
};

export default ProfileBanner;