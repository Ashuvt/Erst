import "./PaymentMethodCard.scss";
import { icon } from "../../../../utils/images/icons";

const PaymentMethodCard = ({ title, text }) => {
  return (
    <div className="payment_method_card">
      <div className="info">
        <div className="img_box">
          <img src={icon.masterCard} alt="icon" />
        </div>
        <div className="text">
          <p className="title">{title}</p>
          <p className="small_text">{text}</p>
        </div>
      </div>
      <div className="btn_line">
        <button type="button" className="light">Make default</button>
        <button type="button" className="blue">Remove</button>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
