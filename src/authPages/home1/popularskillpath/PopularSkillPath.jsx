import { Fragment } from "react";
import ModuleTitle from "../../components/moduletitle/ModuleTitle";
import { icon } from "../../../utils/images/icons";
import { images } from "../../../utils/images/images";
import SkillPathCard from "../../components/skillpathcard/SkillPathCard";

const PopularSkillPath = () => {
  const data = [
    {
      id: 0,
      title: "Cyber security",
      img: images.skillPath,
      text: "A short description about the module, it can be in two lines.",
      students: 800,
      module:15,
      rating: 4.5,
      count: 1331,
    },
    {
      id: 1,
      title: "Red alert",
      img: images.skillPath,
      text: "A short description about the module, it can be in two lines.",
      students: 800,
      module:15,
      rating: 4.5,
      count: 1331,
    },
    {
      id: 2,
      title: "Safety class",
      img: images.skillPath,
      text: "A short description about the module, it can be in two lines.",
      students: 800,
      module:15,
      rating: 4.5,
      count: 1331,
    },
  ];
  return (
    <Fragment>
      <ModuleTitle
        title="Popular skill paths"
        text="Hi Rajat, Based on your intersect in ComTIA security we suggest you some of personally curated modules"
        btntext="Other skill paths"
        icon={icon.blueRightArrow}
      />

      {data.map((info) => {
        return (
          <Fragment key={info.id}>
            <SkillPathCard {...info} />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default PopularSkillPath;
