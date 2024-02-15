import TitleStep from "../titlestep/TitleStep";
import "./StepB.scss";

const StepB = ({ formB, setFormB }) => {

  const fieldBHandler = (e) => {
    const { name, value } = e.target;
    setFormB((values) => ({ ...values, [name]: value }));
  };


  return (
    <div className="steper_b">
      <TitleStep
        title="Now, let's add your experience"
        text="Start with your most recent job first."
      />
      <form>
        <div className="bi_sec">
          <div className="resume_field">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              value={formB.jobTitle || ""}
              onChange={fieldBHandler}
            />
          </div>
          <div className="resume_field">
            <label>EMPLOYER</label>
            <input
              type="text"
              placeholder="abc PVT. LTD."
              name="employer"
              value={formB.employer || ""}
              onChange={fieldBHandler}
            />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formB.city || ""}
              onChange={fieldBHandler}
            />
          </div>
          <div className="resume_field">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={formB.country || ""}
              onChange={fieldBHandler}
            />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>start Date</label>
            <div className="date_wrap">
              <input
                type="date"
                name="startDate"
                value={formB.startDate || ""}
                onChange={fieldBHandler}
              />
            </div>
          </div>
          <div className="resume_field">
            <label>End Date</label>
            <input 
            type="date"
             name="endDate" 
             value={formB.endDate || ""} 
             onChange={fieldBHandler}
             />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepB;
