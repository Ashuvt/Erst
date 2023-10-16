import "./Services.scss";
import { images } from "../../../utils/images/images";
import { cardData } from "../../../utils/data/data";
import InfoCard from "./infocard/InfoCard";
import { Fragment } from "react";
import MidTitle from "../../../components/midtitle/MidTitle";

const Services = () => {
  return (
    <section className="services">
      <div className="content_wrap">
          <MidTitle 
          title="Flexible Digital Services For Your Needs" 
          text="  The Smart Sales Assistant can also provide insights into customer
          behavior and preferences, allowing you to optimize your marketing
          and sales strategies."
          />
        <div className="grid_sec">
          <div className="img_wrap">
            <div className="wrapper">
              <img src={images.info} alt="info" />
              <div className="primary_blur"></div>
              <div className="secondary_blur"></div>
            </div>
          </div>

          <div className="info_wrap">
            <div className="line wow slideInUp"></div>
            {cardData &&
              cardData.map((data, k) => {
                return (
                  <Fragment key={data.id}>
                  <InfoCard
                    count={data.count}
                    title={data.title}
                    text={data.text}
                    index={k}
                  />
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
