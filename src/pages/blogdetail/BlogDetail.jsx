import { Fragment } from "react";
import BlogBanner from "./blogbanner/BlogBanner";
import BlogContent from "./blogcontent/BlogContent";
import BlogDetailLanding from "./blogdetaillanding/BlogDetailLanding";
import BlogPagination from "./blogpagination/BlogPagination";

const BlogDetail = () => {
    return(
        <Fragment>
            <BlogDetailLanding />
            <BlogBanner />
            <BlogContent />
            <BlogPagination />
        </Fragment>
    )
};

export default BlogDetail;
