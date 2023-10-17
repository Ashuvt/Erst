import { useState, useEffect } from "react";
import "./TipsBlogCard.scss";
import WOW from "wow.js";

const TipsBlogCard = ({ date, title, text, img }) => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

    const [side, setSide] = useState(false);
    const [width, setWidth] = useState(0);

    const hoverHandler = () => {
        setSide(false);
        setWidth(100);
    };

    const hoverOutHandler = () => {
        setSide(true);
        setWidth(0)
    }


  return (
    <div className="tips_blog_card wow slideInUp" onMouseEnter={hoverHandler} onMouseLeave={hoverOutHandler}>
      <div className="text">
        <p className="date">{date}</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="img_wrap">
        <div className="content_box">
          <div className="overlay"></div>
          <img src={img} alt="blogbanner" />
        </div>
      </div>
      <div className="bottom_border">
        <div className={`filler ${side ? 'right' : 'left'}`} style={{width:`${width}%`}}></div>
      </div>
    </div>
  );
};

export default TipsBlogCard;
