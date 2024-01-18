import { icon } from "../../../utils/images/icons";
import "./SavedCard.scss";
import { useNavigate } from "react-router-dom";
import { baseUrl, saveCourse } from "../../../utils/apidata";

import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";
import axios from "axios";

const SavedCard = ({ course_id, index, getSavedCourseApi }) => {
  const { toastWarning, toastError, toastSuccess } =
    useContext(redirectContext);

  const saveCourseApi = async (courseId) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${saveCourse}`,
        { course_id: courseId },
        { headers }
      );
      if (response?.data?.success) {
        getSavedCourseApi();
        toastSuccess(response?.data?.message);
      } else {
        toastWarning("This Course is already added!");
      }
    } catch (error) {
      console.log(error);
      toastError("Something went wrong");
    }
  };

  return (
    <div className="saved_card_wrap">
      <button
        className="save_btn"
        type="button"
        onClick={(e) => saveCourseApi(course_id._id)}
      >
        <img src={icon.saved} alt="save" />
      </button>
      <div
        className="explore_card wow zoomIn"
        data-wow-delay={`${(0.2 * index) % 3}s`}
      >
        <div className="poster_wrap">
          <span>{course_id?.is_course}</span>
          <img src={`${baseUrl}/${course_id?.image}`} alt="poster" />
        </div>
        <div className="bg_card_overlay"></div>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: course_id?.small_description }}
        ></div>
        <h2>{course_id?.name}</h2>       
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
