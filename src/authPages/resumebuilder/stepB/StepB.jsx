import { Fragment, useState } from "react";
import { countries } from "../../../utils/countrylist";
import TitleStep from "../titlestep/TitleStep";
import "./StepB.scss";
import { MdOutlineDateRange } from "react-icons/md";

import ExperienceCard from "./experiencecard/ExperienceCard";

const StepB = ({ formB, setFormB, experiensList, setExperiensList }) => {
  const today = new Date().toISOString().split("T")[0];

  const [jobTitleError, setJobTitleError] = useState("");
  const [employerError, setEmployerError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [jobDescError, setJobDescError] = useState("");

  const validation = (name, value) => {
    if (name === "jobTitle") {
      if (value.trim().length === 0) {
        setJobTitleError("This field is required!");
      } else {
        setJobTitleError("");
      }
    } else if (name === "employer") {
      if (value.trim().length === 0) {
        setEmployerError("This field is required!");
      } else {
        setEmployerError("");
      }
    } else if (name === "city") {
      if (value.trim().length === 0) {
        setCityError("This field is required!");
      } else {
        setCityError("");
      }
    } else if (name === "country") {
      if (value.trim().length === 0) {
        setCountryError("This field is required!");
      } else {
        setCountryError("");
      }
    } else if (name === "startDate") {
      if (value.trim().length === 0) {
        setStartDateError("This field is required!");
      } else {
        setStartDateError("");
      }
    } else if (name === "jobDescription") {
      if (value.trim().length === 0) {
        setJobDescError("This field is required!");
      } else {
        setJobDescError("");
      }
    }
  };

  const fieldBHandler = (e) => {
    const { name, value } = e.target;
    setFormB((values) => ({ ...values, [name]: value }));
    validation(name, value);
  };

  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    validation(name, value);
  };

  const addExerience = () => {
    if (
      formB.jobTitle &&
      formB.employer &&
      formB.city &&
      formB.country &&
      formB.startDate
    ) {
      setExperiensList((prev) => [...prev, formB]);
    }

    setFormB({
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      isWorking: false,
    });
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
              onBlur={onBlurHandler}
              autoComplete="off"
            />
            {jobTitleError && <p className="error">{jobTitleError}</p>}
          </div>
          <div className="resume_field">
            <label>EMPLOYER</label>
            <input
              type="text"
              placeholder="abc PVT. LTD."
              name="employer"
              value={formB.employer || ""}
              onChange={fieldBHandler}
              onBlur={onBlurHandler}
              autoComplete="off"
            />
            {employerError && <p className="error">{employerError}</p>}
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
              onBlur={onBlurHandler}
              autoComplete="off"
            />
            {cityError && <p className="error">{cityError}</p>}
          </div>
          <div className="resume_field">
            <label>Country</label>
            <select
              name="country"
              onChange={fieldBHandler}
              onBlur={onBlurHandler}
            >
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
            {countryError && <p className="error">{countryError}</p>}
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
                  onBlur={onBlurHandler}
                  autoComplete="off"
                  max={today}
                />
                <MdOutlineDateRange />
              </div>
            </div>
            {startDateError && <p className="error">{startDateError}</p>}
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
                min={formB.startDate}
                max={today}
              />
              <MdOutlineDateRange />
            </div>
          </div>
        </div>

        <div className="resume_field">
          <label>Job Description</label>
          <textarea
            type="text"
            placeholder="Job Description"
            name="jobDescription"
            value={formB.jobDescription}
            onChange={fieldBHandler}
            onBlur={onBlurHandler}
          />
           {jobDescError && <p className="error">{jobDescError}</p>}
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
        <button
        type="button"
        className="primarybtn"
        style={{ marginLeft: "auto" }}
        onClick={addExerience}
      >
        submit
      </button>
      </form>

     

      {/* Experience List */}

      {experiensList.length > 0 && (
        <div className="experienc_list">
          <h6 className="title">Review your experience</h6>
          {experiensList.map((data, i) => {
            return (
              <Fragment key={i}>
                <ExperienceCard data={data} setFormB={setFormB} />
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StepB;
