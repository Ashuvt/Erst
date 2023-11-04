import { Fragment } from "react";
import { images } from "../../../utils/images/images";
import "./IntelligentTeam.scss";
import TeamCard from "./teamcard/TeamCard";

const IntelligentTeam = () => {
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
          <h2 className="wow fadeInUp">Join The Intelligent Team</h2>
          <p className="wow fadeInUp">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit cumque incidunt, ducimus voluptate possimus soluta, eum quae aspernatur suscipit non fugit quia distinctio, quis aliquam!
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
