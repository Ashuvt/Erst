import { useNavigate } from "react-router-dom";
import Pill from "../../../../components/pill/Pill";
import "./HomeBlogCard.scss";

const HomeBlogCard = ({ tag, title, date, image, index, _id }) => {
  const baseUrl = 'https://cybergainbackend.supagrow.in/';
  const navigate = useNavigate();
  return (
    <div className="home_blog_card wow fadeInUp" data-wow-delay={`${0.15*index}s`}>
      <div className="blogimg_wrap">
        <img src={`${baseUrl}${image}`} alt="blogpost" />
      </div>
      <div className="content">
        <Pill text="Blog" />
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default HomeBlogCard;
