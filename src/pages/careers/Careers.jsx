import { Fragment } from "react";
import "./Careers.scss";
import CareersLanding from "./careerslanding/CareersLanding";
import JoinTeam from "./jointeam/JoinTeam";
import IntelligentTeam from "./Intelligentteam/IntelligentTeam";

const Careers = () => {
    return(
     <Fragment>
        <CareersLanding />
        <JoinTeam />
        <IntelligentTeam />
     </Fragment>
    )
};

export default Careers;