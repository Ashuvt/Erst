import { resetAllToggler } from "../../../store/actions";
import { icon } from "../../../utils/images/icons";
import { images } from "../../../utils/images/images";
import "./WelComeStrip.scss";
import { useDispatch } from "react-redux";

const WelComeStrip = ({title, text}) => {

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({type:resetAllToggler()});
  }


  return (
    <section className="welcome_strip" onClick={resetToggler}>
      <div className="screen_container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={images.bgPattern} alt="pattern" className="left" />
      <img src={images.bgPattern} alt="pattern" className="right" />
    </section>
  );
};

export default WelComeStrip;
