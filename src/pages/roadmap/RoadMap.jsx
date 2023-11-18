import { Fragment, useEffect, useState, useRef } from "react";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import "./RoadMap.scss";
import { icon } from "../../utils/images/icons";
import { motion, scroll, transform, useScroll } from "framer-motion";
const RoadMap = () => {
  const framData = [
    {
      id: 0,
      icon: icon.certificate,
      title: "lorem ipsum",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
    {
      id: 1,
      icon: icon.quizandproject,
      title: "lorem ipsum",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
    {
      id: 2,
      icon: icon.group,
      title: "lorem ipsum",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
    },
    {
      id: 3,
      icon: icon.live,
      title: "lorem ipsum",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo distinctio magni et iusto, eum molestias velit perferendis officiis placeat.",
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

  const d = scrollY > 250 && scrollY < 300 ? 33 : 50;

  const distance =
    scrollY > 250 && scrollY < 400
      ? ((400 - scrollY) / 400) * 100
      : scrollY >= 400
      ? 0
      : 50;

  return (
    <Fragment>
      <Header />
      <h3 className="text_count">{scrollY}</h3>
      <section className="road_map p_top p_bottom">
        <div className="content_wrap">
          <div className="title">
            <h2>Cources Road Map</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              ducimus soluta totam alias quia repellendus neque suscipit rerum
              maxime ipsa?
            </p>
          </div>


          <div className="first_floating">
            <div className="top_line"></div>
            <div
              className="float_line"
              style={{
                transform: `translateY(${scrollY - 100}px)`,
                transition: "all 1s ease-in-out",
              }}
            >
              <img
                src={icon.float}
                alt="float"
                style={{
                  left: `${distance}%`,
                  transform: `translateX(${scrollY > 250 ? 0 : -50}%)`,
                }}
              />
              <div className="float_line_in">
                <img
                  src={icon.float}
                  alt="float"
                  style={{
                    left: `${distance}%`,
                    transform: `translateX(${scrollY > 250 ? 0 : -50}%)`,
                  }}
                />
                <img
                  src={icon.float}
                  alt="float"
                  style={{
                    left: `${100 - distance}%`,
                    transform: `translateX(${scrollY > 250 ? -100 : -50}%)`,
                  }}
                />
              </div>
              <img
                src={icon.float}
                alt="float"
                style={{
                  left: `${100 - distance}%`,
                  transform: `translateX(${scrollY > 250 ? -100 : -50}%)`,
                }}
              />
            </div>
          </div>
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

      
          <div className="single_box">
            <div className="bg_card_overlay"></div>
          </div>

     

          <div className="bi_flex">
            <div className="single_box">
              <div className="bg_card_overlay"></div>
            </div>
            <div className="single_box">
              <div className="bg_card_overlay"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default RoadMap;
