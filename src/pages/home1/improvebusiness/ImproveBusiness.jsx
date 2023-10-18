import { useEffect } from "react";
import "./ImproveBusiness.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import { icons, images } from "../../../utils/images/images";
import Pill from "../../../components/pill/Pill";
import ProfileList from "../../../components/profilelist/ProfileList";
import WOW from "wow.js";

const ImproveBusiness = () => {
  const userData = [
    {
      id: 0,
      img: images.profilea,
    },
    {
      id: 1,
      img: images.profileb,
    },
    {
      id: 2,
      img: images.profilec,
    },
    {
      id: 3,
      img: images.profiled,
    },
    {
      id: 4,
      img: images.profilee,
    },
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="improve p_bottom">
      <div className="content_wrap">
        <MidTitle
          title="Improve Your Business"
          text="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
        />
        <div className="tri_gridsec">
          {/* left */}
          <div className="app_sec wow slideInUp">
            <div className="top_line">
              <h6>success</h6>
              <Pill text="The Best" />
            </div>
            <p className="tagline">
              Increase in your revenue by end of this month is comming
            </p>
            <h3>568+</h3>
            <div className="rating">
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
            </div>
            <p>Based on 8,000+ reviews</p>
            <div className="users">
              <ProfileList userList={userData} />
            </div>
          </div>
          {/* Mid */}
          <div className="mobile_sec wow slideInUp">
            <img src={images.mobile} alt="mobile" />
          </div>
          {/* Right */}
          <div className="graph_sec wow slideInUp">
            <div className="text">
              <h3 className="wow slideInUp">Improve Financial Performance</h3>
              <p className="wow slideInUp">
                Intelligent Analytics Suite can be integrated with other SaaS
                products, such as CRM and marketing automation tools, to provide
                a comprehensive view of business performance.
              </p>
            </div>
            <img src={images.businessMap} alt="graph" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImproveBusiness;
