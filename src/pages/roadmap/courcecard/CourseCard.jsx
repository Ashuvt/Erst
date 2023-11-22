import "./CourseCard.scss";
import { Fragment } from "react";
import {icon} from "../../../utils/images/icons";

const CourseCard = ({ name, img, type, about, courses }) => {
  return (
    <div className="course_card">
      <div className="sticky_content">
        <div className="img_wrap">
          <img src={img} alt="logo" />
        </div>
        <div className="name_line">
          <div className="box" style={{ background: `${type}` }}></div>
          <p className="t-g-18">{name}</p>          
        </div>
        <div className="counts_info">
            <div className="info">
              <img src={icon.students} alt="students" />
              <p>1413 Students</p>
            </div>
            <div className="info">
              <img src={icon.clock} alt="clock" />
              <p>18h 12m</p>
            </div>
          </div>
             <button type="buttton" className="primarybtn">Explore Free Lessons</button>
      </div>
      <div className="courses_list">
      <p>{about}</p>
      <p className="t-g-18">Available Courses</p>
      <ol>
        {
          courses.map((ele) => {
            return(
              <Fragment key={ele.id}>
                <li>{ele.course}</li>
              </Fragment>
            )
          })
        }
      </ol>
      </div>
    </div>
  );
};

export default CourseCard;
