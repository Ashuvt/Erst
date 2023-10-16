import { useEffect } from "react";
import "./Plan.scss";
import { Fragment, useState } from "react";
import { planData } from "../../../utils/data/data";
import PlanCard from "./plancard/PlanCard";
import LogoSpace from "./logospace/LogoSpace";
import MidTitle from "../../../components/midtitle/MidTitle";
import WOW from "wow.js";

const Plan = () => {
  const [type, setType] = useState("monthly");

  const switchPlan = (planType) => {
    setType(planType);
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="home_plan">
      <div className="content_wrap">
        <MidTitle
          title="Choose Your Plan Now"
          text=" The Smart Sales Assistant can also provide insights into customer
          behavior and preferences, allowing you to optimize your marketing
          and sales strategies."
        />

        <div className="btn_line">
          <div className="toggle_price wow slideInUp">
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

        <div className="plan_container wow slideInUp">
          {planData &&
            planData.map((data) => {
              return (
                <Fragment key={data.id}>
                  <PlanCard {...data} planType={type} />
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
