import { images } from "../../../utils/images/images";
import FeedGrid from "../../home/feedback/feedgrid/FeedGrid";
import "./BlogContent.scss";
import { blogsData } from "../../../utils/data/data";
import { Fragment } from "react";

const BlogContent = ({ content }) => {
  return (
    <section className="blog_content p_top" id="blogContent">
      <div className="content_wrap">
        <div dangerouslySetInnerHTML={{ __html: content }}>

        </div>
      </div>
    </section>
  );
};

export default BlogContent;
