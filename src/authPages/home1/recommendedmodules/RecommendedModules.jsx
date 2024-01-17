import { Fragment } from "react";
import RecommendedModuleCard from "../../components/RecommendedModuleCard/RecommendedModuleCard";
import { images } from "../../../utils/images/images";
import ModuleTitle from "../../components/moduletitle/ModuleTitle";
import { icon } from "../../../utils/images/icons";
import ReturnRecommendedModuleCard from "../../components/returnrecommededcard/ReturnRecommendedModuleCard";

const RecommendedModules = ({ recommaned }) => {
  const data = [
    {
      id: 0,
      title: "Cyber security",
      img: images.teacher,
      text: "A short description about the module, it can be in two lines.",
      students: 800,
      duration: "6h 15min",
      rating: 4.5,
      count: 1331,
    },
    {
      id: 1,
      title: "Red alert",
      img: images.teacher,
      text: "A short description about the module, it can be in two lines.",
      students: 800,
      duration: "6h 15min",
      rating: 4.5,
      count: 1331,
    },
    {
      id: 2,
      title: "Safety class",
      img: images.teacher,
      text: "A short description about the module, it can be in two lines.",
      students: 800,
      duration: "6h 15min",
      rating: 4.5,
      count: 1331,
    },
  ];
  return (
    <Fragment>
      <ModuleTitle
        title="Recommended modules"
        text="Hi Rajat, Based on your intersect in ComTIA security 
         we suggest you some of personally curated modules"
        btntext="Explore Courses"
        icon={icon.blueRightArrow}
        redirectTo="/auth/explore"
      />
      { recommaned.length > 0  ? recommaned.map((info, i) => {
        return (
          <Fragment key={info._id}>
            <RecommendedModuleCard {...info} index={i} />
          </Fragment>
        );
      }) : <p style={{margin:"30px 0px"}}>Data Does Not Found...</p>}

      {/* {data.map((info, i) => {
        return (
          <Fragment key={info.id}>
            <ReturnRecommendedModuleCard {...info} index={i} />
          </Fragment>
        );
      })} */}
    </Fragment>
  );
};

export default RecommendedModules;
