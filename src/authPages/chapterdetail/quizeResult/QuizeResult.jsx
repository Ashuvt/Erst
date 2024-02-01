import { Fragment } from "react";
import "./QuizeResult.scss";

const QuizeResult = ({ resultData, quizeData, setShowResult }) => {
  return (
    <Fragment>
        <h6 className="result">Quize Result</h6>
      <div className="quize_result">
        {resultData?.success ? (
          <p className="pass">Passed</p>
        ) : (
          <p className="fail">Failed</p>
        )}
        <p>
          Score : {resultData?.totalScore}/{resultData?.totalQuizzes}
        </p>
        <p>Percentage : {resultData?.overallPercentage}%</p>
      </div>

      {quizeData?.length > 0 &&
        quizeData?.map((data) => {
          return (
            <Fragment key={data?._id}>
              <div className="quize_sec">
                <h5>{data?.quizz_question}</h5>

                <div className="option_wrap">
                  {resultData?.results?.filter(
                    (ele) => ele.quizId === data?._id
                  )[0]?.userAnswer === "option 1" ? (
                    <button
                      type="button"
                      className={
                        resultData?.results?.filter(
                          (ele) => ele.quizId === data?._id
                        )[0]?.isCorrect
                          ? "green"
                          : "red"
                      }
                    >
                      <span></span>
                    </button>
                  ) : (
                    <button type="button"></button>
                  )}

                  <p>{data?.quizz_opt_1}</p>
                </div>
                <div className="option_wrap">
                  {resultData?.results?.filter(
                    (ele) => ele.quizId === data?._id
                  )[0]?.userAnswer === "option 2" ? (
                    <button
                      type="button"
                      className={
                        resultData?.results?.filter(
                          (ele) => ele.quizId === data?._id
                        )[0]?.isCorrect
                          ? "green"
                          : "red"
                      }
                    >
                      <span></span>
                    </button>
                  ) : (
                    <button type="button"></button>
                  )}

                  <p>{data?.quizz_opt_2}</p>
                </div>
                <div className="option_wrap">
                  {resultData?.results?.filter(
                    (ele) => ele.quizId === data?._id
                  )[0]?.userAnswer === "option 3" ? (
                    <button
                      type="button"
                      className={
                        resultData?.results?.filter(
                          (ele) => ele.quizId === data?._id
                        )[0]?.isCorrect
                          ? "green"
                          : "red"
                      }
                    >
                      <span></span>
                    </button>
                  ) : (
                    <button type="button"></button>
                  )}

                  <p>{data?.quizz_opt_3}</p>
                </div>
                <div className="option_wrap">
                  {resultData?.results?.filter(
                    (ele) => ele.quizId === data?._id
                  )[0]?.userAnswer === "option 4" ? (
                    <button
                      type="button"
                      className={
                        resultData?.results?.filter(
                          (ele) => ele.quizId === data?._id
                        )[0]?.isCorrect
                          ? "green"
                          : "red"
                      }
                    >
                      <span></span>
                    </button>
                  ) : (
                    <button type="button"></button>
                  )}

                  <p>{data?.quizz_opt_4}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
      {resultData?.allowRetake && (
        <button className="retake" onClick={() => setShowResult(false)}>
          Retake
        </button>
      )}
    </Fragment>
  );
};

export default QuizeResult;
