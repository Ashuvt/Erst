import { icon } from "../../../utils/images/icons";
import { useState } from "react";
import "./ExploreCard.scss";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl, saveCourse } from "../../../utils/apidata";

import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";
import axios from "axios";

const ExploreCard = ({
  recallPage,
  _id,
  image,
  small_description,
  course_time,
  title,
  text,
  is_course,
  students,
  isSave,
  index,
  redirectTo,
}) => {
  const navigate = useNavigate();
  const { toastWarning, toastError, toastSuccess } =
    useContext(redirectContext);

  const { courseId } = useParams();


  // Save Course APi
  const saveCourseApi = async (e, idToSave) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${saveCourse}`,
        { course_id: idToSave },
        { headers }
      );
      if (response?.data?.success) {
        recallPage(courseId);
        toastSuccess(response?.data?.message);
      } else {
        toastWarning("This Course is already added!");
      }
    } catch (error) {
      console.log(error);
      toastError("Something went wrong");
    }
  };

  const recallPageHandler = (id) => {
    recallPage(id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="card_wrap" onClick={() => recallPageHandler(_id)}>
      <button type="button" onClick={(e) => saveCourseApi(e, _id)}>
        {isSave ? (
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
          <span>{is_course}</span>
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
