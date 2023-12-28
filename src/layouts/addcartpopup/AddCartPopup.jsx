import "./AddCartPopup.scss";
import { useSelector, useDispatch } from "react-redux";
import { icons, products } from "../../utils/images/images";
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

  const productsData = [
    {
      id: 0,
      title: "Sony PlayStation",
      price: 550,
      img: products.productAa,
      count: 1,
    },
    {
      id: 1,
      title: "Apple AirPods",
      price: 745,
      img: products.productBa,
      count: 4,
    },
    {
      id: 2,
      title: "Headphones Sony WH",
      price: 1700,
      img: products.productAc,
      count: 2,
    },
  ];

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
      const response = await axios.get(`${baseUrl}/${getCart}`, { headers });
      if(response.data.success){
        console.log(response);
        setCartList(response?.data?.data);
      }else{
        setCartList([]);
      }
      
    } catch (error) {
      console.log(error);
      setCartList([]);
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
        <div className="product_list">
          {cartList.length > 0 ?
            productsData.map((data) => {
              return (
                <div className="product_card" key={data.id}>
                  <div className="info">
                    <div className="img_wrap">
                      <img src={data.img} alt="product" />
                    </div>
                    <div className="text">
                      <p className="name">{data.title}</p>
                      <p className="price">$ {data.price} USD</p>
                      <button type="button">remove</button>
                    </div>
                  </div>
                  {/* <div className="count">
                    <button type="button">-</button>
                    <form>
                      <input
                        type="number"
                        value={data.count}
                        onChange={inputHandler}
                      />
                    </form>
                    <button type="button">+</button>
                  </div> */}
                </div>
              );
            })
          : <div className="empty_block">
            <p>Your Cart is empty...</p>
          </div>
          }
        </div>
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
