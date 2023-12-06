import "./RedBlueCard.scss";
import { icon } from "../../../../utils/images/icons";
import { Fragment } from "react";
import { baseUrl } from "../../../../utils/data/data";

const RedBlueCard = ({
  image,
  name,
  team,
  small_description,
  students,
  course_time,
  clickHandler
}) => {
  return (
    <div className="red_blue_card">
      <div className="content_wraper">
        <div className="logo_wrap">
          <img src={`${baseUrl}/${image}`} alt="logo" />
  
        </div>
        <div className="content">
          <div className="sticky_box">
          <div className="team_name">
            <div className={`box ${name}`} ></div>
            <p>{name}</p>
          </div>
          <div className="description" dangerouslySetInnerHTML={{ __html: small_description }} ></div>
          <div className="counts">
            <div className="info">
              <img src={icon.students} alt="students" />
              <p>{students} Students</p>
            </div>
            <div className="info">
              <img src={icon.clock} alt="clock" />
              <p>{course_time}</p>
            </div>
          </div>

          <button
            type="button"
            className="authbtn auth_primary"
            onClick={clickHandler}
          >
            Explore Free Lessons
          </button>
          </div>       
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default RedBlueCard;
