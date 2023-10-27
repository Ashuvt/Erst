import "./GroupCard.scss";

const GroupCard = ({ img, title, text, members, newpost }) => {
  return (
    <div className="group_card">
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
