import "./SubscribedCard.scss";

const SubscribedCard = ({ img, title, started, price }) => {
  return (
    <div className="subscribed_card">
      <div className="info">
        <div className="img_wrap">
          <img src={img} alt="poster" />
        </div>
        <div className="text">
          <p>
            <span>{title}</span> (${price} per month)
          </p>
          <p>You’ve started the course {started}</p>
        </div>
      </div>
      <button>Cancel</button>
    </div>
  );
};

export default SubscribedCard;
