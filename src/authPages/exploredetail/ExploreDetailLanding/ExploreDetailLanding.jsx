import "./ExploreDetailLanding.scss";
import { Fragment, useContext, useState } from "react";
import { icon } from "../../../utils/images/icons";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../../store/actions";
import { addToCart, baseUrl } from "../../../utils/apidata";
import axios from "axios";
import { redirectContext } from "../../../context/RoutingContext";

const ExploreDetailLanding = ({
  _id,
  loader,
  recallGetCourse,
  is_cart,
  course_time,
  name,
  small_description,
  students,
  image,
  tags,
  courseincludes,
}) => {
  const dispatch = useDispatch();

  const {getCartApi, toastSuccess, toastWarning, toastError} = useContext(redirectContext);

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };


      // Add To Cart
      const addToCartApi = async(courseId) => {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        try { 
            const response = await axios.post(`${baseUrl}/${addToCart}`, {course_id:courseId}, {headers})
            console.log("RES::", response);
            if(response?.data?.success){
              getCartApi();
              toastSuccess("Course Added In Cart!");
              recallGetCourse();
            }else{
              toastWarning("Course Already added on cart");
            }
        } catch (error) {
          console.log("ERROR::" ,error);
          toastError("something went wrong!")
        }
      };

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

                {courseincludes?.length > 0 && (
                  <div className="info wow fadeInUp" data-wow-delay="0.15s">
                    <img src={icon.courses} alt="courses" />
                    <p>{courseincludes?.length} courses</p>
                  </div>
                )}

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

              <div className="btn_line">
                {tags?.length > 0 &&
                  tags.map((data) => {
                    return (
                      <button
                        type="button"
                        className="white_btn wow fadeInUp"
                        key={data._id}
                      >
                        {data.name}
                      </button>
                    );
                  })}
              </div>

              {!is_cart && (
                <button
                  type="button"
                  className="authbtn auth_primary wow fadeInUp"
                  onClick={() => addToCartApi(_id)}
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
