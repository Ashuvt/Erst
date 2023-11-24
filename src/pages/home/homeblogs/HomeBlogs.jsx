import { Fragment } from "react";
import "./HomeBlogs.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import Pill from "../../../components/pill/Pill";
import { images } from "../../../utils/images/images";
import HomeBlogCard from "./blogcard/HomeBlogCard";
import { blogsData } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";

const HomeBlogs = () => {

const navigate = useNavigate();

  return (
    <section className="home_blog p_bottom ">
      <div className="content_wrap p_top">
        <MidTitle
          title="Read Our Interesting Blog Posts"
          text=""
        />
        {/* Blog Grid */}
        <div className="home_blog_grid">
          <div className="left wow fadeInUp">
            <div className="blog_view">
              <div className="overlay"></div>
              <img src={images.homeblogD} alt="banner" />
            </div>
            <div className="blog_content_box">
              <Pill text="Deep Learning" />
              <h4>
              Revealing the Hidden Threat: Deep Learning Unlocks Acoustic Side Channel Attacks on Keyboards
              </h4>
              <p>              
              In our increasingly interconnected world, where technology's reach spans from personal devices to online services, the threat landscape continues to evolve. One emerging threat that has caught the attention of cybersecurity researchers is acoustic side channel attacks (ASCA) on keyboards.
              </p>
              <div className="btn_line">
                <button type="buton" className="secondarybtn" onClick={() => navigate("/blogs")}>
                  view all blogs
                </button>
              </div>
            </div>
          </div>
          <div className="all_blogs">
            {
            blogsData && blogsData.map((data, k) => {
                return(
                  <Fragment key={data.id}>
                    <HomeBlogCard {...data} index={k} />
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
