import "./LocationCard.scss";
import { icons } from "../../../../utils/images/images";
import { useEffect } from "react";
import WOW from "wow.js";
const LocationCard = ({country, location, call, mail}) => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);

    return(
        <div className="location_card wow fadeIn">
            <div className="location_wrap">
                <h5>{country}</h5>
                <button type="button" className="locationbtn">
                    <img src={icons.whiteArrow} alt="arrow" />
                </button>                
            </div>
            <div className="contact_info">
                <img src={icons.location} alt="location" />
                <p>{location}</p>
            </div>

            <div className="contact_info">
                <img src={icons.call} alt="call" />
                <a href={`tel:${call}`} >{call}</a>
            </div>

            <div className="contact_info">
                <img src={icons.mail} alt="mail" />
                <a href={`mailto:${mail}`}>{mail}</a>
            </div>
        </div>
    )
}

export default LocationCard;