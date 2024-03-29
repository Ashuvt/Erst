import "./EducationCard.scss";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const EducationCard = ({ data, setFormC, setForEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const editHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setFormC(data);
    setForEdit(true);
  };

  return (
    <div className="education_card">
      <div className="top_line">
        <p className="job_company">
          {data.degree}
          <span></span>
          {data.fieldOfStudy}
        </p>
        <div className="btns">
          <button type="button" onClick={editHandler}>
            <MdEdit />
          </button>
          <button type="button" onClick={() => onDelete(data.id)}>
            <MdDelete />
          </button>
        </div>
      </div>
      <p className="location_date second_l">
        {data.schoolName}
        {data.schoolLocation && `, ${data.schoolLocation}`} <span></span>{" "}
        {formatDate(data.dateFrom)} - {data.dateTo && formatDate(data.dateTo)}{" "}
        {data?.stillEnrolled && "Still Enrolled"}
      </p>
    </div>
  );
};

export default EducationCard;
