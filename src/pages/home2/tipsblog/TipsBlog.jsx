import { Fragment } from "react";
import { images } from "../../../utils/images/images";
import "./TipsBlog.scss";
import TipsBlogCard from "./tipsblogcard/TipsBlogCard";

const TipsBlog = () => {

  const blogData = [
    {
      id:0,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, ex placeat rem, nulla minus harum quaerat eveniet voluptate natus dolore quas quae debitis? Eum harum qui nam.",
      img: images.homeblogA,
      date: "april 18, 2023",
    },
    {
      id:1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, ex placeat rem, nulla minus harum quaerat eveniet voluptate natus dolore quas quae debitis? Eum harum qui nam.",
      img: images.homeblogB,
      date: "april 18, 2023",
    },
    {
      id:2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, ex placeat rem, nulla minus harum quaerat eveniet voluptate natus dolore quas quae debitis? Eum harum qui nam.",
      img: images.homeblogC,
      date: "april 18, 2023",
    },
  ];

  return (
    <section className="tips_blog p_bottom">
      <div className="content_wrap">
        <div className="left">
          <h2 className="wow fadeInUp">Lorem ipsumonsectetur adipisicing.</h2>
          <p className="wow fadeInUp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit consequatur dolor provident ipsam minima, harum illo id, dolores blanditiis fuga sit natus quis sapiente assumenda! Nam, dolores facilis! Id.
          </p>
          <button type="button" className="primarybtn wow fadeInUp">
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
