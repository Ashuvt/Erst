import { icon } from "../../../utils/images/icons";
import "./SavedCard.scss";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../utils/apidata";

import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";

const SavedCard = ({
  _id,
  course_id,
  index,
}) => {
  const { saveCourseApi } = useContext(redirectContext);


  const saveHandler = (e, cousrseId) => {
    e.stopPropagation();
    saveCourseApi(cousrseId);
  };
  return (
    <div className="saved_card_wrap">
      <button className="save_btn" type="button" onClick={(e) => saveHandler(e, _id)}>
      <img src={icon.saved} alt="save" />
      </button>
      <div
        className="explore_card wow zoomIn"
        data-wow-delay={`${(0.2 * index) % 3}s`}   
      >
        <div className="poster_wrap">
          <span>Cources</span>
          <img src={`${baseUrl}/${course_id?.image}`} alt="poster" />
        </div>
        <div className="bg_card_overlay"></div>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: course_id?.small_description }}
        ></div>
        <h2>{course_id?.name}</h2>
        {/* <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: course_id?.small_description }}
        ></div> */}
        <div className="counter_info">
          {course_id?.students && (
            <div className="info">
              <img src={icon.students} alt="student" />
              <p>{course_id?.students}</p>
            </div>
          )}

          {course_id?.course_time && (
            <div className="info">
              <img src={icon.clock} alt="student" />
              <p>{course_id?.course_time}</p>
            </div>
          )}
          {/* <div className="info">
          <img src={icon.module} alt="student" />
          <p>{modules} modules</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
