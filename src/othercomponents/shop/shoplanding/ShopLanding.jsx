import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import "./ShopLanding.scss";

const ShopLanding = () => {
  return (
    <section className="shop_landing">
      <ParticlesBg />
      <div className="content_wrap p_bottom">
        <div className="top_border wow zoomIn" ></div>
        <div className="title">
          <h1 className="wow fadeInUp">Our Great Shop!</h1>
          <p className="wow fadeInUp">
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
