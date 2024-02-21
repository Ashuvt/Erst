import { Fragment } from "react";
import "./TitleStep.scss";

const TitleStep = ({ title, text }) => {
  return (
    <div className="stepper_title">
      <h5>{title}</h5>
      {text && <p>{text}</p>}
    </div>
  );
};
export default TitleStep;
