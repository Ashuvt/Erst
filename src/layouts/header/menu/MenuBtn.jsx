import { Fragment } from "react";
import "./MenuBtn.scss";
import { NavLink } from "react-router-dom";

const MenuBtn = ({ title, linkdata }) => {
  return (
    <button className="menubtn" type="button">
      {title}

      <div className="dropdown_card">
        {linkdata &&
          linkdata.map((data) => {
            return (
              <Fragment key={data.id}>
                <NavLink to={data.link}>{data.text}</NavLink>
              </Fragment>
            );
          })}
      </div>
    </button>
  );
};

export default MenuBtn;
