import "./ExploreDetailLanding.scss";
import { images } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../store/actions";

const ExploreDetailLanding = ({
  students,
  courses,
  duration,
  rating,
  rateCount,
  saved,
  title,
  text,
  options,
}) => {
  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  return (
    <section className="explore_detail" onClick={resetToggler}>
      <div className="screen_container">
        <div className="video_wrapper">
          <img src={images.exploreDetail} alt="poster" />
          <button>
            <img src={icon.playCircle} alt="play" />
          </button>
        </div>
        <div className="info_wraper">
          <div className="info_line">
            {students && (
              <div className="info">
                <img src={icon.students} alt="students" />
                <p>{students} students</p>
              </div>
            )}

            {courses && (
              <div className="info">
                <img src={icon.courses} alt="courses" />
                <p>{courses} courses</p>
              </div>
            )}

            {duration && (
              <div className="info">
                <img src={icon.clock} alt="duration" />
                <p>{duration}</p>
              </div>
            )}

            {rating && (
              <div className="info">
                <img src={icon.star} alt="rating" />
                <p>
                  {rating} <span></span> {rateCount}
                </p>
              </div>
            )}

            {saved && (
              <div className="info">
                <img src={icon.save} alt="save" />
                <p>Save</p>
              </div>
            )}
          </div>
          <h1>{title}</h1>

          <p>{text}</p>

          <div className="btn_line">
            {options.map((data) => {
              return (
                <button type="button" className="white_btn">
                  {data}
                </button>
              );
            })}
          </div>
          <button type="button" className="authbtn auth_primary">
            Enroll For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreDetailLanding;
