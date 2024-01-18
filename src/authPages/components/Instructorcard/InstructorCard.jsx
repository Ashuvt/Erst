import { baseUrl } from "../../../utils/apidata";
import "./InstructorCard.scss";

const InstructorCard = ({image, name, description}) => {
    return(
        <div className="instructors_card wow fadeInUp">
            <div className="profile_wrap">
                    <img src={`${baseUrl}/${image}`} alt="profile" />
            </div>
            <div className="text_info">
                <p className="small_text light">{name}</p>
                <p className="small_text">{description}</p>
                {/* <div className="count_info">
                    <p className="t-i-12">{courses} Courses <span></span> {students} Students</p>
                </div> */}
            </div>
        </div>
    )
};

export default InstructorCard;