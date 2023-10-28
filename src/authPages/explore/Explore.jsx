import { Fragment, useState } from "react";
import "./Explore.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import ExploreTitle from "./exploretitle/ExploreTitle";
import { images } from "../../utils/images/images";
import ExploreCard from "../components/explorecard/ExploreCard";

const Explore = () => {
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
      text: "Penetration",
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

  return (
    <Fragment>
      <div className="header_filler"></div>
      <CoursesHeader />

      <section className="explore_page">
        <div className="screen_container">
          <div className="explore_grid">
            <div className="filter_options_sec">
              <h3 className="title">Filter</h3>
              <div className="option_box">
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

              <h3 className="title">Interests</h3>
              <div className="option_box">
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

              <h3 className="title">Type</h3>
              <div className="checkbox_card">
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    all <span></span>79
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Modules <span></span> 45
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Courses <span></span> 3
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Skillpaths <span></span> 31
                  </label>
                </div>
              </div>

              <h3 className="title">Domains</h3>
              <div className="checkbox_card">
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Defensive Security <span></span> 42
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Engineering and operations <span></span> 12
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Offensive security <span></span> 31
                  </label>
                </div>
              </div>

              <h3 className="title">Work roles</h3>
              <div className="checkbox_card">
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    All source analyst <span></span> 61
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Authorizing Official/Designating Representative{" "}
                    <span></span> 15
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Cyber Defense Forensics Analyst <span></span> 16
                  </label>
                </div>
                <div className="check_field">
                  <input type="checkbox" />
                  <label>
                    Authorizing Official/Designating Representative{" "}
                    <span></span> 31
                  </label>
                </div>
              </div>
            </div>
            <div className="explore_videos_wrap">
              <ExploreTitle
                title="Courses"
                text="Elevate your capabilities with insights and training from cybersecurity frontrunners."
              />
              <div className="explore_video_grid">
                {courcesData.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <ExploreCard {...data} />
                    </Fragment>
                  );
                })}
              </div>

              <ExploreTitle
                title="Skill paths"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
              />
              <div className="explore_video_grid">
                {courcesData.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <ExploreCard {...data} />
                    </Fragment>
                  );
                })}
              </div>

              <ExploreTitle
                title="Modules"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
              />
              <div className="explore_video_grid">
                {courcesData.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <ExploreCard {...data} />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Explore;
