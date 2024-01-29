import "./PurchasedCard.scss";
import { useNavigate } from "react-router-dom";
import { icon } from "../../../../utils/images/icons";
import { baseUrl } from "../../../../utils/apidata";

const PurchasedCard = ({
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
      className="purchased_cards wow fadeInLeft"
      data-wow-delay={`${0.3 * index}s`}
      onClick={() => navigate(`/explore/${_id}`)}
    >
      <div className="bg_card_overlay"></div>
      <div className="poster_wrap">
        <img src={`${baseUrl}/${image}`} alt="poster" />    
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
      <div className="progress_bar">
        <div className="filler" style={{width:'10%'}}></div>
      </div>
    </div>
  );
};

export default PurchasedCard;
