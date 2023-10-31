import "./VideoBlock.scss";
import { icons, images } from "../../../utils/images/images";
import ProfileList from "../../../components/profilelist/ProfileList";
import CircleArrowBtn from "../../../components/circlearrowbtn/CircleArrowBtn";
import TextArrowBtn from "../../../components/textarrowbtn/TextArrowBtn";

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
        <img src={images.contactUsBanner} alt="banner" className="wow zoomIn" data-wow-duration="2s" />

      
        <div className="video_card">
          <div className="img_wrap">
            <img src={images.contactUsVideoBanner} alt="video_banner" />
          </div>
          <h5>"Discussing The Main Features And Benefits..."</h5>         
          <ProfileList userList={usersData}  />
          <div className="btn_line">
            <CircleArrowBtn />        
            <TextArrowBtn text="watch video" icon={icons.whiteplay} style={{transform:'rotate(-45deg)'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
