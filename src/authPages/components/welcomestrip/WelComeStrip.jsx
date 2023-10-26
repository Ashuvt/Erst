import { icon } from "../../../utils/images/icons";
import { images } from "../../../utils/images/images";
import "./WelComeStrip.scss";

const WelComeStrip = ({title, text}) => {
  return (
    <section className="welcome_strip">
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
