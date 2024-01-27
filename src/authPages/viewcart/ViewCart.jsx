import AuthLayout from "../AuthLayout";
import "./ViewCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useContext, useEffect, useState } from "react";
import { redirectContext } from "../../context/RoutingContext";
import { baseUrl } from "../../utils/apidata";
import { icon } from "../../utils/images/icons";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const ViewCart = () => {
  const navigate = useNavigate();
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const couponCodes = [
    {
      id: 0,
      title: "lorem ipsum",
      text: "ipsum amet lorem dolor.",
      code: "ABS056",
    },
    {
      id: 1,
      title: "lorem ipsum",
      text: "ipsum amet lorem dolor.",
      code: "ZVS099",
    },
  ];

  const { couponListData } = useSelector((state) => state?.getCouponsListApi);

  const [coupon, setCoupon] = useState("");

  const country = localStorage.getItem("country");

  const { getCartApi, removeFromCartApi, checkoutApi, applyCouponApi } =
    useContext(redirectContext);

  const { applyCouponLoading } = useSelector((state) => state.ApplyCouponApi);

  const { loading, cartData, error } = useSelector(
    (state) => state.getCartReducer
  );

  useEffect(() => {
    getCartApi();
  }, []);

  const couponHandler = (e) => {
    setCoupon(e.target.value);
  };

  return (
    <AuthLayout>
      <section className="view_cart">
        <div className="auth_container">
          <div className="cart_grid_wrap">
            <div className="left_list r">
              <div className="title">
                <h5>My Cart ({cartData?.cart?.length || 0})</h5>
                <button>Continue Shopping</button>
              </div>

              <div className="product_list">
                {cartData?.cart?.length > 0 ? (
                  cartData?.cart?.map((data) => {
                    return (
                      <div className="product_card" key={data._id}>
                        <div className="info">
                          <div className="img_wrap">
                            <img
                              src={`${baseUrl}/${data?.course_id?.image}`}
                              alt="course"
                            />
                          </div>
                          <div className="text">
                            <div className="left">
                              <p className="name">{data?.course_id?.name}</p>

                              {country === "India" ? (
                                <p className="price">
                                  {data?.course_id?.price_inr} INR
                                </p>
                              ) : (
                                <p className="price">
                                  {data?.course_id?.price_usd} USD
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCartApi(data?._id)}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Fragment>
                    {!loading && (
                      <div className="empty_block">
                        <p>Data Does Not Exist..</p>
                      </div>
                    )}
                  </Fragment>
                )}

                {loading && (
                  <div className="empty_block">
                    <p>Loading...</p>
                  </div>
                )}
              </div>

              {cartData?.recommendedBundles?.length > 0 && (
                <Fragment>
                  <h6 className="m_b m_t">Reccomended Courses</h6>
                  {/* Reccomonded List */}
                  <div className="slide_boxwrap">
                    <Slider {...setting}>
                      {cartData?.recommendedBundles?.map((data) => {
                        return (
                          <div className="reccomended_slide" key={data._id}>
                            <div
                              className="product_card_wrap"
                              onClick={() => navigate(`/explore/${data._id}`)}
                            >
                              <div className="info">
                                <div className="img_wrap">
                                  <img src={icon.courses} alt="course" />
                                </div>
                                <div className="text">
                                  <div className="left">
                                    <p className="name">{data?.name}</p>
                                    <p className="des">
                                      {data?.small_description}
                                    </p>
                                    <p className="price">999 INR</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </Fragment>
              )}
            </div>
            <div className="right">
              <div className="top">
                {/* Coupon Code Input */}
                <h6 className="m_b">Coupon</h6>
                <div className="apply_field">
                  <input
                    type="text"
                    placeholder="add coupon"
                    onChange={couponHandler}
                    value={coupon}
                  />
                  {applyCouponLoading ? (
                    <button type="button" className="primarybtn">
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="primarybtn"
                      onClick={() => {
                        applyCouponApi(coupon);
                        setCoupon("");
                      }}
                      disabled={coupon?.trim()?.length === 0}
                    >
                      Apply
                    </button>
                  )}
                </div>

                {/* Coupon Cards */}
                {couponListData?.length > 0 &&
                  couponListData
                    ?.filter((ele) => !ele?.page)
                    ?.map((data) => {
                      return (
                        <div className="coupon_card" key={data?._id}>
                          <div className="coupon_left">
                            <h6>Coupon</h6>
                            {data?.title && <p>{data?.title}</p>}

                            <p>{data.text}</p>
                            <p>Code : {data.code}</p>
                          </div>
                          <button
                            type="button"
                            className="apply_Btn"
                            onClick={() => {
                              setCoupon(data?.code);
                            }}
                          >
                            {coupon === data.code ? "Added" : "Add"}
                          </button>
                        </div>
                      );
                    })}
              </div>
              <div className="bottom">
                <div className="total">
                  <p>Subtotal</p>
                  <p>
                    {cartData?.totalPrice || 0}{" "}
                    {country === "India" ? "INR" : "USD"}
                  </p>
                </div>
                <button
                  type="button"
                  className="primarybtn"
                  onClick={checkoutApi}
                >
                  continue to chekout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ViewCart;
