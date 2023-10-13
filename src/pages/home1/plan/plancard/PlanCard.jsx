import "./PlanCard.scss";

const PlanCard = ({
  level,
  word,
  monthlyPrice,
  text,
  yearlyPrice,
  btnText,
  offer,
  planType,
}) => {
  return (
    <div className={`plan_card ${level === "PRO" ? "active" : ""}`}>
      <div className="offer">
        <h6>{level}</h6>
        {planType === "yearly" && (
          <div className="offer_pill">
            <p>save ${offer}</p>
          </div>
        )}
      </div>

      <p>{word}</p>
      <h3>
        ${planType === "monthly" ? monthlyPrice : yearlyPrice}/{planType === "monthly" ? "Mo" : "Yr"}
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
