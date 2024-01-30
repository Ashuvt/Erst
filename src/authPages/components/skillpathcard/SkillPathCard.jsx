import { useNavigate } from "react-router-dom";
import { baseUrl, saveCourse } from "../../../utils/apidata";
import { icon } from "../../../utils/images/icons";
import "./SkillPathCard.scss";
import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";
import axios from "axios";

const SkillPathCard = ({ _id, image, name, small_description, recallAfterSaveAPi, savedList}) => {
  const navigate = useNavigate();

  const {toastSuccess, toastError, toastWarning} = useContext(redirectContext);


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
        toastSuccess(response?.data?.message);
        recallAfterSaveAPi();
      } else {
        toastWarning("This Course is already added!");
      }
    } catch (error) {
      console.log(error);
      toastError("Something went wrong");
    }
  };

  const saveHandler = (e) => {
    e.stopPropagation();
    saveCourseApi(_id);
  }




  return (
    <div
      className="recommended_module_card wow fadeInLeft"
      onClick={() => navigate(`/explore/${_id}`)}
    >
      <button
        type="button"
        onClick={saveHandler}
      >
        {
          savedList?.includes(_id) ? <img src={icon.saved} alt="icon" /> : <img src={icon.save} alt="icon" />
        }
        
      </button>

      <div className="bg_card_overlay"></div>
      <div className="poster_wrap">
        {image ? (
          <img src={`${baseUrl}/${image}`} alt="poster" />
        ) : (
          <div className="dummy"></div>
        )}
      </div>
      <div className="text_info">
        <p className="title">{name}</p>
        <p className="desc">{small_description}</p>
        {/* <div className="info_line">
          <div className="info">
            <img src={icon.students} alt="student" />
            <p>{students} Students</p>
          </div>
          <div className="info">
            <img src={icon.module} alt="module" />
            <p>{module} Modules</p>
          </div>
          <div className="info">
            <img src={icon.star} alt="star" />
            <p>
              {rating} <span></span>
              {count}
            </p>
          </div>
        </div> */}
        {/* <div className="btn_line">
          <button type="button">Medium</button>
          <button type="button">Penetration</button>
          <button type="button">CEH</button>
        </div> */}
      </div>
    </div>
  );
};

export default SkillPathCard;
