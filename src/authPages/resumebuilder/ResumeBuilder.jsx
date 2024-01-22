import { useState } from "react";
import AuthLayout from "../AuthLayout";
import "./ResumeBuilder.scss";
import ResumeBuilderBanner from "./resumeBuilderBanner/ResumeBuilderBanner";
import StepOne from "./stepone/StepOne";
import StepTwo from "./stepTwo/StepTwo";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";

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
          <div className="side_menu">
            {tabs.map((data) => {
              return (
                <button
                  type="button"
                  className={tab === data.id ? "active" : ""}
                  onClick={() => setTab(data.id)}
                >
                  <div
                    className={`circle ${tab === data.id ? "active" : ""}`}
                  ></div>
                  {data.title}
                </button>
              );
            })}
          </div>

          <div className="tabs_view">
            {tab === 1 && <StepOne setTab={setTab} />}
            {tab === 2 && <StepTwo setTab={setTab} />}
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ResumeBuilder;
