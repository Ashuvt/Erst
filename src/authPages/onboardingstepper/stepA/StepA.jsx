import "./StepA.scss";
import { icon } from "../../../utils/images/icons";


const StepA = ({setStep}) => {


const continueHandler = () => {
  SkipHandler();
};

const SkipHandler = () => {
  setStep(prev => prev + 1);
}

  return (
    <div className="step_a">
      <h1 className="small_title wow slideInUp">
        Hey Rajat, tell us about your department profession
      </h1>
      <p className="wow slideInUp">Let’s help you setup your learning path</p>

      <form>
        <div className="auth_field wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="search" name="search" autoComplete="off" />
            <img className="field_icon" src={icon.search} alt="email" />
          </div>
        </div>

        <div className="auth_field mt_20 wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="student" />
          </div>
        </div>

        <div className="auth_field mt_20 wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="data science" />
          </div>
        </div>

        <div className="auth_field mt_20 wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="IT" />
          </div>
        </div>

        <div className="auth_field mt_20 wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="Learning and development " />
          </div>
        </div>

        <div className="auth_field mt_20 wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="Operations" />
          </div>
        </div>
        <div className="auth_field mt_20 wow slideInUp">
          <div className="input_wrap">
            <input type="search" placeholder="Risk and compliance" />
          </div>
        </div>
      </form>

      <div className="bottom_btn">
        <div className="btn_line">
          <button type="button" className="authbtn auth_primary wow slideInUp" onClick={continueHandler}>
            Continue
          </button>
          <button type="button" className="authbtn auth_secondary wow slideInUp" onClick={SkipHandler}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepA;
