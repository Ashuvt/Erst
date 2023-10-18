import { useEffect } from "react";
import "./AboutServices.scss";
import {images} from "../../../utils/images/images";
import WOW from "wow.js";

const AboutServices = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);


    return(
        <section className="about_services p_bottom p_top">
            <div className="content_wrap">
            <div className="bottom_line wow slideInUp"></div>
                <div className="bisec_title">
                    <h2>Find Out Everything About Our Services</h2>
                    <p>SaaS has become a popular software delivery model that offers numerous benefits, including cost-effectiveness, easy access, scalability, and automatic updates.</p>
                </div>
                <div className="bi_grid">
                    <div className="img_wrap wow slideInUp">
                        <img src={images.mobile} alt="mobile" />
                    </div>
                    <div className="cards_wrap">
                        <div className="content_card wow slideInUp">
                            <div className="video_btn">
                                <img src={images.videoBtnImage} alt="person" className="person" />
                                <button>
                                    <img src={images.pinkPlay} alt="play" />
                                </button>
                            </div>
                            <h5>Expert Support</h5>
                            <p>Smart Sales Assistant can quickly provide reliable information about customer behavior and preferences.</p>
                        </div>
                        <div className="content_card wow slideInUp">
                            <h5>Data Management</h5>
                            <p>Offer sophisticated data mining capabilities that allow users to extract valuable insights from large and complex datasets. This could include algorithms for clustering, association analysis, and text mining.</p>
                        </div>
                        <div className="content_card wow slideInUp">
                        <h5>Data Warehousing</h5>
                            <p>Offer sophisticated data mining capabilities that allow users to extract valuable insights from large and complex datasets. This could include algorithms for clustering, association analysis, and text mining.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutServices;