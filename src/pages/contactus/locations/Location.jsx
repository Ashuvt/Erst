import { Fragment } from "react";
import "./Locations.scss";

import LocationCard from "./locationcard/LocationCard";

const Locations = () => {
  const locationData = [
    {
      id: 0,
      country: "Israel",
      location: "Lorem ipsum amet, Israel",
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
    {
      id: 1,
      country: "UAE",
      location: "Lorem ipsum amet, Dubai",
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
    {
      id: 2,
      country: "India",
      location: "Lorem ipsum amet, Delhi",
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
