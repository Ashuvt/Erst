import { Fragment } from "react";
import "./Blogs.scss";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import BlogsLanding from "./bloglanding/BlogsLanding";
import AllBlogs from "./allblogs/AllBlogs";

const Blogs = () => {
  return (
    <Fragment>
      <Header />
      <BlogsLanding />
      <AllBlogs />
      <div className="tech_blur a"></div>
      <div className="tech_blur b"></div>
      <div className="tech_blur c"></div>
      <div className="tech_blur d"></div>
      <div className="techb_blur"></div>
      <Footer />
    </Fragment>
  );
};

export default Blogs;
