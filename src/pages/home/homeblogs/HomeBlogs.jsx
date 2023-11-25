import { Fragment } from "react";
import "./HomeBlogs.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import Pill from "../../../components/pill/Pill";
import { images } from "../../../utils/images/images";
import HomeBlogCard from "./blogcard/HomeBlogCard";
import { blogsData } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";

const HomeBlogs = ({t}) => {

const navigate = useNavigate();

  return (
    <section className="home_blog p_bottom ">
      <div className="content_wrap p_top">
        <MidTitle
          title={t('homeBlogTopTitle')}
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
              <Pill text={t('homeBlogMainLabel')} />
              <h4>
              {t('homeBlogMainTitle')}
              </h4>
             <p>{t('homeBlogMainPara')}</p>
              <div className="btn_line">
                <button type="buton" className="secondarybtn" onClick={() => navigate("/blogs")}>
                <p>{t('homeBlogMainBtn')}</p>
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
