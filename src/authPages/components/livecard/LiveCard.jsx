import "./LiveCard.scss";

const LiveCard = ({text, title, img}) => {
  return <div className="live_card_info">
    <div className="img_wraper">
        <img src={img} alt="poster" />
    </div>
    <p className="title">{title}</p>
    <p>{text}</p>
  </div>;
};

export default LiveCard;
