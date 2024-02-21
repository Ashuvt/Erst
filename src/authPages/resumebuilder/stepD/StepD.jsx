import { Fragment, useState } from "react";
import TitleStep from "../titlestep/TitleStep";
import "./StepD.scss";
import { skillList } from "./skills";
import { IoMdClose } from "react-icons/io";

import { IoMdAdd } from "react-icons/io";
import { MdOutlineRemove } from "react-icons/md";

const StepD = () => {
  const [skill, setSkill] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const inputHandler = (e) => {
    setSkill(e.target.value);
  };

  const addToSelectedSkill = () => {
  
    if (skill) {
      setSelectedSkills((prev) => [...prev, skill]);
    }
    setSkill("");
  };

  const addToSkill = (item) => {
    if(selectedSkills.includes(item)){
      setSelectedSkills(prev => {
        return [...prev.filter(ele => ele !== item)]
      })
    }else{
      setSelectedSkills((prev) => [...prev, item]);
    }    
  }

  const removeSkill = (item) => {
    setSelectedSkills(prev => {
      return [...prev.filter(ele => ele !== item)]
    })
  }

  return (
    <div className="steper_d">
      <TitleStep title="Skills" text="" />
      <form>
        <div className="resume_field">
          <label>Skill</label>
          <div className="input_wrap">
            <input
              type="text"
              placeholder="Enter Skill"
              name="skill"
              autoComplete="off"
              value={skill}
              onChange={inputHandler}
            />
            <button type="button" onClick={addToSelectedSkill}>
              <IoMdAdd />
            </button>
          </div>
        </div>
      </form>
      {/* Selected Skills List */}
      <div className="selected_skill">
        {selectedSkills.length > 0 &&
          selectedSkills.map((item) => {
            return (
              <div className="skill_pill">
                <p>{item}</p>
                <button type="button" onClick={() => removeSkill(item)}>
                  <IoMdClose />
                </button>
              </div>
            );
          })}
      </div>

      {/*Suggestions List  */}
      <div className="suggetions">
        {skillList.filter(ele => ele.skill.toLowerCase().includes(skill.toLowerCase()))?.map((data) => {
          return (
            <Fragment key={data.id}>
              <div className="skill_card" onClick={() => addToSkill(data.skill)}>
                <button type="button">
                  {
                    selectedSkills.includes(data.skill) ? <MdOutlineRemove /> : <IoMdAdd />
                  }                  
                </button>
                <p>{data.skill}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default StepD;
