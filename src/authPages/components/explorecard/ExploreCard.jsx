import { icon } from "../../../utils/images/icons";
import "./ExploreCard.scss";

const ExploreCard = ({ img, title, text, students, modules, saved, index }) => {
  return (
    <div className="explore_card wow zoomIn" data-wow-delay={`${(0.2*index%3)}s`}>
       <div className="bg_card_overlay"></div>
      <div className="poster_wrap">
        <span>Cources</span>
        <img src={img} alt="poster" />
        <button type="button">
          {saved ? (
            <img src={icon.saved} alt="save" />
          ) : (
            <img src={icon.save} alt="save" />
          )}
        </button>
      </div>
      <h2>{title}</h2>
      <p className="small_text">{text}</p>
      <div className="counter_info">
        <div className="info">
          <img src={icon.students} alt="student" />
          <p>{students} students</p>
        </div>
        <div className="info">
          <img src={icon.module} alt="student" />
          <p>{modules} modules</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
