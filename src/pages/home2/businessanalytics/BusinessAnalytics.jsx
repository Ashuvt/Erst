import { icons, images } from "../../../utils/images/images";
import "./BusinessAnalytics.scss";

const BusinessAnalytics = () => {
  return (
    <section className="business_analytics p_top">
      <div className="content_wrap">

        <div className="card_a wow fadeInUp">
          <h2>Business Analytics</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa pariatur voluptatibus!
          </p>
          <div className="btn_line">
            <button type="button" className="secondarybtn">
              our pricing
            </button>
            <button type="button" className="primarybtn">
              about us
            </button>
          </div>
        </div>

        <div className="card_b wow fadeInUp" data-wow-delay="0.15s">
          <button type="button" className="arrow">
            <img src={icons.lightArrow} alt="arrow" className="a" />
            <img src={icons.lightArrow} alt="arrow" className="b" />
          </button>
          <div className="person_wrap">
            <img src={images.earningA} alt="person" />
          </div>
         
          <div className="earning_flag">
            <div className="ball">
              <img src={icons.zigZag} alt="line" />
            </div>
            <div className="text">
              <p>Earnings</p>
              <p className="count">$ 12.348</p>
            </div>
          </div>
        </div>

        <div className="card_c wow fadeInUp" data-wow-delay="0.30s">
          <button type="button" className="arrow">
            <img src={icons.lightArrow} alt="arrow" className="a" />
            <img src={icons.lightArrow} alt="arrow" className="b" />
          </button>
          <img src={images.mobile} alt="bg" />
        </div>

        <div className="card_d wow fadeInUp">
          <button type="button" className="arrow">
            <img src={icons.lightArrow} alt="arrow" className="a" />
            <img src={icons.lightArrow} alt="arrow" className="b" />
          </button>
          <img src={images.mobile} alt="bg" />
        </div>

        <div className="card_e wow fadeInUp" data-wow-delay="0.15s">
          <h5>Lorem ipsum dolor sit amet </h5>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa pariatur voluptatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa pariatur voluptatibus!
          </p>
        </div>

        <div className="card_f wow fadeInUp"  data-wow-delay="0.30s">
          <button type="button" className="arrow">
            <img src={icons.lightArrow} alt="arrow" className="a" />
            <img src={icons.lightArrow} alt="arrow" className="b" />
          </button>
          <div className="person_wrap">
            <img src={images.earningB} alt="person" />
          </div>
          <div className="earning_flag">
            <div className="ball">
              <img src={icons.zigZag} alt="line" />
            </div>
            <div className="text">
              <p>Earnings</p>
              <p className="count">$ 12.348</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalytics;
