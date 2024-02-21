import { Fragment } from "react";
import "./ResumeViewer.scss";

const ResumeViewer = ({ tab, formA, formB, experiensList }) => {
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
      </div>
      <div className="right_info">
        <p className="name">
          <span>{formA.fName}</span> {formA.lName}
        </p>

        {experiensList.length > 0 && (
          <Fragment>
            <p className="header bb">Experience</p>
            <div className="rxperience_list">
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
                      {formatDate(data.startDate)} -{" "}
                      {formatDate(data.endDate)}
                    </p>
                    <p className="value">{data.jobDescription}</p>
                  </div>
                );
              })}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default ResumeViewer;
