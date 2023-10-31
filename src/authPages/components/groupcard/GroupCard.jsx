import "./GroupCard.scss";

const GroupCard = ({ img, title, text, members, newpost, index }) => {
  return (
    <div className="group_card wow fadeInUp" data-wow-delay={`${(0.1*(index % 4))}s`} >
      <div className="postre_wrap">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="count_info">
        <p>
          {members} members <span></span> {newpost} new post
        </p>
      </div>
      <button type="button" className="authbtn">
        Join
      </button>
    </div>
  );
};

export default GroupCard;
