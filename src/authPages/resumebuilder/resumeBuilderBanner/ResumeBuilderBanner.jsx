import "./ResumeBuilderBanner.scss";
import {icon} from "../../../utils/images/icons";
import {images} from "../../../utils/images/images";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../store/actions";

const ResumeBuilderBanner = () => {

    const dispatch = useDispatch();

    const resetToggler = () => {
      dispatch({ type: resetAllToggler() });
    };


    return(
        <section className="resume_builder_banner" onClick={resetToggler}>               
            <div className="screen_container">
                    <div className="content">
                        <div className="icon_wrap wow fadeInUp">
                            <img src={icon.bgGlass} alt="glass" className="bg" />
                            <img src={icon.courses} alt="user" className="resume" />
                        </div>
                        <h3 className=" wow fadeInUp">Resume Builder</h3>
                    </div>
            </div>
        </section>
    )
};

export default ResumeBuilderBanner;