import "./CourseCard.scss";
import { Fragment, useContext } from "react";
import { icon } from "../../../../utils/images/icons";
import { baseUrl } from "../../../../utils/apidata";
import { redirectContext } from "../../../../context/RoutingContext";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  dataObj,
  _id,
  name,
  image,
  course_description,
  small_description,
  course_time,
  students,

  setPopStatus,
  setViewData
}) => {
 
const navigate = useNavigate();
  const {domainName} = useContext(redirectContext);

  const viewMore = () => {   
    if(domainName() === "net"){
      setPopStatus(true);
      setViewData(dataObj);
    }else{
      navigate("/comingsoon")
    }
    
    
  }

  return (
    <Fragment>
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
          onClick={viewMore}
        >
         Know More
        </button>
      </div>

      <div className="courses_list">    
        <p className="t-g-18">Available Courses</p>   

        <div dangerouslySetInnerHTML={{ __html: course_description }}></div>
      </div>
      <div
        className="bottom_shad wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
    </div>


    </Fragment>
  );
};

export default CourseCard;
