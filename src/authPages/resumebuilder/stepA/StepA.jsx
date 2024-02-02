import { useState } from "react";
import TitleStep from "../titlestep/TitleStep";
import "./StepA.scss";

const StepA = ({ formA, setFormA }) => {


  const fieldAHandler = (e) => {
    const { name, value } = e.target;
    setFormA((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="steper_a">
      <TitleStep
        title="Let's start with your header"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <form>
        <div className="bi_sec">
          <div className="resume_field">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="fName"
              value={formA.fName || ""}
              onChange={fieldAHandler}
            />
          </div>
          <div className="resume_field">
            <label>Second Name</label>
            <input
              type="text"
              placeholder="Second Name"
              name="sName"
              value={formA.sName || ""}
              onChange={fieldAHandler}
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
              value={formA.city || ""}
              onChange={fieldAHandler}
            />
          </div>

          <div className="bi_in_sec">
            <div className="resume_field">
              <label>Country</label>
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={formA.country || ""}
                onChange={fieldAHandler}
              />
            </div>
            <div className="resume_field">
              <label>PinCod</label>
              <input
                type="text"
                placeholder="Pin Code"
                name="pin"
                value={formA.pin || ""}
                onChange={fieldAHandler}
              />
            </div>
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>Phone</label>
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={formA.phone || ""}
              onChange={fieldAHandler}
            />
          </div>
          <div className="resume_field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formA.email || ""}
              onChange={fieldAHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepA;
