import "./TechBlogs.scss";
import { icons, images } from "../../../utils/images/images";
import Pill from "../../../components/pill/Pill";

const TechBlogs = () => {
  const blogData = [
    {
      id: 0,
      flag: "new technology",
      date: "April 18, 2023",
      title: "SasS Vs Software",
      img: images.blogView,
    },
    {
      id: 1,
      flag: "new technology",
      date: "April 18, 2023",
      title: "SasS Vs Software",
      img: images.homeblogC,
    },
  ];
  return (
    <section className="tech_blog p_top p_bottom">
      <div className="content_wrap">
        {blogData &&
          blogData.map((data) => {
            return (
              <div className="blog_wrap" key={data.id}>
                <div className="overlay"></div>
                <div className="overlay_color"></div>
                <img src={data.img} alt="blogBanner" className="banner" />
                <div className="content">
                  <div className="top">
                    <Pill text={data.flag} />
                  </div>
                  <div className="bottom">
                    <div className="text">
                      <h6>{data.date}</h6>
                      <h5>{data.title}</h5>
                    </div>
                    <div className="btn_line">
                      <div className="line"></div>
                      <button type="button">
                        <span>
                          <img src={icons.whiteArrow} alt="arrow" className="a" />
                          <img src={icons.whiteArrow} alt="arrow" className="b" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TechBlogs;
