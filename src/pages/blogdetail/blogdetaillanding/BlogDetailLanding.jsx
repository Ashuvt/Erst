import ParticlesBg from "../../../components/particlesbg/ParticlesBg";
import "./BlogDetailLanding.scss";
import BlogDate from "./date/BlogDate";

const BlogDetailLanding = ({tag, date, title, text}) => {

    return(
        <section className="blogdetail_landing">
        <ParticlesBg />
            <div className="content_wrap">
                    <BlogDate tag={tag} date={date} />
                    <div className="text_content ">
                    <h1 className="wow fadeInUp">{title}</h1>
                    <p className="wow fadeInUp">{text}</p>
                    </div>
            </div>
            <div className="primary_glass first wow zoomIn"  data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
            <div className="primary_glass second wow zoomIn"  data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
            <div className="secondary_glass wow zoomIn"  data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
        </section>
    )
};

export default BlogDetailLanding;
