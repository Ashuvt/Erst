import "./ResumeViewer.scss";

const ResumeViewer = ({n}) => {
    return(
        <div className="resume_viewer">
            <div className="resume_page">
                <div className="title">
                    <p>My Resume</p>
                </div>

                <div className="info_sec">
                    <p className="info_title">
                        Personal Info
                    </p>
                    <p className="info">Fname:<span>{formA.fName}</span></p>

                </div>
            </div>
        </div>
    )
}
export default ResumeViewer;