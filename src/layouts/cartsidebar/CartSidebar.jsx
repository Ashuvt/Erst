import { useSelector, useDispatch } from "react-redux";
import "./CartSidebar.scss";
import { Fragment, useContext } from "react";
import { resetAllToggler } from "../../store/actions";
import { IoMdClose } from "react-icons/io";
import { redirectContext } from "../../context/RoutingContext";
import { baseUrl } from "../../utils/apidata";

import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
