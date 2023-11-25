import "./JoinTeam.scss";
import { Fragment } from "react";
import { icons, images } from "../../../utils/images/images";
import ProfileList from "../../../components/profilelist/ProfileList";
import ParticlesBg from "../../../components/particlesbg/ParticlesBg";

const JoinTeam = ({t}) => {
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
          <img src={images.JoinTeam} alt="video_banner" />
        
        </div>
        <div className="text_content">
          <h2 className="wow fadeInUp">{t('inviteTitle')}</h2>
          <p className="wow fadeInUp">{t('invitePara')}</p>
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
              <p>{t('reviewText')}</p>
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
