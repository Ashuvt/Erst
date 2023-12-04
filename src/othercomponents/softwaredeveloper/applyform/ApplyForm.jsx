import { useState } from "react";
import "./ApplyForm.scss";
import { icons } from "../../../utils/images/images";

const ApplyForm = () => {
  const [applyFormData, setApplyFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setApplyFormData(values => ({...values, [name]: value}))
  };   

  const applyNow = (e) => {
    e.preventDefault();
    console.log(applyFormData);
  }

  return (
    <div className="apply_form">
      <div className="form_wraper">
        <div className="top_box">
          <div className="info">
            <img src={icons.filledDate} alt="calender" />
            <p>full time</p>
          </div>

          <div className="info">
            <img src={icons.filledWatch} alt="calender" />
            <p>9:00 - 18:00</p>
          </div>

          <div className="info">
            <img src={icons.filledLocation} alt="calender" />
            <p>Italy</p>
          </div>
        </div>
        <form>
          <p>name</p>
          <div className="field_line">
            <input
              type="text"
              name="fname"
              value={applyFormData.fname}
              placeholder="First name"
              onChange={formHandler}
            />
            <input
              type="text"
              name="lname"
              value={applyFormData.lname}
              placeholder="Last name"
              onChange={formHandler}
            />
          </div>
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={applyFormData.email}
            placeholder="your email"
            onChange={formHandler}
          />
          <p>phone</p>
          <input
            type="number"
            name="phone"
            value={applyFormData.phone}
            placeholder="(555) 555-555"
            onChange={formHandler}
          />
          <button type="button" className="primarybtn" onClick={applyNow}>
            apply now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
