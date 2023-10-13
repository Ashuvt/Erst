import "./HomeVideoBanner.scss";
import { icons, images } from "../../../utils/images/images";

const HomeVideoBanner = () => {
  return (
    <section className="home_video_banner">
      <div className="video_wrap">
        <img src={images.homeVideoBanner} alt="banner" />
      </div>
      <div className="overlay">
        <div className="text_content">
          <div className="content">
            <h2>The Future Of SaaS:<br /> Trends To Watch Out For</h2>
            <p>
              Additionally, the Intelligent Analytics Suite can be integrated
              with other SaaS products, such as CRM and marketing automation
              tools, to provide a comprehensive view of business performance.
              This can help businesses identify new opportunities, optimize
              their marketing campaigns, and improve customer engagement.
            </p>
            <button className="primarybtn">
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
