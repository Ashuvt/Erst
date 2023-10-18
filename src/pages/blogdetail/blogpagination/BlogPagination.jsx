import { useEffect } from "react";
import { icons} from "../../../utils/images/images";
import "./BlogPagination.scss";
import WOW from "wow.js";

const BlogPagination = () => {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);
    return(
        <section className="blog_pagination p_top p_bottom">
            <div className="content_wrap">
        <div className="prev wow slideInUp">
            <img src={icons.whiteArrow} alt="arrow" />
        <p>Previous Post</p>
        <h5>The Benefits of SaaS: Why Cloud-Based Software is the Future</h5>
        </div>
        <div className="next wow slideInUp">
            <img src={icons.whiteArrow} alt="arrow" />
        <p>Next Post</p>
        <h5>The Challenges of SaaS Adoption: How to Overcome Them</h5>
        </div>
            </div>
        </section>
    )
};

export default BlogPagination;
