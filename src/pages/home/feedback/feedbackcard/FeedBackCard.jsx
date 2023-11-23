import "./FeedBackCard.scss";

const FeedBackCard = ({data, index, setView}) => {
    return(
        <div className="feedback_card wow fadeInUp" data-wow-delay={`${0.15*index}s`} onClick={() => setView(data)}>
            <div className="profile">
                <img src={data.profile} alt="profile" />
            </div>
            <div className="info">
                <h5>{data.name}</h5>
                <p>{data.text}</p>
            </div>
        </div>
    )
};

export default FeedBackCard;