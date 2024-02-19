import "./Partners.scss";
import { logoImage } from "../../utils/images/images";
import Slider from "react-slick";
import { useContext } from "react";
import { redirectContext } from "../../context/RoutingContext";

const Partners = () => {
  const { domainName } = useContext(redirectContext);

  const logoData =
    domainName() === "net"
      ? [
          {
            id: "00",
            img: logoImage.partnerA,
          },
          {
            id: "02",
            img: logoImage.partnerB,
          },
          {
            id: "03",
            img: logoImage.partnerC,
          },
          {
            id: "04",
            img: logoImage.partnerD,
          },
          {
            id: "05",
            img: logoImage.partnerE,
          },
          {
            id: "06",
            img: logoImage.partnerF,
          },
          {
            id: "07",
            img: logoImage.partnerG,
          },
          {
            id: "08",
            img: logoImage.partnerH,
          },
          {
            id: "09",
            img: logoImage.partnerI,
          },
        ]
      : [
          {
            id: "00",
            img: logoImage.partnerA,
          },
          {
            id: "02",
            img: logoImage.partnerB,
          },
          {
            id: "03",
            img: logoImage.partnerC,
          },
          {
            id: "04",
            img: logoImage.partnerD,
          },
          {
            id: "05",
            img: logoImage.partnerE,
          },
          {
            id: "06",
            img: logoImage.partnerF,
          },
          {
            id: "08",
            img: logoImage.partnerH,
          },
          {
            id: "09",
            img: logoImage.partnerI,
          },
        ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="our_partners">
      <div className="content_wrap">
        <div className="logo_space wow fadeInUp">
          <Slider {...settings}>
            {logoData.map((data) => {
              return (
                <div className="logo_card" key={data.id}>
                  <img src={data.img} alt="logo" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;
