import { Fragment } from "react";
import ModuleTitle from "../../components/moduletitle/ModuleTitle";
import { icon } from "../../../utils/images/icons";
import PurchasedCard from "./purchasedCard/PurchasedCard";

const PurchasedList = ({ listData }) => {

  const name = localStorage.getItem("name");

  return (
    <Fragment>
      <ModuleTitle
        title="Purchased Courses"
        text={`Hi ${name}, Based on your intersect in ComTIA security we suggest you some of personally curated modules`}
        btntext="Explore Courses"
        icon={icon.blueRightArrow}
        redirectTo="/auth/explore"
      />
      { listData?.length > 0  ? listData?.map((info, i) => {
        return (
          <Fragment key={info._id}>
            <PurchasedCard {...info} index={i} />
          </Fragment>
        );
      }) : <p style={{margin:"30px 0px"}}>Data Does Not Found...</p>}
    </Fragment>
  );
};

export default PurchasedList;