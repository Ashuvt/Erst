import { Fragment, useState } from "react";
import TitleStep from "../titlestep/TitleStep";
import "./StepA.scss";
import { countries } from "../../../utils/countrylist";
import NextPrevBtns from "../nextPrevBtns/NextPrevBtns";

const StepA = ({ formA, setFormA, submitStepA, goPrev }) => {
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [pinError, setPinError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validation = (name, value) => {
    if (name === "firstname") {
      if (value.trim().length === 0) {
        setFnameError("This field is required!");
      } else {
        setFnameError("");
      }
    } else if (name === "lastname") {
      if (value.trim().length === 0) {
        setLnameError("This field is required!");
      } else {
        setLnameError("");
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
    } else if (name === "pincode") {
      if (value.trim().length === 0) {
        setPinError("This field is required!");
      } else {
        setPinError("");
      }
    } else if (name === "phone") {
      if (value.trim().length === 0) {
        setPhoneError("This field is required!");
      } else {
        setPhoneError("");
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim().length === 0) {
        setEmailError("This field is required");
      } else if (!emailRegex.test(value)) {
        setEmailError("Please enter valid email");
      } else {
        setEmailError("");
      }
    }
  };

  const fieldAHandler = (e) => {
    const { name, value } = e.target;
    setFormA((values) => ({ ...values, [name]: value }));
    validation(name, value);
  };

  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    validation(name, value);
  };

  const isNextDisabled = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formA?.firstname?.trim().length === 0 ||
      formA?.lastname?.trim().length === 0 ||
      formA?.city?.trim().length === 0 ||
      formA?.country?.trim().length === 0 ||
      formA?.pincode?.trim().length === 0 ||
      formA?.email?.trim().length === 0 ||
      !emailRegex.test(formA?.email?.trim())
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
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
                name="firstname"
                value={formA.firstname || ""}
                onChange={fieldAHandler}
                onBlur={onBlurHandler}
                autoComplete="off"
              />
              {fnameError && <p className="error">{fnameError}</p>}
            </div>
            <div className="resume_field">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formA.lastname || ""}
                onChange={fieldAHandler}
                onBlur={onBlurHandler}
                autoComplete="off"
              />
              {lnameError && <p className="error">{lnameError}</p>}
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
                onBlur={onBlurHandler}
                autoComplete="off"
              />
              {cityError && <p className="error">{cityError}</p>}
            </div>

            <div className="bi_in_sec">
              <div className="resume_field">
                <label>Country</label>
                <select
                  name="country"
                  onChange={fieldAHandler}
                  onBlur={onBlurHandler}
                >
                  <option value="" disabled>
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
              <div className="resume_field">
                <label>PinCod</label>
                <input
                  type="text"
                  placeholder="Pin Code"
                  name="pincode"
                  value={formA.pincode || ""}
                  onChange={fieldAHandler}
                  onBlur={onBlurHandler}
                  autoComplete="off"
                />
                {pinError && <p className="error">{pinError}*</p>}
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
                onBlur={onBlurHandler}
                autoComplete="off"
              />
              {phoneError && <p className="error">{phoneError}</p>}
            </div>
            <div className="resume_field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formA.email || ""}
                onChange={fieldAHandler}
                onBlur={onBlurHandler}
                autoComplete="off"
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
          </div>
        </form>
      </div>
      <NextPrevBtns
        backDisabled={true}
        nextDisabled={isNextDisabled()}
        onPrev={goPrev}
        onNext={submitStepA}
      />
    </Fragment>
  );
};

export default StepA;
