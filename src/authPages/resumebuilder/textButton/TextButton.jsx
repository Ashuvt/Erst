import "./TextButton.scss";
import { IoMdAdd } from "react-icons/io";

const TextButton = ({ title, clickHandler }) => {
  return (
    <button className="text_btn" onClick={() => clickHandler()}>
     <IoMdAdd /> {title}
    </button>
  );
};

export default TextButton;
