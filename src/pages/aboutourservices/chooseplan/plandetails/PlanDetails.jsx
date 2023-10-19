import { Fragment, useState } from "react";
import "./PlanDetails.scss";
import { ourServicesPlanData } from "../../../../utils/data/data";
import { icons } from "../../../../utils/images/images";
import Pill from "../../../../components/pill/Pill";

const PlanDetails = () => {
  const [activeData, setActiveData] = useState(ourServicesPlanData[0]);

  const setDataHandler = (data) => {
    setActiveData("");
    setTimeout(() => {
      setActiveData(data);
    }, 500);
  };

  return (
    <div className="choose_plan_grid">
      <div className="plan_btns">
        {ourServicesPlanData &&
          ourServicesPlanData.map((data) => {
            return (
              <Fragment key={data.id}>
                <button
                  type="button"
                  className={activeData.id === data.id ? "active" : ""}
                  onClick={() => setDataHandler(data)}
                >
                  <span className="round">
                    {activeData.id === data.id ? (
                      <img src={icons.whiteCheck} alt="check" />
                    ) : (
                      <span className="plus"></span>
                    )}
                    <div
                      className={`inner_disc ${
                        activeData.id === data.id ? "active" : ""
                      }`}
                    ></div>
                  </span>
                  <div className="btns_text">
                    <h5>{data.type}</h5>
                    <p>{data.text}</p>
                  </div>
                </button>
              </Fragment>
            );
          })}
      </div>

      {activeData && (
        <div className="plan_content_wrap">
          <div className="left_border"></div>
          <div className="price_line">
            <h3>
              ${activeData.price}
              <span>/Month</span>
            </h3>
            <Pill text="Choose The Best" />
          </div>
          <p className="detail">{activeData.detail}</p>
          <ul>
            {activeData.features.map((listitem) => {
              return (
                <li>
                  {listitem}
                  <img src={icons.smallWhiteCheck} alt="check" />
                </li>
              );
            })}
          </ul>
          <div className="btn_line">
            <button type="button" className="secondarybtn">
              start free trial
            </button>
            <button type="button" className="primarybtn">
              select plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanDetails;
