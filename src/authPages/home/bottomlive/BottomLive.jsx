import "./BottomLive.scss";
import { images } from "../../../utils/images/images";
import { Fragment } from "react";

const BottomLive = () => {
  const liveData = [
    {
      id: 0,
      img: images.liveA,
      title: "Help guide",
    },
    {
      id: 1,
      img: images.liveB,
      title: "Popular courses",
    },
    {
      id: 2,
      img: images.liveC,
      title: "Community",
    },
    {
      id: 3,
      img: images.liveD,
      title: "Help guide",
    },
  ];
  return (
    <div className="home_bottom_live">
      {liveData.map((data, k) => {
        return (
          <Fragment key={data.id}>
          <div className="live_card wow fadeInUp" data-wow-delay={`${0.15*k}s`} >
            <div className="img_wrap">
              <img src={data.img} alt="poster" />
            </div>
            <h5 className="small_title">{data.title}</h5>
          </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default BottomLive;
