
import "./Plan.scss";
import { Fragment, useState } from "react";
import { planData } from "../../../utils/data/data";
import PlanCard from "./plancard/PlanCard";
import LogoSpace from "./partners/Partners";
import MidTitle from "../../../components/midtitle/MidTitle";

const Plan = () => {
  const [type, setType] = useState("monthly");

  const switchPlan = (planType) => {
    setType(planType);
  };



  return (
    <section className="home_plan p_bottom p_top">
      <div className="content_wrap">
        <MidTitle
          title="Choose Your Plan Now"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ab dicta voluptas quae ipsum sint, provident fugiat, perferendis, vero aperiam dolores illo soluta nulla!."
        />

        <div className="btn_line">
          <div className="toggle_price wow fadeInUp">
            <button
              type="button"
              className={`${type === "monthly" ? "active" : ""}`}
              onClick={() => switchPlan("monthly")}
            >
              monthly
            </button>
            <button
              type="button"
              className={`${type === "yearly" ? "active" : ""}`}
              onClick={() => switchPlan("yearly")}
            >
              yearly
            </button>
          </div>
        </div>

        <div className="plan_container">
          {planData &&
            planData.map((data, k) => {
              return (
                <Fragment key={data.id}>
                  <PlanCard {...data} planType={type} index={k} />
                </Fragment>
              );
            })}
        </div>

        <LogoSpace />
      </div>
    </section>
  );
};

export default Plan;
