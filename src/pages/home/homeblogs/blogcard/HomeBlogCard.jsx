import { useNavigate } from "react-router-dom";
import Pill from "../../../../components/pill/Pill";
import "./HomeBlogCard.scss";

const HomeBlogCard = ({ tag, title, date, img, index, id }) => {
  const navigate = useNavigate();
  return (
    <div className="home_blog_card wow fadeInUp" data-wow-delay={`${0.15*index}s`} onClick={() => navigate(`/blogs/${id}`)}>
      <div className="blogimg_wrap">
        <img src={img} alt="blogpost" />
      </div>
      <div className="content">
        <Pill text={tag} />
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default HomeBlogCard;