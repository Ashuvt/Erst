import { useEffect } from "react";
import { icons } from "../../../../utils/images/images";
import "./TeamCard.scss";
import WOW from "wow.js";

const TeamCard = ({position, time, location, img}) => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);


    return(
        <div className="team_card wow slideInUp">
            <button type="button" className="arrow">
                <img src={icons.lightArrow} alt="arrow" />
            </button>
            <div className="name_btn">
                <div className="btn_box">
                    <button type="button">{time}</button>
                    <button type="button">{location}</button>
                </div>
                <h3>{position}</h3>
            </div>
            <div className="img_wrap">
                    <img src={img} alt="profile" />
            </div>
        </div>
    )
}

export default TeamCard;
