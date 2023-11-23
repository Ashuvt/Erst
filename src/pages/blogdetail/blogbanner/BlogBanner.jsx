import { useRef } from "react";
import { icons, images } from "../../../utils/images/images";
import "./BlogBanner.scss";


const BlogBanner = () => {


 const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className="blog_banner">
      <img src={images.blogView} alt="banner" />
      <div className="overlayer"></div>
      <button href="#blogContent" onClick={() => scrollToSection('blogContent')}>
        <span className="border">
            <span className="inner">
            </span>
            <img src={icons.whiteBigArrow} alt="arrow" />
        </span>
      </button>
    </section>
  );
};

export default BlogBanner;
