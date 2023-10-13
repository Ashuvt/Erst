import "./Pill.scss";

const Pill = ({text}) => {
    return(
        <div className="pill_box">
            <p className="pill_text">{text}</p>
        </div>
    )
}

export default Pill;