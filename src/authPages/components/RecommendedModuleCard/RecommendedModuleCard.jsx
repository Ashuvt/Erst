import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../utils/apidata";
import { icon } from "../../../utils/images/icons";
import "./RecommendedModuleCard.scss";

const RecommendedModuleCard = ({
  image,
  name,
  small_description,
  course_time,
  students,
  index,
  _id,
}) => {

  const navigate = useNavigate();

  return (
    <div
      className="recommended_module_cards wow fadeInLeft"
      data-wow-delay={`${0.3 * index}s`}
      onClick={() => navigate(`/explore/${_id}`)}
    >
      <div className="bg_card_overlay"></div>
      <div className="poster_wrap">
        <img src={`${baseUrl}/${image}`} alt="poster" />
        <div className="free_pill">
          <p>Free</p>
        </div>
      </div>
      <div className="text_info">
        <p className="title">{name}</p>
        <p dangerouslySetInnerHTML={{__html:small_description}}></p>
        <div className="info_line">
          <div className="info">
            <img src={icon.students} alt="student" />
            <p>{students}</p>
          </div>
          <div className="info">
            <img src={icon.clock} alt="clock" />
            <p>{course_time}</p>
          </div>
          {/* <div className="info">
            <img src={icon.star} alt="star" />
            <p>
              {rating} <span></span>
              {count}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecommendedModuleCard;
