import Pill from "../../../../components/pill/Pill";
import "./HomeBlogCard.scss";

const HomeBlogCard = ({ tag, title, date, img }) => {
  return (
    <div className="home_blog_card">
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
