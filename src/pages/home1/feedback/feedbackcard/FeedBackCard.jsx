import "./FeedBackCard.scss";

const FeedBackCard = ({profile, name, text, index }) => {
    return(
        <div className="feedback_card wow fadeInUp" data-wow-delay={`${0.15*index}s`}>
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