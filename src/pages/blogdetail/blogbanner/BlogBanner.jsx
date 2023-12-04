import {icons} from "../../../utils/images/images";
import "./BlogBanner.scss";

const BlogBanner = ({img}) => {

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
      <div className="content_wrap">
      <img src={img} alt="banner" />
      <div className="overlayer"></div>
      <button href="#blogContent" onClick={() => scrollToSection('blogContent')}>
        <span className="border">
            <span className="inner">
            </span>
            <img src={icons.whiteBigArrow} alt="arrow" />
        </span>
      </button>
      </div>
    </section>
  );
};

export default BlogBanner;
