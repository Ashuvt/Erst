import "./CircleArrowBtn.scss";
import { icons } from "../../utils/images/images";

const CircleArrowBtn = ({clickHandler}) => {
    return(
        <button className="circle_arrowbtn" onClick={clickHandler}>
            <div className="inner">
                    <img src={icons.whiteArrow} alt="arrow" className="a" />
                    <img src={icons.whiteArrow} alt="arrow" className="b" />
            </div>
        </button>
    )
};

export default CircleArrowBtn;