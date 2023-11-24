import "./TextArrowBtn.scss";
import { icons } from "../../utils/images/images";

const TextArrowBtn = ({
clickHandler,
  text,
  icon = icons.whiteArrow,
  style = { transform: "rotate(45deg)" },
}) => {
  return (
    <button className="text_arrowbtn" onClick={clickHandler}>
      <div className="text">
        <p className="a">{text}</p>
        <p className="b">{text}</p>
      </div>
      <div className="arrow">
        <img src={icon} alt="arrow" className="a"  />
        <img src={icon} alt="arrow" className="b" />
      </div>
    </button>
  );
};

export default TextArrowBtn;
