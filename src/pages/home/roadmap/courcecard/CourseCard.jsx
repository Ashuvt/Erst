import "./CourseCard.scss";
import { Fragment } from "react";
import { icon } from "../../../../utils/images/icons";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ name, img, type, about, courses }) => {
  const navigate = useNavigate();

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
      </div>
      <div className="courses_list">
        <p>{about}</p>
        <p className="t-g-18">Available Courses</p>
        <ol>
          {courses.map((ele) => {
            return (
              <Fragment key={ele.id}>
                <li>{ele.course}</li>
              </Fragment>
            );
          })}
        </ol>
        <button
          type="buttton"
          className="primarybtn"
          onClick={() => navigate("/contact")}
        >
          Explore Free Lessons
        </button>
      </div>
      <div
        className="bottom_shad wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
    </div>
  );
};

export default CourseCard;
