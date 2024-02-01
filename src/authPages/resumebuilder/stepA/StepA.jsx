import TitleStep from "../titlestep/TitleStep";
import "./StepA.scss";

const StepA = ({setTab}) => {
  return (
    <div className="step_one">
      <TitleStep
      title="Let's start with your header"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
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
     
    </div>
  );
};

export default StepA;
