import "./PlanCard.scss";

const PlanCard = ({level, word, monthlyPrice, text, yearlyPrice, btnText, planType}) => {
    return(
        <div className={`plan_card ${level === "PRO" ? 'active' : '' }`}>
            <h6>{level}</h6>
            <p>{word}</p>
            <h3>${monthlyPrice}/{planType === "monthly" ? "Mo" : "Yr"}</h3>
            <p>{text}</p>
            <button type="button" className={level === "PRO" ? 'primarybtn' : 'secondarybtn'}>{btnText}</button>
        </div>
    )
};

export default PlanCard;