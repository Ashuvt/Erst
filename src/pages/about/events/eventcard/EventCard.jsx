import { useState } from "react";
import "./EventCard.scss";
import {useSelector } from "react-redux";

const EventCard = ({ date, title, text, img, url }) => {

  const [side, setSide] = useState(false);
  const [width, setWidth] = useState(0);

  const hoverHandler = () => {
    setSide(false);
    setWidth(100);
  };

  const hoverOutHandler = () => {
    setSide(true);
    setWidth(0);
  };

  const l = useSelector(state => state.langReducer.lang);

  return (
    <div
      className="tips_blog_card wow fadeInUp"
      data-wow-delay="0.30s"
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverOutHandler}
    >
      <div className="text">
        <p className="date">{date}</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="img_wrap"
       style={['ar', 'he'].includes(l) ? {left:'0px'} : {right:'0px'}}
      >
        <div className="content_box">
          <div className="overlay"></div>
          <img src={img} alt="blogbanner" />
        </div>
      </div>
      <div className="bottom_border">
        <div
          className={`filler ${side ? "right" : "left"}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <a href={url} target="_blank" className="link_overlay"></a>
    </div>
  );
};

export default EventCard;
