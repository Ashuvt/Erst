import { Fragment, useState } from "react";
import "./QuizeList.scss";

const QuizeList = ({ quizeData, quizeSubmit }) => {
  const [chapterIdForQuize, setChapterIdForQuize] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const addAnswer = (chapterId, quizId, ans) => {
    setChapterIdForQuize(chapterId);
    setSelectedAnswer((prev) => {
      var indexToadd = prev.findIndex((item) => item.quizId === quizId);
      if (indexToadd !== -1) {
        prev.splice(indexToadd, 1);
        return [
          ...prev,
          {
            quizId: quizId,
            answer: ans,
          },
        ];
      } else {
        return [
          ...prev,
          {
            quizId: quizId,
            answer: ans,
          },
        ];
      }
    });
  };

  return (
    <div className="quize_list">
      <h6>Quize</h6>
      {quizeData?.map((data) => {
        return (
          <Fragment key={data?._id}>
            <div className="quize_sec">
              <h5>{data?.quizz_question}</h5>
              
              <div className="option_wrap">
                <button
                  type="button"
                  onClick={() =>
                    addAnswer(data?.chapterId, data?._id, "option 1")
                  }
                >
                  {selectedAnswer.find((ele) => ele.quizId === data?._id)
                    ?.answer === "option 1" && <span></span>}
                </button>
                <p>{data?.quizz_opt_1}</p>
              </div>
              <div className="option_wrap">
                <button
                  type="button"
                  onClick={() =>
                    addAnswer(data?.chapterId, data?._id, "option 2")
                  }
                >
                  {selectedAnswer.find((ele) => ele.quizId === data?._id)
                    ?.answer === "option 2" && <span></span>}
                </button>
                <p>{data?.quizz_opt_2}</p>
              </div>
              <div className="option_wrap">
                <button
                  type="button"
                  onClick={() =>
                    addAnswer(data?.chapterId, data?._id, "option 3")
                  }
                >
                  {selectedAnswer.find((ele) => ele.quizId === data?._id)
                    ?.answer === "option 3" && <span></span>}
                </button>
                <p>{data?.quizz_opt_3}</p>
              </div>
              <div className="option_wrap">
                <button
                  type="button"
                  onClick={() =>
                    addAnswer(data?.chapterId, data?._id, "option 4")
                  }
                >
                  {selectedAnswer.find((ele) => ele.quizId === data?._id)
                    ?.answer === "option 4" && <span></span>}
                </button>
                <p>{data?.quizz_opt_4}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
      <button
        type="button"
        className="primarybtn quiz_submit"
        onClick={() => quizeSubmit(chapterIdForQuize, selectedAnswer)}
      >
        Submit Quize
      </button>
    </div>
  );
};

export default QuizeList;
