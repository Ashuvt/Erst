import "./StepTwo.scss";

const StepTwo = ({ setTab }) => {
  return (
    <div className="step_two">
      <h6>Well Done...</h6>
      <h4>Now, let's add your experience</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <form>
        <div className="bi_sec">
          <div className="resume_field">
            <label>Job Title</label>
            <input type="text" placeholder="Job Title" />
          </div>
          <div className="resume_field">
            <label>EMPLOYER</label>
            <input type="text" placeholder="abc PVT. LTD." />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="resume_field">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
        </div>

        <div className="bi_sec">
          <div className="resume_field">
            <label>start Date</label>
            <input type="date" />
          </div>
          <div className="resume_field">
            <label>End Date</label>
            <input type="date" />
          </div>
        </div>
      </form>
      <div className="navigate_btns">
        <button
          type="button"
          className="primarybtn"
          onClick={() => setTab((prev) => prev - 1)}
        >
          Back
        </button>
        <button
          type="button"
          className="primarybtn"
          onClick={() => setTab((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
