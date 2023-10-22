import { useEffect } from "react";
import "./ShopLanding.scss";
import WOW from "wow.js";

const ShopLanding = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="shop_landing">
      <div className="content_wrap p_bottom">
        <div className="top_border wow zoomIn" ></div>
        <div className="title">
          <h1>Our Great Shop!</h1>
          <p>
            Welcome to our online store, where we provide an immersive and
            exciting gaming experience through a range of gaming consoles and
            virtual glasses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopLanding;
