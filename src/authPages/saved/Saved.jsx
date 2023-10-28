import { Fragment, useState } from "react";
import "./Saved.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import ExploreTitle from "../explore/exploretitle/ExploreTitle";
import { images } from "../../utils/images/images";
import ExploreCard from "../components/explorecard/ExploreCard";
import { icon } from "../../utils/images/icons";

const Saved = () => {
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
    {
      id: 3,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 4,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 5,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 6,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 7,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 8,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 9,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 10,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
    },
    {
      id: 11,
      img: images.explore,
      title: "Course Name",
      text: "A short description about the course, it can be in two lines.",
      students: 800,
      modules: 12,
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


  const [selectedInterest, setSelectedInterest] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);


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

  return (
    <Fragment>
      <div className="header_filler"></div>
      <CoursesHeader />

      <section className="saved_page">
        <div className="screen_container">
          <div className="explore_grid">
            <div className="filter_options_sec">
             

              <div className="options_content">
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
              </div>

              <div className="options_content">
                <h3 className="title">Type</h3>
                <div className="checkbox_card">
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
            </div>

            <div className="explore_videos_wrap">
             
              <div className="explore_video_grid">
                {courcesData.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <ExploreCard {...data} saved={true} />
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

export default Saved;
