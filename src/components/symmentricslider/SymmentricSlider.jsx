import "./SymmentricSlider.scss";
import { logoImage } from "../../utils/images/images";
import Slider from "react-slick";

const SymmentricSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    breakpoint: 1600,
    settings: {
      slidesToShow: 3,
    },
  };

  const logoData = [
    {
      id: 0,
      img: logoImage.companyA,
    },
    {
      id: 1,
      img: logoImage.companyB,
    },
    {
      id: 2,
      img: logoImage.companyC,
    },
    {
      id: 3,
      img: logoImage.companyD,
    },
    {
      id: 4,
      img: logoImage.companyE,
    },
    {
      id: 5,
      img: logoImage.companyF,
    },
    {
      id: 6,
      img: logoImage.companyA,
    },
    {
      id: 7,
      img: logoImage.companyB,
    },
    {
      id: 8,
      img: logoImage.companyC,
    },
    {
      id: 9,
      img: logoImage.companyD,
    },
    {
      id: 10,
      img: logoImage.companyE,
    },
    {
      id: 11,
      img: logoImage.companyF,
    },
  ];
  return (
    <section className="symmentric_slider">
      <div className="slide_left">
        <Slider {...settings}>
          {logoData.map((data) => {
            return (
              <div className="img_slides">
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
          {logoData.map((data) => {
            return (
              <div className="img_slides">
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
