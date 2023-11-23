import { icon } from "../../../utils/images/icons";
import "./SavedList.scss";

const SavedList = () => {
  const info = [
    {
      id: 0,
      title: "Red Team",
      text: "A short description about the module, it can be in two lines.",
      modules: "Red Team",
      duration: "6h 15m",
    },
    {
      id: 1,
      title: "Skill Path",
      text: "A short description about the module, it can be in two lines.",
      modules: "",
      duration: "6h 15m",
    },
    {
      id: 2,
      title: "Blue Team",
      text: "A short description about the module, it can be in two lines.",
      modules: "Blue Team",
      duration: "6h 15m",
    },
  ];
  return (
    <div className="home_saved_list">
      <div className="title">
        <h5 className="small_title wow fadeInLeft">Saved</h5>
        <button type="button" className="wow fadeInRight">show all</button>
      </div>

      {info.map((data) => {
        return (
          <div className="saved_card_wrap wow fadeInRight" key={data.id}>
             <div className="bg_card_overlay"></div>
            <div className="title_line_wrap">
              <p className="title_text">Red Team</p>
              <button type="button">
                <img src={icon.save} alt="saveicon" />
              </button>
            </div>
            <p>A short description about the module, it can be in two lines.</p>
            <div className="bottom_line">
              <p className="title">Module <span>{data.modules}</span></p>
              <div className="info">
                <img src={icon.clock} alt="clock" />
                <p className="title">{data.duration}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedList;