import "./AddCartPopup.scss";
import { useSelector, useDispatch } from "react-redux";
import { icons, products } from "../../utils/images/images";
import { cartPopupToggler } from "../../store/actions";

const AddCartPopup = () => {
  const dispatch = useDispatch();
  const cartPopupStatus = useSelector(
    (data) => data.toggleReducer.cartPopupStatus
  );

  const productsData = [
    {
      id: 0,
      title: "Sony PlayStation",
      price: 550,
      img: products.productAa,
      count: 1,
    },
    {
      id: 0,
      title: "Apple AirPods",
      price: 745,
      img: products.productBa,
      count: 4,
    },
    {
      id: 0,
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
          {productsData &&
            productsData.map((data) => {
              return (
                <div className="product_card">
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
                  <div className="count">
                    <button type="button">-</button>
                    <input type="number" value={data.count} />
                    <button type="button">+</button>
                    
                  </div>
                </div>
              );
            })}
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
