import { Fragment, useState, useEffect } from "react";
import "./OnBoardingSteppers.scss";
import LoginHeader from "../components/loginHeader/LoginHeader";
import StepA from "./stepA/StepA";
import StepB from "./stepB/StepB";
import StepC from "./stepC/StepC";
import StepD from "./stepD/StepD";
import { images } from "../../utils/images/images";
import WOW from "wow.js";

const OnBoardingSteppers = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

   return (
    <Fragment>
      <LoginHeader
        left={[1, 2, 3].includes(step) ? true : false}
        right={step === 4 ? true : false}
        progress={true}
        progressCount={step}
        setStep={setStep}
      />      
      <section className="onboarding_stepper">
      <img src={images.bgPatter} alt="bg" className="bg" />
        <div className="auth_container">
          {step == 1 && <StepA setStep={setStep} />}
          {step == 2 && <StepB setStep={setStep} />}
          {step == 3 && <StepC setStep={setStep} />}
          {step == 4 && <StepD />}
        </div>
      </section>
    </Fragment>
  );
};

export default OnBoardingSteppers;
