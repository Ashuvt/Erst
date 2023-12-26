
import "./Partners.scss";
import { logoImage } from "../../utils/images/images";

const Partners = () => {
  const logoData = [
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
  
  ];
  return (
    <section className="our_partners">
      <div className="content_wrap">
    <div className="logo_space wow fadeInUp">
      {logoData.map((data) => {
        return (
          <div className="logo_wraper" key={data.id}>
            <img src={data.img} alt="logo" />
          </div>
        );
      })}
      
    </div>
    </div>
    </section>
  );
};

export default Partners;
