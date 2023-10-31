import { Fragment, useEffect } from "react";
import BlogBanner from "./blogbanner/BlogBanner";
import BlogContent from "./blogcontent/BlogContent";
import BlogDetailLanding from "./blogdetaillanding/BlogDetailLanding";
import BlogPagination from "./blogpagination/BlogPagination";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import WOW from "wow.js";

const BlogDetail = () => {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);

    return(
        <Fragment>
            <Header />
            <BlogDetailLanding />
            <BlogBanner />
            <BlogContent />
            <BlogPagination />
            <Footer />
        </Fragment>
    )
};

export default BlogDetail;
