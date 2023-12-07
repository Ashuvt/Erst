import "./BlogDetailLanding.scss";
import BlogDate from "./date/BlogDate";

const BlogDetailLanding = ({ title, text, date }) => {

  const FormattedDate = (isoString) => {
    const date = new Date(isoString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };
  
  return (
    <section className="blogdetail_landing">
      <div className="content_wrap">        
        <BlogDate date={FormattedDate(date)}/>        
        <div className="text_content ">
          <h1 className="wow fadeInUp">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
      <div
        className="primary_glass first wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="primary_glass second wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="secondary_glass wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
    </section>
  );
};

export default BlogDetailLanding;
