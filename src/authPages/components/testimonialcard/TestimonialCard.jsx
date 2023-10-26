import "./TestimonialCard.scss";

const TestimonialCard = ({ profile, name, text }) => {
  return (
    <div className="testimonial_card wow slideInUp">
      <div className="profile_wrap">
        <img src={profile} alt="profile" />
      </div>
      <p className="name">{name}</p>
      <p>{text}</p>
    </div>
  );
};

export default TestimonialCard;
