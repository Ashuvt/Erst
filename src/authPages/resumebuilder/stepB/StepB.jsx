import { Fragment, useState, useRef } from "react";
import { countries } from "../../../utils/countrylist";
import TitleStep from "../titlestep/TitleStep";
import "./StepB.scss";
import { MdOutlineDateRange } from "react-icons/md";
import ExperienceCard from "./experiencecard/ExperienceCard";
import NextPrevBtns from "../nextPrevBtns/NextPrevBtns";

import { v4 as uuidv4 } from "uuid";

const StepB = ({
  formB,
  setFormB,
  experiensList,
  setExperiensList,
  submitStepB,
  goPrev,
}) => {
  const today = new Date().toISOString().split("T")[0];
  const sectionRef = useRef(null);

  const [forEdit, setForEdit] = useState(false);
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

    if (name === "endDate") {
      setFormB((values) => ({ ...values, endDate: value, currentlyWorking: false }));
    } else if (name === "currentlyWorking") {
      setFormB((values) => ({
        ...values,
        currentlyWorking: e.target.checked,
        endDate: "",
      }));
    } else {
      setFormB((values) => ({ ...values, [name]: value }));
    }

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
      formB.startDate &&
      formB.jobDescription
    ) {
      if (forEdit) {
        setExperiensList((prev) => {
          return [
            ...prev.filter((ele) => ele?._id !== formB?._id),
            { ...formB },
          ];
        });
      } else {
        setExperiensList((prev) => [...prev, { id: uuidv4(), ...formB }]);
      }
      setForEdit(false);
      setFormB({
        jobTitle: "",
        employer: "",
        city: "",
        country: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
        currentlyWorking: false,
      });
    }

    setFormB({
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      currentlyWorking: false,
    });
  };

  const deleteHandler = (itemId) => {
    setExperiensList((prev) => prev.filter((item) => item?._id !== itemId));
  };

  const submitDisabled = () => {
    if (
      formB.jobTitle.trim().length === 0 ||
      formB.employer.trim().length === 0 ||
      formB.city.trim().length === 0 ||
      formB.startDate.trim().length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
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
                <option value="" defaultValue>
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
                    value={formB?.startDate ? formB?.startDate.substr(0, 10) : ""}
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
                  value={formB?.endDate ? formB.endDate.substr(0, 10) : ""}
                  onChange={fieldBHandler}
                  autoComplete="off"
                  min={formB.startDate}
                  max={today}
                />
                <MdOutlineDateRange />
              </div>
            </div>
          </div>
          <div className="check_line">
            <input
              type="checkbox"
              className="normal"
              name="currentlyWorking"
              checked={formB.currentlyWorking}
              onChange={fieldBHandler}
              style={{ height: "20px" }}
            />
            <label>I am currently working here</label>
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

          <button
            type="button"
            className="primarybtn"
            style={{ marginLeft: "auto", marginTop: "16px" }}
            onClick={addExerience}
            disabled={submitDisabled()}
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
                <Fragment key={data?._id}>
                  <ExperienceCard
                    data={data}
                    setFormB={setFormB}
                    index={i}
                    setForEdit={setForEdit}
                    onDelete={deleteHandler}
                  />
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
      <NextPrevBtns
        backDisabled={false}
        nextDisabled={false}
        onPrev={goPrev}
        onNext={submitStepB}
      />
      <div ref={sectionRef}></div>
    </Fragment>
  );
};

export default StepB;
