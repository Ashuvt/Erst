import { Fragment } from "react";
import "./Locations.scss";
import { useSelector } from "react-redux";

import LocationCard from "./locationcard/LocationCard";

const Locations = ({t}) => {
  const locationData = [
    {
      id: 0,
      country:t('Israel'),
      location:t('IsraelAdd'),
      call: "04-876-6326",
      mail: "info@cybergain.co.il",
    },
    {
      id: 1,
      country:t('UAE'),
      location:t('UAEAdd'),
      call: "+1 212 425 8617",
      mail: "helloabc@gmail.com",
    },
    {
      id: 2,
      country:t('India'),
      location:t('IndiaAdd'),
      call: "04-876-6326",
      mail: "info@cybergain.co.il",
    },    
  ];

  const l = useSelector(state => state.langReducer.lang);

  return (
    <section className="locations">
      <div className={`content_wrap ${['ar', 'he'].includes(l) ? 'flip' : ''}`}>
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
