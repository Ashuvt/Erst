import { Fragment } from "react";
import RecommendedModuleCard from "../../components/RecommendedModuleCard/RecommendedModuleCard";
import { images } from "../../../utils/images/images";
import ModuleTitle from "../../components/moduletitle/ModuleTitle";
import { icon } from "../../../utils/images/icons";
import ReturnRecommendedModuleCard from "../../components/returnrecommededcard/ReturnRecommendedModuleCard";

const RecommendedModules = ({ recommaned }) => {
  const name = localStorage.getItem("name");
  return (
    <Fragment>
      <ModuleTitle
        title="Recommended Courses"
        text={`Hi ${name}, Based on your intersect in ComTIA security 
         we suggest you some of personally curated modules`}
        btntext="Explore Courses"
        icon={icon.blueRightArrow}
        redirectTo="/auth/explore"
      />
      { recommaned?.length > 0  ? recommaned.map((info, i) => {
        return (
          <Fragment key={info._id}>
            <RecommendedModuleCard {...info} index={i} />
          </Fragment>
        );
      }) : <p style={{margin:"30px 0px"}}>Data Does Not Found...</p>}
    </Fragment>
  );
};

export default RecommendedModules;
