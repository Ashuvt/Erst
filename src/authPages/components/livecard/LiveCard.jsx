import "./LiveCard.scss";

const LiveCard = ({ text, title, img, index }) => {
  return (
    <div className="live_card_info wow fadeInUp" data-wow-delay={`${0.1*index}s`}>
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
