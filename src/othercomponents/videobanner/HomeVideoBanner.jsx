import { useEffect } from "react";
import "./HomeVideoBanner.scss";
import { icons, images } from "../../utils/images/images";
import WOW from "wow.js";

const HomeVideoBanner = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <section className="home_video_banner">
      <div className="video_wrap">
        <img src={images.homeVideoBanner} alt="banner" />
      </div>
      <div className="overlay">
        <div className="text_content">
          <div className="content">
            <h2 className="wow slideInUp">Lorem, ipsum dolor.:<br />Lorem ipsum dolor sit amet.</h2>
            <p className="wow slideInUp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit non molestiae reiciendis nulla suscipit dignissimos eveniet tenetur. Maiores incidunt dolorum nulla itaque ratione dolor reprehenderit explicabo, libero officiis eius minima nostrum obcaecati, repudiandae facilis id ullam omnis magni harum?
            </p>
            <button className="primarybtn wow slideInUp">
              watch video
              <img src={icons.whiteplay} alt="play" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoBanner;
