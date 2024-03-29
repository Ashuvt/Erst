import "./ExploreTitle.scss";

const ExploreTitle = ({
  title,
  text,
  btnClickHandler,
  sizeState,
  isResize,
}) => {
  const viewAllClickHandler = () => {
    btnClickHandler();
  };
  return (
    <div className="explore_title">
      <div className="left">
        <h2 className="wow fadeInUp">{title}</h2>
        <p className="small_text wow fadeInUp">{text}</p>
      </div>

      {isResize && (
        <button
          type="button"
          className="wow fadeInUp"
          onClick={viewAllClickHandler}
        >
          {sizeState ? "View less" : "View all"}
        </button>
      )}
    </div>
  );
};

export default ExploreTitle;
