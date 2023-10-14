import { Fragment } from "react";
import "./HomeBlogs.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import Pill from "../../../components/pill/Pill";
import { images } from "../../../utils/images/images";
import HomeBlogCard from "./blogcard/HomeBlogCard";

const HomeBlogs = () => {
  const blogData = [
    {
      id:0,
      tag:"AI Development",
      title:"The Challenges of Saas Adoption",
      date:"april 18, 2023",
      img:images.homeblogA
    },
    {
      id:1,
      tag:"Business Tips",
      title:"A Good SaaS Provider for you",
      date:"april 18, 2023",
      img:images.homeblogB
    },
    {
      id:2,
      tag:"New Technology",
      title:"SaaS verses on premises software",
      date:"april 18, 2023",
      img:images.homeblogC
    },
    {
      id:3,
      tag:"AI Development",
      title:"Data Security in Saas",
      date:"april 18, 2023",
      img:images.homeblogD
    },
  ]
  return (
    <section className="home_blog">
      <div className="content_wrap">
        <MidTitle
          title="Read Our Interesting Blog Posts"
          text="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
        />
        {/* Blog Grid */}
        <div className="home_blog_grid">
          <div className="left">
            <div className="blog_view">
              <div className="overlay"></div>
              <img src={images.homeblogD} alt="banner" />
            </div>
            <div className="blog_content_box">
              <Pill text="AI Development" />
              <h4>
                The importance of data <br />
                security in SaaS
              </h4>
              <p>
                By using machine learning algorithms and predictive analytics,
                businesses can automate decision-making processes. This can help
                businesses make faster and more accurate decisions, such as
                predicting equipment failures or identifying the most profitable
                customers.
              </p>
              <div className="btn_line">
                <button type="buton" className="secondarybtn">
                  view all news
                </button>
              </div>
            </div>
          </div>
          <div className="all_blogs">
            {
              blogData.map((data) => {
                return(
                  <Fragment key={data.id}>
                    <HomeBlogCard {...data} />
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
