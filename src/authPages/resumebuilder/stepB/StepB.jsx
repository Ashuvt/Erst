import { Fragment } from "react";
import { countries } from "../../../utils/countrylist";
import TitleStep from "../titlestep/TitleStep";
import "./StepB.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
          </div>
          <div className="resume_field">
            <label>Country</label>
            <select name="country" onChange={fieldBHandler}>
              <option value="" disabled selected>
                -Select-
              </option>
              {countries.map((data) => {
                return (
                  <Fragment key={data.code}>
                    <option value={data.name}>{data.name}</option>
                  </Fragment>
                );
              })}
            </select>
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>start Date</label>
            <div className="date_wrap">
              <div className="date_wrap">
                <input
                  type="date"
                  name="startDate"
                  value={formB.startDate || ""}
                  onChange={fieldBHandler}
                  autoComplete="off"
                />
                <MdOutlineDateRange />
              </div>
            </div>
          </div>
          <div className="resume_field">
            <label>End Date</label>
            <div className="date_wrap">
              <input
                type="date"
                name="endDate"
                value={formB.endDate || ""}
                onChange={fieldBHandler}
                autoComplete="off"
              />
              <MdOutlineDateRange />
            </div>
          </div>
        </div>
        <div className="check_line">
        
          <input
            type="checkbox"
            className="normal"
            name="isWorking"
            value={formB.isWorking}
            onChange={fieldBHandler}        
          />
          <label>I am Currently working here</label>
        </div>
      </form>

      
      <button type="button" class="add_btn">
      <IoMdAdd /> Add more experience
      </button>
    </div>
  );
};

export default StepB;
