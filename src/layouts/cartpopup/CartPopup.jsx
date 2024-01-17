import "./CartPopup.scss";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../utils/images/images";
import { cartPopupToggler } from "../../store/actions";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, getCart, removeFromCart } from "../../utils/apidata";
import { redirectContext } from "../../context/RoutingContext";

const CartPopup = () => {
  const { toastSuccess, toastError, getCartApi } = useContext(redirectContext);
  const country = localStorage.getItem("country");
  const dispatch = useDispatch();
  const cartPopupStatus = useSelector(
    (data) => data.toggleReducer.cartPopupStatus
  );

  const [cartList, setCartList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);

  const closePopup = () => {
    dispatch({ type: cartPopupToggler(), payload: false });
  };

  const stopPtopogate = (e) => {
    e.stopPropagation();
  };

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getCartApiHandler = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${baseUrl}/${getCart}`, { headers });
      console.log("GET CART::::", response);
      if (response?.data?.success) {
        setCartList(response?.data?.data?.cart);
        setTotal(response?.data?.data?.totalPrice);
        console.log(response);
        setLoader(false);
      } else {
        setCartList([]);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setCartList([]);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (cartPopupStatus) {
      getCartApiHandler();
    }
  }, [cartPopupStatus]);

  const removeFromCartApi = async (courseId) => {
    setLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${removeFromCart}`,
        { cartItemId: courseId },
        { headers }
      );
      console.log("REMOVE RES::", response);
      if (response?.status === 200) {
        getCartApiHandler();
        getCartApi();
        setLoader(false);
      }
    } catch (error) {
      console.log("Error : ", error);
      toastError("Something Went Wrong!");
      setLoader(false);
    }
  };

  return (
    <div
      className={`add_cart_popup ${cartPopupStatus ? "open" : "close"}`}
      onClick={closePopup}
    >
      <div className="model_box" onClick={stopPtopogate}>
        <div className="model_title">
          <h5>your cart</h5>
          <button type="button" onClick={closePopup}>
            <img src={icons.whiteClose} alt="close" />
          </button>
        </div>
        {loader ? (
          <div className="loader_sec">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="product_list">
            {cartList.length > 0 ? (
              cartList.map((data) => {
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
              <div className="empty_block">
                <p>Your Cart is empty...</p>
              </div>
            )}
          </div>
        )}
        <div className="model_footer">
          <div className="total">
            <p>Subtotal</p>
            <p>
              {total} {country === "India" ? "INR" : "USD"}
            </p>
          </div>
          <button type="button" className="primarybtn">
            continue to chekout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
