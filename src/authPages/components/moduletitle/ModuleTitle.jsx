import { useEffect } from "react";
import BlueTextBtn from "../bluetextbtn/BlueTextBtn";
import "./ModuleTitle.scss";
import WOW from "wow.js";

const ModuleTitle = ({ title, text,btntext, icon, redirectTo }) => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="module_title">
      <div className="text_side">
        <h5 className="small_title wow fadeInLeft">{title}</h5>
        <p className="wow fadeInLeft" data-wow-delay="0.2s">
       {text}
        </p>
      </div>

      <BlueTextBtn text={btntext} icon={icon} redirect={redirectTo} />
    </div>
  );
};

export default ModuleTitle;
