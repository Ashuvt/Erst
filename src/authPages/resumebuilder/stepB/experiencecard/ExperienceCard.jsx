import "./ExperienceCard.scss";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ExperienceCard = ({ data, setFormB, setForEdit, onDelete }) => {
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
    setFormB({...data});
    // console.log("Patching Data:::",data)
    setForEdit(true);
  };



 return (
    <div className="experience_card">
      <div className="top_line">
        <p className="job_company">
          {data.jobTitle}
          <span></span>
          {data.employer}
        </p>
        <div className="btns">
          <button type="button" onClick={editHandler}>
            <MdEdit />
          </button>
          <button type="button" onClick={() => onDelete(data?._id)}>
            <MdDelete />
          </button>
        </div>
      </div>
      <p className="location_date second_l">
        {data.city}
        {data.country && `, ${data.country}`} <span></span>
        
        {formatDate(data?.startDate)} - {data?.endDate && formatDate(data?.endDate)}{data?.currentlyWorking && "Present"}
      </p>
      <div className="h_line"></div>
      <p>{data.jobDescription}</p>
    </div>
  );
};

export default ExperienceCard;
