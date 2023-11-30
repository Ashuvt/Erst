import { Fragment } from "react";
import "./Blogs.scss";
import BlogsLanding from "./bloglanding/BlogsLanding";
import AllBlogs from "./allblogs/AllBlogs";
import { useTranslation } from 'react-i18next';
import PreLoginLayout from "../../layouts/preloginlayout/PreLoginLayout";



const Blogs = () => {

  const { t } = useTranslation();

  return (
    <Fragment>
<PreLoginLayout>
      <BlogsLanding t={t} />
      <AllBlogs />
      <div className="tech_blur a"></div>
      <div className="tech_blur b"></div>
      <div className="tech_blur c"></div>
      <div className="tech_blur d"></div>
      <div className="techb_blur"></div>
      </PreLoginLayout>
    </Fragment>
  );
};

export default Blogs;
