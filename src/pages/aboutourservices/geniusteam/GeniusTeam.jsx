import { useRef } from "react";
import "./GeniusTeam.scss";
import Slider from "react-slick";
import { icons, images } from "../../../utils/images/images";

const GeniusTeam = () => {

  let title="Meet The Genius Team";
  let para = "At Cyber Gain Center, Our Team Is More Than A Collective Of Experts—It's A Dedicated Force Committed To Your Cybersecurity Journey. From Seasoned Professionals To Innovative Minds, Each Member Brings Unique Perspectives And Deep Industry Knowledge. Together, We Thrive On Collaboration, Ensuring That Every Learner Receives Personalized Guidance And Support. Meet Our Passionate Team—Driven To Empower You In Mastering The Essentials Of Cybersecurity."

  const sliderRef = useRef(null);

  const teamData = [
    {
      id: 0,
      name: "Ali Zenaty",
      post: "Co-Founder & CEO",
      about:
        "Brings extensive expertise in software engineering and cybersecurity. With practical experience in various areas such as Incident Response, SOC Team (Blue Team), Red Teaming, and penetration testing, Ali ensures that our training programs provide the latest insights and techniques. Their expertise in business development also contributes to the growth and success of our center.",
      img: images.teamMemberA,
      insta: "http://www.instagram.com/ali_zinaty94/",
      fb: "http://www.facebook.com/ale.zenaty",
      ln: "http://www.linkedin.com/in/ali-zinaty-252368177/",
    },
    {
      id: 1,
      name: "Najeeb Ibrahem",
      post: "Blue Team Leader",
      about:
        "Najeeb Ibrahem has experience as a Cyber Security Analyst, responsible for assisting in the operation and maintenance of the installations computer network and to provide technical assistance also Conduct analysis, cyber threats, the discovery of it vulnerabilities, monitoring for cyber intrusions, troubleshoot and response to security incidents detected from hp arcsight or related SIEM. IDS/IPS, and other security applications.",
      img: images.teamMemberB,
      insta: "http://www.instagram.com/najeeb.ibrahimm1/",
      fb: "http://www.facebook.com/najeeb.ibrahimm",
      ln: "http://www.linkedin.com/in/najeeb-ibrahim/",
    },
    {
      id: 2,
      name: "Yara Rammal",
      post: "HR - Human Resource & Office Manager",
      about:
        "Holds a master's degree in human services. The role involves a wide range of responsibilities, including recruitment, and managing administrative tasks. This entails creating impressive resumes, conducting interview preparations, and optimizing LinkedIn profiles. Additionally, it plays a crucial role in supervising marketing and advertising efforts to effectively promote the center's services.",
      img: images.teamMemberC,
      insta: "",
      fb: "",
      ln: "http://www.linkedin.com/in/yara-rammal-3aa485165/",
    },
    {
      id: 3,
      name: "Saleh Ahmed",
      post: "IT and Cloud Security Instructor",
      about:"With a comprehensive background in information security and cyber administration, Saleh has served in key roles, including Cloud Support Engineer and IT Support. Experienced in technologies such as GCP, Microsoft Azure, MongoDB, and virtualization tools like Docker and Kubernetes. His commitment to delivering exceptional technical support, combined with his managerial acumen, makes him a valuable asset in shaping the learning journey of our students",        
      img:images.teamMemberD,
      insta: "",
      fb: "",
      ln: "https://www.linkedin.com/in/saleh-ahmed-8983a6188",
    },
    {
      id: 4,
      name: "Taleen Skafi",
      post: "Cybersecurity Developer",
      about:
        "A proficient expert in conducting technical online workshops and immersive Red Team Training sessions. Specializing in Active Directory security, with expertise that extends to threat intelligence, and incident response. Responsible for designing realistic lab environments, introducing vulnerabilities for hands-on learning, and engaging in penetration testing and network assessments.",
      img:images.teamMemberE,
      insta: "",
      fb: "",
      ln: "https://www.linkedin.com/in/taleen-skafi-b69104215",
    },
    {
      id: 5,
      name: "Salman",
      post: "Cybersecurity Developer",
      about:
        "Salman Alwan, an innovative Cybersecurity Specialist, excelled as a former student in our Blue Team course with CSA certification. Specializes in lab design and knowledge transfer and is proficient in Bash, and Python. Salman is actively involved in cybersecurity and programming, currently working on a Dork Generator with upcoming projects focused on a Dork Scanner and an SQL Injection Vulnerable Scanner/Tester.",
      img:images.teamMemberF,
      insta: "",
      fb: "",
      ln: "https://www.linkedin.com/in/salmanalwan/",
    },
  ];

  var slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Use slickNext method to go to the next slide
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Use slickPrev method to go to the previous slide
    }
  };

  return (
    <div className="genius_slider_sec p_bottom">
      <div className="mobile_title">
        <h2>{title}</h2>
        <p>{para}</p>
      </div>

      <div className="genius_slider">
        <div className="title_card">
          <div className="text">
          <h2>{title}</h2>
        <p>{para}</p>
          </div>
          <div className="btn_line">
            <button type="button" className="prev" onClick={goToPrev}>
              <img src={icons.whiteArrow} alt="arow" />
              PREV
            </button>
            <button type="button" className="next" onClick={goToNext}>
              NEXT
              <img src={icons.whiteArrow} alt="arow" />
            </button>
          </div>
        </div>
        <Slider ref={sliderRef} {...slideSettings}>
          {[...teamData, ...teamData].map((data) => {
            return (
              <div key={data.id}>
                <div className="genius_card">
                  <div className="img_wrap">
                    <img src={data.img} alt="person" />
                    <div className="overlay"></div>
                    <div className="info_overlay">
                      <p>{data.about}</p>

                      <div className="social_line">
                        {data.insta && (
                          <a href={data.insta} target="_blanck">
                            <img src={icons.instagram} alt="insta" />
                          </a>
                        )}

                        {data.fb && (
                          <a href={data.fb} target="_blanck">
                            <img src={icons.fb} alt="fb" />
                          </a>
                        )}

                        {data.ln && (
                          <a href={data.ln} target="_blanck">
                            <img src={icons.linkedin} alt="linkedin" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <h5>{data.name}</h5>
                  <h6>{data.post}</h6>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="bottom_btn_line">
        <button type="button" className="prev" onClick={goToPrev}>
          <img src={icons.whiteArrow} alt="arow" />
          PREV
        </button>
        <button type="button" className="next" onClick={goToNext}>
          NEXT
          <img src={icons.whiteArrow} alt="arow" />
        </button>
      </div>
    </div>
  );
};

export default GeniusTeam;
