import AuthLayout from "../AuthLayout";
import "./ViewCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useContext, useEffect, useState } from "react";
import { redirectContext } from "../../context/RoutingContext";
import { baseUrl } from "../../utils/apidata";

const ViewCart = () => {
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

  const [applyLoader, setApplyLoader] = useState(false);
  const [couponField, setCouponField] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [couponSuccess, setCouponSuccess] = useState(false);

  const country = localStorage.getItem("country");
  const { getCartApi, removeFromCartApi, checkoutApi } =
    useContext(redirectContext);
  const { loading, cartData, error } = useSelector(
    (state) => state.getCartReducer
  );

  useEffect(() => {
    getCartApi();
  }, []);

  const couponHandler = (e) => {
    setCoupon(e.target.value);
  };

  const couponApply = () => {
    setApplyLoader(true);

    setTimeout(() => {
      setCouponField(false);
      setCouponSuccess(true);
      console.log(coupon);
      setCoupon("");
      setApplyLoader(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <section className="view_cart">
        <div className="auth_container">
          <div className="cart_grid">
            <div className="left">
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
              
              <h6>Recommended Courses</h6>


              
            </div>
            <div className="right">
              <div className="top">
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

                {/* Coupon Success Message */}
                {couponSuccess && (
                  <p className="coupon_success">Coupon Applied Success!</p>
                )}

                {/* Coupon Cards */}
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
