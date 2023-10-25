import "./StepA.scss";
import { icons } from "../../../utils/images/icons";

const StepA = ({setStep}) => {

const continueHandler = () => {};

const SkipHandler = () => {
  setStep(prev => prev + 1);
}

  return (
    <div className="step_a">
      <h1 className="small_title">
        Hey Rajat, tell us about your department profession
      </h1>
      <p>Let’s help you setup your learning path</p>

      <form>
        <div className="auth_field">
          <div className="input_wrap">
            <input type="search" placeholder="search" name="search" autocomplete="off" />
            <img className="field_icon" src={icons.search} alt="email" />
          </div>
        </div>

        <div className="auth_field mt_20">
          <div className="input_wrap">
            <input type="search" placeholder="student" />
          </div>
        </div>

        <div className="auth_field mt_20">
          <div className="input_wrap">
            <input type="search" placeholder="data science" />
          </div>
        </div>

        <div className="auth_field mt_20">
          <div className="input_wrap">
            <input type="search" placeholder="IT" />
          </div>
        </div>

        <div className="auth_field mt_20">
          <div className="input_wrap">
            <input type="search" placeholder="Learning and development " />
          </div>
        </div>

        <div className="auth_field mt_20">
          <div className="input_wrap">
            <input type="search" placeholder="Operations" />
          </div>
        </div>
        <div className="auth_field mt_20">
          <div className="input_wrap">
            <input type="search" placeholder="Risk and compliance" />
          </div>
        </div>
      </form>

      <div className="bottom_btn">
        <div className="btn_line">
          <button type="button" className="authbtn auth_primary" onClick={continueHandler}>
            Continue
          </button>
          <button type="button" className="authbtn auth_secondary" onClick={SkipHandler}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepA;
