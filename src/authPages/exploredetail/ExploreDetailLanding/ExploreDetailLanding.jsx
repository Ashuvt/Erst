import "./ExploreDetailLanding.scss";
import { Fragment, useState } from "react";
import { images } from "../../../utils/images/images";
import { icon } from "../../../utils/images/icons";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../store/actions";
import { baseUrl } from "../../../utils/apidata";

const ExploreDetailLanding = ({
  loader,
  addtoCartHandler,
  is_cart,
  course_time,
  name,
  small_description,
  description,
  students,
  image,
}) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  const addToCart = () => {
    addtoCartHandler();

  }


  return (
    <section className="explore_detail" onClick={resetToggler}>
      <div className="screen_container">
        {loader ? (
          <div className="loader">
            <h3>Loading...</h3>
          </div>
        ) : (
          <Fragment>
            <div className="video_wrapper">
              <img src={`${baseUrl}/${image}`} alt="poster" />
              <button>
                <img src={icon.playCircle} alt="play" />
              </button>
            </div>
            <div className="info_wraper">
              <div className="info_line">
                {students && (
                  <div className="info wow fadeInUp">
                    <img src={icon.students} alt="students" />
                    <p>{students}</p>
                  </div>
                )}

                {/* {courses && (
              <div className="info wow fadeInUp" data-wow-delay="0.15s">
                <img src={icon.courses} alt="courses" />
                <p>{courses} courses</p>
              </div>
            )} */}

                {course_time && (
                  <div className="info wow fadeInUp" data-wow-delay="0.30s">
                    <img src={icon.clock} alt="duration" />
                    <p>{course_time}</p>
                  </div>
                )}

                {/* {rating && (
              <div className="info wow fadeInUp" data-wow-delay="0.35s">
                <img src={icon.star} alt="rating" />
                <p>
                  {rating} <span></span> {rateCount}
                </p>
              </div>
            )} */}

                {/* {saved && (
              <div className="info wow fadeInUp" data-wow-delay="0.40s">
                <img src={icon.save} alt="save" />
                <p>Save</p>
              </div>
            )} */}
              </div>
              <h1 className="wow fadeInUp">{name}</h1>

              {/* <p className="wow fadeInUp">{text}</p> */}
              <div
                dangerouslySetInnerHTML={{ __html: small_description }}
              ></div>

              {/* <div className="btn_line">
            {options.map((data) => {
              return (
                <button type="button" className="white_btn wow fadeInUp" key={data}>
                  {data}
                </button>
              );
            })}
          </div> */}

              {!is_cart && (
                <button
                  type="button"
                  className="authbtn auth_primary wow fadeInUp"
                  onClick={addToCart}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default ExploreDetailLanding;
