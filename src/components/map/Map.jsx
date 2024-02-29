import { useEffect } from "react";
import "./Map.scss";
import { images } from "../../utils/images/images";
import WOW from "wow.js";

const Map = () => {
  const circleData = [
    {
      id: 0,
      class: "a",
      name:"India"
    },
    {
      id: 2,
      class: "c",
      name: "UAE",
    },
    {
      id: 1,
      class: "b",
      name:"Israel"
    },  
   
  ];

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);


  return (
    <section className="map wow fadeIn" id="map">
      <div className="content_wrap">
        <div className="map_wraper">
        <img src={images.mapImage} alt="map" />
        </div>

        {circleData.map((data, i) => {
          return (
            <div className={`circle ${data.class} ${ i%2 === 0 ? 'delay' : '' }`} key={data.id}>
              <div className="white_circle">
                <div className="dot"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Map;
