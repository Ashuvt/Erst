import "./TextButton.scss";
import { IoMdAdd } from "react-icons/io";

const TextButton = ({ title, clickHandler }) => {
  return (
    <button class="text_btn" onClick={() => clickHandler()}>
     <IoMdAdd /> {title}
    </button>
  );
};

export default TextButton;
