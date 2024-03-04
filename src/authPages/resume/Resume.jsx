import "./Resume.scss";
import AuthLayout from "../AuthLayout";
import { Fragment, useEffect, useState, useRef } from "react";
import axios from "axios";
import { baseUrl, getResume } from "../../utils/apidata";

import { GoDownload } from "react-icons/go";
import { SlPrinter } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { MdAddIcCall } from "react-icons/md";
import { PiAddressBook } from "react-icons/pi";
import { AiOutlineLink } from "react-icons/ai";

import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js";

export const Resume = () => {
  const navigate = useNavigate();

  const forPrintRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => forPrintRef.current,
  });

  const downloadAsPDF = () => {
    const element = document.getElementById('printable');    
    html2pdf(element);
  };

  const [loader, setLoader] = useState(false);

  const [basicInnfo, setBasicInfo] = useState({});
  const [experiensList, setExperiensList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [summary, setSummary] = useState("");
  const [activities, setActivities] = useState("");
  const [awards, setAwards] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [certification, setCertification] = useState("");

  // Get Resume API

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const getResumeApi = async () => {
    setLoader(true);
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.get(`${baseUrl}/${getResume}`, { headers });
      if (res?.data?.success) {
        console.log("Resume:::", res?.data?.data);
        setBasicInfo(res?.data?.data?.header);
        setExperiensList([...res?.data?.data?.experience]);
        setEducationList([...res?.data?.data?.education]);
        setSelectedSkills([...res?.data?.data?.skills]);
        setSummary(res?.data?.data?.summary);
        setActivities(res?.data?.data?.activities);
        setAwards(res?.data?.data?.awards);
        setSocialLinks([...res?.data?.data?.websiteLinks]);
        setCertification(res?.data?.data?.certifications);

        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getResumeApi();
  }, []);

  return (
    <AuthLayout>
      <section className="resume">
        <div className="content_wrap">
          {loader ? (
            <div className="loader_wrap">
              <div className="spinners"></div>
            </div>
          ) : (
            <Fragment>
              <div className="resume_paper">
                <div className="left_info">
                  <h6>Contact</h6>
                  {basicInnfo?.phone && (
                    <div className="info_line">
                      <MdAddIcCall />
                      <p>{basicInnfo?.phone}</p>
                    </div>
                  )}

                  {basicInnfo?.email && (
                    <div className="info_line">
                      <MdOutlineEmail />
                      <p>{basicInnfo?.email}</p>
                    </div>
                  )}

                  {basicInnfo?.email && (
                    <div className="info_line">
                      <PiAddressBook />
                      <p>
                        {basicInnfo?.city}{" "}
                        {basicInnfo?.country && `, ${basicInnfo?.country}`}{" "}
                        {basicInnfo?.pincode && `, ${basicInnfo?.pincode}`}
                      </p>
                    </div>
                  )}

                  <h6 className="m_t b_t p_t">Education</h6>

                  {educationList?.length > 0 &&
                    educationList.map((data, i) => {
                      return (
                        <Fragment key={data._id}>
                          {i > 0 && <div className="edu_divider"></div>}

                          <div className="education_wrap">
                            <p>
                              {formatDate(data?.dateFrom)} -
                              {formatDate(data?.dateTo)}
                            </p>
                            <p>
                              {data.degree} | {data.fieldOfStudy}
                            </p>
                            <p>
                              {data.schoolName} | {data.schoolLocation}
                            </p>
                          </div>
                        </Fragment>
                      );
                    })}

                  <h6 className="m_t b_t p_t">Skills</h6>

                  {selectedSkills.length > 0 && (
                    <ul>
                      {selectedSkills.map((skill, i) => {
                        return (
                          <li key={i}>
                            <p>{skill}</p>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  <h6 className="m_t b_t p_t">Links</h6>
                  {socialLinks?.length > 0 &&
                    socialLinks.map((link, j) => {
                      return (
                        <Fragment key={j}>
                          <a href={link} target="_blank">
                            <p>
                              <AiOutlineLink /> {link}
                            </p>
                          </a>
                        </Fragment>
                      );
                    })}
                </div>
                <div className="right_info">
                  <h4>
                    {basicInnfo?.firstname} {basicInnfo?.lastname}
                  </h4>

                  <h6 className="p_t p_t b_t">Experience</h6>

                  {experiensList?.length > 0 &&
                    experiensList?.map((data) => {
                      return (
                        <div className="experience_wrap" key={data?._id}>
                          <p>
                            {data?.jobTitle} | {data?.employer}
                          </p>
                          <p>
                            {data?.city}, {data?.country} |
                            {data?.startDate && formatDate(data?.startDate)} - {data?.endDate && formatDate(data?.endDate)} 
                            {data?.currentlyWorking && "Present"}
                          </p>
                          <p className="m_8">{data?.jobDescription}</p>
                        </div>
                      );
                    })}

                  <h6 className="p_t p_t b_t m_t">Activities</h6>
                  <div dangerouslySetInnerHTML={{ __html: activities }}></div>

                  <h6 className="p_t p_t b_t">
                    Awards, Accomplishments, and Honors
                  </h6>
                  <div dangerouslySetInnerHTML={{ __html: awards }}></div>

                  <h6 className="p_t p_t b_t">Certifications and Licenses</h6>
                  <div
                    dangerouslySetInnerHTML={{ __html: certification }}
                  ></div>

                  <h6 className="p_t p_t b_t">Summary</h6>
                  <p>{summary}</p>
                </div>
              </div>
              <div className="settings">
                <button type="button" onClick={handlePrint}>
                  <SlPrinter /> Print
                </button>
                <button type="button" onClick={downloadAsPDF}>
                  <GoDownload /> Download
                </button>
                <button type="button">
                  <MdOutlineEmail /> Email
                </button>
                <div className="line"></div>
                <p className="small_text">Resume Section</p>
                <div className="steppers">
                  <button
                    className="count"
                    type="button"
                    onClick={() => navigate("/auth/resumebuilder/1")}
                  >
                    <div className="circle">
                      <p>1</p>
                    </div>
                    Header
                  </button>

                  <button
                    className="count"
                    type="button"
                    onClick={() => navigate("/auth/resumebuilder/2")}
                  >
                    <div className="circle">
                      <p>2</p>
                    </div>
                    Experience
                  </button>

                  <button
                    className="count"
                    type="button"
                    onClick={() => navigate("/auth/resumebuilder/3")}
                  >
                    <div className="circle">
                      <p>3</p>
                    </div>
                    Education
                  </button>

                  <button
                    className="count"
                    type="button"
                    onClick={() => navigate("/auth/resumebuilder/4")}
                  >
                    <div className="circle">
                      <p>4</p>
                    </div>
                    Skills
                  </button>

                  <button
                    className="count"
                    type="button"
                    onClick={() => navigate("/auth/resumebuilder/5")}
                  >
                    <div className="circle">
                      <p>5</p>
                    </div>
                    Summary
                  </button>

                  <button
                    className="count"
                    type="button"
                    onClick={() => navigate("/auth/resumebuilder/6")}
                  >
                    <div className="circle">
                      <p>6</p>
                    </div>
                    Additional info
                  </button>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </section>

      {/* For Print */}
      <div className="hide">
      <section className="resume" id="printable">
        <div className="content_wrap">
          <Fragment>
            <div
              className="resume_paper"
              ref={forPrintRef}
              style={{
                backgroundColor: "#ffffff",
                minHeight: "calc(100vh - 100px)",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <div
                className="left_info"
                style={{
                  width: "300px",
                  backgroundColor: "#0077C2",
                  minHeight: "100%",
                  padding: "48px 24px",
                }}
              >
                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Contact
                </h6>
                {basicInnfo?.phone && (
                  <div
                    className="info_line"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "8px",
                      color: "#ffffff",
                    }}
                  >
                    <MdAddIcCall />
                    <p>{basicInnfo?.phone}</p>
                  </div>
                )}

                {basicInnfo?.email && (
                  <div
                    className="info_line"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "8px",
                      color: "#ffffff",
                    }}
                  >
                    <MdOutlineEmail />
                    <p>{basicInnfo?.email}</p>
                  </div>
                )}

                {basicInnfo?.email && (
                  <div
                    className="info_line"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "8px",
                      color: "#ffffff",
                    }}
                  >
                    <PiAddressBook />
                    <p>
                      {basicInnfo?.city}{" "}
                      {basicInnfo?.country && `, ${basicInnfo?.country}`}{" "}
                      {basicInnfo?.pincode && `, ${basicInnfo?.pincode}`}
                    </p>
                  </div>
                )}

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px dashed white",
                  }}
                >
                  Education
                </h6>

                {educationList?.length > 0 &&
                  educationList.map((data, i) => {
                    return (
                      <Fragment key={data._id}>
                        {i > 0 && (
                          <div
                            className="edu_divider"
                            style={{
                              width: "100px",
                              margin: "12px 0",
                              height: "1px",
                              borderBottom: " 1px solid #ffffff",
                            }}
                          ></div>
                        )}

                        <div className="education_wrap">
                          <p>
                            {formatDate(data?.dateFrom)} -
                            {formatDate(data?.dateTo)}
                          </p>
                          <p>
                            {data.degree} | {data.fieldOfStudy}
                          </p>
                          <p>
                            {data.schoolName} | {data.schoolLocation}
                          </p>
                        </div>
                      </Fragment>
                    );
                  })}

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px dashed white",
                  }}
                >
                  Skills
                </h6>

                {selectedSkills.length > 0 && (
                  <ul
                    style={{
                      listStyleType: "disc",
                      color: "white",
                      paddingLeft: "24px",
                    }}
                  >
                    {selectedSkills.map((skill, i) => {
                      return (
                        <li key={i}>
                          <p>{skill}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px dashed white",
                  }}
                >
                  Links
                </h6>
                {socialLinks?.length > 0 &&
                  socialLinks.map((link, j) => {
                    return (
                      <Fragment key={j}>
                        <a
                          href={link}
                          target="_blank"
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <AiOutlineLink /> {link}
                          </p>
                        </a>
                      </Fragment>
                    );
                  })}
              </div>
              <div
                className="right_info"
                style={{
                  padding: "24px",
                  width: "calc(100% - 300px)",
                  paddingBottom: "100px",
                  paddingTop: "48px",
                }}
              >
                <h4
                  style={{
                    color: "#0077C2",
                    marginBottom: "16px",
                  }}
                >
                  {basicInnfo?.firstname} {basicInnfo?.lastname}
                </h4>

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    color: "#0077C2",
                    borderTop: "1px dashed #0077C2",
                    marginBottom:"16px"
                  }}
                >
                  Experience
                </h6>

                {experiensList?.length > 0 &&
                  experiensList?.map((data) => {
                    return (
                      <div
                        className="experience_wrap"
                        key={data?._id}
                        style={{
                          padding: "8px",
                          border: "1px solid #0077C2",
                          borderRadius: "8px",
                          marginTop: "8px",
                          width: "100%",
                        }}
                      >
                        <p
                          style={{
                            color: "#222",
                            lineHeight: "20px",
                          }}
                        >
                          {data?.jobTitle} | {data?.employer}
                        </p>
                        <p
                          style={{
                            color: "#222",
                            lineHeight: "20px",
                          }}
                        >
                          {data?.city}, {data?.country} |{" "}
                          {formatDate(data?.startDate)} -{" "}
                          {data?.currentlyWorking
                            ? "Present"
                            : formatDate(data?.endDate)}
                        </p>
                        <p
                          style={{
                            color: "#222",
                            lineHeight: "20px",
                            marginTop: "8px",
                          }}
                        >
                          {data?.jobDescription}
                        </p>
                      </div>
                    );
                  })}

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    color: "#0077C2",
                    borderTop: "1px dashed #0077C2",
                  }}
                >
                  Activities
                </h6>
                <div dangerouslySetInnerHTML={{ __html: activities }}></div>

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    color: "#0077C2",
                    borderTop: "1px dashed #0077C2",
                  }}
                >
                  Awards, Accomplishments, and Honors
                </h6>
                <div dangerouslySetInnerHTML={{ __html: awards }}></div>

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    color: "#0077C2",
                    borderTop: "1px dashed #0077C2",
                  }}
                >
                  Certifications and Licenses
                </h6>
                <div dangerouslySetInnerHTML={{ __html: certification }}></div>

                <h6
                  style={{
                    fontFamily: "SpaceGrotesk-Regular",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    marginTop: "16px",
                    paddingTop: "16px",
                    color: "#0077C2",
                    borderTop: "1px dashed #0077C2",
                  }}
                >
                  Summary
                </h6>
                <p
                  style={{
                    color: "#222",
                  }}
                >
                  {summary}
                </p>
              </div>
            </div>
          </Fragment>
        </div>
      </section>
      </div>
    </AuthLayout>
  );
};
export default Resume;
