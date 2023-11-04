import { Fragment } from "react";
import "./HomeBlogs.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import Pill from "../../../components/pill/Pill";
import { images } from "../../../utils/images/images";
import HomeBlogCard from "./blogcard/HomeBlogCard";
import { blogsData } from "../../../utils/data/data";

const HomeBlogs = () => {





  return (
    <section className="home_blog p_bottom">
      <div className="content_wrap">
        <MidTitle
          title="Read Our Interesting Blog Posts"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste dignissimos mollitia? Maxime similique doloribus quae, voluptatum facilis cupiditate hic nisi natus, reiciendis ducimus cumque soluta voluptates?"
        />
        {/* Blog Grid */}
        <div className="home_blog_grid">
          <div className="left wow fadeInUp">
            <div className="blog_view">
              <div className="overlay"></div>
              <img src={images.homeblogD} alt="banner" />
            </div>
            <div className="blog_content_box">
              <Pill text="AI Development" />
              <h4>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              </h4>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut mollitia dolore repellendus neque! Voluptatum pariatur eveniet ea beatae ratione, deleniti enim aspernatur, doloribus quisquam iure veniam tenetur laborum at natus, fugiat ducimus laboriosam odit et!
              </p>
              <div className="btn_line">
                <button type="buton" className="secondarybtn">
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
