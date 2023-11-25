
import "./ErrorMessageLine.scss";

const ErrorMessageLine = ({text}) => {
    return(
        <div className="error_message">          
            <p>{text}</p>
        </div>
    )
};

export default ErrorMessageLine;