import "./StepC.scss";
import { Fragment } from "react";

const StepC = ({ setStep }) => {
  const tagsData = [
    {
      id: 0,
      text: "ComTIA security",
    },
    {
      id: 1,
      text: "ComTIA security",
    },
    {
      id: 2,
      text: "ComTIA security",
    },
    {
      id: 3,
      text: "Entry-level",
    },
    {
      id: 4,
      text: "Offensive",
    },
    {
      id: 5,
      text: "Entry-level",
    },
    {
      id: 6,
      text: "CEH",
    },
    {
      id: 7,
      text: "MITRE ATT&CK",
    },
    {
      id: 8,
      text: "CISM",
    },
    {
      id: 9,
      text: "MITRE ATT&CK",
    },
    {
      id: 10,
      text: "MITRE ATT&CK",
    },
    {
      id: 11,
      text: "Neutral",
    },
    {
      id: 12,
      text: "CEH",
    },
    {
      id: 13,
      text: "CISM",
    },
    {
      id: 14,
      text: "ComTIA security",
    },
    {
      id: 15,
      text: "ComTIA security",
    },
    {
      id: 16,
      text: "Defensive",
    },
    {
      id: 17,
      text: "ComTIA security",
    },
    {
      id: 18,
      text: "CISM",
    },
    {
      id: 19,
      text: "CISM",
    },
  ];

  const continueHandler = () => {};

  const SkipHandler = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="step_c">
      <h1 className="small_title">
        Hey Rajat, tell us about your department profession
      </h1>
      <p>Let’s help you setup your learning path</p>

      <div className="tags_wrap">
        {tagsData.map((ele) => {
          return (
            <Fragment key={ele.id}>
              <button type="button" className="tagbtn">{ele.text}</button>
            </Fragment>
          );
        })}
      </div>

      <div className="btns">
        <button
          type="button"
          className="authbtn auth_primary"
          onClick={continueHandler}
        >
          Continue
        </button>
        <button
          type="button"
          className="authbtn auth_secondary"
          onClick={SkipHandler}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default StepC;
