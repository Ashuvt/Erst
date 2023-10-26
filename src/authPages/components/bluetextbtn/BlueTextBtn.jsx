import "./BlueTextBtn.scss";

const BlueTextBtn = ({ text, icon }) => {
  return (
    <button className="blue_text_btn">
      {text}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default BlueTextBtn;
