import { useEffect } from "react";
import "./BlogsLanding.scss";
import WOW from "wow.js";

const BlogsLanding = ({t}) => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <section className="blog_landing">
      <div className="content_wrap p_bottom">
      <div className="top_border"></div>
        <div className="title_wrap">
          <h1 className="wow fadeInUp">{t('blogsLandingTitle')}</h1>
          <p className="wow fadeInUp">{t('blogsLandingPara')}</p>
        </div>
      </div>      
    </section>
  );
};

export default BlogsLanding;
