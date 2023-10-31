import { Fragment } from "react";
import "./Locations.scss";

import LocationCard from "./locationcard/LocationCard";

const Locations = () => {
  const locationData = [
    {
      id: 0,
      country: "London",
      location: "14 Tottenham Road, London, England",
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
    {
      id: 1,
      country: "Paris",
      location: "27 Run de Berrlamur, Paris, France",
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
    {
      id: 2,
      country: "New York",
      location: "5 Washington Square, NY, USA",
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
    {
      id: 3,
      country: "Hamburg",
      location: "12 Ueberseering, Hamburg, Germany",
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
  ];
  return (
    <section className="locations">
      <div className="content_wrap">
        {locationData.map((data, j) => {
          return (
            <Fragment key={data.id}>
              <LocationCard {...data} index={j} />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};
export default Locations;
