import "./MidTitle.scss";

const MidTitle = ({title, text}) => {
    return(
        <div className="mid_title">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
};

export default MidTitle;
