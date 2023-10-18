import { useEffect } from "react";
import "./BlogDate.scss";
import WOW from "wow.js";

const BlogDate = () => {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);
    return(
        <div className="date_wrap wow slideInUp">
        <button>new technology</button>
        <div className="animated_line">
            <div className="filler"></div>
        </div>
        <p>April 18, 2023</p>
    </div>
    )
};

export default BlogDate;