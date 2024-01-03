import { icon } from "../../../utils/images/icons";
import "./ExploreCard.scss";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../utils/apidata";

import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";

const ExploreCard = ({
  _id,
  image,
  small_description,
  course_time,
  title,
  text,
  students,
  modules,
  saved,
  index,
  redirectTo,
}) => {
  const { saveCourseApi } = useContext(redirectContext);

  const navigate = useNavigate();

  const saveHandler = (e, cousrseId) => {
    e.stopPropagation();
    saveCourseApi(cousrseId);
  };
  return (
    <div className="card_wrap">
      <button type="button" onClick={(e) => saveHandler(e, _id)}>
        {saved ? (
          <img src={icon.saved} alt="save" />
        ) : (
          <img src={icon.save} alt="save" />
        )}
      </button>
      <div
        className="explore_card wow zoomIn"
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

export default ExploreCard;
