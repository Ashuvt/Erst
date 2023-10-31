import "./PlanCard.scss";
import Pill from "../../../../components/pill/Pill";

const PlanCard = ({
  level,
  word,
  monthlyPrice,
  text,
  yearlyPrice,
  btnText,
  offer,
  planType,
  index
}) => {
  return (
    <div className={`plan_card ${level === "PRO" ? "active" : ""} wow fadeInUp`} data-wow-delay={`${0.1*index}s`}>
      <div className="offer">
        <h6>{level}</h6>
        {planType === "yearly" && (
        
          <Pill text={`save $${offer}`} />
        )}
      </div>

      <p>{word}</p>
      <h3>
        ${planType === "monthly" ? monthlyPrice : yearlyPrice}/
        {planType === "monthly" ? "Mo" : "Yr"}
      </h3>
      <p>{text}</p>
      <button
        type="button"
        className={level === "PRO" ? "primarybtn" : "secondarybtn"}
      >
        {btnText}
      </button>
    </div>
  );
};

export default PlanCard;
