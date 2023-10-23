import { Fragment, useState } from "react";
import "./HembergerMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { sidebarToggler } from "../../store/actions";

const HembergerMenu = () => {

  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.toggleReducer.sidebarStatus);

  const menuToggler = () => {

    if (sidebarStatus) {
      dispatch({ type: sidebarToggler(), payload: false });
    } else {
      dispatch({ type: sidebarToggler(), payload: true });
    }
  };

  return (
    <Fragment>
      <div
        className={`hemberger_menu ${sidebarStatus ? "open" : ""}`}
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
