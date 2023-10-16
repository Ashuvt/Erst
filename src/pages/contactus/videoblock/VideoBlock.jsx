import "./VideoBlock.scss";
import { icons, images } from "../../../utils/images/images";

const VideoBlock = () => {
  const usersData = [
    {
      id: 0,
      img: images.profilea,
    },
    {
      id: 1,
      img: images.profileb,
    },
    {
      id: 2,
      img: images.profilec,
    },
    {
      id: 3,
      img: images.profiled,
    },
    {
      id: 4,
      img: images.profilee,
    },
    {
      id: 5,
      img: images.profilef,
    },
  ];
  return (
    <section className="video_block">
      <div className="video_block">
        <div className="image_overlay"></div>
        <img src={images.contactUsBanner} alt="banner" />

        {/* Video Card */}
        <div className="video_card">
          <div className="img_wrap">
            <img src={images.contactUsVideoBanner} alt="video_banner" />
          </div>
          <h5>"Discussing The Main Features And Benefits..."</h5>
          <div className="users_list">
            {usersData.map((data) => {
              return (
                <div className="profile" key={data.id}>
                  <img src={data.img} alt="avtar" />
                </div>
              );
            })}
          </div>
          <div className="btn_line">
            <button type="button" className="round">
              <img src={icons.whiteArrow} alt="arrow" />
            </button>
            <button type="button" className="normal">
              watch video
              <img src={icons.whiteplay} alt="play" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
