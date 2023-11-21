import "./CourseCard.scss";

const CourseCard = ({ name, img, type, about }) => {
  return (
    <div className="course_card">
      <div className="sticky_content">
        <div className="img_wrap">
          <img src={img} alt="logo" />
        </div>
        <div className="name_line">
          <div className="box" style={{ background: `${type}` }}></div>
          <p>{name}</p>
        </div>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default CourseCard;
