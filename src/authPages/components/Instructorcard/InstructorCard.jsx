import "./InstructorCard.scss";

const InstructorCard = ({img, name, text, students, courses}) => {
    return(
        <div className="instructors_card wow fadeInUp">
            <div className="profile_wrap">
                    <img src={img} alt="profile" />
            </div>
            <div className="text_info">
                <p className="small_text light">{name}</p>
                <p className="small_text">{text}</p>
                <div className="count_info">
                    <p className="t-i-12">{courses} Courses <span></span> {students} Students</p>
                </div>
            </div>
        </div>
    )
};

export default InstructorCard;