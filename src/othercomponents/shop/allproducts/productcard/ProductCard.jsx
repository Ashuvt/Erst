import "./ProductCard.scss";
import Pill from "../../../../components/pill/Pill";
import { icons } from "../../../../utils/images/images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartPopupToggler } from "../../../../store/actions";

export const ProductCard = ({ img, category, tag, price, mp, title, off }) => {
  
  const [count, setCount] = useState(0);
  const [wait, setWait] = useState(false);

  const dispatch = useDispatch();

  const openCartPopup = () => {
    setWait(true);

    const timeoutFun = setTimeout(() => {
      setWait(false);
      dispatch({ type: cartPopupToggler(), payload: true });
    }, 1000);
  };

  return (
    <div className="product_card">
      <div className="product_wraper">
        <img src={img[count]} alt="product" className="product" />
        <div className="overlay"></div>
        <div className="content">
          <div className="pill_wrap">
            <Pill text={category} />
          </div>
          <div className="add_cart">
            <button type="button" onClick={openCartPopup}>
              {wait ? (
                <img src={icons.filledWatch} alt="clock" />
              ) : (
                <img src={icons.addCart} alt="cart" />
              )}
            </button>
          </div>
          <div className="bottom_stript"></div>
        </div>
      </div>
      <div className="pricing">
        <div className="left">
          {off ? (
            <div className="off">
              <img src={icons.discount} alt="off" />
              <h6>{off} %</h6>
            </div>
          ) : (
            <div className="status">
              <div className="v_border"></div>
              <h6>{tag}</h6>
            </div>
          )}
        </div>
        <div className="right">
          <h6>${price}.00 USD</h6>
        </div>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default ProductCard;
