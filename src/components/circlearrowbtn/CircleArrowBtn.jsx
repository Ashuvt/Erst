import "./CircleArrowBtn.scss";
import { icons } from "../../utils/images/images";

const CircleArrowBtn = () => {
    return(
        <button className="circle_arrowbtn">
            <div className="inner">
                    <img src={icons.whiteArrow} alt="arrow" className="a" />
                    <img src={icons.whiteArrow} alt="arrow" className="b" />
            </div>
        </button>
    )
};

export default CircleArrowBtn;