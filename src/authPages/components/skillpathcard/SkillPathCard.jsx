import { icon } from "../../../utils/images/icons";
import "./SkillPathCard.scss";

const SkillPathCard = ({
  img,
  title,
  text,
  students,
  module,
  rating,
  count,
}) => {
  return (
    <div className="recommended_module_card wow fadeInLeft">
           <div className="bg_card_overlay"></div>
      <div className="poster_wrap">
        <img src={img} alt="poster" />
        <button type="button">
          <img src={icon.save} alt="icon" />
        </button>
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
            <img src={icon.module} alt="module" />
            <p>{module} Modules</p>
          </div>
          <div className="info">
            <img src={icon.star} alt="star" />
            <p>
              {rating} <span></span>
              {count}
            </p>
          </div>
        </div>
        <div className="btn_line">
          <button type="button">Medium</button>
          <button type="button">Penetration</button>
          <button type="button">CEH</button>
        </div>
      </div>
    </div>
  );
};

export default SkillPathCard;
