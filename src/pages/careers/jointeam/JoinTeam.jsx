import "./JoinTeam.scss";
import { Fragment } from "react";
import { icons, images } from "../../../utils/images/images";
import ProfileList from "../../../components/profilelist/ProfileList";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";

const JoinTeam = () => {
  const userData = [
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
  ];
  return (
    <Fragment>
    <ParticlesBg />
    <section className="join_team">
     
      <div className="content_wrap">
        <div className="main_circle">
          <div className="overlay"></div>
          <img src={images.homeVideoBanner} alt="video_banner" />
        
        </div>
        <div className="text_content">
          <h2 className="wow fadeInUp">We Invite New Talents To join are Team!</h2>
          <p className="wow fadeInUp">
          While CyberGain Academy currently doesn't have any vacant positions, we welcome individuals with a technical background in cybersecurity to submit their CVs. In cases where a suitable position is not immediately available, we are open to creating roles based on the qualifications and expertise of exceptional candidates. With the right blend of passion, skills, and experience, CyberGain Academy envisions expanding alongside a diverse team of experts from around the globe. Your unique talents could be the catalyst for our collective growth.

          </p>
          <div className="rating_box">
            <div className="top_line"></div>
            <div className="rating wow fadeInUp">
              <div className="stars">
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
              </div>
              <p>
                Based on reviews
              </p>
            </div>
            <div className="user_stack wow fadeInUp">
              <ProfileList userList={userData} />
            </div>
          </div>
        </div>
      </div>

      <div className="join_team_glass a"></div>
      <div className="join_team_glass b"></div>
      <div className="join_team_glass c"></div>
    </section>
    </Fragment>
  );
};

export default JoinTeam;
