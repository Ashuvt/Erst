import { Fragment } from "react";
import "./Locations.scss";

import LocationCard from "./locationcard/LocationCard";

const Locations = () => {
  const locationData = [
    {
      id: 0,
      country: "Israel",
      location: "Beit Ha'am, Abu Snan, 2490500",
      call: "04-876-6326",
      mail: "info@cybergain.co.il",
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
      location: "Cybergain Educenter Private Limited, 2-a/3 S/f Front Side, Asaf Ali Rd, Turkman Gt., Darya Ganj, New Delhi, Delhi, India, 110002",
      call: "04-876-6326",
      mail: "info@cybergain.co.il",
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
