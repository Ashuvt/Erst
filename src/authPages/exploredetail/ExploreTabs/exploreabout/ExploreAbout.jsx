import { Fragment } from "react";
import "./ExploreAbout.scss";
import FourBoxInfo from "../../../components/fourboxinfo/FourBoxInfo";
import { icon } from "../../../../utils/images/icons";
import InstructorCard from "../../../components/Instructorcard/InstructorCard";
import { images } from "../../../../utils/images/images";
import SubCoursesSlider from "./subcoursesslider/SubCoursesSlider";
import JourneySlider from "./journeyslider/JourneySlider";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../../store/actions";
import ModulesSec from "./modulessec/ModulesSec";

const ExploreAbout = ({ instructors, course }) => {
  const whiteBtnData = [
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
      text: "CEH",
    },
  ];

  const fourInfoData = [
    {
      id: 0,
      icon: icon.certificate,
      title: "Shareable certificate",
      text: "Get a certificate on completing the course. You can share it on your LinkedIn.",
    },
    {
      id: 1,
      icon: icon.quizandproject,
      title: "Quizzes and projects",
      text: "Across courses, you’ll get to test yourself within 10 quizzes and 5 projects.",
    },
    {
      id: 2,
      icon: icon.group,
      title: "Student groups",
      text: "Get in groups with other students and exchange ideas.",
    },
    {
      id: 3,
      icon: icon.live,
      title: "Live classes",
      text: "Across courses, you'll get to test yourself within 10 quizzes and 5 projects.",
    },
  ];

  const instructorsData = [
    {
      id: 0,
      img: images.profilea,
      name: "David Biser",
      text: "Incident Response Engineer at Iron Mountain",
      students: 4632,
      courses: 2,
    },
    {
      id: 1,
      img: images.profileb,
      name: "David Biser",
      text: "Incident Response Engineer at Iron Mountain",
      students: 4632,
      courses: 2,
    },
    {
      id: 2,
      img: images.profilec,
      name: "David Biser",
      text: "Incident Response Engineer at Iron Mountain",
      students: 4632,
      courses: 2,
    },
  ];

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <section className="explore_detail_content" onClick={resetToggler}>
      <div className="screen_container">
        <div className="grid_content" id="about">
          <div className="left">
            <div className="btn_line">
              {whiteBtnData.map((data) => {
                return (
                  <Fragment key={data.id}>
                    <button
                      type="button"
                      className="white_btn active wow fadeInUp"
                    >
                      {data.text}
                    </button>
                  </Fragment>
                );
              })}
            </div>

            <p className="small_text wow fadeInUp">
              Master the art of cyber adversarial tactics with our Red Team
              course. Learn to simulate real-world attacks and bolster your
              organization's security posture. Become a skilled ethical hacker
              and defend against emerging threats.
            </p>

            <FourBoxInfo
              title="What does this course include"
              data={fourInfoData}
            />

            {course?.is_course === "course" && <ModulesSec />}
          </div>
          <div className="right">
            <h5 className="small_title wow fadeInUp">Instructor</h5>
            {instructors?.length > 0 ? (
              instructors.map((data) => {
                return (
                  <Fragment key={data._id}>
                    <InstructorCard {...data} />
                  </Fragment>
                );
              })
            ) : (
              <p>Data Does Not Found...</p>
            )}
            <div className="red_card wow fadeInUp">
              <p className="t-g-16">Get 25% off on RedTeam</p>
              <p>
                Get access to 50+ modules covering topics from basic to advance.
              </p>
              <button>Subscribe</button>
            </div>
          </div>
        </div>


        {course?.is_course === "bundle" && <SubCoursesSlider />}        

        {course?.is_course === "course" && <JourneySlider />}

      </div>
    </section>
  );
};

export default ExploreAbout;
