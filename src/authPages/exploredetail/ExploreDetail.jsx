import { Fragment, useEffect, useState, useContext } from "react";
import AuthLayout from "../AuthLayout";
import ExploreDetailLanding from "./ExploreDetailLanding/ExploreDetailLanding";
import ExploreTabs from "./ExploreTabs/ExploreTabs";
import WOW from "wow.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart, baseUrl, coursedetailById } from "../../utils/apidata";

const ExploreDetail = () => {
  const { courseId } = useParams();



  const [course, setCourse] = useState(null);
  const [module, setModule] = useState(null);
  const [loader, setLoader] = useState(null);

  const [instructors, setInstructors] = useState([]);

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

      console.log("Course Detail", response);

      if (response?.data?.success) {
        setInstructors(response?.data?.data?.courseinstructors);
        setCourse(response?.data?.data);



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


const recallGetCourse = () => {
  getCourseDetail();
}


  return (
  <AuthLayout>
      
      <div className="header_filler"></div>
      <ExploreDetailLanding
        {...course}
        loader={loader}
        recallGetCourse={recallGetCourse}
      />
      <ExploreTabs instructors={instructors} />
      </AuthLayout>
  );
};

export default ExploreDetail;
