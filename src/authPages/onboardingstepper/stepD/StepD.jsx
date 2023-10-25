import { icons } from "../../../utils/images/icons";
import "./StepD.scss";

const StepD = () => {
  return (
    <div className="step_d">
      <h1 className="small_title">
        Hey Rajat, tell us about your department profession
      </h1>
      <p>
        You can change and subscribe to other courses anytime in your learning
        journey.
      </p>
      <div className="cources_bigrid">
        <div className="team red">
          <div className="logo_wrap">
            <img src={icons.redTeam} alt="teamLogo" />
          </div>
        </div>
        <div className="team blue">
          <img src={icons.blueTeam} alt="teamLogo" />
        </div>
      </div>
    </div>
  );
};

export default StepD;
