import "./ExploreDetailLanding.scss";
import { Fragment, useContext, useState } from "react";
import { icon } from "../../../utils/images/icons";
import { baseUrl } from "../../../utils/apidata";
import { redirectContext } from "../../../context/RoutingContext";
import { useSelector } from "react-redux";
import { images } from "../../../utils/images/images";
import { IoPricetagOutline } from "react-icons/io5";

const ExploreDetailLanding = () => {
  const { addToCartApi, resetAllToggles } = useContext(redirectContext);
  const { loading } = useSelector((state) => state?.addCartReducer);
  const { courseDetailLoading, courseDetailData, courseDetailError } =
    useSelector((state) => state?.getExploreDetailByIdApi);
  const country = localStorage.getItem("country");

  console.log("courseDetailData::", courseDetailData);

  return (
    <section className="explore_detail" onClick={resetAllToggles}>
      <img src={images.bluePattern} alt="pattern" className="pattern" />
      <div className="screen_container">
        {courseDetailLoading ? (
          <div className="loader">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <Fragment>
            <div className="video_wrapper">
              <img src={`${baseUrl}/${courseDetailData?.image}`} alt="poster" />
              <button>
                <img src={icon.playCircle} alt="play" />
              </button>
            </div>
            <div className="info_wraper">
              <div className="info_line">
                {courseDetailData?.students && (
                  <div className="info wow fadeInUp">
                    <img src={icon.students} alt="students" />
                    <p>{courseDetailData?.students}</p>
                  </div>
                )}

                {courseDetailData?.courseincludes?.length > 0 && (
                  <div className="info wow fadeInUp" data-wow-delay="0.15s">
                    <img src={icon.courses} alt="courses" />
                    <p>{courseDetailData?.courseincludes?.length} courses</p>
                  </div>
                )}

                {courseDetailData?.course_time && (
                  <div className="info wow fadeInUp" data-wow-delay="0.30s">
                    <img src={icon.clock} alt="duration" />
                    <p>{courseDetailData?.course_time}</p>
                  </div>
                )}

                {
                  <div className="info wow fadeInUp" data-wow-delay="0.30s">
                    <IoPricetagOutline />
                    <p>
                      {country === "India"
                        ? `${courseDetailData?.price_inr} INR`
                        : `${courseDetailData?.price_usd} USD`}
                    </p>
                  </div>
                }
              </div>
              <h1 className="wow fadeInUp">{courseDetailData?.name}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: courseDetailData?.small_description,
                }}
              ></div>

              <div className="btn_line">
                {courseDetailData?.tags?.length > 0 &&
                  courseDetailData?.tags.map((data) => {
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

              {!courseDetailData?.is_cart && (
                <button
                  type="button"
                  className="authbtn auth_primary wow fadeInUp"
                  onClick={() =>
                    loading ? null : addToCartApi(courseDetailData?._id)
                  }
                >
                  {loading ? "loading..." : "Add To Cart"}
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
