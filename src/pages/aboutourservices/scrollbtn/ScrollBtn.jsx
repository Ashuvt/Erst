import { images } from "../../../utils/images/images";
import "./ScrollBtn.scss";

const ScrollBtn = () => {
  return (
    <section className="rotate_sqares">
      <a href="#aboutService">
        <span className="border">
          <span className="inner"></span>
          <p>scroll</p>
        </span>
      </a>

      <div className="sqare_wrap">
        <div className="sqare">
          <img src={images.squareBg} alt="bg" />
        </div>

        <div className="sqare">
          <img src={images.squareBg} alt="bg" />
        </div>

        <div className="sqare">
          <img src={images.squareBg} alt="bg" />
        </div>

        <div className="sqare">
          <img src={images.squareBg} alt="bg" />
        </div>

        <div className="sqare">
          <img src={images.squareBg} alt="bg" />
        </div>
      </div>
    </section>
  );
};

export default ScrollBtn;
