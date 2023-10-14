import "./FeedBackCard.scss";

const FeedBackCard = ({profile, name, text }) => {
    return(
        <div className="feedback_card">
            <div className="profile">
                <img src={profile} alt="profile" />
            </div>
            <div className="info">
                <h5>{name}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default FeedBackCard;