import "./Opportunities.scss";
import { icons, images } from "../../../utils/images/images";

const Opportunities = () => {
  return (
    <section className="home_opportunities p_bottom">
      <div className="content_wrap">
        <div className="detail">
          <h2 className="wow fadeInUp">Lorem ipsum dolor sit amet.</h2>
          <p className="wow fadeInUp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in aperiam iure laborum consequatur laboriosam nihil esse, porro architecto voluptates pariatur fugit quibusdam tenetur. Magni beatae eius temporibus!
          </p>

          <button type="button" className="wow fadeInUp">
          Lorem ipsum dolor sit.
            <div className="icon_box">
              <img src={icons.whiteArrow} alt="arrow" />
            </div>
          </button>

          <button type="button" className="wow fadeInUp">
          Lorem ipsum dolor sit.
            <div className="icon_box">
              <img src={icons.whiteArrow} alt="arrow" />
            </div>
          </button>

          <button type="button" className="wow fadeInUp">
          Lorem ipsum dolor sit.
            <div className="icon_box">
              <img src={icons.whiteArrow} alt="arrow" />
            </div>
          </button>
        </div>
        <div className="img_side wow fadeInUp">
          <img src={images.codeScreen} alt="screen" />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
