import { Fragment } from "react";
import CareersLanding from "./careerslanding/CareersLanding";
import MapLanding from "../../components/maplanding/MapLanding";
import JoinTeam from "./jointeam/JoinTeam";
import IntelligentTeam from "./Intelligentteam/IntelligentTeam";

const Careers = () => {
    return(
     <Fragment>
        {/* <CareersLanding /> */}
        <MapLanding
        title="Join Our Team"
        text="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
        />
        <JoinTeam />
        <IntelligentTeam />
     </Fragment>
    )
};

export default Careers;