import { icons, images } from "../../../utils/images/images";
import "./BlogBanner.scss";

const BlogBanner = () => {
  return (
    <section className="blog_banner">
      <img src={images.blogView} alt="banner" />
      <div className="overlayer"></div>
      <a href="#blogContent">
        <span className="border">
            <span className="inner">
            </span>
            <img src={icons.whiteBigArrow} alt="arrow" />
        </span>
      </a>
    </section>
  );
};

export default BlogBanner;
