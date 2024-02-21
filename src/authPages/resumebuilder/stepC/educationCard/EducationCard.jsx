import "./EducationCard.scss";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const EducationCard = ({ data, setFormC }) => {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
      };

      const editHandler = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setFormC(data);
      }
    

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
          <button type="button">
            <MdDelete />
          </button>
        </div>
      </div>
      <p className="location_date second_l">
        {data.schoolName}{data.schoolLocation && `, ${data.schoolLocation}`}  <span></span> {formatDate(data.dateFrom)} - {formatDate(data.dateTo)}
      </p>    
    </div>
  );
};

export default EducationCard;
