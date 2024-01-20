import { useEffect, useContext } from "react";
import AuthLayout from "../AuthLayout";
import ExploreDetailLanding from "./ExploreDetailLanding/ExploreDetailLanding";
import ExploreTabs from "./ExploreTabs/ExploreTabs";
import WOW from "wow.js";
import { useParams } from "react-router-dom";
import { redirectContext } from "../../context/RoutingContext";

const ExploreDetail = () => {
  const { courseId } = useParams();

  const {getCourseDetailApi} = useContext(redirectContext);

  useEffect(() => {
    const wow = new WOW();
    wow.init();
    getCourseDetailApi(courseId);
  }, []);



  return (
  <AuthLayout>
     <ExploreDetailLanding  />
      <ExploreTabs  /> 
      </AuthLayout>
  );
};

export default ExploreDetail;
