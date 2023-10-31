import { icon } from "../../../utils/images/icons";
import "./ExploreCard.scss";

const ExploreCard = () => {
  return (
    <div className="home_explore_card wow fadeInRight">
      <div className="circle_path">
        <img src={icon.skillpath} alt="skillpath" />
      </div>
      <h5 className="small_title">Take a skill path</h5>
      <p>
        A short description about what are skill paths. Explore skill paths to
        go from basic to master.
      </p>
      <button type="button">Explore</button>
    </div>
  );
};

export default ExploreCard;
