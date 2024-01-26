import { Fragment, useEffect, useState } from "react";
import "./ChapterDetail.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import { icon } from "../../utils/images/icons";
import { images } from "../../utils/images/images";
import Accordion from "react-bootstrap/Accordion";
import UploadedFileCard from "./uploadedfilecard/UploadedFileCard";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import WOW from "wow.js";
import axios from "axios";
import {
  baseUrl,
  chapterDetail,
  moduleList,
  quizSubmit,
} from "../../utils/apidata";
import { useParams } from "react-router-dom";
import AuthLayout from "../AuthLayout";

const ChapterDetail = () => {
  const [status, setStatus] = useState(true);
  const [viewPdf, setViewPdf] = useState(false);
  const [moduleLoader, setModuleLoader] = useState(false);
  const [chapterLoader, setChapterLoader] = useState(false);

  const [modulesList, setModulesList] = useState([]);
  const [chapters, setChaprters] = useState({});
  const [activeTab, setActiveTab] = useState("");

  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const { id } = useParams();

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

  // Get Modules Api
  const getModules = async () => {
    setModuleLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${moduleList}`,
        { course_id: `${id}` },
        { headers }
      );
      if (response?.data?.success) {
        setModulesList(response?.data?.data);
        setModuleLoader(false);
      }
    } catch (error) {
      console.log("Explore Error::", error);
      setModuleLoader(false);
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
        setChapterLoader(false);
      }
    } catch (error) {
      console.log(error);
      setChapterLoader(false);
    }
  };

  // Quize Submit

  const quizeSubmit = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${quizSubmit}`,
        {
          chapterId: "",
          quizId: "",
          selectedOptions: [...selectedAnswer],
        },
        { headers }
      );
      console.log("Submit::", response);
    } catch (error) {
      console.log(error);
    }
  };

  const addAnswer = (chapterId, quizId, ans) => {
    const obj = selectedAnswer.find((ele) => ele.quizId === quizId);

    if (obj) {
      if (obj.selectedOptions.includes(ans)) {
        const tempObj = {
          chapterId: obj.chapterId,
          quizId: obj.quizId,
          selectedOptions: obj.selectedOptions.filter((ele) => ele !== ans),
        };

        setSelectedAnswer((prev) => {
          const newArr = prev.filter((item) => item.quizId !== quizId);
          return [...newArr, tempObj];
        });
      } else {
        const tempObj = {
          chapterId: obj.chapterId,
          quizId: obj.quizId,
          selectedOptions: [...obj.selectedOptions, ans],
        };

        setSelectedAnswer((prev) => {
          const newArr = prev.filter((item) => item.quizId !== quizId);
          return [...newArr, tempObj];
        });
      }
    } else {
      setSelectedAnswer((prev) => [
        ...prev,
        { chapterId, quizId, selectedOptions: [ans] },
      ]);
    }
  };
  console.log(selectedAnswer);

  useEffect(() => {
    getModules();
  }, []);

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
                                        getChapterDetails(item?._id);
                                        setActiveTab(item?._id);
                                      }}
                                      key={item?._id}
                                    >
                                      <div className="left">
                                        <div className="green_circle">
                                          <img
                                            src={icon.whiteCheck}
                                            alt="check"
                                          />
                                        </div>
                                        <div className="text">
                                          <p className="small_text">
                                            {item?.chapter}
                                          </p>
                                        </div>
                                      </div>

                                      {item?.is_free === "free" && (
                                        <img src={icon.courses} />
                                      )}
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
                  chapters?.chapterinputs?.map((data) => {
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

                        {/* Type : Quize */}

                        {data?.field === "quizz" && (
                          <div className="quize_sec">
                            <h5>{data?.quizz_question}</h5>

                            <div className="option_wrap">
                              <button
                                type="button"
                                onClick={() =>
                                  addAnswer(
                                    data?.chapterId,
                                    data?._id,
                                    data?.quizz_opt_1
                                  )
                                }
                              >
                                {selectedAnswer.includes(data?.quizz_opt_1) && (
                                  <span></span>
                                )}
                              </button>
                              <p>{data?.quizz_opt_1}</p>
                            </div>
                            <div className="option_wrap">
                              <button
                                type="button"
                                onClick={() =>
                                  addAnswer(
                                    data?.chapterId,
                                    data?._id,
                                    data?.quizz_opt_2
                                  )
                                }
                              >
                                {selectedAnswer.includes(data?.quizz_opt_2) && (
                                  <span></span>
                                )}
                              </button>
                              <p>{data?.quizz_opt_2}</p>
                            </div>
                            <div className="option_wrap">
                              <button
                                type="button"
                                onClick={() =>
                                  addAnswer(
                                    data?.chapterId,
                                    data?._id,
                                    data?.quizz_opt_3
                                  )
                                }
                              >
                                {selectedAnswer.includes(data?.quizz_opt_3) && (
                                  <span></span>
                                )}
                              </button>
                              <p>{data?.quizz_opt_3}</p>
                            </div>
                            <div className="option_wrap">
                              <button
                                type="button"
                                onClick={() =>
                                  addAnswer(
                                    data?.chapterId,
                                    data?._id,
                                    data?.quizz_opt_4
                                  )
                                }
                              >
                                {selectedAnswer.includes(data?.quizz_opt_4) && (
                                  <span></span>
                                )}
                              </button>
                              <p>{data?.quizz_opt_4}</p>
                            </div>
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
                            ) : (
                              ""
                            )}
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
                              <iframe src={`${baseUrl}/${data?.pdf}`}></iframe>
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
                  })
                ) : (
                  <p>Data Not Found...</p>
                )}

                {chapters?.chapterinputs?.find(
                  (ele) => ele.field === "quizz"
                ) && (
                  <button
                    type="button"
                    className="primarybtn quiz_submit"
                    onClick={quizeSubmit}
                  >
                    Submit Quize
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ChapterDetail;
