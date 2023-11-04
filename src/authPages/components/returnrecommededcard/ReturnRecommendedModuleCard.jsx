import { icon } from "../../../utils/images/icons";
import "./ReturnRecommendedModuleCard.scss";

const ReturnRecommendedModuleCard = ({
  img,
  title,
  text,
  students,
  duration,
  rating,
  count,
  index,
}) => {
  return (
    <div
      className="return_module_cards wow fadeInLeft"
      data-wow-delay={`${0.3 * index}s`}
    >
      <div className="bg_card_overlay"></div>
      <div className="poster_wrap">
        <img src={img} alt="poster" />
        <div className="free_pill">
          <p>Free</p>
        </div>
      </div>
      <div className="text_info">
        <p className="title">{title}</p>
        <div className="btn_line">
        <p>{text}</p>
        <button type="button" className="authbtn auth_primary">Continue</button>
        </div>
        
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
            <p>
              {rating} <span></span>
              {count}
            </p>
          </div>
        </div>
      </div>
      <div className="progress_wrap">
        <div className="filler" style={{width:"30%"}}></div>
      </div>
     
    </div>
  );
};

export default ReturnRecommendedModuleCard;
