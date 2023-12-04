import "./SymmentricSlider.scss";
import { logoImage } from "../../../utils/images/images";
import Slider from "react-slick";

const SymmentricSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    settings: {
      slidesToShow: 3,
    },

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          initialSlide:1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const logoData = [
    {
      id: 0,
      img: logoImage.partnerA,
    },
    {
      id: 1,
      img: logoImage.partnerB,
    },
    {
      id: 2,
      img: logoImage.partnerC,
    },
    {
      id: 3,
      img: logoImage.partnerD,
    },
    {
      id: 4,
      img: logoImage.partnerE,
    },
    {
      id: 5,
      img: logoImage.partnerA,
    },
    {
      id: 6,
      img: logoImage.partnerB,
    },
    {
      id: 7,
      img: logoImage.partnerC,
    },
    {
      id: 8,
      img: logoImage.partnerD,
    },
    {
      id: 9,
      img: logoImage.partnerE,
    },
    {
      id: 10,
      img: logoImage.partnerA,
    },
    {
      id: 11,
      img: logoImage.partnerB,
    },
  ];
  return (
    <section className="symmentric_slider">
      <div className="slide_left">
        <Slider {...settings}>
          {logoData.map((data, i) => {
            return (
              <div className="img_slides" key={i}>
                <div className="img_wrap">
                  <img src={data.img} alt="logo" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="center_border"></div>
      <div className="slide_right">
        <Slider {...settings}>
          {logoData.map((data, k) => {
            return (
              <div className="img_slides" key={k}>
                <div className="img_wrap">
                  <img src={data.img} alt="logo" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SymmentricSlider;
