import "./ResumeViewer.scss";

const ResumeViewer = ({tab, formA, formB }) => {
  return (
    <div className="resume_viewer">
      <div className="resume_page">
        <div className="title">
          <p>My Resume</p>
        </div>

<div className="bi_grid">
        <div className={`info_sec ${tab === 1 ? 'active' : ''}`}>
          <p className="info_title">Personal Info</p>

          <p className="info">
            Fname : <span>{formA.fName}</span>
          </p>
          <p className="info">
            Lname : <span>{formA.sName}</span>
          </p>
          <p className="info">
            City : <span>{formA.city}</span>
          </p>
          <p className="info">
            Country : <span>{formA.country}</span>
          </p>

          <p className="info">
            Pin : <span>{formA.pin}</span>
          </p>

          <p className="info">
            Phone : <span>{formA.phone}</span>
          </p>
          <p className="info">
            Email : <span>{formA.email}</span>
          </p>
        </div>

        <div className={`info_sec ${tab === 2 ? 'active' : ''}`}>
          <p className="info_title">Personal Info</p>

          <p className="info">
            JobTitle : <span>{formB.jobTitle}</span>
          </p>
          <p className="info">
            Employer : <span>{formB.employer}</span>
          </p>
          <p className="info">
            City : <span>{formB.city}</span>
          </p>
          <p className="info">
            Country : <span>{formB.country}</span>
          </p>

          <p className="info">
          StartDate : <span>{formB.startDate}</span>
          </p>

          <p className="info">
            EndDate : <span>{formA.endDate}</span>
          </p>          
        </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeViewer;
