import "./JourneySlider.scss";
import { Fragment } from "react";
import Slider from "react-slick";
import { images } from "../../../../../utils/images/images";
import SkillPathCard from "../../../../components/skillpathcard/SkillPathCard";

const JourneySlider = () => {

    const data = [
        {
          id: 0,
          title: "Cyber security",
          img: images.skillPath,
          text: "A short description about the module, it can be in two lines.",
          students: 800,
          module:15,
          rating: 4.5,
          count: 1331,
        },
        {
          id: 1,
          title: "Red alert",
          img: images.skillPath,
          text: "A short description about the module, it can be in two lines.",
          students: 800,
          module:15,
          rating: 4.5,
          count: 1331,
        },
        {
          id: 2,
          title: "Safety class",
          img: images.skillPath,
          text: "A short description about the module, it can be in two lines.",
          students: 800,
          module:15,
          rating: 4.5,
          count: 1331,
        },

        
      ];


  const journeySetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow:1.5,
            slidesToScroll:1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 850,
            settings: {
              slidesToShow:1,
              slidesToScroll:1,
              infinite: true,
              dots: true
            }
          },
      
      ]
  };
  return (
    <div className="journey_slider" id="reviews">
        <div className="title">
        <h5 className="small_title">Start your journey</h5>
        <p>Be job ready in red field</p>
        </div>
      <Slider {...journeySetting}>
     {data.map((info) => {
        return (
          <Fragment key={info.id}>
            <div className="skillpath_side">
            <SkillPathCard {...info} />
            </div>
          </Fragment>
        );
      })}
      </Slider>
    </div>
  );
};

export default JourneySlider;
