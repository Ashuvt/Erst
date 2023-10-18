import { useEffect } from "react";
import "./BlogDetailLanding.scss";
import BlogDate from "./date/BlogDate";

import WOW from "wow.js";

const BlogDetailLanding = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);


    return(
        <section className="blogdetail_landing p_bottom">
            <div className="content_wrap">
                    <BlogDate />
                    <div className="text_content ">
                    <h1 className="wow slideInUp">SaaS Investment</h1>
                    <p className="wow slideInUp">In today's fast-paced digital world, businesses and individuals alike rely heavily on software to streamline operations, enhance productivity, and drive growth.</p>
                    </div>
            </div>
        </section>
    )
};

export default BlogDetailLanding;
