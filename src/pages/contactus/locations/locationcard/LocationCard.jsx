import "./LocationCard.scss";
import { icons } from "../../../../utils/images/images";
import CircleArrowBtn from "../../../../components/circlearrowbtn/CircleArrowBtn";

const LocationCard = ({ country, location, call, mail, index }) => {
  return (
    <div className="location_card wow fadeInUp" data-wow-delay={`${0.15*index}s`}>
      <div className="location_wrap">
        <h5>{country}</h5>
        <CircleArrowBtn />
      </div>
      <div className="contact_info">
        <img src={icons.location} alt="location" />
        <p>{location}</p>
      </div>

      <div className="contact_info">
        <img src={icons.call} alt="call" />
        <a href={`tel:${call}`}>{call}</a>
      </div>

      <div className="contact_info">
        <img src={icons.mail} alt="mail" />
        <a href={`mailto:${mail}`}>{mail}</a>
      </div>
    </div>
  );
};

export default LocationCard;
