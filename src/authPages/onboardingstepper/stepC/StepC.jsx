import "./StepC.scss";
import { Fragment, useState } from "react";

const StepC = ({ setStep, name }) => {
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

  const [selectedTags, setSelectedTags] = useState([]);

  const continueHandler = () => {
    SkipHandler();
  };

  const SkipHandler = () => {
    setStep((prev) => prev + 1);
  };

  const addTag = (selectedId) => {
    setSelectedTags((prev) => {
      if (selectedTags.includes(selectedId)) {
        return selectedTags.filter((id) => id !== selectedId);
      } else {
        return [...selectedTags, selectedId];
      }
    });
  };

  return (
    <div className="step_c">
      <h1 className="small_title wow fadeInUp">
        Hey {name ? name : "User"}, tell us about fields of interests
      </h1>
      <p className="wow fadeInUp">Let’s help you setup your learning path</p>

      <div className="tags_wrap">
        {tagsData.map((ele) => {
          return (
            <Fragment key={ele.id}>
              <button
                type="button"
                className={`tagbtn wow fadeInUp ${
                  selectedTags.includes(ele.id) ? "active" : ""
                }`}
                onClick={() => addTag(ele.id)}
              >
                {ele.text}
              </button>
            </Fragment>
          );
        })}
      </div>

      <div className="btns">
        <button
          type="button"
          className="authbtn auth_primary wow fadeInUp"
          onClick={continueHandler}
        >
          Continue
        </button>
        <button
          type="button"
          className="authbtn auth_secondary wow fadeInUp"
          onClick={SkipHandler}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default StepC;
