import { icon } from "../../../utils/images/icons";
import "./SavedList.scss";
import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";


const SavedList = ({ dataList }) => {

const {saveCourseApi} = useContext(redirectContext); 

  return (
    <div className="home_saved_list">
      <div className="title">
        <h5 className="small_title wow fadeInLeft">Saved</h5>
        <button type="button" className="wow fadeInRight">
          show all
        </button>
      </div>

      {dataList.length > 0 ? (
        dataList.map((data) => {
          return (
            <div className="saved_card_wrap wow fadeInRight" key={data._id}>
              <div className="bg_card_overlay"></div>
              <div className="title_line_wraper">
                <p className="title_text">{data?.course_id?.name}</p>
                <button type="button" className="savedbtn" onClick={() => saveCourseApi(data._id)}>
                  <img src={icon.save} alt="saveicon" />
                </button>
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: data?.course_id?.small_description,
                }}
              ></div>
              <div className="bottom_line">
                <p className="title">
                  Module <span>{data.modules}</span>
                </p>
                <div className="info">
                  <img src={icon.clock} alt="clock" />
                  <p className="title">{data?.course_id?.course_time}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Saved course Found...</p>
      )}
    </div>
  );
};

export default SavedList;
