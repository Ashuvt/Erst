import { useEffect } from "react";
import "./Offer.scss";
import { icons, images } from "../../../utils/images/images";
import WOW from "wow.js";

const Offer = ({title, text}) => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="Offer p_top p_bottom m_bottom">
      <div className="top">
        <div className="float_fix wow zoomIn">
          <img src={images.profilea} alt="person" />
        </div>
        <div className="float_fix wow zoomIn">
          <img src={images.profileb} alt="person" />
        </div>
        <div className="float_fix wow zoomIn">
          <img src={images.profilec} alt="person" />
        </div>
      </div>

      <div className="content_wrap">
        <div className="title">
          <h2 className="wow slideInUp">{title}</h2>
          <p className="wow slideInUp">
          {text}
          </p>
        </div>
        <form>
          <div className="field">
            <input type="email" placeholder="Your e-mail" />
            <button type="button">
              <img src={icons.rightArrow} alt="arrow" />
            </button>
          </div>
        </form>
      </div>

      <div className="bottom">
        <div className="float_fix wow zoomIn">
          <img src={images.profiled} alt="person" />
        </div>
        <div className="float_fix wow zoomIn">
          <img src={images.profilee} alt="person" />
        </div>
        <div className="float_fix wow zoomIn">
          <img src={images.profilef} alt="person" />
        </div>
      </div>

      {/* For Screen sixe > 1200px */}

      <div className="float a">
        <img src={images.profilea} alt="person" />
      </div>
      <div className="float b">
        <img src={images.profileb} alt="person" />
      </div>
      <div className="float c">
        <img src={images.profilec} alt="person" />
      </div>
      <div className="float d">
        <img src={images.profiled} alt="person" />
      </div>
      <div className="float e">
        <img src={images.profilee} alt="person" />
      </div>
      <div className="float f">
        <img src={images.profilef} alt="person" />
      </div>
    </section>
  );
};

export default Offer;
