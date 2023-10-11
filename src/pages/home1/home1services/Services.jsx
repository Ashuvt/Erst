import "./Services.scss";
import { images } from "../../../utils/images/images";
import { cardData } from "../../../utils/data/data";
import InfoCard from "./infocard/InfoCard";

const Services = () => {
  return (
    <section className="services">
      <div className="content_wrap">
        <div className="text_content">
          <h2>Flexible Digital Services For Your Needs</h2>
          <p>
            The Smart Sales Assistant can also provide insights into customer
            behavior and preferences, allowing you to optimize your marketing
            and sales strategies.
          </p>
        </div>
        <div className="grid_sec">
          <div className="img_wrap">
            <div className="wrapper">
              <img src={images.info} alt="info" />
              <div className="primary_blur"></div>
              <div className="secondary_blur"></div>
            </div>
          </div>

          <div className="info_wrap">
            <div className="line"></div>
            {cardData &&
              cardData.map((data, k) => {
                return (
                  <InfoCard
                    count={data.count}
                    title={data.title}
                    text={data.text}
                    index={k}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
