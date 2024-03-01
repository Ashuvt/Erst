import "./Resume.scss";
import AuthLayout from "../AuthLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, getResume } from "../../utils/apidata";

import { GoDownload } from "react-icons/go";
import { SlPrinter } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Resume = () => {

  const navigate = useNavigate();

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

  const getResumeApi = async () => {

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
        setSocialLinks(res?.data?.data?.websiteLinks);
        setCertification(res?.data?.data?.certifications);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResumeApi();
  }, []);

  return (
    <AuthLayout>
      <section className="resume">
        <div className="content_wrap">
          <div className="resume_paper">
            <div className="left_info">
            </div>
            <div className="right">

            </div>

          </div>
          <div className="settings">
            <button type="button">
              <SlPrinter /> Print
            </button>
            <button type="button">
              <GoDownload /> Download
            </button>
            <button type="button">
              <MdOutlineEmail /> Email
            </button>
            <div className="line"></div>
            <p className="small_text">Resume Section</p>

            <button className="count" type="button" onClick={() => navigate("/auth/resuresumebuilderme/1")}>
              <div className="circle">
                <p>1</p>
              </div>
              Header
            </button>

            <button className="count" type="button" onClick={() => navigate("/auth/resumebuilder/2")}>
              <div className="circle">
                <p>2</p>
              </div>
              Experience
            </button>

            <button className="count" type="button" onClick={() => navigate("/auth/resumebuilder/3")}>
              <div className="circle">
                <p>3</p>
              </div>
              Education
            </button>

            <button className="count" type="button" onClick={() => navigate("/auth/resumebuilder/4")}>
              <div className="circle">
                <p>4</p>
              </div>
              Skills
            </button>

            <button className="count" type="button" onClick={() => navigate("/auth/resumebuilder/5")}>
              <div className="circle">
                <p>5</p>
              </div>
              Summary
            </button>

            <button className="count" type="button" onClick={() => navigate("/auth/resumebuilder/6")}>
              <div className="circle">
                <p>6</p>
              </div>
              Additional info
            </button>


          </div>
        </div>
      </section>
    </AuthLayout>
  );
};
export default Resume;
