import { Fragment, useState, useEffect, useContext } from "react";
import "./Explore.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import ExploreTitle from "./exploretitle/ExploreTitle";
import { images } from "../../utils/images/images";
import ExploreCard from "../components/explorecard/ExploreCard";
import { icon } from "../../utils/images/icons";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import WOW from "wow.js";
import axios from "axios";
import {
  baseUrl,
  exploreFilterOptions,
  explorePage,
  saveCourse,
} from "../../utils/apidata";
import ExploreCourseCard from "./coursecard/ExploreCourseCard";
import { redirectContext } from "../../context/RoutingContext";

const Explore = () => {
  const courcesData = [
    {
      id: 0,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 1,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 2,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
  ];

  const filterOptions = [
    {
      id: 0,
      text: "Best rated",
    },
    {
      id: 1,
      text: "Most students",
    },
    {
      id: 2,
      text: "Easy",
    },
    {
      id: 3,
      text: "CEH",
    },
    {
      id: 4,
      text: "Penetration",
    },
    {
      id: 5,
      text: "Tough",
    },
    {
      id: 6,
      text: "Keyword",
    },
    {
      id: 7,
      text: "Another keyword",
    },
  ];

  const interestOptions = [
    {
      id: 0,
      text: "Medium",
    },
    {
      id: 1,
      text: "Penetrations",
    },
    {
      id: 2,
      text: "Easy",
    },
    {
      id: 3,
      text: "CEH",
    },
    {
      id: 4,
      text: "Penetration",
    },
    {
      id: 5,
      text: "Tough",
    },
    {
      id: 6,
      text: "Keyword",
    },
    {
      id: 7,
      text: "Another keyword",
    },
  ];

  const typesData = [
    {
      id: "11",
      text: "All",
      count: 79,
    },
    {
      id: "12",
      text: "Modules",
      count: 45,
    },
    {
      id: "13",
      text: "Courses",
      count: 3,
    },
    {
      id: "14",
      text: "Skillpaths",
      count: 31,
    },
  ];

  const domainsData = [
    {
      id: "21",
      text: "Defensive Security",
      count: 42,
    },
    {
      id: "22",
      text: "Engineering and operations",
      count: 12,
    },
    {
      id: "23",
      text: "Offensive security",
      count: 31,
    },
  ];

  const workLRolesData = [
    {
      id: "31",
      text: "All source analyst",
      count: 61,
    },
    {
      id: "32",
      text: "Authorizing Official/Designating Representative",
      count: 15,
    },
    {
      id: "33",
      text: "Cyber Defense Forensics Analyst",
      count: 16,
    },
    {
      id: "34",
      text: "Authorizing Official/Designating Representative",
      count: 31,
    },
  ];

  const { toastSuccess, toastWarning, toastError } =
    useContext(redirectContext);

  const [courseList, setCourseList] = useState([]);
  const [skillPathList, setSkillPathList] = useState([]);
  const [moduleList, setModuleList] = useState([]);
  const [savedCourses, setSavedCourseds] = useState([]);

  const [loader, setLoader] = useState(false);

  const [profession, setProfession] = useState([]);
  const [interest, setInterest] = useState([]);
  const [tag, setTag] = useState([]);


  const [selectedProfession, setSelectedProfession] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Explore Page APi
  const exploreApi = async () => {
    setLoader(true);
    try {
      const response = await axios.get(`${baseUrl}/${explorePage}`, {
        headers,
      }, {
        proffession:selectedProfession,
        interest:selectedInterest,
        tag:selectedTag
      });
      if (response?.data?.success) {
        setLoader(false);
        setCourseList(response?.data?.data?.course);
        setModuleList(response?.data?.data?.module);
        setSkillPathList(response?.data?.data?.skill_paths);
        setSavedCourseds(response?.data?.data?.savedcourses);
      } else {
        setCourseList([]);
        setModuleList([]);
        setSkillPathList([]);
      }
    } catch (error) {
      console.log(error);
      setCourseList([]);
      setModuleList([]);
      setSkillPathList([]);
      setLoader(false);
    }
  };

  // Explore Filter Options APi
  const getFilterOptionsApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${exploreFilterOptions}`);      
      if (response?.data?.success) {
        setProfession(response?.data?.data?.Proffession);
        setInterest(response?.data?.data?.Intrest);
        setTag(response?.data?.data?.Tag);
      }
    } catch (error) {
      console.log("ERROR::", error);
      setProfession([]);
      setInterest([]);
      setTag([]);
    }
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
    exploreApi();
    getFilterOptionsApi();
  }, []);

  // Save Course

  const saveCourseApi = async (courseId) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${saveCourse}`,
        { course_id: courseId },
        { headers }
      );
      console.log("Save Course::", response);
      if (response?.data?.success) {
        toastSuccess(response?.data?.message);
        exploreApi();
      } else {
        toastWarning("This Course is already added!");
      }
    } catch (error) {
      console.log(error);
      toastError("Something went wrong");
    }
  };

  const addProfession = (selectedId) => {
    setSelectedProfession((prev) => {
      if (selectedProfession.includes(selectedId)) {
        return selectedProfession.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });

    exploreApi();
  };

  const addInterest = (selectedId) => {
    setSelectedInterest((prev) => {
      if (selectedInterest.includes(selectedId)) {
        return selectedInterest.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });

    exploreApi();
  }
  
  const addTag = (selectedId) => {
    setSelectedTag((prev) => {
      if (selectedTag.includes(selectedId)) {
        return selectedTag.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });

    exploreApi();
  }



  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <Fragment>
      <div className="header_filler"></div>
      <CoursesHeader />
      <section className="explore_page" onClick={resetToggler}>
        <div className="screen_container">
          <div className="explore_grid">
            <div className="filter_options_sec">              
              {/* Profession Filter Options */}
              <div className="options_content">
                <h3 className="title wow fadeInUp">Profession</h3>
                <div className="option_box wow fadeInUp">
                  {profession.length > 0 ? (
                    profession.map((data) => {
                      return (
                        <Fragment key={data._id}>
                          <button
                            type="buton"
                            className={`white_btn ${
                              selectedProfession.includes(data._id) ? "active" : ""
                            }`}
                            onClick={() => addProfession(data._id)}
                          >
                            {data.name}
                          </button>
                        </Fragment>
                      );
                    })
                  ) : (
                    <p>Data Not Exist...</p>
                  )}
                </div>
              </div>

              {/* Interest Filter Oprtions */}

              <div className="options_content">
                <h3 className="title wow fadeInUp">Interest</h3>
                <div className="option_box wow fadeInUp">
                  {interest.length > 0 ? (
                    interest.map((data) => {
                      return (
                        <Fragment key={data._id}>
                          <button
                            type="buton"
                            className={`white_btn  ${
                              selectedInterest.includes(data._id)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => addInterest(data._id)}
                          >
                            {data.name}
                          </button>
                        </Fragment>
                      );
                    })
                  ) : (
                    <p>Data Does Not Exist...</p>
                  )}
                </div>
              </div>

              {/* Tags Filter Oprtions */}

              <div className="options_content">
                <h3 className="title wow fadeInUp">Tags</h3>
                <div className="option_box wow fadeInUp">
                  {tag.length > 0 ? (
                    tag.map((data) => {
                      return (
                        <Fragment key={data._id}>
                          <button
                            type="buton"
                            className={`white_btn  ${
                              selectedTag.includes(data._id)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => addTag(data._id)}
                          >
                            {data.name}
                          </button>
                        </Fragment>
                      );
                    })
                  ) : (
                    <p>Data Does Not Exist...</p>
                  )}
                </div>
              </div>
            </div>

            <div className="explore_videos_wrap">
              <ExploreTitle
                title="Courses"
                text="Elevate your capabilities with insights and training from cybersecurity frontrunners."
                btnClickHandler={() => console.log("view all course Clicked")}
              />

              {courseList.length > 0 ? (
                <div className="explore_video_grid">
                  {courseList.map((data, k) => {
                    return (
                      <Fragment key={data._id}>
                        <ExploreCourseCard
                          {...data}
                          index={k}
                          redirectTo={`/explore/${data._id}`}
                          isSave={savedCourses.includes(data._id)}
                          saveHandler={saveCourseApi}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className="empty_box">
                  <p>{loader ? "Loading ..." : "Course Data Not Found..."}</p>
                </div>
              )}

              <ExploreTitle
                title="Skill paths"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
                btnClickHandler={() => console.log("view all Skill Path Btn Clicked")}
              />
              {skillPathList.length > 0 ? (
                <div className="explore_video_grid">
                  {skillPathList.map((data, k) => {
                    return (
                      <Fragment key={data._id}>
                        <ExploreCard
                          {...data}
                          index={k}
                          redirectTo={`/explore/${data._id}`}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className="empty_box">
                  <p>
                    {loader ? "Loading ..." : "Skill Path Data Not Found..."}
                  </p>
                </div>
              )}

              <ExploreTitle
                title="Modules"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
                btnClickHandler={() => console.log("view all Module Btn Clicked")}
              />
              {moduleList.length > 0 ? (
                <div className="explore_video_grid">
                  {moduleList.map((data, k) => {
                    return (
                      <Fragment key={data._id}>
                        <ExploreCard
                          {...data}
                          index={k}
                          redirectTo={`/explore/${data._id}`}
                          isSave={savedCourses.includes(data._id)}
                          saveHandler={saveCourseApi}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className="empty_box">
                  <p>{loader ? "Loading ..." : "Module Data Not Found..."}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Explore;
