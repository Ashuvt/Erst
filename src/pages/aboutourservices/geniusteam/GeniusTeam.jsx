import { useRef } from "react";
import "./GeniusTeam.scss";
import Slider from "react-slick";
import { icons, images } from "../../../utils/images/images";

const GeniusTeam = () => {
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
      name: "Divya",
      post: "CTO",
      about:
        "Cyber security Specialist and Authorization professional, Insightful, results-driven with notable success directing a broad range of corporate IT security initiatives while participating in the planning and analyzing security control assessments, SIEM, AWS, and implementing solutions in support of business objectives.",
      img: images.teamMemberD,
      insta: "",
      fb: "",
      ln: "https://www.linkedin.com/in/divya2243/",
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
    <div className="genius_slider_sec p_top p_bottom">
      <div className="mobile_title">
        <h2>Meet The Genius Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          explicabo, odio fugiat eligendi ea neque nesciunt quaerat libero, esse
          sint dignissimos et tempore nemo aliquam dolorem quos nisi, numquam
          velit incidunt omnis illum aliquid. Sunt!
        </p>
      </div>

      <div className="genius_slider">
        <div className="title_card">
          <div className="text">
            <h2>Meet The Genius Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              explicabo, odio fugiat eligendi ea neque nesciunt quaerat libero,
              esse sint dignissimos et tempore nemo aliquam dolorem quos nisi,
              numquam velit incidunt omnis illum aliquid. Sunt!
            </p>
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
