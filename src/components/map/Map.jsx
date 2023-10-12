import "./Map.scss";
import { images } from "../../utils/images/images";

const Map = () => {
  const circleData = [
    {
      id: 0,
      class: "a",
    },
    {
      id: 1,
      class: "b",
    },
    {
      id: 2,
      class: "c",
    },
    {
      id: 3,
      class: "d",
    },
    {
      id: 4,
      class: "e",
    },
    {
      id: 5,
      class: "f",
    },
    {
      id: 6,
      class: "g",
    },
    {
      id: 7,
      class: "h",
    },
    {
      id: 8,
      class: "i",
    },
    {
      id: 9,
      class: "j",
    },
    {
      id: 10,
      class: "k",
    },
    {
      id: 11,
      class: "l",
    },
    {
      id: 12,
      class: "m",
    },
    {
      id: 13,
      class: "n",
    },
    {
      id: 14,
      class: "o",
    },
    {
      id: 15,
      class: "p",
    },
    {
      id: 16,
      class: "q",
    },
    {
      id: 17,
      class: "r",
    },
    {
      id: 18,
      class: "s",
    },
    // {
    //   id: 19,
    //   class: "t",
    // },
  ];
  return (
    <section className="map">
      <div className="content_wrap">
        <img src={images.mapImage} alt="map" />

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
