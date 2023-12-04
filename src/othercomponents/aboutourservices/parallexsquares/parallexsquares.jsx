import "./parallexsquares.scss";
import { images } from "../../../utils/images/images";
import Slider from "react-slick";

const Parallexsquares = () => {
  const squareSlideSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },     
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      }, 
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },  
      {
        breakpoint: 450,
        settings: {
          slidesToShow:1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },     
    ],
  };

  const data = [
    {
      id: 0,
      img: images.squareBg,
    },
    {
      id: 1,
      img: images.squareBg,
    },
    {
      id: 2,
      img: images.squareBg,
    },
    {
      id: 3,
      img: images.squareBg,
    },
    {
      id: 4,
      img: images.squareBg,
    },
    {
      id: 5,
      img: images.squareBg,
    },
    {
        id: 6,
        img: images.squareBg,
      },
      {
        id: 7,
        img: images.squareBg,
      },
      {
        id: 8,
        img: images.squareBg,
      },
      {
        id: 9,
        img: images.squareBg,
      },
      {
        id: 10,
        img: images.squareBg,
      },
      {
        id: 11,
        img: images.squareBg,
      },
  ];

  return (
    <div className="squares_slider_wrap">
        <div className="slider_blur left"></div>
        <div className="slider_blur right"></div>
      <Slider {...squareSlideSettings}>
        {data.map((item, i) => {
          return (
            <div className="square_slide" key={item.id}>
              <div className="content">
                <div className={`img_wraper ${i % 2 === 0 ? "flash" : ""}`}>
                  <img src={item.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Parallexsquares;
