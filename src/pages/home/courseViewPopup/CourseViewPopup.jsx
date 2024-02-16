import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../utils/apidata";
import { icon } from "../../../utils/images/icons";
import "./CourseViewPopup.scss";
import { IoMdClose } from "react-icons/io";

const CourseViewPopup = ({ viewData, setPopStatus }) => {
  console.log("From Popuo::", viewData);
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/comingsoon");
  };

  const propogationHandler = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="view_course_popup" onClick={() => setPopStatus(false)}>
      <button type="button" className="close_btn">
        <IoMdClose />
      </button>
      <div className="course_card popup" onClick={propogationHandler}>
        <div className="sticky_content">
          <div className="img_wrap">
            <img src={`${baseUrl}/${viewData?.image}`} alt="logo" />
          </div>
          <div className="right_content">
            <div className="name_line">
              <div className={`box ${viewData?.name}`}></div>
              <p className="t-g-18">{viewData?.name}</p>
            </div>
            <div className="counts">
              <div className="info">
                <p>Duration : 9-10 Months</p>
              </div>
              <div className="info">
                <img src={icon.clock} alt="clock" />
                <p>350 Hours</p>
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: viewData?.small_description }}
            ></div>

            <button
              type="buttton"
              className="primarybtn"
              onClick={loginHandler}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="courses_list">
          <div
            dangerouslySetInnerHTML={{ __html: viewData?.details_field }}
          ></div>
        </div>
        <div
          className="bottom_shad wow zoomIn"
          data-wow-delay="0.5s"
          data-wow-duration="1.5s"
        ></div>
      </div>
    </div>
  );
};

export default CourseViewPopup;
