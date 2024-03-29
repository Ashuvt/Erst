import { useSelector, useDispatch } from "react-redux";
import "./CartSidebar.scss";
import { Fragment, useContext, useState } from "react";
import { resetAllToggler } from "../../store/actions";
import { IoMdClose } from "react-icons/io";
import { redirectContext } from "../../context/RoutingContext";
import { baseUrl } from "../../utils/apidata";
import { icon } from "../../utils/images/icons";
import Slider from "react-slick";

import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [viewSlide, setViewSlide] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");

  const cartPopupStatus = useSelector(
    (data) => data.toggleReducer.cartPopupStatus
  );

  const { loading, cartData, error } = useSelector(
    (state) => state.getCartReducer
  );


  const { applyCouponLoading } = useSelector((state) => state.ApplyCouponApi);

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  const { removeFromCartApi, checkoutApi, getCouponApi, applyCouponApi } =
    useContext(redirectContext);

  const { couponListData } = useSelector((state) => state?.getCouponsListApi);

  const country = localStorage.getItem("country");

  const couponHandler = (e) => {
    setCoupon(e.target.value);
  };

  const checkOutHandler = () => {
    checkoutApi();
  };

  return (
    <Fragment>
      <div
        className={`cart_overlay ${cartPopupStatus ? "open" : "close"}`}
        onClick={resetToggler}
      ></div>

      <div className={`cart_sidebar ${cartPopupStatus ? "open" : "close"}`}>
        {/* Title */}

        <div className="upper">
          <div className="title">
            <p className="heading">Your Cart ({cartData?.cart?.length || 0})</p>
            <button type="button" onClick={resetToggler}>
              <IoMdClose />
            </button>
          </div>

          {/* Product List */}

          <div className="product_list">
            {cartData?.cart?.length > 0 ? (
              cartData?.cart?.map((data) => {
                return (
                  <div className="product_card" key={data._id} onClick={() => navigate(`/explore/${data?.course_id?._id}`)}>
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
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCartApi(data?._id)
                          }}
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
        </div>

        {/* Footer */}

        <div className="cart_footer">
          <div className="bi_tab_wrap">
            <button
              type="button"
              className={viewSlide ? "hide" : "active"}
              onClick={() => setViewSlide(false)}
            >
              Recommended
            </button>
            <button
              type="button"
              className={viewSlide ? "active" : "hide"}
              onClick={() => setViewSlide(true)}
            >
              Coupon
            </button>
          </div>

          {viewSlide ? (
            <Fragment>
              <h6 style={{ marginTop: "15px" }}>Coupon Code</h6>
              {/* Coupon Code Input */}

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

              {couponListData?.length > 0 && (
                <Slider {...settings}>
                  {couponListData
                    ?.filter((ele) => !ele?.page)
                    ?.map((data) => {
                      return (
                        <div className="slide_wrap" key={data._id}>
                          <div className="coupon_card">
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
                              disabled={coupon.length > 0}
                            >
                              {coupon === data.code ? "Added" : "Add"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              )}
            </Fragment>
          ) : (
            <Fragment>
              {cartData?.recommendedBundles?.length > 0 && (
                <Fragment>
                  <h6>Reccomended Courses</h6>
                  {/* Reccomonded List */}
                  <Slider {...settings}>
                    {cartData?.recommendedBundles?.map((data) => {
                      return (
                        <div className="reccomended_slide" key={data._id}>
                          <div
                            className="product_card"
                            onClick={() => navigate(`explore/${data?._id}`)}
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
                </Fragment>
              )}
            </Fragment>
          )}

          <div className="total">
            <p>Subtotal</p>
            <p>
              {cartData?.totalPrice || 0} {country === "India" ? "INR" : "USD"}
            </p>
          </div>

          {/* <button type="button" className="primarybtn">
              Loading...
            </button> */}

          <button
            type="button"
            className="primarybtn"
            onClick={checkOutHandler}
          >
            continue to chekout
          </button>
          <button
            type="button"
            className="view_cart"
            onClick={() => navigate("/auth/mycart")}
          >
            View Cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartSidebar;
