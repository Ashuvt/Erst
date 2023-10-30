import { Fragment } from "react";
import "./HembergerMenu.scss";

const HembergerMenu = ({ clickHandler, status }) => {

  const menuToggler = (e) => {
    e.stopPropagation();
    clickHandler();
  };

  return (
    <Fragment>
      <div
        className={`hemberger_menu ${status ? "open" : ""}`}
        onClick={menuToggler}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </Fragment>
  );
};

export default HembergerMenu;
