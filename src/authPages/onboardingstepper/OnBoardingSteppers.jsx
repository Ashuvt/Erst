import { Fragment } from "react";
import "./OnBoardingSteppers.scss";

const OnBoardingSteppers = () => {
  return (
    <Fragment>
      <LoginHeader
        left={false}
        right={false}
        progress={true}
        progressCount={0}
      />
      <section className="onboarding_stepper">
        <div className="auth_container">
          
        </div>
      </section>
    </Fragment>
  );
};

export default OnBoardingSteppers;
