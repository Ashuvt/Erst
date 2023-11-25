import { useRef } from "react";
import "./GeniusTeam.scss";
import Slider from "react-slick";
import { icons, images } from "../../../utils/images/images";

const GeniusTeam = ({t}) => {

  let title = t('geniusTeemTitle');
  let para = t('geniusTeemPara');

  const sliderRef = useRef(null);

  const teamData = [
    {
      id: 0,
      name:t('aliName'),
      post:t('aliPost'),
      about:t('aliDes'),       
      img: images.teamMemberA,
      insta: "http://www.instagram.com/ali_zinaty94/",
      fb: "http://www.facebook.com/ale.zenaty",
      ln: "http://www.linkedin.com/in/ali-zinaty-252368177/",
    },
    {
      id: 1,
      name:t('najeebName'),
      post:t('najeebPost'),
      about:t('najeebDes'),
      img: images.teamMemberB,
      insta: "http://www.instagram.com/najeeb.ibrahimm1/",
      fb: "http://www.facebook.com/najeeb.ibrahimm",
      ln: "http://www.linkedin.com/in/najeeb-ibrahim/",
    },
    {
      id: 2,
      name:t('yaraName'),
      post:t('yaraPost'),
      about:t('yaraDes'),
      img: images.teamMemberC,
      insta: "",
      fb: "",
      ln: "http://www.linkedin.com/in/yara-rammal-3aa485165/",
    },
    {
      id: 3,
      name:t('salehName'),
      post:t('salehPost'),
      about:t('salehDes'),
      img:images.teamMemberD,
      insta: "",
      fb: "",
      ln: "https://www.linkedin.com/in/saleh-ahmed-8983a6188",
    },
    {
      id: 4,
      name:t('taleenName'),
      post:t('taleenPost'),
      about:t('taleenDes'),
      img:images.teamMemberE,
      insta: "",
      fb: "",
      ln: "https://www.linkedin.com/in/taleen-skafi-b69104215",
    },
    {
      id: 5,
      name:t('salmanName'),
      post:t('salmanPost'),
      about:t('salmanDes'),
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
              {t('prev')}
            </button>
            <button type="button" className="next" onClick={goToNext}>
            {t('next')}
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
          {t('prev')}
        </button>
        <button type="button" className="next" onClick={goToNext}>
        {t('next')}
          <img src={icons.whiteArrow} alt="arow" />
        </button>
      </div>
    </div>
  );
};

export default GeniusTeam;
