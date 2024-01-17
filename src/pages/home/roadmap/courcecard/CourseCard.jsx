import "./CourseCard.scss";
import { icon } from "../../../../utils/images/icons";
import { baseUrl } from "../../../../utils/apidata";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  _id,
  name,
  image,
  description,
  small_description,
  course_time,
  students,
}) => {
  const navigate = useNavigate();

  return (
    <div className="course_card">
      <div className="sticky_content">
        <div className="img_wrap">
          <img src={`${baseUrl}/${image}`} alt="logo" />
        </div>
        <div className="name_line">
          <div className={`box ${name}`}></div>
          <p className="t-g-18">{name}</p>
        </div>
        <div className="counts">
          <div className="info">
            <img src={icon.students} alt="students" />
            <p>{students}</p>
          </div>
          <div className="info">
            <img src={icon.clock} alt="clock" />
            <p>{course_time}</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: small_description }}></div>
        <button
          type="buttton"
          className="primarybtn"
          onClick={() => navigate("/contact")}
        >
          Explore Free Lessons
        </button>
      </div>

      <div className="courses_list">    
        <p className="t-g-18">Available Courses</p>   

        <div dangerouslySetInnerHTML={{ __html: description }}></div>
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
