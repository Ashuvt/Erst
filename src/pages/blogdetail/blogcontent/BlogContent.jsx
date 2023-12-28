import "./BlogContent.scss";

const BlogContent = ({ content }) => {
  return (
    <section className="blog_content p_top" id="blogContent">
      <div className="content_wrap">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </section>
  );
};

export default BlogContent;
