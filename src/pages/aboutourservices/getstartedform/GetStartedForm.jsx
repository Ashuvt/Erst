import { useEffect, useState } from "react";
import "./GetStartedForm.scss";
import { images } from "../../../utils/images/images";

const GetStartedForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    message: "",
    type: "",
  });

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(values => ({...values, [name]: value}))
  };

const formSubmitHandler = (e) => {
    e.preventDefault();
    
    console.log(formData)

}

  return (
    <section className="get_started_form p_bottom">
      <div className="content_wrap">
        <div className="img_wraper">
          <img src={images.info} alt="info" />
        </div>
        <div className="form_wraper">
          <form>
            <h6>PERSONAL DATA</h6>
            <div className="field_line">
              <input
                type="text"
                placeholder="name"
                value={formData.name}
                name="name"
                onChange={formHandler}
              />
              <input
                type="email"
                placeholder="mail"
                value={formData.mail}
                name="mail"
                onChange={formHandler}
              />
              <input
                type="number"
                placeholder="phone"
                value={formData.phone}
                name="phone"
                onChange={formHandler}
              />
            </div>
            <h6>message</h6>
            <textarea
              placeholder="write about your needs"
              value={formData.message}
              name="message"
              onChange={formHandler}
            ></textarea>
            <div className="radio_line">
              <div className="radio_field">
                <input
                  type="radio"
                  value="free demo"
                  name="type"
                  id="first"
                  onChange={formHandler}
                />
                <label htmlFor="first">free demo</label>
              </div>

              <div className="radio_field">
                <input
                  type="radio"
                  value="buy for 1 mo"
                  name="type"
                  id="second"
                  onChange={formHandler}
                />
                <label htmlFor="second">buy for 1 mo</label>
              </div>

              <div className="radio_field">
                <input
                  type="radio"
                  value="buy for 1-6 mo"
                  name="type"
                  id="third"
                  onChange={formHandler}
                />
                <label htmlFor="third">buy for 3-6 mo</label>
              </div>

              <div className="radio_field">
                <input
                  type="radio"
                  value="unlimited"
                  name="type"
                  id="fourth"
                  onChange={formHandler}
                />
                <label htmlFor="fourth">unlimited</label>
              </div>
            </div>
            <button type="button" className="primarybtn" onClick={formSubmitHandler} >
              let's get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedForm;
