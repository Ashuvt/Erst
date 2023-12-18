import { Fragment, useContext, useEffect, useState } from "react";
import { icon } from "../../../utils/images/icons";
import "./StepD.scss";
import { redirectContext } from "../../../context/RoutingContext";
import RedBlueCard from "./redbluecard/RedBlueCard";
import { baseUrl, CourseList } from "../../../utils/apidata";
import axios from "axios";

const StepD = () => {
  const { goToAuthHome } = useContext(redirectContext);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${CourseList}`);
      console.log(response);
      if (response.status === 200) {
        setCourses(response.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="step_d">
      <h1 className="small_title wow fadeInUp">
        Start with our free expertly-curated lessons from courses
      </h1>
      <p className="wow fadeInUp">
        You can change and subscribe to other courses anytime in your learning
        journey.
      </p>
      {courses.length > 0 ? (
        <div className="cources_bigrid">
          {courses.map((data) => {
            return (
              <Fragment key={data._id}>
                <RedBlueCard {...data} clickHandler={goToAuthHome} />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <p className="error">Data Does Not Found...</p>
      )}
    </div>
  );
};

export default StepD;
