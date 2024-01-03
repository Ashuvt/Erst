import { Fragment, useState, useEffect } from "react";
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
import { baseUrl, explorePage } from "../../utils/apidata";

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

  const [courseList, setCourseList] = useState([]);
  const [skillPathList, setSkillPathList] = useState([]);
  const [moduleList, setModuleList] = useState([]);

  const [loader, setLoader] = useState(false);

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const exploreApi = async () => {
    setLoader(true);
    try {
      const response = await axios.get(`${baseUrl}/${explorePage}`, {
        headers,
      });
      if (response?.data?.success) {
        setLoader(false);      
        setCourseList(response?.data?.data?.course);
        setModuleList(response?.data?.data?.module);
        setSkillPathList(response?.data?.data?.skill_paths);
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

  useEffect(() => {
    const wow = new WOW();
    wow.init();

    exploreApi();
  }, []);

  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedDomains, setCheckedDomains] = useState([]);
  const [checkedWorkRolles, setCheckedWorkRolles] = useState([]);

  const addFilter = (value) => {
    setSelectedFilter((prev) => {
      if (selectedFilter.includes(value)) {
        return selectedFilter.filter((data) => data !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const addInterest = (value) => {
    setSelectedInterest((prev) => {
      if (selectedInterest.includes(value)) {
        return selectedInterest.filter((data) => data !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const addTypes = (selectedId) => {
    setCheckedTypes((prev) => {
      if (checkedTypes.includes(selectedId)) {
        return checkedTypes.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });
  };

  const addDomains = (selectedId) => {
    setCheckedDomains((prev) => {
      if (checkedDomains.includes(selectedId)) {
        return checkedDomains.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });
  };

  const addWorkRolls = (selectedId) => {
    setCheckedWorkRolles((prev) => {
      if (checkedWorkRolles.includes(selectedId)) {
        return checkedWorkRolles.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });
  };

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
              <div className="options_content">
                <h3 className="title wow fadeInUp">Filter</h3>
                <div className="option_box wow fadeInUp">
                  {filterOptions.map((data) => {
                    return (
                      <Fragment key={data.id}>
                        <button
                          type="buton"
                          className={`white_btn ${
                            selectedFilter.includes(data.text) ? "active" : ""
                          }`}
                          onClick={() => addFilter(data.text)}
                        >
                          {data.text}
                        </button>
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="options_content">
                <h3 className="title wow fadeInUp">Interests</h3>
                <div className="option_box wow fadeInUp">
                  {interestOptions.map((data) => {
                    return (
                      <Fragment key={data.id}>
                        <button
                          type="buton"
                          className={`white_btn  ${
                            selectedInterest.includes(data.text) ? "active" : ""
                          }`}
                          onClick={() => addInterest(data.text)}
                        >
                          {data.text}
                        </button>
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="options_content">
                <h3 className="title wow fadeInUp">Type</h3>
                <div className="checkbox_card wow fadeInUp">
                  {typesData.map((data) => {
                    return (
                      <Fragment key={data.id}>
                        <div className="check_field">
                          <button
                            type="button"
                            className="checkbtn"
                            onClick={() => addTypes(data.id)}
                          >
                            <img
                              src={icon.checked}
                              alt="checked"
                              className={
                                checkedTypes.includes(data.id) ? "active" : ""
                              }
                            />
                          </button>
                          <label>
                            {data.text} <span></span>
                            {data.count}
                          </label>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="options_content">
                <h3 className="title wow fadeInUp">Domains</h3>
                <div className="checkbox_card wow fadeInUp">
                  {domainsData.map((data) => {
                    return (
                      <Fragment key={data.id}>
                        <div className="check_field">
                          <button
                            type="button"
                            className="checkbtn"
                            onClick={() => addDomains(data.id)}
                          >
                            <img
                              src={icon.checked}
                              alt="checked"
                              className={
                                checkedDomains.includes(data.id) ? "active" : ""
                              }
                            />
                          </button>
                          <label>
                            {data.text} <span></span>
                            {data.count}
                          </label>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="options_content">
                <h3 className="title wow fadeInUp">Work roles</h3>
                <div className="checkbox_card wow fadeInUp">
                  {workLRolesData.map((data) => {
                    return (
                      <Fragment key={data.id}>
                        <div className="check_field">
                          <button
                            type="button"
                            className="checkbtn"
                            onClick={() => addWorkRolls(data.id)}
                          >
                            <img
                              src={icon.checked}
                              alt="checked"
                              className={
                                checkedWorkRolles.includes(data.id)
                                  ? "active"
                                  : ""
                              }
                            />
                          </button>
                          <label>
                            {data.text} <span></span>
                            {data.count}
                          </label>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="explore_videos_wrap">
              <ExploreTitle
                title="Courses"
                text="Elevate your capabilities with insights and training from cybersecurity frontrunners."
              />

              {courseList.length > 0 ? (
                <div className="explore_video_grid">
                  {courseList.map((data, k) => {
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
                  <p>{loader ? "Loading ..." : "Course Data Not Found..."}</p>
                </div>
              )}

              <ExploreTitle
                title="Skill paths"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
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
                  <p>{loader ? "Loading ..." : "Skill Path Data Not Found..."}</p>
                </div>
              )}

              <ExploreTitle
                title="Modules"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
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
