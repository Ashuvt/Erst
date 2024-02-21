import { Fragment, useEffect, useState } from "react";
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
import StepF from "./stepF/StepF";
import StepE from "./stepE/StepE";
import StepD from "./stepD/StepD";
import StepG from "./stepG/StepG";
import ProcessLoader from "./processLoader/ProcessLoader";
import ResumeViewer from "./resumeViewer/ResumeViewer";
import ParticlesBg from "../../components/particlesbg/ParticlesBg";

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
  const [loader, setLoader] = useState(false);

  const [experiensList, setExperiensList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [summary, setSummary] = useState("");

  const [formA, setFormA] = useState({
    fName: "",
    lName: "",
    city: "",
    country: "",
    pin: "",
    phone: "",
    email: "",
  });

  const [formB, setFormB] = useState({
    jobTitle: "",
    employer: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
    isWorking: false,
  });

  const [formC, setFormC] = useState({
    schoolName: "",
    schoolLocation: "",
    degree: "",
    fieldOfStudy: "",
    dateFrom: "",
    dateTo: "",
    stillEnrolled: false,
  });



  const dispatch = useDispatch();
  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  const goNext = () => {
    setLoader(true);
    setTimeout(() => {
      setTab((prev) => {
        // Submit Handler
        if (prev === 1) {
          console.log("Header", formA);
        } else if (prev === 2) {
        } else if (prev === 3) {
          console.log("Education:", formC);
        }

        if (prev === 7) {
          return prev;
        } else {
          return prev + 1;
        }
      });
      setLoader(false);
    }, 2000);
  };

  const goPrev = () => {
    setTab((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <AuthLayout>
      <ParticlesBg />
      <ResumeBuilderBanner />
      <section className="resume_builder" onClick={resetToggler}>
        <div className="screen_container">
          {/* Left Navigator */}
          <Navigations tabs={tabs} tab={tab} setTab={setTab} />

          {/* Middle Screens */}
          <div className="tabs_view">
            {loader ? (
              <ProcessLoader />
            ) : (
              <Fragment>
                {tab === 1 && <StepA formA={formA} setFormA={setFormA} />}
                {tab === 2 && (
                  <StepB
                    formB={formB}
                    setFormB={setFormB}
                    experiensList={experiensList}
                    setExperiensList={setExperiensList}
                  />
                )}
                {tab === 3 && (
                  <StepC
                    formC={formC}
                    setFormC={setFormC}
                    educationList={educationList}
                    setEducationList={setEducationList}
                  />
                )}
                {tab === 4 && <StepD selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />}

                {tab === 5 && <StepE summary={summary} setSummary={setSummary} />}

                {tab === 6 && <StepF />}

                {tab === 7 && <StepG />}

                {/* Mid Bottom Next Prev Btns */}
                <NextPrevBtns
                  tabs={tabs}
                  tab={tab}
                  goNext={goNext}
                  goPrev={goPrev}                  
                />
              </Fragment>
            )}
          </div>

          <ResumeViewer
            formA={formA}
            experiensList={experiensList}
            educationList={educationList}
            selectedSkills={selectedSkills}
            summary={summary}
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default ResumeBuilder;
