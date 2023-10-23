import { Fragment, useEffect } from "react";
import { images } from "../../../utils/images/images";
import "./IntelligentTeam.scss";
import TeamCard from "./teamcard/TeamCard";
import WOW from "wow.js";

const IntelligentTeam = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const teamData = [
    {
      id: 0,
      position: "Project Manager",
      time: "full time",
      location: "new york",
      img:images.teamA
    },
    {
      id: 1,
      position: "Software Development",
      time: "fart time",
      location: "italy",
      img:images.teamB
    },
    {
      id: 2,
      position: "Business Analyst",
      time: "full time",
      location: "london",
      img:images.teamC
    },
    {
      id: 3,
      position: "Security Engineer",
      time: "full time",
      location: "paris",
      img:images.teamD
    },
  ];

  return (
    <section className="intelligent_team p_top p_bottom">
      <div className="content_wrap">
        <div className="title_content">
          <h2 className="wow slideInUp">Join The Intelligent Analytics Suite Team</h2>
          <p className="wow slideInUp">
            Are you ready to take your career to the next level and be part of a
            cutting-edge technology revolution? Look no further than the
            Intelligent Analytics Suite team!
          </p>
        </div>
        {teamData.map((data) => {
         return(
          <Fragment key={data.id}>
             <TeamCard {...data} />;
          </Fragment>
         )
        })}
        <div className="bottom_line"></div>
      </div>
    </section>
  );
};

export default IntelligentTeam;
