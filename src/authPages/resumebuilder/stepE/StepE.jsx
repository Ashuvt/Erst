import { useState } from "react";
import TitleStep from "../titlestep/TitleStep";
import "./StepE.scss";

const StepE = ({summary, setSummary}) => {

  const [error, setError] = useState("")

const summaryHandler = (e) => {
  setSummary(e.target.value);
  if (summary.trim().length === 0) {
    setError("This field is required!");
  } else {
    setError("");
  }
}

const blurHandler = () => {
  if (summary.trim().length === 0) {
    setError("This field is required!");
  } else {
    setError("");
  }
}


  return (
    <div className="steper_e">
     <TitleStep
     title="Summary"
     text="Almost done! Let's finish with a strong summary"
     />

     <form>
     <div className="resume_field">
            <label>Summary</label>
            <textarea
              type="text"
              placeholder="Summary"
              name="summary"
              value={summary}                            
              autoComplete="off"
              onChange={summaryHandler}
              onBlur={blurHandler}
            />  
            {error && <p className="error">Field is required!</p>}        
          </div>
     </form>
     
    </div>
  );
};
export default StepE;
