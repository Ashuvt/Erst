import "./ContactServiceCard.scss";

const ContactServiceCard = ({title, text, btn1, btn2}) => {

    

    return(
        <div className="contact_service_card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn_line">
                <button type="button" className="secondarybtn">{btn1}</button>
                <button type="button" className="primarybtn">{btn2}</button>
            </div>
        </div>
    )
};

export default ContactServiceCard;