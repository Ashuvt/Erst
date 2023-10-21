import "./JoinTeam.scss";
import { useEffect } from "react";
import { icons, images } from "../../../utils/images/images";
import ProfileList from "../../../components/profilelist/ProfileList";
import WOW from "wow.js";

const JoinTeam = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

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
    <section className="join_team">
      <div className="content_wrap">
        <div className="main_circle">
          <div className="overlay"></div>
          <img src={images.homeVideoBanner} alt="video_banner" />
          <div className="inner_circle">
            <div className="border-circle">
              <h1 className="wow slideInUp">9.9K</h1>
              <h6 className="wow slideInUp">Joined Our Team</h6>
            </div>
          </div>
        </div>
        <div className="text_content">
          <h2>We Invite New Workers To The Team!</h2>
          <p>
            Predictive analytics is the practice of using data, statistical
            algorithms, and machine learning techniques to identify the
            likelihood of future outcomes based on historical data. With
            predictive analytics, businesses can to improve performance.
          </p>
          <div className="rating_box wow slideInUp">
            <div className="top_line"></div>
            <div className="rating">
              <div className="stars">
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
                <img src={icons.star} alt="star" />
              </div>
              <p>
                Based on <span>10,000+</span> reviews
              </p>
            </div>
            <div className="user_stack">
              <ProfileList userList={userData} />
            </div>
          </div>
        </div>
      </div>

      <div className="join_team_glass a"></div>
      <div className="join_team_glass b"></div>
      <div className="join_team_glass c"></div>
    </section>
  );
};

export default JoinTeam;
