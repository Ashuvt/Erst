import { useSelector, useDispatch } from "react-redux";
import "./CartSidebar.scss";
import { Fragment, useContext, useState } from "react";
import { resetAllToggler } from "../../store/actions";
import { IoMdClose } from "react-icons/io";
import { redirectContext } from "../../context/RoutingContext";
import { baseUrl } from "../../utils/apidata";
import { IoMdAdd } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [couponBtn, setCouponBtn] = useState(true);
  const [applyLoader, setApplyLoader] = useState(false);
  const [couponField, setCouponField] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [couponSuccess, setCouponSuccess] = useState(false);

  const cartPopupStatus = useSelector(
    (data) => data.toggleReducer.cartPopupStatus
  );

  const { loading, cartData, error } = useSelector(
    (state) => state.getCartReducer
  );

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  const { removeFromCartApi, checkoutApi } = useContext(redirectContext);

  const country = localStorage.getItem("country");

  const couponHandler = (e) => {
    setCoupon(e.target.value);
  };

  const couponApply = () => {
    setApplyLoader(true);

    setTimeout(() => {
      setCouponField(false);
      setCouponBtn(false);
      setCouponSuccess(true);
      console.log(coupon);
      setCoupon("");
      setApplyLoader(false);
    }, 2000);
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
        </div>

        {/* Footer */}

        <div className="cart_footer">
          {/* Coupon Code Input */}
          {couponField && (
            <div className="apply_field">
              <input
                type="text"
                placeholder="add coupon"
                onChange={couponHandler}
                value={coupon}
              />
              {applyLoader ? (
                <button type="button" className="primarybtn">
                  Loading...
                </button>
              ) : (
                <button
                  type="button"
                  className="primarybtn"
                  onClick={couponApply}
                >
                  Apply
                </button>
              )}
            </div>
          )}

          {/* Add Coupan Btn */}
          {/* {couponBtn && (
            <button
              type="button"
              className="coupon_btn"
              onClick={() => {
                setCouponField(true);
                setCouponBtn(false);
              }}
            >
              Add Coupon <IoMdAdd />
            </button>
          )} */}

          {/* Coupon Success MEssage */}
          {couponSuccess && (
            <p className="coupon_success">Coupon Applied Success!</p>
          )}

          {couponCodes.map((data) => {
            return (
              <div className="coupon_card">
                <div className="coupon_left">
                  <h6>{data.title}</h6>
                  <p>{data.text}</p>
                  <p>Code : {data.code}</p>
                </div>
                <button
                  type="button"
                  className="apply_Btn"
                  onClick={() => {
                    setCoupon(data.code);
                  }}
                  disabled={coupon.length > 0}
                >
                  {coupon === data.code ? "Added" : "Add"}
                </button>
              </div>
            );
          })}
          <div className="total">
            <p>Subtotal</p>
            <p>
              {cartData?.totalPrice || 0} {country === "India" ? "INR" : "USD"}
            </p>
          </div>

          {/* <button type="button" className="primarybtn">
              Loading...
            </button> */}

          <button type="button" className="primarybtn" onClick={checkoutApi}>
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
