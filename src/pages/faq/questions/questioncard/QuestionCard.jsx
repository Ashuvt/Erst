import { Fragment, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./QuestionCard.scss";

const QuestionCard = ({que, ans}) => {
  const [status, setStatus] = useState(false);

  const clickHandler = () => {
    setStatus(!status);
  };

  return (
    <Fragment>
      <div className="accordian_box">

      <button
        type="button"
        className={`question_btn ${status ? "open" : ""}`}
        onClick={clickHandler}
      >
       {que}
        <span className="horizontal"></span>
        <span className="vertical"></span>
      </button>
      <div
        className="faq_answer"
        style={{ maxHeight: status ? "500px" : "0px" }}
      >
        <p>
         {ans}
        </p>
      </div>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
