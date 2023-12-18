import { useContext } from "react";
import Pill from "../../../../components/pill/Pill";
import "./HomeBlogCard.scss";
import { redirectContext } from "../../../../context/RoutingContext";
import { baseUrl } from "../../../../utils/apidata";

const HomeBlogCard = ({ tag, title, date, image, index, _id }) => {

const {goToBlogDetail} = useContext(redirectContext);
  

  return (
    <div 
      className="home_blog_card wow fadeInUp" 
      data-wow-delay={`${0.15*index}s`}
      onClick={() => goToBlogDetail(_id)}  
    >
      <div className="blogimg_wrap">
        <img src={`${baseUrl}/${image}`} alt="blogpost" />
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
