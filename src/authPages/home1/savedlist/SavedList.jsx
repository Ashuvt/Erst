import { icon } from "../../../utils/images/icons";
import "./SavedList.scss";
import { useContext, useEffect, useState } from "react";
import { redirectContext } from "../../../context/RoutingContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, getSavedCourse, saveCourse } from "../../../utils/apidata";


const SavedList = () => {
 
const navigate = useNavigate();

const [saveCourseList, setSaveCourseList] = useState([]);
const {toastWarning, toastError, toastSuccess} = useContext(redirectContext);

const getSavedCourseApi = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`${baseUrl}/${getSavedCourse}`, {
      headers,
    });   
    if (response?.data?.success) {
      setSaveCourseList(response?.data?.data);     
    } else {
      setSaveCourseList([]);
    }
  } catch (error) {
    console.log(error);
    setSaveCourseList([]);
  }
};

useEffect(() => {
  getSavedCourseApi();
}, []);


const saveCourseApi = async(courseId) => {
  const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
};

 try {
  const response = await axios.post(`${baseUrl}/${saveCourse}`,{course_id:courseId},{headers})
  if(response?.data?.success){  
    getSavedCourseApi();
    toastSuccess(response?.data?.message);
  }else{
    toastWarning("This Course is already added!");
  }
 } catch (error) {
  console.log(error);
  toastError("Something went wrong");
 }
}

  return (
    <div className="home_saved_list">
      <div className="title">
        <h5 className="small_title wow fadeInLeft">Saved</h5>
        <button type="button" className="wow fadeInRight" onClick={() => navigate("/auth/saved")}>
          show all
        </button>
      </div>

      {saveCourseList.length > 0 ? (
        saveCourseList.map((data) => {
          return (
            <div className="saved_card_wrap wow fadeInRight" key={data._id}>
                <button type="button" className="saved_btn" onClick={() => saveCourseApi(data?.course_id?._id)}>
                    <img src={icon.saved} alt="saveicon" />                  
                </button>
              <div className="bg_card_overlay"></div>
              <div className="title_line_wraper">
                <p className="title_text">{data?.course_id?.name}</p>
              
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: data?.course_id?.small_description,
                }}
              ></div>
              <div className="bottom_line">
                <p className="title">
                  {data?.course_id?.is_course} <span>{data.modules}</span>
                </p>

                <div className="info">
                  <img src={icon.students} alt="clock" />
                  <p className="title">{data?.course_id?.students}</p>
                </div>
                <div className="info">
                  <img src={icon.clock} alt="clock" />
                  <p className="title">{data?.course_id?.course_time}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p style={{marginTop:"20px"}}>No Saved course Found...</p>
      )}
    </div>
  );
};

export default SavedList;
