import TitleStep from "../titlestep/TitleStep";
import "./StepF.scss";
import Accordion from "react-bootstrap/Accordion";

const StepF = () => {
  return (
    <div className="steper_f">
      <TitleStep
        title="Add More Details"
        text="This is an opportunity to highlight qualifications that don't fit into standard resume sections."
      />

      <div className="additional_acc">
        <Accordion>

          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
             One
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
             two
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
             three
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
            Four
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Accordion Item #5</Accordion.Header>
            <Accordion.Body>
             Five
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  );
};
export default StepF;
