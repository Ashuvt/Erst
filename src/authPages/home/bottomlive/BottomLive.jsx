import "./BottomLive.scss";
import { images } from "../../../utils/images/images";

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
      {liveData.map((data) => {
        return (
          <div className="live_card">
            <div className="img_wrap">
              <img src={data.img} alt="poster" />
            </div>
            <h5 className="small_title">{data.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default BottomLive;
