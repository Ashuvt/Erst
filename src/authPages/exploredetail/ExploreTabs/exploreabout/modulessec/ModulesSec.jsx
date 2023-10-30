import "./ModulesSec.scss";
import { Fragment } from "react";
import { icon } from "../../../../../utils/images/icons";

const ModulesSec = () => {
  const module_data = [
    {
      id: 0,
      type: "video",
      text: "1.1 Incident Response Steps Introduction",
      free: true,
      duration: "1h 2m",
    },
    {
      id: 1,
      type: "docs",
      text: "1.1 Incident Response Steps Introduction",
      free: true,
      duration: "1h 2m",
    },
    {
      id: 2,
      type: "video",
      text: "1.1 Incident Response Steps Introduction",
      free: true,
      duration: "1h 39m",
    },
    {
      id: 3,
      type: "docs",
      text: "1.1 Incident Response Steps Introduction",
      free: false,
      duration: "1h 39m",
    },
    {
      id: 4,
      type: "docs",
      text: "1.1 Incident Response Steps Introduction",
      free: false,
      duration: "1h 39m",
    },
    {
      id: 5,
      type: "video",
      text: "1.1 Incident Response Steps Introduction",
      free: false,
      duration: "1h 39m",
    },
  ];

  return (
    <Fragment>
      <div className="module_sec">
        <h5 className="small_title">Modules</h5>
        {module_data.map((data) => {
          return (
            <Fragment>
              <div className="module_info">
                <div className="left">
                  <img
                    src={data.type === "video" ? icon.video : icon.docs}
                    alt="icon"
                  />
                  <div className="info">
                    <p className="small_text text">{data.text}</p>
                    <p className="small_text">{data.duration}</p>
                    {data.free && (
                      <button type="button" className="free_btn">
                        Free
                      </button>
                    )}
                  </div>
                </div>

                {data.free ? (
                  <button type="button" className="authbtn auth_primary">
                    Free
                  </button>
                ) : (
                  <button type="button" className="authbtn auth_secondary">
                    Subscribe
                  </button>
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ModulesSec;
