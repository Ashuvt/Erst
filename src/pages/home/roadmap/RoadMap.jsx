import { Fragment, useEffect, useState} from "react";
import "./RoadMap.scss";
import { icon } from "../../../utils/images/icons";
import OneFourFloat from "./onefourfloat/OneFourFloat";
import FourOneFloat from "./fouronefloat/FourOneFloat";
import OneTwoFloat from "./onetwofloat/OneTwoFloat";
import { logoImage } from "../../../utils/images/images"
import CourseCard from "./courcecard/CourseCard";

const RoadMap = () => {
  const framData = [
    {
      id: 0,
      icon: icon.certificate,
      title: "Beginner",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
    {
      id: 1,
      icon: icon.certificate,
      title: "Intermediate",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
    {
      id: 2,
      icon: icon.certificate,
      title: "Professional",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
    {
      id: 3,
      icon: icon.certificate,
      title: "Master",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
  ];

  const courseData = [
    {
      id: "000",
      name: " Red Team Field - Cyber Attack.",
      img: icon.redTeam,
      type: "#CC0A0A",
      about:
        "Experience our Red Team Course, designed to enhance your personal skills and unleash your creativity, equipping you with valuable skills for a successful career in Cyber Security.",
      courses: [
        {
          id: "r1",
          course: "Ethical Hacking Course.",
        },
        {
          id: "r2",
          course: "Open Source Intelligence – OSINT Course.",
        },
        {
          id: "r3",
          course: "Python For Networking and Hacking Course",
        },
        {
          id: "r4",
          course: "Active Directory Pentesting Course.",
        },
        {
          id: "r5",
          course: "External Penetration Testing Course.",
        },
        {
          id: "r6",
          course: "Web Application Penetration Testing Course.",
        },
        {
          id: "r7",
          course: "How to Build a Checklist for Red Team Course.",
        },
        {
          id: "r8",
          course: "Bash Scripting for Red Team Course.",
        },
        {
          id: "r9",
          course: "Powershell For Penetration Testing Course.",
        },
      ],
    },
    {
      id: "111",
      name: "Blue Team Field - Cyber Defense.",
      img: icon.blueTeam,
      type: "#0A1633",
      about:
        "Introducing the Blue Team course, a comprehensive certification pathway designed to empower you with practical defensive security skills. Gain expertise in incident response, network security, vulnerability assessment, and more, as you develop a solid understanding of defensive security practices. Through hands-on exercises and immersive training, analyze information systems, fortify digital environments, and ensure ongoing protection against evolving threats.",
      courses: [
        {
          id: "b1",
          course: "SOC Analyst Tier 1 Course.",
        },
        {
          id: "b2",
          course: "SOC Analyst Tier 2 + 3 Course.",
        },
        {
          id: "b3",
          course: "Digital Forensics Course.",
        },
        {
          id: "b4",
          course: "Linux Forensics Course.",
        },
        {
          id: "b5",
          course: "Windows Forensics Course.",
        },
        {
          id: "b6",
          course: "Splunk for Monitoring and Detecting Course.",
        },
        {
          id: "b7",
          course: " How to Build a Checklist for Blue Team Course",
        },
        {
          id: "b8",
          course: "Bash Scripting for Blue Team Course.",
        },
      ],
    },
  ];
  const [scrollY, setScrollY] = useState(0);

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
              <img src={logoImage.logo} alt="icon" />
              <h4>Cyber Gain</h4>
              <h6>Center</h6>
            </div>
            <div className="glass_shad"></div>
          </div>

          <OneTwoFloat scrollY={scrollY} />

          <div className="bi_flex">
            {courseData.map((data) => {
              return (
                <Fragment key={data.id}>
                  <CourseCard {...data} />
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