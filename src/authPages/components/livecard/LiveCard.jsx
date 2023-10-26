import "./LiveCard.scss";

const LiveCard = ({ text, title, img }) => {
  return (
    <div className="live_card_info">
      <div className="img_wraper">
        <img src={img} alt="poster" />
        <div className="free_pill">
          <p>Live - 61</p>
        </div>
      </div>
      <p className="title">{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default LiveCard;
