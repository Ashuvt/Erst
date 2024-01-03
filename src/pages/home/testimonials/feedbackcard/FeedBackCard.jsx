import { baseUrl } from "../../../../utils/apidata";
import "./FeedBackCard.scss";

const FeedBackCard = ({data, index, setView}) => {
    return(
        <div className="feedback_card wow fadeInUp" data-wow-delay={`${0.15*index}s`} onClick={() => setView(data)}>
            <div className="profile">
                <img src={`${baseUrl}/${data.image}`} alt="profile" />
            </div>
            <div className="info">
                <h5>{data.name}</h5>
                <p>{data.position}</p>
            </div>
        </div>
    )
};

export default FeedBackCard;