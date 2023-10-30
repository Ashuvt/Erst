import "./RedBlueCard.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment } from "react";

const RedBlueCard = ({
  img,
  rating,
  color,
  team,
  desc,
  students,
  duration,
  modules,
  clickHandler
}) => {
  return (
    <div className="red_blue_card">
      <div className="content_wraper">
        <div className="logo_wrap">
          <img src={img} alt="logo" />
          <div className="rating">
            <img src={icon.starYellow} alt="star" />
            <p>{rating}</p>
          </div>
        </div>
        <div className="team_name">
          <div className="box" style={{ backgroundColor: `${color}` }}></div>
          <p>{team}</p>
        </div>
        <p className="description">{desc}</p>
        <div className="counts">
          <div className="info">
            <img src={icon.students} alt="students" />
            <p>{students} Students</p>
          </div>
          <div className="info">
            <img src={icon.clock} alt="clock" />
            <p>{duration}</p>
          </div>
        </div>

        <button type="button" className="authbtn auth_primary" onClick={clickHandler}>
          Explore Free Lessons
        </button>

        <p className="dark">Modules</p>
        <ol>
          {modules.map((data, k) => {
            return (
              <Fragment key={k}>
                <li>{data}</li>
              </Fragment>
            );
          })}
        </ol>
        <p>25+ More</p>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default RedBlueCard;
