import { useEffect } from "react";
import "./MidTitle.scss";
import WOW from "wow.js";

const MidTitle = ({ title, text }) => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="mid_title">
      <h2 className="wow slideInUp">{title}</h2>
      <p className="wow slideInUp">{text}</p>
    </div>
  );
};

export default MidTitle;
