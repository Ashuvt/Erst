import { Fragment } from "react";
import "./ResumeViewer.scss";
import { ImLink } from "react-icons/im";

const ResumeViewer = ({
  formA,
  experiensList,
  educationList,
  selectedSkills,
  activities,
  awards,
  certifications,
  summary,
  socialLinks,
}) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <div className="resume_viewer">
      <div className="personal_info">
        <p className="header">Contact</p>
        {formA.phone && (
          <Fragment>
            <p class="title m_t">Phone</p>
            <p class="value">{formA.phone}</p>
          </Fragment>
        )}
        {formA.email && (
          <Fragment>
            <p class="title m_t">Email</p>
            <p class="value">{formA.email}</p>
          </Fragment>
        )}

        <p class="title m_t">Address</p>

        <p class="value">{formA.city}</p>
        <p class="value">{formA.country}</p>
        <p class="value">{formA.pin}</p>

        {educationList.length > 0 && (
          <Fragment>
            <p class="title m_t">Education</p>

            {educationList.map((data) => {
              return (
                <div className="education_wrap">
                  <p className="value">
                    {formatDate(data.dateFrom)} - {formatDate(data.dateTo)}
                  </p>
                  <p className="value">
                    {data.degree} | {data.fieldOfStudy}
                  </p>
                  <p className="value">{data.schoolName}</p>
                  <p className="value">{data.schoolLocation}</p>
                </div>
              );
            })}
          </Fragment>
        )}

        {selectedSkills.length > 0 && (
          <Fragment>
            <p className="header">Skills</p>
            {selectedSkills.map((item, j) => {
              return (
                <p className="value list" key={j}>
                  {item}
                </p>
              );
            })}
          </Fragment>
        )}

        {
          socialLinks.length > 0 && 
          <Fragment>
          <p className="header">Skills</p>
          {socialLinks.map((item, i) => {
              return (
                <p className="value list" key={i}>{item}</p>
              );
            })}

          </Fragment>
        }
      </div>

      <div className="right_info">
        <p className="name">
          <span>{formA.fName}</span> {formA.lName}
        </p>

        {experiensList.length > 0 && (
          <Fragment>
            <p className="header bb">Experience</p>
            <div className="experience_list">
              {experiensList.map((data, i) => {
                return (
                  <div className="ex_card" key={i}>
                    <p className="value">
                      {data.jobTitle} | {data.employer}
                    </p>
                    <p className="value">
                      {data.city}
                      {data.country && `, ${data.country}`}
                    </p>
                    <p className="value">
                      {formatDate(data.startDate)} - {formatDate(data.endDate)}
                    </p>
                    <p className="value">{data.jobDescription}</p>
                  </div>
                );
              })}
            </div>
          </Fragment>
        )}

        {activities && (
          <Fragment>
            <div className="text_editor">
              <p className="header bb">Activities</p>
              <div dangerouslySetInnerHTML={{ __html: activities }} />
            </div>
          </Fragment>
        )}

        {awards && (
          <Fragment>
            <div className="text_editor">
              <p className="header bb">Awards, Accomplishments & Honors</p>
              <div dangerouslySetInnerHTML={{ __html: awards }} />
            </div>
          </Fragment>
        )}

        {certifications && (
          <Fragment>
            <div className="text_editor">
              <p className="header bb">Certifications & Licenses</p>
              <div dangerouslySetInnerHTML={{ __html: certifications }} />
            </div>
          </Fragment>
        )}

        {summary && (
          <Fragment>
            <p className="header bb">Summary</p>
            <p className="value">{summary}</p>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default ResumeViewer;
