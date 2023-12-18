import "./StepB.scss";



const StepB = ({ setStep, name }) => {

  





  const continueHandler = () => {
    SkipHandler();
  };

  const SkipHandler = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className="step_b">
      <h1 className="small_title wow fadeInUp">
        Hey {name ? name : "User"}, tell us about your department profession
      </h1>
      <p className="wow fadeInUp">Let’s help you setup your learning path</p>

      <div className="btns">
        <button
          type="button"
          className="authbtn auth_primary wow fadeInUp"
          onClick={continueHandler}
        >
          Continue
        </button>
        {/* <button
          type="button"
          className="authbtn auth_secondary wow fadeInUp"
          onClick={SkipHandler}
        >
          Skip
        </button> */}
      </div>
    </div>
  );
};

export default StepB;
