import { Fragment, useContext, useEffect, useState } from "react";
import { icon } from "../../../utils/images/icons";
import "./StepD.scss";
import { redirectContext } from "../../../context/RoutingContext";
import RedBlueCard from "./redbluecard/RedBlueCard";
import { baseUrl } from "../../../utils/data/data";
import axios from "axios";


const StepD = () => {

const {goToAuthHome} = useContext(redirectContext);
const [courses, setCourses] = useState([]);

const getCourses = async() => {
  try{
    const response = await axios.get(`${baseUrl}/getcourse`);
    console.log(response);
    if(response.status === 200){
      setCourses(response.data.data)
    }
  }catch(error){
  }
}

useEffect(() => {
  getCourses();
},[])


  const cardData = [
    {
      id: 111,
      img: icon.redTeam,
      rating: 4.5,
      color: "#CC0A0A",
      team: "RedTeam",
      desc: "Experience our Red Team Course, designed to enhance your personal skills and unleash...",
      students: 1413,
      duration: "18h 12m",
      modules: [
        "item",
        "item",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
      ],
    },
    {
      id: 222,
      img: icon.blueTeam,
      rating: 4.5,
      color: "#0A1633",
      team: "BlueTeam",
      desc: "Introducing the Blue Team course, a comprehensive certification pathway ...",
      students: 1413,
      duration: "18h 12m",
      modules: [
        "item",
        "item",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
        "item(Locked)",
      ],
    },
  ];


  return (
    <div className="step_d">
      <h1 className="small_title wow fadeInUp">
        Start with our free expertly-curated lessons from courses
      </h1>
      <p className="wow fadeInUp">
        You can change and subscribe to other courses anytime in your learning
        journey.
      </p>
      <div className="cources_bigrid">
        {courses.map((data) => {
          return (
            <Fragment key={data._id}>
              <RedBlueCard {...data} clickHandler={goToAuthHome} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepD;
