import { useState } from "react";
import AuthLayout from "../AuthLayout";
import "./ResumeBuilder.scss";
import ResumeBuilderBanner from "./resumeBuilderBanner/ResumeBuilderBanner";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import Navigations from "./navigations/Navigations";
import StepA from "./stepA/StepA";
import StepB from "./stepB/StepB";
import StepC from "./stepC/StepC";
import NextPrevBtns from "./nextPrevBtns/NextPrevBtns";

const ResumeBuilder = () => {

  const tabs = [
    {
      id: 1,
      title: "Header",
    },
    {
      id: 2,
      title: "Experience",
    },
    {
      id: 3,
      title: "Education",
    },
    {
      id: 4,
      title: "Skills",
    },
    {
      id: 5,
      title: "Summary",
    },
    {
      id: 6,
      title: "Additional Details",
    },
    {
      id: 7,
      title: "Finalize",
    },
  ];


  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();
  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <AuthLayout>
      <ResumeBuilderBanner />
      <section className="resume_builder" onClick={resetToggler}>
        <div className="screen_container">
          {/* Left Navigator */}
          <Navigations tabs={tabs} tab={tab} setTab={setTab} />

          {/* Middle Screens */}
          <div className="tabs_view">
            {tab === 1 && <StepA />}
            {tab === 2 && <StepB />}
            {tab === 3 && <StepC />}

            {/* Mid Bottom Next Prev Btns */}
           <NextPrevBtns tabs={tabs} setTab={setTab} tab={tab}/>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ResumeBuilder;
