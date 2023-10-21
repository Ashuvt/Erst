import "./SuccessfulAnalytics.scss";
import { images } from "../../../utils/images/images";

const SuccessfulAnalytics = () => {
  return (
    <section className="success_analytics p_top">
      <div className="content_wrap">
        <div className="graph_sec">
          <div className="graph_card">
            <img src={images.analyticBg} alt="bg" />
            <div className="bar a"></div>
            <div className="bar b"></div>
            <div className="bar c"></div>
            <div className="bar d"></div>
            <div className="bar e"></div>
            <div className="bar f"></div>
            <div className="bar g"></div>
          </div>
          <div className="count_wrap">
            <div className="data_wrap">
              <h3>37M+</h3>
              <p>People using Intelligent Analytics</p>
            </div>
            <div className="data_wrap">
              <h3>7900+</h3>
              <p>People interested in Intelligent Analytics</p>
            </div>
            <div className="data_wrap">
              <h3>60+</h3>
              <p>We cooperate with famous companies</p>
            </div>
          </div>
        </div>
        <div className="content_sec">
          <h2>Successful Analytics</h2>
          <p>
            Predictive analytics is the practice of using data, statistical
            algorithms, and machine learning techniques to identify the
            likelihood of future outcomes based on historical data. With
            predictive analytics, businesses can to improve performance.
          </p>
          <button type="button" className="secondarybtn">
            learn more about us
          </button>
        </div>
      </div>
      <div className="primary_class"></div>
    </section>
  );
};

export default SuccessfulAnalytics;
