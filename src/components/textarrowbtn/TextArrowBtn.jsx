import "./TextArrowBtn.scss";
import { icons } from "../../utils/images/images";

const TextArrowBtn = ({text}) => {
    return(
        <button className="text_arrowbtn">
            <div className="text">
                <p className="a">{text}</p>
                <p className="b">{text}</p>
            </div>
            <div className="arrow">
                    <img src={icons.whiteArrow} alt="arrow" className="a" />
                    <img src={icons.whiteArrow} alt="arrow" className="b" />
            </div>
        </button>
    )
};

export default TextArrowBtn;