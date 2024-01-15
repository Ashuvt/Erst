import { Fragment, useEffect, useState } from "react";
import "./ExploreCourses.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import { icon } from "../../utils/images/icons";
import { images } from "../../utils/images/images";
import Accordion from "react-bootstrap/Accordion";
import UploadedFileCard from "./uploadedfilecard/UploadedFileCard";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import WOW from "wow.js";

const ExploreCourses = () => {
  const [status, setStatus] = useState(true);

  const statusChanger = () => {
    setStatus((prev) => !prev);
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const uploadFileData = [
    {
      id: 0,
      img: images.uploadedA,
      name: "file_name_2123",
      info: "Uploading · 10% ",
      upload: true,
      cancel: false,
      replace: false,
      reviewed: false,
      submit: false,
    },
    {
      id: 1,
      img: images.uploadedB,
      name: "file_name_2123",
      info: "Uploading · 10% ",
      upload: false,
      cancel: true,
      replace: false,
      reviewed: false,
      submit: false,
    },
    {
      id: 2,
      img: images.uploadedC,
      name: "file_name_2123",
      info: "Uploading · 10% ",
      upload: false,
      cancel: false,
      replace: true,
      reviewed: false,
      submit: true,
    },
    {
      id: 3,
      img: images.uploadedD,
      name: "file_name_2123",
      info: "Uploading · 10% ",
      upload: false,
      cancel: false,
      replace: false,
      reviewed: true,
      submit: false,
    },
  ];

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <Fragment>
      <div className="header_filler"></div>
      <CoursesHeader />
      <section className="expaned_closer_wrap">
        <div className="screen_container">
          {!status && (
            <button
              className="side_opener"
              type="button"
              onClick={statusChanger}
            >
              <img src={icon.dobleleftangle} alt="icon" />
            </button>
          )}
        </div>
      </section>
      <section className="explore_cources" onClick={resetToggler}>
        <div
          className="screen_container"
          style={{ gap: `${status ? "" : "0"}` }}
        >
          <div className={`left_info ${status ? "" : "close"}`}>
            <div className="top_title">
              <h5 className="small_title">Outline</h5>
              <button className="iconbtn" type="button" onClick={statusChanger}>
                <img src={icon.dobleleftangle} alt="icon" />
              </button>
            </div>

            <div className="video_wrap">
              <img src={images.exploreDetail} alt="poster" />

              <div className="progress_bar">
                <div className="filler" style={{ width: "13%" }}></div>
              </div>
              <p className="percent">13%</p>
            </div>
            <p className="t-g-18">This is a RedTeam Course</p>

            <div className="module_count">
              <img src={icon.module} alt="module" />
              <p>12/42 Modules</p>
            </div>
            <div id="side_accord">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Module 1.1
                    <img src={icon.darkAngleDown} alt="angle" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5 className="small_title">Introduction</h5>
                    <div className="icon_info">
                      <div className="green_circle">
                        <img src={icon.whiteCheck} alt="check" />
                      </div>
                      <div className="text">
                        <p className="small_text">Introduction to course</p>
                        <p className="t-i-12">Reading · 5 min</p>
                      </div>
                    </div>

                    <div className="icon_info">
                      <img src={icon.module} alt="module" />
                      <div className="text">
                        <p className="small_text">Chapter 2</p>
                        <p className="t-i-12">Video · 15 min</p>
                      </div>
                    </div>

                    <div className="icon_info">
                      <img src={icon.courses} alt="module" />
                      <div className="text">
                        <p className="small_text">Chapter 3</p>
                        <p className="t-i-12">Reading · 23 min</p>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Module 1.2
                    <img src={icon.darkAngleDown} alt="angle" />
                  </Accordion.Header>

                  <Accordion.Body>
                    <h5 className="small_title">
                      Governance security and risk
                    </h5>

                    <div className="icon_info between">
                      <div className="left">
                        <img src={icon.courses} alt="module" />
                        <div className="text">
                          <p className="small_text">Introduction to course</p>
                          <p className="t-i-12">Reading · 5 min</p>
                        </div>
                      </div>
                      <img src={icon.lightLock} alt="lock" />
                    </div>

                    <div className="icon_info between">
                      <div className="left">
                        <img src={icon.module} alt="module" />
                        <div className="text">
                          <p className="small_text">Chapter 2</p>
                          <p className="t-i-12">Video · 15 min</p>
                        </div>
                      </div>
                      <img src={icon.lightLock} alt="lock" />
                    </div>

                    <div className="icon_info between">
                      <div className="left">
                        <img src={icon.module} alt="module" />
                        <div className="text">
                          <p className="small_text">Chapter 3</p>
                          <p className="t-i-12">Video · 15 min</p>
                        </div>
                      </div>
                      <img src={icon.lightLock} alt="lock" />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className={`course_detail ${status ? "" : "expand"}`}>
            <h1 className="title wow fadeInUp">Chapter Title</h1>
            <p className="small_text m-t-16 wow fadeInUp">
              Risk is inevitable. While it would be remarkable to eliminate all
              risk associated with protecting information assets, doing so is
              impossible. A determined adversary with enough time and resources
              will always pose a threat, and therefore a risk. However unlikely,
              the event of an earthquake striking your organization's data
              center is always a possibility. With this fact in mind, the goal
              of cybersecurity is to reduce risk to an acceptable level through
              countermeasures and mitigations.
            </p>
            <div className="img_wrap wow fadeIn">
              <img src={images.exploreDetail} alt="poster" />
            </div>
            <div className="section">
              <p className="section_name wow fadeInUp">Section</p>

              <p className="small_text wow fadeInUp">
                Cyber Risk Managers/Analysts or Auditors will often conduct a
                quantitative Cyber Risk Analysis that assigns factual data and
                monetary terms to express the level of risk and loss that may
                happen if safeguards are not in place. In the exercise below,
                you will practice performing a Cyber Risk Analysis. First, some
                key terms you will use in your analysis:
              </p>
              <ol>
                <li>
                  <p>
                    <span>1.</span>Asset Value (AV) - The monetary value an
                    asset is worth.
                  </p>{" "}
                </li>
                <li>
                  <p>
                    <span>2.</span>Exposure Factor (EF) - The percentage of the
                    assets value that would be lost if a breach or attack
                    happened.
                  </p>{" "}
                </li>
                <li>
                  <p>
                    <span>3.</span>Single Loss Expectancy (SLE) - The loss from
                    a single incident. (AV x EF)
                  </p>{" "}
                </li>
                <li>
                  <p>
                    <span>4.</span>Annual Rate of Occurrence (ARO) - The number
                    of times an incident is expected to occur in a year.
                  </p>{" "}
                </li>
              </ol>
            </div>

            <h1 className="mt-48 wow fadeInUp">Quiz</h1>
            <div className="question_wrap">
              <div className="question wow fadeInUp">
                <img src={icon.question} alt="question" />
                <p>QUESTION 1</p>
              </div>
              <p className="primary wow fadeInUp">
                What is the purpose of a quantitative Cyber Risk Analysis, and
                what are the key terms used in this analysis?
              </p>
              <p className="small_text thin wow fadeInUp">
                Points will be added to the certificate
              </p>
              <ul>
                <li className="wow fadeInUp">
                  <img src={icon.unselectedRadio} alt="radiobtn" />
                  <p>
                    To estimate cyberattack likelihood and financial impact. Key
                    terms: Asset Value, Exposure Factor, Single Loss Expectancy,
                    Annual Rate of Occurrence.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <img src={icon.selectedRadio} alt="radiobtn" />
                  <p>
                    To identify cybersecurity vulnerabilities. Key terms:
                    Vulnerability Assessment, Risk Mitigation, Cybersecurity
                    Audit, Attack Vector Analysis.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <img src={icon.unselectedRadio} alt="radiobtn" />
                  <p>
                    To calculate cybersecurity investment costs. Key terms:
                    Budget Allocation, Cybersecurity Investment, Risk Tolerance,
                    ROI Analysis.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <img src={icon.unselectedRadio} alt="radiobtn" />
                  <p>
                    To assess company reputation after a cyber incident. Key
                    terms: Brand Equity, Public Relations, Crisis Management,
                    Customer Trust.
                  </p>
                </li>
              </ul>
              <button
                type="button"
                className="authbtn auth_primary wow fadeInUp"
              >
                Submit
              </button>
            </div>

            <div className="question_wrap">
              <div className="question wow fadeInUp">
                <img src={icon.question} alt="question" />
                <p>QUESTION 1</p>
              </div>
              <p className="primary wow fadeInUp">
                What is the purpose of a quantitative Cyber Risk Analysis, and
                what are the key terms used in this analysis?
              </p>
              <p className="small_text thin wow fadeInUp">
                Points will be added to the certificate
              </p>
              <ul>
                <li className="wow fadeInUp">
                  <img src={icon.unselectedRadio} alt="radiobtn" />
                  <p>
                    To estimate cyberattack likelihood and financial impact. Key
                    terms: Asset Value, Exposure Factor, Single Loss Expectancy,
                    Annual Rate of Occurrence.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <img src={icon.selectedRadio} alt="radiobtn" />
                  <p>
                    To identify cybersecurity vulnerabilities. Key terms:
                    Vulnerability Assessment, Risk Mitigation, Cybersecurity
                    Audit, Attack Vector Analysis.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <img src={icon.unselectedRadio} alt="radiobtn" />
                  <p>
                    To calculate cybersecurity investment costs. Key terms:
                    Budget Allocation, Cybersecurity Investment, Risk Tolerance,
                    ROI Analysis.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <img src={icon.unselectedRadio} alt="radiobtn" />
                  <p>
                    To assess company reputation after a cyber incident. Key
                    terms: Brand Equity, Public Relations, Crisis Management,
                    Customer Trust.
                  </p>
                </li>
              </ul>
              <button
                type="button"
                className="authbtn auth_primary wow fadeInUp"
              >
                Submit
              </button>
            </div>

            <div className="assignment_wrap">
              <h1 className="wow fadeInUp">Assignment</h1>
              <p className="primary wow fadeInUp">
                What is the purpose of a quantitative Cyber Risk Analysis, and
                what are the key terms used in this analysis?
              </p>
              <p className="small_text wow fadeInUp">
                Additional description about the assignment. Additional
                description about the assignment. Additional description about
                the assignment.{" "}
              </p>

              <div className="upload_wrap wow fadeInUp">
                <input type="file" />
                <div className="content">
                  <img src={icon.upload} alt="upload" />
                  <p className="small_text">
                    Click to select file or drag and drop
                  </p>
                  <p className="t-i-12">.PDF, .Docx Under 10 MB</p>
                </div>
              </div>

              {uploadFileData.map((data) => {
                return (
                  <Fragment key={data.id}>
                    <UploadedFileCard {...data} />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ExploreCourses;
