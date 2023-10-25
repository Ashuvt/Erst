import "./StepB.scss";

const StepB = ({ setStep }) => {
  const continueHandler = () => {};

  const SkipHandler = () => {
    setStep(prev=> prev + 1);
  };

  return (
    <div className="step_b">
      <h1 className="small_title">
        Hey Rajat, tell us about your department profession
      </h1>
      <p>Let’s help you setup your learning path</p>

      <div className="btns">
        <button
          type="button"
          className="authbtn auth_primary"
          onClick={continueHandler}
        >
          Continue
        </button>
        <button
          type="button"
          className="authbtn auth_secondary"
          onClick={SkipHandler}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default StepB;
