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
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="data_wrap">
              <h3>7900+</h3>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="data_wrap">
              <h3>60+</h3>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="content_sec">
          <h2 className="wow fadeInUp">Successful Analytics</h2>
          <p className="wow fadeInUp">
          Lorem ipsum, dolor sit amet consectt quis possimus veniam recusandae. Ut maxime ipsam iste incidunt. Maxime quasi asperiores repellendus cum odit voluptate eius itaque fugiat est, fugit nobis amet corrupti sit. Repellat obcaecati rem id blanditiis.
          </p>
          <button type="button" className="secondarybtn wow fadeInUp">
            learn more about us
          </button>
        </div>
      </div>
      <div
        className="primary_glass wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
    </section>
  );
};

export default SuccessfulAnalytics;
