import "./AddCartPopup.scss";
import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../utils/images/images";
import { cartPopupToggler } from "../../store/actions";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, getCart } from "../../utils/apidata";

const AddCartPopup = () => {
  const dispatch = useDispatch();
  const cartPopupStatus = useSelector(
    (data) => data.toggleReducer.cartPopupStatus
  );

  const [cartList, setCartList] = useState([]);
  const [loader, setLoader] = useState(false);


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

  const getCartApi = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${baseUrl}/${getCart}`, { headers });
      if (response?.data?.success) {
        setCartList(response?.data?.data);
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
      console.log("Run!");
      getCartApi();
    }
  }, [cartPopupStatus]);

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
                        <img src={data.img} alt="product" />
                      </div>
                      <div className="text">
                        <p className="name">{data?.course_id?.name}</p>
                        <p className="price">$ {data.price} USD</p>
                        <button type="button">remove</button>
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
            <p>$ 2250.00 USD</p>
          </div>
          <button type="button" className="primarybtn">
            continue to chekout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCartPopup;
