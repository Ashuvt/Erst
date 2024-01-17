import { icon } from "../../../utils/images/icons";
import "./ExploreCourseCard.scss";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../utils/apidata";

import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";

const ExploreCourseCard = ({
  _id,
  image,
  small_description,
  course_time,
  title,
  text,
  students,
  isSave,
  index,
  redirectTo,
  saveHandler
}) => {

  const navigate = useNavigate();

  const saveCourse = (e, cousrseId) => {
    e.stopPropagation();
    saveHandler(cousrseId);
  };
  return (
    <div className="explorecourse_card_wrap">
      <button type="button" onClick={(e) => saveCourse(e, _id)}>
        {isSave ? (
          <img src={icon.saved} alt="save" />
        ) : (
          <img src={icon.save} alt="save" />
        )}
      </button>

      <div
        className="explorecourse_card wow zoomIn"
        data-wow-delay={`${(0.2 * index) % 3}s`}
        onClick={() => navigate(redirectTo)}
      >

        <div className="poster_wrap">
          <span>Cources</span>
          <img src={`${baseUrl}/${image}`} alt="poster" />
        </div>
        <div className="bg_card_overlay"></div>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: small_description }}
        ></div>

        <h2>{title}</h2>

        <p className="small_text">{text}</p>

        <div className="counter_info">
          {students && (
            <div className="info">
              <img src={icon.students} alt="student" />
              <p>{students}</p>
            </div>
          )}

          {course_time && (
            <div className="info">
              <img src={icon.clock} alt="student" />
              <p>{course_time}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourseCard;
