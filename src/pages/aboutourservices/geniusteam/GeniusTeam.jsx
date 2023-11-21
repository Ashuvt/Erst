import { useRef } from "react";
import "./GeniusTeam.scss";
import Slider from "react-slick";
import { icons, images } from "../../../utils/images/images";



const GeniusTeam = () => {
  const sliderRef = useRef(null);

  const teamData = [
    {
      id: 0,
      name: "Samantha Carson",
      post: "COFOUNDER",
      img: images.feedPerson,
    },
    {
      id: 1,
      name: "Alexander Steele",
      post: "PRODUCT MANAGER",
      img: images.teamA,
    },
    {
      id: 2,
      name: "Isabella Stone",
      post: "DATA ANALYST",
      img: images.teamB,
    },
    {
      id: 3,
      name: "Marcus Knight",
      post: "SOFTWARE DEVELOPER",
      img: images.teamC,
    },
    {
      id: 4,
      name: "Sophia Rivers",
      post: "DEVOPS ENGINEER",
      img: images.teamD,
    },
    {
      id: 5,
      name: "Gabriel North",
      post: "SECURITY ENGINEER",
      img: images.teamA,
    },
    {
      id: 6,
      name: "Emilia Gray",
      post: "SUPPORT ENGINEER",
      img: images.videoBtnImage,
    },
    {
      id: 7,
      name: "Ethan Blackwood",
      post: "COFOUNDER",
      img: images.teamC,
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
          slidesToShow:1,
          slidesToScroll:1,
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, odio fugiat eligendi ea neque nesciunt quaerat libero, esse sint dignissimos et tempore nemo aliquam dolorem quos nisi, numquam velit incidunt omnis illum aliquid. Sunt!
        </p>
      </div>

      <div className="genius_slider">
        <div className="title_card">
          <div className="text">
            <h2>Meet The Genius Team</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, odio fugiat eligendi ea neque nesciunt quaerat libero, esse sint dignissimos et tempore nemo aliquam dolorem quos nisi, numquam velit incidunt omnis illum aliquid. Sunt!
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
          {teamData.map((data) => {
            return (
              <div key={data.id}>
                <div className="genius_card">
                  <div className="img_wrap">
                    <img src={data.img} alt="person" />
                    <div className="overlay"></div>
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
