import TitleStep from "../titlestep/TitleStep";
import "./StepC.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const StepC = ({ formC, setFormC }) => {
  const [schoolNameError, setSchoolNameError] = useState("");
  const [schoolLocationError, setSchoolLocationError] = useState("");
  const [degreeError, setDegreeError] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [fromError, setFromError] = useState("");

  const fieldCHandler = (e) => {
    const { name, value } = e.target;
    setFormC((values) => ({ ...values, [name]: value }));
    validation(name, value);
  };

  const validation = (name, value) => {
    if (name === "schoolName") {
      if (value.trim().length === 0) {
        setSchoolNameError("This field is required!");
      } else {
        setSchoolNameError("");
      }
    } else if (name === "schoolLocation") {
      if (value.trim().length === 0) {
        setSchoolLocationError("This field is required!");
      } else {
        setSchoolLocationError("");
      }
    } else if (name === "degree") {
      if (value.trim().length === 0) {
        setDegreeError("This field is required!");
      } else {
        setDegreeError("");
      }
    } else if (name === "fieldOfStudy") {
      if (value.trim().length === 0) {
        setFieldError("This field is required!");
      } else {
        setFieldError("");
      }
    } else if (name === "dateFrom") {
      if (value.trim().length === 0) {
        setFromError("This field is required!");
      } else {
        setFromError("");
      }
    }
  };
  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    validation(name, value);
  };
  return (
    <div className="steper_c">
      <TitleStep
        title="Tell us about your education"
        text="Tell us about any colleges, vocational programs, or training courses you took. Even if you didn’t finish, it’s important to list them."
      />

      <form>
        <div className="bi_sec">
          <div className="resume_field">
            <label>School name</label>
            <input
              type="text"
              placeholder="School Name"
              name="schoolName"
              value={formC.schoolName || ""}
              onChange={fieldCHandler}
              onBlur={onBlurHandler}
              autoComplete="off"
            />
            {schoolNameError  && <p className="error">{schoolNameError}</p>}
          </div>
          <div className="resume_field">
            <label>School location</label>
            <input
              type="text"
              placeholder="School Location"
              name="schoolLocation"
              value={formC.schoolLocation || ""}
              onChange={fieldCHandler}
              onBlur={onBlurHandler}
              autoComplete="off"
            />
            {schoolLocationError  && <p className="error">{schoolLocationError}</p>}
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>Degree</label>
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              value={formC.degree || ""}
              onChange={fieldCHandler}
              onBlur={onBlurHandler}
              autoComplete="off"
            />
            {degreeError  && <p className="error">{degreeError}</p>}
          </div>

          <div className="resume_field">
            <label>Field of study</label>
            <input
              type="text"
              placeholder="Field of study"
              name="fieldOfStudy"
              value={formC.fieldOfStudy || ""}
              onChange={fieldCHandler}
              onBlur={onBlurHandler}
              autoComplete="off"
            />
             {fieldError  && <p className="error">{fieldError}</p>}
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>Date from</label>
            <div className="date_wrap">
              <input
                type="date"
                name="dateFrom"
                value={formC.dateFrom || ""}
                onChange={fieldCHandler}
                onBlur={onBlurHandler}
                autoComplete="off"
              />
              <MdOutlineDateRange />
            </div>
            {fromError  && <p className="error">{fromError}</p>}
          </div>
          <div className="resume_field">
            <label>Date to</label>
            <div className="date_wrap">
              <input
                type="date"
                name="dateTo"
                value={formC.dateTo || ""}
                onChange={fieldCHandler}
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
            name="stillEnrolled"
            value={formC.isEnrolled}
            onChange={fieldCHandler}
          />
          <label>I am still enrolled</label>
        </div>
      </form>
      <button type="button" class="add_btn">
        <IoMdAdd /> Add More Course
      </button>
    </div>
  );
};
export default StepC;
