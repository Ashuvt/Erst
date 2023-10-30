import "./BlueTextBtn.scss";
import { useNavigate } from "react-router-dom";

const BlueTextBtn = ({ text, icon, redirect }) => {

const navigate = useNavigate();

const goTo = () => {
  navigate(redirect);
}

  return (
    <button className="blue_text_btn" onClick={goTo}>
      {text}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default BlueTextBtn;
