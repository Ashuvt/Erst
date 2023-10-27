import "./ExploreTitle.scss";

const ExploreTitle = ({ title, text }) => {
  return (
    <div className="explore_title">
      <div className="left">
      <h2>{title}</h2>
      <p className="small_text">{text}</p>
      </div>
      <button type="button">
        View all
      </button>
    </div>
  );
};

export default ExploreTitle;
