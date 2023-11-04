import { useEffect, useState } from "react";
import "./ChoosePlan.scss";
import { Fragment } from "react";
import MidTitle from "../../../components/midtitle/MidTitle";
import PlanDetails from "./plandetails/PlanDetails";
import WOW from "wow.js";

const ChoosePlan = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);   


    return(
        <Fragment>
            <section className="choose_plan p_top p_bottom">
                <div className="choose_plan_glass a wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
                <div className="choose_plan_glass b wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
                {/* <div className="choose_plan_glass c wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div> */}
                <div className="content_wrap">
                    <MidTitle 
                    title="Choose Your Plan Now"
                    text="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
                    />
                    <PlanDetails />                    
                </div>
            </section>
        </Fragment>
    )
};

export default ChoosePlan;