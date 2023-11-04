import "./JoinTeam.scss";
import { icons, images } from "../../../utils/images/images";
import ProfileList from "../../../components/profilelist/ProfileList";

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
    <section className="join_team">
      <div className="content_wrap">
        <div className="main_circle">
          <div className="overlay"></div>
          <img src={images.homeVideoBanner} alt="video_banner" />
          <div className="inner_circle">
            <div className="border-circle">
              <h1 className="wow fadeInUp">9.9K</h1>
              <h6 className="wow fadeInUp">Joined Our Team</h6>
            </div>
          </div>
        </div>
        <div className="text_content">
          <h2 className="wow fadeInUp">We Invite New Workers To The Team!</h2>
          <p className="wow fadeInUp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus quisquam quia error ullam blanditiis. Accusantium ut rem ratione expedita sequi saepe, repellat dicta voluptatibus voluptatum quisquam illum libero corrupti.
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
                Based on <span>10,000+</span> reviews
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
  );
};

export default JoinTeam;
