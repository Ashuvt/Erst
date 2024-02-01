import TitleStep from "../titlestep/TitleStep";
import "./StepB.scss";

const StepB = ({ setTab }) => {
  return (
    <div className="step_two">
      <TitleStep
      title="Now, let's add your experience"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <form>
        <div className="bi_sec">
          <div className="resume_field">
            <label>Job Title</label>
            <input type="text" placeholder="Job Title" />
          </div>
          <div className="resume_field">
            <label>EMPLOYER</label>
            <input type="text" placeholder="abc PVT. LTD." />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="resume_field">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>start Date</label>
            <input type="date" />
          </div>
          <div className="resume_field">
            <label>End Date</label>
            <input type="date" />
          </div>
        </div>
      </form>     
    </div>
  );
};

export default StepB;
