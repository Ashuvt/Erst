import { Fragment, useEffect, useState, useContext } from "react";
import { redirectContext } from "../../context/RoutingContext";
import ExploreDetailLanding from "./ExploreDetailLanding/ExploreDetailLanding";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import ExploreTabs from "./ExploreTabs/ExploreTabs";
import WOW from "wow.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl, coursedetailById } from "../../utils/apidata";


const ExploreDetail = () => {
  const { courseId } = useParams();

  const {addToCartApi} = useContext(redirectContext);

  const addtoCartHandler = () => {    
    addToCartApi(courseId)
  }

  const [course, setCourse] = useState(null);
  const [module, setModule] = useState(null);
  const [loader, setLoader] = useState(null);



  const getCourseDetail = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      setLoader(true);
      const response = await axios.post(
        `${baseUrl}/${coursedetailById}`,
        { course_id: courseId },
        { headers }
      );
      if (response?.data?.success) {
        setCourse(response?.data?.data?.course);
        setModule(response?.data?.data?.module);
        setLoader(false);
      } else {
      }
    } catch (error) {
      console.log("ERR:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();

    getCourseDetail();
  }, []);
  return (
    <Fragment>
      <CoursesHeader />
      <div className="header_filler"></div>
      <ExploreDetailLanding {...course} loader={loader} addtoCartHandler={addtoCartHandler} />
      <ExploreTabs />
    </Fragment>
  );
};

export default ExploreDetail;
