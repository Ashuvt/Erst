import { Fragment } from "react";
import TitleStep from "../titlestep/TitleStep";
import "./StepA.scss";
import { countries } from "../../../utils/countrylist";

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
              autoComplete="off"
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
              value={formA.city || ""}
              onChange={fieldAHandler}
              autoComplete="off"
            />
          </div>

          <div className="bi_in_sec">
            <div className="resume_field">
              <label>Country</label>
              <select name="country" onChange={fieldAHandler} >
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
            <div className="resume_field">
              <label>PinCod</label>
              <input
                type="text"
                placeholder="Pin Code"
                name="pin"
                value={formA.pin || ""}
                onChange={fieldAHandler}
                autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepA;
