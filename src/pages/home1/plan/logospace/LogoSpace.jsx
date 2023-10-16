import { useEffect } from "react";
import "./LogoSpace.scss";
import { logoImage } from "../../../../utils/images/images";
import WOW from "wow.js";

const LogoSpace = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const logoData = [
    {
      id: "00",
      img: logoImage.companyA,
    },
    {
      id: "02",
      img: logoImage.companyB,
    },
    {
      id: "03",
      img: logoImage.companyC,
    },
    {
      id: "04",
      img: logoImage.companyD,
    },
    {
      id: "05",
      img: logoImage.companyE,
    },
    {
      id: "06",
      img: logoImage.companyF,
    },
  ];
  return (
    <div className="logo_space wow slideInUp">
      {logoData.map((data) => {
        return (
          <div className="logo_wraper" key={data.id}>
            <img src={data.img} alt="logo" />
          </div>
        );
      })}
      
    </div>
  );
};

export default LogoSpace;
