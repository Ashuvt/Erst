import { icon } from "../../../utils/images/icons";
import "./RecommendedModuleCard.scss";

const RecommendedModuleCard = ({
  img,
  title,
  text,
  students,
  duration,
  rating,
  count,
  index
}) => {
  return (
    <div className="recommended_module_card wow fadeInLeft" data-wow-delay={`${0.3*index}s`} >
      <div className="poster_wrap">
        <img src={img} alt="poster" />
        <div className="free_pill">
          <p>Free</p>
        </div>
      </div>
      <div className="text_info">
        <p className="title">{title}</p>
        <p>{text}</p>
        <div className="info_line">
          <div className="info">
            <img src={icon.students} alt="student" />
            <p>{students} Students</p>
          </div>
          <div className="info">
            <img src={icon.clock} alt="clock" />
            <p>{duration}</p>
          </div>
          <div className="info">
            <img src={icon.star} alt="star" />
            <p>{rating} <span></span>{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedModuleCard;
