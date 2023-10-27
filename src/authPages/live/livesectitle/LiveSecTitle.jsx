import "./LiveSecTitle.scss";

const LiveSecTitle = ({ title, text }) => {
  return (
    <div className="live_sec_title">
      <h2>{title}</h2>
      <p className="small_text">{text}</p>
    </div>
  );
};

export default LiveSecTitle;
