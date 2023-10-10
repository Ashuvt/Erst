import { Fragment } from "react";
import "./MenuBtn.scss";

const MenuBtn = ({ title, linkdata }) => {
  console.log(linkdata);
  return (
    <button className="menubtn" type="button">
      {title}

      <div className="dropdown_card">
        {linkdata &&
          linkdata.map((data) => {
            return (
              <Fragment key={data.id}>
                <a href={data.link}>{data.text}</a>
              </Fragment>
            );
          })}
      </div>
    </button>
  );
};

export default MenuBtn;
