import "./StepOne.scss";

const StepOne = ({setTab}) => {
  return (
    <div className="step_one">
      <h4>Let's start with your header</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form>
        <div className="bi_sec">
          <div className="resume_field">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="resume_field">
            <label>Second Name</label>
            <input type="text" placeholder="Second Name" />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>

          <div className="bi_in_sec">
            <div className="resume_field">
              <label>Country</label>
              <input type="text" placeholder="Country" />
            </div>
            <div className="resume_field">
              <label>PinCod</label>
              <input type="text" placeholder="Pin Code" />
            </div>
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>Phone</label>
            <input type="number" placeholder="Phone" />
          </div>
          <div className="resume_field">
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
        </div>
      </form>
      <div className="navigate_btns">
            <button type="button" className="primarybtn" onClick={() => setTab(prev => prev - 1)}>Back</button>
            <button type="button" className="primarybtn" onClick={() => setTab(prev => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default StepOne;
