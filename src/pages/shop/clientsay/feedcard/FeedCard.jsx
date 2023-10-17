import "./FeedCard.scss";

const FeedCard = ({text, name, img}) => {
    return(
        <div className="feed_card">
            <p>{text}</p>
            <div className="info">
                <div className="profile_wrap">
                    <img src={img} alt="profile" />
                </div>
                <p className="user_name">{name}</p>
            </div>
        </div>
    )
}

export default FeedCard;