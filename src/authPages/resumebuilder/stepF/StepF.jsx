import { useState } from "react";
import TitleStep from "../titlestep/TitleStep";
import "./StepF.scss";
import Accordion from "react-bootstrap/Accordion";
import { ImLink } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";
import { FaAward } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NextPrevBtns from "../nextPrevBtns/NextPrevBtns";

const StepF = ({
  activities,
  setActivities,
  awards,
  setAwards,
  certifications,
  setCertifications,
  socialLinks,
  setSocialLinks,
  goPrev,
  submitStepF
}) => {
  const [link, setLink] = useState();
  const addLink = () => {
    setLink("");
    setSocialLinks((prev) => [...prev, link]);
  };
  const deletLink = (item) => {
    setSocialLinks((prev) => [...prev.filter((ele) => ele !== item)]);
  };
  return (
    <div className="steper_f">
      <TitleStep
        title="Add More Details"
        text="This is an opportunity to highlight qualifications that don't fit into standard resume sections."
      />
      <div className="additional_acc">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="btn_wrap">
                <AiOutlineInteraction />
                <div className="text">
                  <p className="heading">Activities</p>
                  <p>
                    Show that you're a well-rounded individual! This highlights
                    your ability to balance different aspects of your life.
                  </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ReactQuill
                theme="snow"
                value={activities}
                onChange={setActivities}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="btn_wrap">
                <FaAward />
                <div className="text">
                  <p className="heading">Awards, Accomplishments, and Honors</p>
                  <p>
                    Did you receive awards, exceed targets, earn a leadership
                    role or achieve recognition of some sort? Make them shine in
                    this section.
                  </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ReactQuill theme="snow" value={awards} onChange={setAwards} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="btn_wrap">
                <AiFillSafetyCertificate />
                <div className="text">
                  <p className="heading">Certifications and Licenses</p>
                  <p>
                    Elevate your resume with noteworthy credentials that prove
                    you are an expert in your field.
                  </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ReactQuill
                theme="snow"
                value={certifications}
                onChange={setCertifications}
              />
            </Accordion.Body>
          </Accordion.Item>          
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="btn_wrap">
                <IoShareSocial />
                <div className="text">
                  <p className="heading">Websites and Social Links</p>
                  <p>
                    Include a direct link to your portfolio or samples of your
                    work for an added boost. Let your skills speak for
                    themselves!
                  </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {socialLinks.length > 0 &&
                socialLinks.map((data) => {
                  return (
                    <div className="link_box">
                      <div className="left">
                        <p>
                          <ImLink />
                          {data}
                        </p>
                      </div>
                      <div className="right">
                        {/* <button type="button" onClick={() => setLink(data)}>
                              <MdModeEdit />
                            </button> */}
                        <button type="button" onClick={() => deletLink(data)}>
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  );
                })}
              <form>
                <div className="resume_field">
                  <label>Link / Url</label>
                  <div className="input_wrap">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                    <button type="button" onClick={addLink} disabled={link?.trim()?.length === 0}>
                      <IoMdAdd />
                    </button>
                  </div>
                </div>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <NextPrevBtns
        backDisabled={false}
        nextDisabled={false}
        onPrev={goPrev}
        onNext={submitStepF}
      />
    </div>
  );
};
export default StepF;
