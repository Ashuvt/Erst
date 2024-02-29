import { Fragment, useContext, useEffect, useState } from "react";
import "./RoadMap.scss";
import { icon } from "../../../utils/images/icons";
import OneFourFloat from "./onefourfloat/OneFourFloat";
import FourOneFloat from "./fouronefloat/FourOneFloat";
import OneTwoFloat from "./onetwofloat/OneTwoFloat";
import { logoImage } from "../../../utils/images/images";
import CourseCard from "./courcecard/CourseCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl, CourseList } from "../../../utils/apidata";
import RedBlueCard from "../../../authPages/onboardingstepper/stepD/redbluecard/RedBlueCard";
import OneThreeFloat from "./onethreefloat/OneThreeFloat";
import { redirectContext } from "../../../context/RoutingContext";

const RoadMap = ({ t, setPopStatus, setViewData }) => {
  const [courseList, setCourseList] = useState([]);

  const { domainName } = useContext(redirectContext);

  const framData = [
    {
      id: 0,
      icon: icon.certificate1,
      title: t("courseCardOneTitle"),
      text: t("courseCardOnePara"),
    },
    {
      id: 1,
      icon: icon.certificate2,
      title: t("courseCardTwoTitle"),
      text: t("courseCardTwoPara"),
    },
    {
      id: 2,
      icon: icon.certificate3,
      title: t("courseCardThreeTitle"),
      text: t("courseCardThreePara"),
    },
    {
      id: 3,
      icon: icon.certificate4,
      title: t("courseCardFourTitle"),
      text: t("courseCardFourPara"),
    },
  ];


  const [scrollY, setScrollY] = useState(0);
  const l = useSelector((state) => state.langReducer.lang);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let smallCirclleMove = scrollY > 300 ? scrollY - 300 : 0;

  const getCourse = async () => {
    try {
      const response = await axios.post(`${baseUrl}/${CourseList}`, { country: domainName() === 'net' ? "Isreal" : "Dubai" });
      
      // console.log("Home:::", response);

      if (response?.data?.success) {
        setCourseList(response?.data?.data);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <Fragment>
      <section className="road_map">
        <div className="content_wrap">
          <div className="small_screen_map">
            <div className="center_line"></div>
            <div
              className="moving_circle"
              style={{ top: `${smallCirclleMove}px` }}
            >
              <div className="a">
                <div className="b">
                  <div className="c"></div>
                </div>
              </div>
            </div>
          </div>

          <OneFourFloat scrollY={scrollY} />

          <div className="frame_grid">
            {framData.map((data) => {
              return (
                <div className="four_info_card" key={data.id}>
                  <div className="v_top_line"></div>
                  <div className="v_bottom_line"></div>

                  <div className="icon_box">
                    <img src={data.icon} alt="" />
                  </div>
                  <h5>{data.title}</h5>
                  <p>{data.text}</p>
                </div>
              );
            })}
          </div>

          <FourOneFloat scrollY={scrollY} />

          <div className="center_logo">
            <div className="content_circle">
              <img src={logoImage.fulllogo} alt="icon" />
            </div>
            <div className="glass_shad"></div>
          </div>

          {domainName() === "net" ? (
            <OneThreeFloat scrollY={scrollY} />
          ) : (
            <OneTwoFloat scrollY={scrollY} />
          )}

          <div
            className={`${domainName() === "net" ? "tri_grid" : "bi_grid"} ${
              ["ar", "he"].includes(l) ? "flip" : ""
            }`}
          >
            {courseList?.length > 0 &&
              courseList
                .slice(0, domainName() === "net" ? 3 : 2)
                .map((data) => {
                  return (
                    <Fragment key={data._id}>
                      <CourseCard
                        {...data}
                        dataObj={data}
                        setPopStatus={setPopStatus}
                        setViewData={setViewData}
                      />
                    </Fragment>
                  );
                })}
          </div>
        </div>
        <div
          className="roadmap_glass a wow zoomIn"
          data-wow-delay="0.5s"
          data-wow-duration="1.5s"
        ></div>
        <div
          className="roadmap_glass b wow zoomIn"
          data-wow-delay="0.5s"
          data-wow-duration="1.5s"
        ></div>
        <div
          className="roadmap_glass c wow zoomIn"
          data-wow-delay="0.5s"
          data-wow-duration="1.5s"
        ></div>
        <div
          className="roadmap_glass d wow zoomIn"
          data-wow-delay="0.5s"
          data-wow-duration="1.5s"
        ></div>
      </section>
    </Fragment>
  );
};

export default RoadMap;
