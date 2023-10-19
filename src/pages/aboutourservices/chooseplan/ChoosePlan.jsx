import { Fragment } from "react";
import MidTitle from "../../../components/midtitle/MidTitle";
import PlanDetails from "./plandetails/PlanDetails";

const ChoosePlan = () => {
    return(
        <Fragment>
            <section className="choose_plan p_top p_bottom">
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