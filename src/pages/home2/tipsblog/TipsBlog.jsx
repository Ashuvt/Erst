import { Fragment, useEffect } from "react";
import { images } from "../../../utils/images/images";
import "./TipsBlog.scss";
import TipsBlogCard from "./tipsblogcard/TipsBlogCard";
import WOW from "wow.js";

const TipsBlog = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  const blogData = [
    {
      id:0,
      title: "The challenges of sass adoption:how to overcome them",
      text: "In today's fast-paced digital world, businesses and individuals alike rely heavily on software to streamline operations, enhance productivity, and drive growth.",
      img: images.homeblogA,
      date: "april 18, 2023",
    },
    {
      id:1,
      title: "How to Choose the Right SaaS Provider",
      text: "In today's fast-paced digital world, businesses and individuals alike rely heavily on software to streamline operations, enhance productivity, and drive growth.",
      img: images.homeblogB,
      date: "april 18, 2023",
    },
    {
      id:2,
      title: "SaaS vs On-Premises Software: Which is Right for Your Business?",
      text: "In today's fast-paced digital world, businesses and individuals alike rely heavily on software to streamline operations, enhance productivity, and drive growth.",
      img: images.homeblogC,
      date: "april 18, 2023",
    },
  ];

  return (
    <section className="tips_blog p_bottom">
      <div className="content_wrap">
        <div className="left">
          <h2 className="wow slideInUp">Find Useful Tips In Our Blog Posts</h2>
          <p className="wow slideInUp">
            Our publications can provide quality and useful tips and advice for
            companies on how to evaluate SaaS providers and choose the best one
            for their needs, taking into account factors such as price, features
            and support.
          </p>
          <button type="button" className="primarybtn wow slideInUp">
            view all post
          </button>
        </div>
        <div className="blog_column">
            {
                blogData.map((data) => {
                    return(
                      <Fragment key={data.id}>
                        <TipsBlogCard {...data} />
                        </Fragment>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default TipsBlog;
