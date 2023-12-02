import "./FieldErrorMessage.scss";
import { icon } from "../../../utils/images/icons";

const FieldErrorMessage = (props) => {
  return (
    <div className="error_field">
      <img src={icon.alertTriangle} alt="error" />
      <p>{props.text ? props.text : props.children}</p>
    </div>
  );
};

export default FieldErrorMessage;