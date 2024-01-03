import { useState } from "react";
import "./EventCard.scss";
import { useSelector } from "react-redux";
import { baseUrl } from "../../../../utils/apidata";

const EventCard = ({ date, title, small_description, image, createdAt }) => {
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

  const l = useSelector((state) => state.langReducer.lang);

  return (
    <div
      className="tips_blog_card wow fadeInUp"
      data-wow-delay="0.30s"
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverOutHandler}
    >
      <div className="text">
        <p className="date">{createdAt.slice(0, 10)}</p>
        <h3>{title}</h3>
        <p>{small_description}</p>
      </div>
      <div
        className="img_wrap"
        style={["ar", "he"].includes(l) ? { left: "0px" } : { right: "0px" }}
      >
        <div className="content_box">
          <div className="overlay"></div>
          <img src={`${baseUrl}/${image}`} alt="blogbanner" />
        </div>
      </div>
      <div className="bottom_border">
        <div
          className={`filler ${side ? "right" : "left"}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      {/* <a href={url} target="_blank" className="link_overlay"></a> */}
    </div>
  );
};

export default EventCard;
