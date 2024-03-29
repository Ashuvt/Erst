import { Fragment, useContext, useEffect, useState } from "react";
import AuthLayout from "../AuthLayout";
import "./ResumeBuilder.scss";
import ResumeBuilderBanner from "./resumeBuilderBanner/ResumeBuilderBanner";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import Navigations from "./navigations/Navigations";
import StepA from "./stepA/StepA";
import StepB from "./stepB/StepB";
import StepC from "./stepC/StepC";
import StepF from "./stepF/StepF";
import StepE from "./stepE/StepE";
import StepD from "./stepD/StepD";
import ProcessLoader from "./processLoader/ProcessLoader";
import ResumeViewer from "./resumeViewer/ResumeViewer";
import ParticlesBg from "../../components/particlesbg/ParticlesBg";
import axios from "axios";
import { baseUrl, getResume, resumeBuild } from "../../utils/apidata";
import { redirectContext } from "../../context/RoutingContext";
import { useNavigate, useParams } from "react-router-dom";

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
      title: "Preview",
    },
  ];
  const navigate = useNavigate();
  const {id} = useParams();

  const { toastSuccess, toastError } = useContext(redirectContext);
  const [tab, setTab] = useState(id ? Number(id) : 1);
  const [loader, setLoader] = useState(false);

  const [experiensList, setExperiensList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [summary, setSummary] = useState("");

  const [activities, setActivities] = useState("");
  const [awards, setAwards] = useState("");
  const [certifications, setCertifications] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);

  const [formA, setFormA] = useState({
    firstname: "",
    lastname: "",
    city: "",
    country: "",
    pincode: "",
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
    currentlyWorking: false,
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

  const resumeBuilderApi = async (body, number) => {
    setLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await axios.post(
        `${baseUrl}/${resumeBuild}`,
        { ...body },
        { headers }
      );
      if (res?.status === 200) {
        toastSuccess(res?.data?.message);
        setLoader(false);
        if (number === 7 || id) {
          setTab(1);
          navigate("/auth/resume");
        }else{
          setTab(number);
        }
          
      } else {
        toastError("Something went wrong!");
        setLoader(false);
      }
    } catch (error) {
      toastError("Something went wrong!");
      console.log(error);
      setLoader(false);
    }
  };

  // Form Submit Functions
  const submitStepA = () => {
    const body = {
      step: 1,
      data: { ...formA },
    };
    resumeBuilderApi(body, 2);
  };

  const submitStepB = () => {
    const body = {
      step: 2,
      data: [...experiensList],
    };
    resumeBuilderApi(body, 3);
  };

  const submitStepC = () => {
    const body = {
      step: 3,
      data: [...educationList],
    };
    resumeBuilderApi(body, 4);
  };

  const submitStepD = () => {
    const body = {
      step: 4,
      data: [...selectedSkills],
    };
    resumeBuilderApi(body, 5);
  };

  const submitStepE = () => {
    const body = {
      step: 5,
      data: summary,
    };
    resumeBuilderApi(body, 6);
  };

  const submitStepF = () => {
    const body = {
      step: 6,
      data: {
        activities: activities,
        awards: awards,
        certifications: certifications,
        websiteLinks: [...socialLinks],
      },
    };
    resumeBuilderApi(body, 7);
  };

  const goPrev = () => {
    setTab((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
        }, 2000);
        return prev - 1;
      }
    });
  };

  // Get Resume API

  const getResumeApi = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.get(`${baseUrl}/${getResume}`, { headers });
      if (res?.data?.success && res?.data?.data) {
        setFormA(res?.data?.data?.header);
        setExperiensList([...res?.data?.data?.experience]);
        setEducationList([...res?.data?.data?.education]);
        setSelectedSkills([...res?.data?.data?.skills]);
        setSummary(res?.data?.data?.summary);
        setActivities(res?.data?.data?.activities);
        setAwards(res?.data?.data?.awards);
        setSocialLinks(res?.data?.data?.websiteLinks);
        setCertifications(res?.data?.data?.certifications);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {    
    getResumeApi();

  }, []);



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
                {tab === 1 && (
                  <StepA
                    formA={formA}
                    setFormA={setFormA}
                    submitStepA={submitStepA}
                    goPrev={goPrev}
                  />
                )}
                {tab === 2 && (
                  <StepB
                    formB={formB}
                    setFormB={setFormB}
                    experiensList={experiensList}
                    setExperiensList={setExperiensList}
                    submitStepB={submitStepB}
                    goPrev={goPrev}
                  />
                )}
                {tab === 3 && (
                  <StepC
                    formC={formC}
                    setFormC={setFormC}
                    educationList={educationList}
                    setEducationList={setEducationList}
                    submitStepC={submitStepC}
                    goPrev={goPrev}
                  />
                )}
                {tab === 4 && (
                  <StepD
                    selectedSkills={selectedSkills}
                    setSelectedSkills={setSelectedSkills}
                    submitStepD={submitStepD}
                    goPrev={goPrev}
                  />
                )}

                {tab === 5 && (
                  <StepE
                    summary={summary}
                    setSummary={setSummary}
                    submitStepE={submitStepE}
                    goPrev={goPrev}
                  />
                )}

                {tab === 6 && (
                  <StepF
                    activities={activities}
                    setActivities={setActivities}
                    awards={awards}
                    setAwards={setAwards}
                    certifications={certifications}
                    setCertifications={setCertifications}
                    socialLinks={socialLinks}
                    setSocialLinks={setSocialLinks}
                    submitStepF={submitStepF}
                    goPrev={goPrev}
                  />
                )}
              </Fragment>
            )}
          </div>

          <ResumeViewer
            formA={formA}
            experiensList={experiensList}
            educationList={educationList}
            selectedSkills={selectedSkills}
            activities={activities}
            awards={awards}
            certifications={certifications}
            summary={summary}
            socialLinks={socialLinks}
          />
        </div>
      </section>
    </AuthLayout>
  );
};

export default ResumeBuilder;
