import "./AboutServices.scss";
import { images } from "../../../utils/images/images";

const AboutServices = () => {
  return (
    <section className="about_services" id="aboutService">
      <div className="content_wrap p_bottom p_top">
        <div className="bottom_line wow zoomIn"></div>
        <div className="bisec_title">
          <h2 className="wow fadeInLeft">Find Out Everything About Our Services</h2>
          <p className="wow fadeInRight">
            SaaS has become a popular software delivery model that offers
            numerous benefits, including cost-effectiveness, easy access,
            scalability, and automatic updates.
          </p>
        </div>
        <div className="bi_grid">
          <div className="img_wrap wow fadeInUp">
            <img src={images.mobile} alt="mobile" />
          </div>
          <div className="cards_wrap">
            <div className="content_card wow fadeInUp">
              <div className="video_btn">
                <img
                  src={images.videoBtnImage}
                  alt="person"
                  className="person"
                />
                <button>
                  <img src={images.pinkPlay} alt="play" />
                </button>
              </div>
              <h5>Expert Support</h5>
              <p>
                Smart Sales Assistant can quickly provide reliable information
                about customer behavior and preferences.
              </p>
            </div>
            <div className="content_card wow fadeInUp">
              <h5>Data Management</h5>
              <p>
                Offer sophisticated data mining capabilities that allow users to
                extract valuable insights from large and complex datasets. This
                could include algorithms for clustering, association analysis,
                and text mining.
              </p>
            </div>
            <div className="content_card wow fadeInUp">
              <h5>Data Warehousing</h5>
              <p>
                Offer sophisticated data mining capabilities that allow users to
                extract valuable insights from large and complex datasets. This
                could include algorithms for clustering, association analysis,
                and text mining.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="primary_light_glass wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
      <div className="primary_class first wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
      <div className="primary_class second wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s" ></div>
    </section>
  );
};

export default AboutServices;
