import { Fragment, useState, useEffect, useContext } from "react";
import "./Explore.scss";
import ExploreTitle from "./exploretitle/ExploreTitle";
import BundleCard from "./bundlecard/BundleCard";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import AuthLayout from "../AuthLayout";
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
  const { toastSuccess, toastWarning, toastError } =
    useContext(redirectContext);

  const [courseList, setCourseList] = useState([]);
  const [bundleList, setBundleList] = useState([]);

  const [savedCourses, setSavedCourseds] = useState([]);

  const [loader, setLoader] = useState(false);

  const [profession, setProfession] = useState([]);
  const [interest, setInterest] = useState([]);
  const [tag, setTag] = useState([]);

  const [selectedProfession, setSelectedProfession] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);

  const [bundleSize, setBundleSize] = useState(false);
  const [courseSize, setCourseSize] = useState(false);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // Explore Page APi

  const exploreApi = async () => {
    setLoader(true);
    try {
      const response = await axios.get(
        `${baseUrl}/${explorePage}`,
        {
          headers,
        },
        {
          proffession: selectedProfession,
          interest: selectedInterest,
          tag: selectedTag,
        }
      );
      console.log("Explore Page:::", response);
      // console.log("Courses:::", response?.data?.data?.course);
      if (response?.data?.success) {
        setLoader(false);
        setCourseList(response?.data?.data?.course);
        setBundleList(response?.data?.data?.bundle);

        setSavedCourseds(response?.data?.data?.savedcourses);
      } else {
        setCourseList([]);
        setBundleList([]);
      }
    } catch (error) {
      console.log("Explore Error:::", error);
      setCourseList([]);
      setBundleList([]);
      setLoader(false);
    }
  };

  // Explore Filter Options APi
  const getFilterOptionsApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${exploreFilterOptions}`);
      console.log("Explore:::", response);
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
  };

  const addTag = (selectedId) => {
    setSelectedTag((prev) => {
      if (selectedTag.includes(selectedId)) {
        return selectedTag.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });

    exploreApi();
  };

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

 
  return (
    <AuthLayout>
      <section className="explore_page" onClick={resetToggler}>
        <div className="screen_container">
          <div className="explore_grid">
            <div className="filter_options_sec">
              {/* Profession Filter Options */}
              <div className="options_content">
                <h3 className="title wow fadeInUp">Profession</h3>
                <div className="option_box wow fadeInUp">
                  {profession?.length > 0 ? (
                    profession.map((data) => {
                      return (
                        <Fragment key={data._id}>
                          <button
                            type="buton"
                            className={`white_btn ${
                              selectedProfession.includes(data._id)
                                ? "active"
                                : ""
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
                  {interest?.length > 0 ? (
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
                  {tag?.length > 0 ? (
                    tag.map((data) => {
                      return (
                        <Fragment key={data._id}>
                          <button
                            type="buton"
                            className={`white_btn  ${
                              selectedTag.includes(data._id) ? "active" : ""
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
              {/* Bundles List */}
              <ExploreTitle
                title="Bundles"
                text="Embrace career advancement pathways customized for high-demand cybersecurity careers."
                btnClickHandler={() => setBundleSize((prev) => !prev)}
                sizeState={bundleSize}
                isResize={bundleList?.length > 3}
              />
              {bundleList.length > 0 ? (
                <div className="explore_video_grid">
                  {bundleList
                    .slice(0, bundleSize ? bundleList?.length + 2 : 3)
                    ?.map((data, k) => {
                      return (
                        <Fragment key={data._id}>
                          <BundleCard
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
                  <p>
                    {loader ? "Loading ..." : "Bundles Data Does Not Found..."}
                  </p>
                </div>
              )}

              {/* Courses List */}

              <ExploreTitle
                title="Courses"
                text="Elevate your capabilities with insights and training from cybersecurity frontrunners."            
                btnClickHandler={() => setCourseSize((prev) => !prev)}
                sizeState={courseSize}
                isResize={courseList?.length > 3}
              />

              {courseList?.length > 0 ? (
                <div className="explore_video_grid">
                  {courseList
                    ?.slice(0, courseSize ? bundleList?.length + 2 : 3)
                    ?.map((data, k) => {
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
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Explore;
