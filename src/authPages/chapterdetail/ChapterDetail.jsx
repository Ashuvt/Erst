import { Fragment, useContext, useEffect, useState } from "react";
import "./ChapterDetail.scss";
import { icon } from "../../utils/images/icons";
import { images } from "../../utils/images/images";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import WOW from "wow.js";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

import {
  baseUrl,
  chapterDetail,
  courseCount,
  markAsCompleted,
  moduleList,
  quizSubmit,
} from "../../utils/apidata";
import { useParams } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { redirectContext } from "../../context/RoutingContext";
import QuizeList from "./quizList/QuizeList";
import QuizeResult from "./quizeResult/QuizeResult";
import AssignmentList from "./assignmentList/AssignmentList";

const ChapterDetail = () => {
  const [status, setStatus] = useState(true);
  const [viewPdf, setViewPdf] = useState(false);
  const [moduleLoader, setModuleLoader] = useState(false);
  const [chapterLoader, setChapterLoader] = useState(false);
  const [quizeSubmitLoader, setQuizeSubmitLoader] = useState(false);
  const [counteData, setCountsData] = useState({});

  const [modulesList, setModulesList] = useState([]);
  const [chapters, setChaprters] = useState({});
  const [activeTab, setActiveTab] = useState("");

  const [quizeData, setQuizData] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [popupStatus, setPopupStatus] = useState(false);

  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState({});
  const [freeIds, setFreeIds] = useState([]);

  const { id } = useParams();

  const { toastSuccess, toastError, addToCartApi } =
    useContext(redirectContext);

  const statusChanger = () => {
    setStatus((prev) => !prev);
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  // Course Count Percent Api
  const courseCountPercent = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(
        `${baseUrl}/${courseCount}`,
        { headers },
        { courseId: `${id}` }
      );
      // console.log("Count::", response);
      if (response?.data?.success) {
        setCountsData(response?.data?.data);
      }
    } catch (error) {
      console.log("Count Error::", error);
    }
  };

  // Get Modules Api
  const getModules = async () => {
    setModuleLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    setFreeIds([]);

    try {
      const response = await axios.post(
        `${baseUrl}/${moduleList}`,
        { course_id: `${id}` },
        { headers }
      );
      if (response?.data?.success) {
        console.log("Modeules ==> ", response?.data);
        setModulesList(response?.data?.data);
        setModuleLoader(false);

        let freeChapterIds = [];

        response?.data?.data.forEach((course) => {
          course.chapters.forEach((chapter) => {
            if (chapter.is_free === "free") {
              freeChapterIds.push(chapter._id);
            }
          });
        });
        setFreeIds(freeChapterIds);
      }
    } catch (error) {
      console.log("Explore Error::", error);
      setModuleLoader(false);
      setFreeIds([]);
    }
  };

  // Get Chapter Api
  const getChapterDetails = async (chapterId) => {
    setChapterLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${chapterDetail}`,
        { chapter_id: `${chapterId}` },
        { headers }
      );

      if (response?.data?.success) {
        setChaprters(response?.data?.data);
        console.log("Chapter:::", response?.data?.data);
        setQuizData(
          response?.data?.data?.chapterinputs.filter(
            (ele) => ele.field === "quizz"
          )
        );
        setChapterLoader(false);
      }
    } catch (error) {
      console.log(error);
      setChapterLoader(false);
    }
  };

  // Quize Submit

  const quizeSubmit = async (chapterId, selectedAnswerList) => {
    setQuizeSubmitLoader(true);
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${quizSubmit}`,
        {
          chapterId: `${chapterId}`,
          answers: [...selectedAnswerList],
        },
        { headers }
      );
      console.log("Q response::", response);
      if (response?.data?.success) {
        setResultData(response?.data?.data);
        toastSuccess(response?.data?.data?.message);
        setQuizeSubmitLoader(false);
        setShowResult(true);
      }
    } catch (error) {
      console.log(error);
      toastError(error?.message || "Something Went Wrong!");
      setQuizeSubmitLoader(false);
    }
  };

  const markAsCompletedApi = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.post(
        `${baseUrl}/${markAsCompleted}`,
        { chapterId: `${activeTab}` },
        { headers }
      );

      if (response?.data?.success) {
        nextChapterHandler();
        getModules();
        toastSuccess(response?.data?.message || "Chapter Marked As Completed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    console.log("Ans:::", selectedAnswer);
  }, [selectedAnswer]);

  useEffect(() => {
    getModules();
    courseCountPercent();
  }, []);

  useEffect(() => {
    if (!activeTab) {
      getChapterDetails(freeIds[0]);
      setActiveTab(freeIds[0]);
    }
  }, [freeIds]);

  const nextChapterHandler = () => {
    if (activeTab) {
      const nextChapterIndex =
        freeIds?.findIndex((ele) => ele === activeTab) + 1;
      console.log("index", freeIds);
      if (freeIds.length >= nextChapterIndex + 1) {
        getChapterDetails(freeIds[nextChapterIndex]);
        setActiveTab(freeIds[nextChapterIndex]);
      } else {
        setPopupStatus(true);
        getChapterDetails(freeIds[0]);
      }
    } else {
      getChapterDetails(freeIds[0]);
    }
  };

  return (
    <AuthLayout>
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
          style={{ gap: `${status ? "0" : "0"}` }}
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
                <div
                  className="filler"
                  style={{ width: `${counteData?.totalcomplatedcourse || 0}%` }}
                ></div>
              </div>
              <p className="percent">
                {counteData?.totalcomplatedcourse || 0}%
              </p>
            </div>
            <p className="t-g-18">This is a RedTeam Course</p>
            <div className="module_count">
              <img src={icon.module} alt="module" />
              <p>
                {counteData?.complatemodule || 0} /{" "}
                {counteData?.totalmodule || 0} Completed Modules
              </p>
            </div>
            {moduleLoader ? (
              <div className="loading_sec">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <div id="side_accord">
                {modulesList?.length > 0 ? (
                  <Accordion defaultActiveKey="0">
                    {modulesList.map((data, j) => {
                      return (
                        <Fragment key={data?._id}>
                          <Accordion.Item eventKey={`${j}`}>
                            <Accordion.Header>
                              {data?.module_name}
                              <img src={icon.darkAngleDown} alt="angle" />
                            </Accordion.Header>
                            <Accordion.Body>
                              {data?.chapters?.length > 0 ? (
                                data?.chapters?.map((item) => {
                                  return (
                                    <div
                                      className={`icon_info between ${
                                        item?._id === activeTab ? "active" : ""
                                      }`}
                                      onClick={() => {
                                        if (item?.is_free === "paid") {
                                          setPopupStatus(true);
                                        } else {
                                          getChapterDetails(item?._id);
                                        }
                                        setActiveTab(item?._id);
                                      }}
                                      key={item?._id}
                                    >
                                      <div className="left">
                                        {item?.completed ? (
                                          <div className="green_circle">
                                            <img
                                              src={icon.whiteCheck}
                                              alt="check"
                                            />
                                          </div>
                                        ) : (
                                          <div className="icon_box">
                                            <img
                                              src={icon.module}
                                              alt="video"
                                            />
                                          </div>
                                        )}

                                        <div className="text">
                                          <p className="small_text">
                                            {item?.chapter}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="right_icon">
                                        {item?.is_free === "free" ? (
                                          <img src={icon.courses} />
                                        ) : (
                                          <img src={icon.lock} />
                                        )}
                                      </div>
                                    </div>
                                  );
                                })
                              ) : (
                                <p>Chapters Does Not Found...</p>
                              )}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Fragment>
                      );
                    })}
                  </Accordion>
                ) : (
                  <p>Modules Does Not Found!</p>
                )}
              </div>
            )}
          </div>

          <div className={`course_detail ${status ? "" : "expand"}`}>
            {chapterLoader ? (
              <div className="loading_sec">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <Fragment>
                <h3 className="title wow fadeInUp">{chapters?.chapter}</h3>

                {chapters?.chapterinputs?.length > 0 ? (
                  <Fragment>
                    {chapters?.chapterinputs?.map((data) => {
                      return (
                        <Fragment key={data?._id}>
                          {/* Type : description */}

                          {data.field === "description" && (
                            <div className="description_sec">
                              <p>{data?.description}</p>
                            </div>
                          )}

                          {/* Type Image */}

                          {data.field === "image" && (
                            <div className="img_sec">
                              <img
                                src={`${baseUrl}/${data?.image}`}
                                alt="poster"
                              />
                            </div>
                          )}

                          {/* Type : section */}

                          {data.field === "section" && (
                            <div className="section_sec">
                              <h5>{data?.section_title}</h5>
                              <p>{data?.section_description}</p>
                            </div>
                          )}

                          {/* Type : Video */}
                          {data?.field === "video" && (
                            <div className="video_sec">
                              <video controls>
                                <source src={`${baseUrl}/${data?.video}`} />
                              </video>
                            </div>
                          )}

                          {/*Assignment */}

                          {data?.field === "assignment" && (
                            <div className="assignment_sec">
                              <h6 className="title">Assignment</h6>
                              {data?.is_file_upload === "yes" ? (
                                <div className="upload_wrap wow fadeInUp">
                                  <input type="file" />
                                  <div className="content">
                                    <img src={icon.upload} alt="upload" />
                                    <p className="small_text">
                                      Click to select file or drag and drop
                                    </p>
                                    <p className="t-i-12">
                                      .PDF, .Docx Under 10 MB
                                    </p>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          )}

                          {/* Type : pdf */}

                          {data?.field === "pdf" && (
                            <div className="pdf_sec">
                              <h6 className="title">PDF</h6>
                              {data?.is_file_upload === "true" ? (
                                <div className="upload_wrap wow fadeInUp">
                                  <input type="file" />
                                  <div className="content">
                                    <img src={icon.upload} alt="upload" />
                                    <p className="small_text">
                                      Click to select file or drag and drop
                                    </p>
                                    <p className="t-i-12">
                                      .PDF, .Docx Under 10 MB
                                    </p>
                                  </div>
                                </div>
                              ) : viewPdf ? (
                                <iframe
                                  src={`${baseUrl}/${data?.pdf}`}
                                ></iframe>
                              ) : (
                                <button
                                  type="button"
                                  className="primarybtn"
                                  onClick={() => setViewPdf(true)}
                                >
                                  View PDF
                                </button>
                              )}
                            </div>
                          )}
                        </Fragment>
                      );
                    })}

            

                    {/* Quize Section*/}

                    {quizeSubmitLoader ? (
                      <div className="loading_sec">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        ></div>
                      </div>
                    ) : (
                      <Fragment>
                        {showResult ? (
                          <QuizeResult
                            resultData={resultData}
                            quizeData={quizeData}
                            setShowResult={setShowResult}
                          />
                        ) : (
                          <Fragment>
                            {quizeData?.length > 0 && (
                              <QuizeList
                                quizeData={quizeData}
                                quizeSubmit={quizeSubmit}
                              />
                            )}
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                  </Fragment>
                ) : (
                  <p>Data Not Found...</p>
                )}

                        {/* Assignment Section */}
                        <AssignmentList activeTab={activeTab} />

                <div className="btn_bottom">
                  {chapters?.completed ? (
                    <button
                      type="button"
                      className="primarybtn"
                      onClick={nextChapterHandler}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="primarybtn"
                      onClick={markAsCompletedApi}
                    >
                      Mark As Completed
                    </button>
                  )}
                </div>
              </Fragment>
            )}

            {/* Assignment */}
          </div>
        </div>
      </section>

      {/* Model */}
      {popupStatus && (
        <div className="subscribe_model">
          <div className="model_dialog">
            <div className="top_title">
              <button type="button" onClick={() => setPopupStatus(false)}>
                <IoMdClose />
              </button>
            </div>

            <h5>Subscribe for more details</h5>
            <p>
              Elevate your learning journey! Subscribe now for exclusive access
              to the full course and unlock a world of knowledge and
              possibilities.
            </p>
            <button
              className="primarybtn"
              onClick={() => {
                addToCartApi(id);
                setPopupStatus(false);
              }}
            >
              Add To cart
            </button>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default ChapterDetail;
