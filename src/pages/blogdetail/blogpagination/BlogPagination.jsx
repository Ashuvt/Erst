import { icons } from "../../../utils/images/images";
import "./BlogPagination.scss";

const BlogPagination = () => {
    
  return (
    <section className="blog_pagination p_top p_bottom">
      <div className="content_wrap">
        <div className="prev wow fadeInLeft">
          <img src={icons.whiteArrow} alt="arrow" />
          <p>Previous Post</p>
          <h5>The Benefits of SaaS: Why Cloud-Based Software is the Future</h5>
        </div>
        <div className="next wow fadeInRight">
          <img src={icons.whiteArrow} alt="arrow" />
          <p>Next Post</p>
          <h5>The Challenges of SaaS Adoption: How to Overcome Them</h5>
        </div>
      </div>
      <div className="primary_glass wow zoomIn"></div>
    </section>
  );
};

export default BlogPagination;
