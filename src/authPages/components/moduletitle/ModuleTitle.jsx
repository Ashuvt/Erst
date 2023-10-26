import BlueTextBtn from "../bluetextbtn/BlueTextBtn";
import "./ModuleTitle.scss";

const ModuleTitle = ({ title, text,btntext, icon }) => {
  return (
    <div className="module_title">
      <div className="text_side">
        <h5 className="small_title">{title}</h5>
        <p>
          Hi Rajat, Based on your intersect in ComTIA security we suggest you
          some of personally curated modules
        </p>
      </div>

      <BlueTextBtn text={btntext} icon={icon} />
    </div>
  );
};

export default ModuleTitle;
