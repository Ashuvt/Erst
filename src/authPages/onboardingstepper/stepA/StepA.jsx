import { Fragment, useState } from "react";
import "./StepA.scss";
import { icon } from "../../../utils/images/icons";

const StepA = ({ setStep }) => {
  const [selectedOption, setSelectedOption] = useState([]);

  const continueHandler = () => {
    SkipHandler();
  };

  const SkipHandler = () => {
    setStep((prev) => prev + 1);
  };

  const optionsData = [
    {
      id: 0,
      text: "Student",
    },
    {
      id: 1,
      text: "Data science",
    },
    {
      id: 2,
      text: "IT",
    },
    {
      id: 3,
      text: "Learning and development ",
    },
    {
      id: 4,
      text: "Operations",
    },
    {
      id: 5,
      text: "Risk and compliance",
    },
  ];

  const addSelection = (selectedId) => {
    setSelectedOption((prev) => {
      if (selectedOption.includes(selectedId)) {
        return prev.filter((id) => id !== selectedId);
      } else {
        return [...prev, selectedId];
      }
    });
  };

  return (
    <div className="step_a">
      <h1 className="small_title wow slideInUp">
        Hey Rajat, tell us about your department profession
      </h1>
      <p className="wow slideInUp">Let’s help you setup your learning path</p>

      <form>
        <div className="auth_field wow slideInUp">
          <div className="input_wrap">
            <input
              type="search"
              placeholder="search"
              name="search"
              autoComplete="off"
            />
            <img className="field_icon" src={icon.search} alt="email" />
          </div>
        </div>

        {optionsData.map((data) => {
          return (
            <Fragment key={data.id}>
              <div
                className={`select_field ${selectedOption.includes(data.id) ? "active" : ''} wow fadeInUp `}
                onClick={() => addSelection(data.id)}
              >
                <p className="small_text">{data.text}</p>
                <div className="check_box">
                  <img src={icon.checked} alt="checked" className={selectedOption.includes(data.id) ? "active" : ''} />
                </div>
              </div>
            </Fragment>
          );
        })}
      </form>

      <div className="bottom_btn">
        <div className="btn_line">
          <button
            type="button"
            className="authbtn auth_primary wow slideInUp"
            onClick={continueHandler}
          >
            Continue
          </button>
          <button
            type="button"
            className="authbtn auth_secondary wow slideInUp"
            onClick={SkipHandler}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepA;
